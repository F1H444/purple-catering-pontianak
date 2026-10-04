/**
 * Extract embedded images + text from the menu PDF.
 * Usage: node scripts/extract-menu.mjs
 *
 * Outputs:
 *   public/menu/page-<n>-img-<k>.png  — extracted embedded images (RGB/RGBA/gray -> PNG)
 *   scripts/menu-text-dump.json       — text lines per page (for building menuItems)
 *
 * Uses pdfjs-dist (installed ad hoc, --no-save) and only Node built-ins otherwise.
 */
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const require = createRequire(import.meta.url);
const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');

const PDF_PATH = 'public/PRCELIST PURPLE CATERING .pdf';
const OUT_DIR = 'public/menu';
const DUMP_PATH = 'scripts/menu-text-dump.json';

fs.mkdirSync(OUT_DIR, { recursive: true });

const data = new Uint8Array(fs.readFileSync(PDF_PATH));
const doc = await pdfjsLib.getDocument({
  data,
  useSystemFonts: false,
  isEvalSupported: false,
}).promise;

console.log(`Pages: ${doc.numPages}`);

// ---------- minimal PNG encoder (RGBA in) ----------
function crc32(buf) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[n] = c;
    }
  }
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, body) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(body.length);
  const t = Buffer.from(type, 'ascii');
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([t, body])));
  return Buffer.concat([len, t, body, crc]);
}
function encodePng(width, height, rgba) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    rgba.copy
      ? rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride)
      : raw.set(rgba.subarray(y * stride, (y + 1) * stride), y * (stride + 1) + 1);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}
function toRgba(img) {
  const { width, height, kind, data } = img;
  const out = Buffer.alloc(width * height * 4);
  const n = width * height;
  if (kind === 2) {
    // RGB_24BPP
    for (let i = 0; i < n; i++) {
      out[i * 4] = data[i * 3];
      out[i * 4 + 1] = data[i * 3 + 1];
      out[i * 4 + 2] = data[i * 3 + 2];
      out[i * 4 + 3] = 255;
    }
  } else if (kind === 3) {
    // RGBA_32BPP
    for (let i = 0; i < n; i++) {
      out[i * 4] = data[i * 4];
      out[i * 4 + 1] = data[i * 4 + 1];
      out[i * 4 + 2] = data[i * 4 + 2];
      out[i * 4 + 3] = data[i * 4 + 3];
    }
  } else if (kind === 1) {
    // GRAYSCALE_1BPP (bit packed)
    const rowBytes = (width + 7) >> 3;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const bit = (data[y * rowBytes + (x >> 3)] >> (7 - (x & 7))) & 1;
        const v = bit ? 255 : 0;
        const o = (y * width + x) * 4;
        out[o] = out[o + 1] = out[o + 2] = v;
        out[o + 3] = 255;
      }
    }
  } else if (kind === 0) {
    // GRAYSCALE_8BPP
    for (let i = 0; i < n; i++) {
      out[i * 4] = out[i * 4 + 1] = out[i * 4 + 2] = data[i];
      out[i * 4 + 3] = 255;
    }
  } else {
    return null;
  }
  return out;
}

// ---------- per page ----------
const dump = { pages: [] };
let saved = 0;

for (let pageNo = 1; pageNo <= doc.numPages; pageNo++) {
  const page = await doc.getPage(pageNo);
  const pageRecord = { page: pageNo, lines: [], images: [] };

  // ---- text (group glyphs into lines by Y) ----
  const tc = await page.getTextContent();
  const rows = new Map();
  for (const item of tc.items) {
    if (!item.str || !item.str.trim()) continue;
    const y = Math.round(item.transform[5] / 4) * 4;
    const x = item.transform[4];
    if (!rows.has(y)) rows.set(y, []);
    rows.get(y).push({ x, str: item.str });
  }
  const sorted = [...rows.entries()].sort((a, b) => b[0] - a[0]); // top to bottom
  for (const [, parts] of sorted) {
    parts.sort((a, b) => a.x - b.x);
    const line = parts
      .map((p) => p.str)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (line) pageRecord.lines.push(line);
  }

  // ---- embedded images via operator list ----
  const ops = await page.getOperatorList();
  const seen = new Set();
  let k = 0;
  for (let i = 0; i < ops.fnArray.length; i++) {
    if (ops.fnArray[i] !== pdfjsLib.OPS.paintImageXObject) continue;
    const name = ops.argsArray[i][0];
    if (!name || seen.has(name)) continue;
    seen.add(name);

    const obj = await new Promise((resolve) => {
      try {
        page.objs.get(name, resolve);
      } catch {
        try {
          page.commonObjs.get(name, resolve);
        } catch {
          resolve(null);
        }
      }
    });
    if (!obj || !obj.width || !obj.height || !obj.data) continue;

    // skip tiny decorations (logos under 150px)
    if (obj.width < 150 || obj.height < 150) continue;

    const rgba = toRgba(obj);
    if (!rgba) continue;

    const file = `page-${pageNo}-img-${k}.png`;
    fs.writeFileSync(path.join(OUT_DIR, file), encodePng(obj.width, obj.height, rgba));
    pageRecord.images.push({ file, width: obj.width, height: obj.height });
    saved++;
    k++;
  }

  dump.pages.push(pageRecord);
  console.log(
    `p${pageNo}: ${pageRecord.lines.length} text lines, ${pageRecord.images.length} images ` +
      pageRecord.images.map((im) => `[${im.file} ${im.width}x${im.height}]`).join(' ')
  );
}

fs.writeFileSync(DUMP_PATH, JSON.stringify(dump, null, 2));
console.log(`\nSaved ${saved} images to ${OUT_DIR}/ and text dump to ${DUMP_PATH}`);
