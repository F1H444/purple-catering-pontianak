import { siteConfig } from './data';

/**
 * URL produksi situs — domain final: https://purplecatering.biz.id.
 * Nilai ini menjadi fallback bila env `NEXT_PUBLIC_SITE_URL` belum diisi,
 * sehingga canonical/sitemap/robots/Open Graph/JSON-LD selalu menunjuk ke
 * domain yang benar (termasuk saat build lokal tanpa .env).
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://purplecatering.biz.id'
).replace(/\/$/, '');

/** URL profil Google Business (isi di env saat sudah ada). */
export const googleBusinessUrl = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || '';

/** Koordinat & data bisnis untuk JSON-LD LocalBusiness. */
export const business = {
  name: siteConfig.name,
  url: siteUrl,
  phone: siteConfig.phone,
  phoneRaw: siteConfig.phoneRaw,
  address: siteConfig.address,
  addressLocality: 'Pontianak',
  addressRegion: 'Kalimantan Barat',
  postalCode: '78242',
  country: 'ID',
  openingHours: siteConfig.operationalHours,
  // Area layanan yang disebutkan secara wajar (bukan klaim berlebihan).
  areaServed: ['Pontianak', 'Kubu Raya', 'Kalimantan Barat'],
} as const;
