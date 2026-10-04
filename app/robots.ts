import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

// robots.txt dinamis: izinkan halaman publik, blokir area internal/API.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
