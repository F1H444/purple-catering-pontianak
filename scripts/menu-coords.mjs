/**
 * Dump text items with coordinates per page so name<->price pairs can be matched exactly.
 * Usage: node scripts/menu-coords.mjs [pageNo ...]   (default: all pages)
 */
import { createRequire } from 'node:module';
import fs from 'node:fs';

const require = createRequire(import.meta.url);
const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');

const pages = process.argv.slice(2).map(Number);
const data = new Uint8Array(fs.readFileSync('public/PRCELIST PURPLE CATERING .pdf'));
const doc = await pdfjsLib.getDocument({ data, isEvalSupported: false }).promise;

for (let pageNo = 1; pageNo <= doc.numPages; pageNo++) {
  if (pages.length && !pages.includes(pageNo)) continue;
  const page = await doc.getPage(pageNo);
  const tc = await page.getTextContent();
  const items = tc.items
    .filter((it) => it.str && it.str.trim())
    .map((it) => ({ x: Math.round(it.transform[4]), y: Math.round(it.transform[5]), str: it.str.trim() }));
  items.sort((a, b) => b.y - a.y || a.x - b.x);
  console.log(`\n===== PAGE ${pageNo} =====`);
  for (const it of items) console.log(`y=${String(it.y).padStart(4)} x=${String(it.x).padStart(4)} | ${it.str}`);
}
