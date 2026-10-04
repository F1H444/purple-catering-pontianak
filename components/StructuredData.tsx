import { business, googleBusinessUrl } from '@/lib/site';

/**
 * JSON-LD structured data untuk Local SEO (Pontianak).
 * Hanya memakai data yang benar-benar ada (NAP, jam buka, area layanan).
 * Tidak mengarang rating/review, dan `sameAs` hanya diisi bila URL profil valid.
 */
export default function StructuredData() {
  const socialProfiles = googleBusinessUrl ? [googleBusinessUrl] : [];

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'FoodEstablishment'],
    name: business.name,
    url: business.url,
    telephone: business.phone,
    image: `${business.url}/opengraph-image`,
    logo: `${business.url}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address,
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
    openingHours: business.openingHours,
    areaServed: business.areaServed.map((name) => ({ '@type': 'Place', name })),
    servesCuisine: 'Indonesian',
    ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
  };

  return (
    // Konten JSON bersifat statis & berasal dari konstanta internal (bukan input pengguna),
    // jadi aman di-render sebagai script JSON-LD.
    // BreadcrumbList tidak ditaruh di sini (global) agar tidak memberi breadcrumb
    // yang salah di halaman non-menu; breadcrumb didefinisikan per halaman.
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
