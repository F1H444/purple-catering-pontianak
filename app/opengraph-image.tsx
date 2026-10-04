import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Purple Catering — Catering Pontianak';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
// Membaca file logo dari disk, jadi perlu runtime Node.js.
export const runtime = 'nodejs';

// Logo asli (public/logo.png) disematkan sebagai data URI agar tidak
// bergantung pada request jaringan saat gambar digenerate.
async function getLogoDataUrl() {
  const buffer = await readFile(join(process.cwd(), 'public', 'logo.png'));
  return `data:image/png;base64,${buffer.toString('base64')}`;
}

// Gambar Open Graph 1200x630 yang digenerate otomatis,
// dipakai saat link dibagikan di WhatsApp/Facebook/Twitter.
export default async function OpengraphImage() {
  const logo = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#5B21B6',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginBottom: 28,
          }}
        >
          <img
            alt=""
            src={logo}
            width={80}
            height={80}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 28, letterSpacing: 2 }}>
            PURPLE CATERING
          </div>
        </div>

        <div style={{ color: '#ffffff', fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>
          Catering Pontianak
        </div>
        <div style={{ color: '#E9D5FF', fontSize: 44, fontWeight: 700, marginTop: 12 }}>
          Nasi Box &middot; Tumpeng &middot; Prasmanan &middot; Snack Box
        </div>
        <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 30, marginTop: 36 }}>
          Dari dapur rumahan, hadirkan rasa istimewa sejak 2019
        </div>
      </div>
    ),
    { ...size }
  );
}
