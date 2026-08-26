# Preview Run Doc — Purple Catering

## How to reproduce uncommitted artifacts

1. Install dependencies (already in node_modules):
   ```
   npm install
   ```
   This includes `gsap` which was added on top of the default Next.js template.

2. No `.env` files are needed for this project.

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

- Port: **3000**
- URL: `http://localhost:3000`
- Log: `.freebuff/preview-a22ebfb5-696f-4361-92ce-17a106e09b32.log`
- Pages: `/` (landing), `/menu` (all menus)
