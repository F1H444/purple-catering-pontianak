# Preview Run Doc — Purple Catering

## How to reproduce uncommitted artifacts

1. Install dependencies (already in node_modules):
   ```
   npm install
   ```
   This includes `gsap` which was added on top of the default Next.js template.

2. No `.env` files are needed for this project.

3. Menu photos + data come from the price-list PDF (already committed to the repo):
   - `public/PRCELIST PURPLE CATERING .pdf` is the source of truth.
   - Photos were extracted once with:
     ```
     npm install --no-save pdfjs-dist   # ad hoc, not a project dependency
     node scripts/extract-menu.mjs      # writes public/menu/*.png + scripts/menu-text-dump.json
     ```
   - `scripts/menu-coords.mjs <pageNo...>` dumps text with coordinates (used to pair
     menu names with exact prices).
   - Full-page renders for the `/menu` PDF viewer (public/menu/pages/page-01..10.png):
     ```
     npm install --no-save pdfjs-dist   # @napi-rs/canvas comes as its optional dep
     node scripts/render-pdf-pages.mjs  # renders every PDF page -> PNG (scale 2)
     ```
   - Re-run any of these scripts only if the PDF changes. Page labels/captions for
     the viewer live in `PDF_PAGES` inside `app/menu/page.tsx`.
   - Consumers of the PDF renders:
     - `/menu` — all 10 pages, one by one (`PDF_PAGES` in `app/menu/page.tsx`).
     - Homepage `#menu-unggulan` — 3 selected pages (`FEATURED_PAGES` in
       `components/FeaturedMenuSection.tsx`) + CTA to `/menu`.
     - Homepage `#galeri` — the 8 food photos from the PDF's last page
       (`galleryData` in `lib/data.ts`, files `public/menu/page-10-img-*.png`).
       The grid is responsive (`components/GallerySection.tsx`): on mobile it is a
       fill-safe 2-column pattern (big hero first, 1x1 grid, full-width banner last);
       the asymmetric bento spans only apply at `md:`/`lg:`.
   - Homepage hero (`heroData.image`) and about (`aboutData.image`) reuse photos from
     the same gallery (`public/menu/page-10-img-*.png`).
   - All site photography is now local: no external image host is referenced, so
     `next.config.ts` has no `images.remotePatterns`.

## Contact details

WhatsApp / phone (used by `siteConfig` in `lib/data.ts`, `ContactSection`, `Footer`,
`app/menu/page.tsx` and `socialLinks`): **+62 852-5023-9161** (raw `6285250239161` for
`wa.me` / `tel:` links). Update all of these together if the number changes.

## How to run the server

```
npm run dev
```

Next.js will start a Turbopack dev server. If port 3000 is occupied, it picks the next available port.
The server output logs the actual URL (e.g. `http://localhost:3000`).

### Detach recipe (Windows)

```powershell
Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev' `
  -RedirectStandardOutput '<log>' `
  -RedirectStandardError '<log>.err' `
  -WindowStyle Hidden -PassThru
```

### Current session

- Port: **57337** (auto-picked; 3000 was occupied at startup)
- URL: `http://localhost:57337`
- PID: 8936
- Log: `.freebuff/preview-009a83cf-147a-418f-ad74-d0e6dcab5511.log` (+ `.log.err`)
- Pages: `/` (landing), `/menu` (all menus + link unduh price list PDF)

Notes:
- If `next dev` reports "Another next dev server is already running", a previous
  detached server is still alive — find it via `netstat -ano | grep LISTENING` and
  stop it (`taskkill /PID <pid> /F`) or reuse its URL instead of starting a new one.
- The PowerShell `Start-Process` detach command may keep the calling terminal open
  (it does not return on its own) even though the server starts fine; kill the
  wrapper command after a few seconds and verify via the log file + `Get-Process`.
- Logs from other sessions can be deleted; keep only the current session's log.
- If a route returns 404 even though the file exists (e.g. `/menu`), the `.next`
  cache is stale/corrupt from a server that was killed mid-session: stop the
  server, `rm -rf .next`, and start again (verified fix on 2026-10-04; fresh
  start after cache clear was also much faster: Ready in ~2s vs ~12s).
