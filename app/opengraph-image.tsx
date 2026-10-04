import { ImageResponse } from 'next/og';

export const alt = 'Purple Catering — Catering Pontianak';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Gambar Open Graph 1200x630 yang digenerate otomatis (tanpa file statis),
// dipakai saat link dibagikan di WhatsApp/Facebook/Twitter.
export default function OpengraphImage() {
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
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: '#ffffff',
              color: '#5B21B6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            PC
          </div>
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
