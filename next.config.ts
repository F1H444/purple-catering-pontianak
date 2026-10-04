import type { NextConfig } from "next";

// Content-Security-Policy: mulai ketat dan hanya izinkan yang benar-benar dipakai.
// Catatan: 'unsafe-inline'/'unsafe-eval' pada script masih diperlukan oleh runtime
// Next.js. Langkah lanjutan: ganti dengan nonce berbasis middleware bila ingin lebih ketat.
const contentSecurityPolicy = [
  "default-src 'self'",
  // googletagmanager.com hanya dipakai bila NEXT_PUBLIC_GA_ID diisi.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self'",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
  // Google Maps embed (iframe peta di section kontak).
  "frame-src https://www.google.com https://maps.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

// Semua gambar dilayani lokal dari /public (mis. /menu/page-10-img-*.png),
// jadi tidak perlu remotePattern untuk host eksternal.
const nextConfig: NextConfig = {
  // Sembunyikan header X-Powered-By (kurangi informasi ke penyerang).
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
