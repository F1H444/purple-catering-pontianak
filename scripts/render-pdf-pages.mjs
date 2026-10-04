/**
 * Render every page of the price-list PDF to a full-page PNG.
 * Usage: node scripts/render-pdf-pages.mjs
 *
 * Outputs:
 *   public/menu/pages/page-01.png ... page-10.png  (full-page renders, scale 2)
 *
 * Uses pdfjs-dist (ad hoc install) + its built-in NodeCanvasFactory
 * (backed by @napi-rs/canvas). Only Node built-ins otherwise.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { createCanvas } = require('@napi-rs/canvas');
const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');

const PDF_PATH = 'public/PRCELIST PURPLE CATERING .pdf';
const OUT_DIR = 'public/menu/pages';
const SCALE = 2;

fs.mkdirSync(OUT_DIR, { recursive: true });

const data = new Uint8Array(fs.readFileSync(PDF_PATH));
const loadingTask = pdfjsLib.getDocument({
  data,
  useSystemFonts: false,
  isEvalSupported: false,
  cMapUrl: 'node_modules/pdfjs-dist/cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'node_modules/pdfjs-dist/standard_fonts/',
  wasmUrl: 'node_modules/pdfjs-dist/wasm/',
});
const doc = await loadingTask.promise;

console.log(`Pages: ${doc.numPages}`);

for (let n = 1; n <= doc.numPages; n++) {
  const page = await doc.getPage(n);
  const viewport = page.getViewport({ scale: SCALE });
  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
  const ctx = canvas.getContext('2d');
  // white background so pages with transparency don't render black
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvasContext: ctx, viewport }).promise;

  const file = path.join(OUT_DIR, `page-${String(n).padStart(2, '0')}.png`);
  fs.writeFileSync(file, canvas.toBuffer('image/png'));
  console.log(
    `${file}  ${canvas.width}x${canvas.height}  ${(fs.statSync(file).size / 1024).toFixed(0)}KB`
  );
  page.cleanup();
}

await loadingTask.destroy();
console.log('done');
