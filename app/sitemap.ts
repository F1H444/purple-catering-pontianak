import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { events } from '@/lib/events';

// Sitemap dinamis. Saat nanti ada halaman menu/paket individual dari database,
// tambahkan hasil query di sini.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/menu`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/acara`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...events.map((e) => ({
      url: `${siteUrl}/acara/${e.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/kebijakan-privasi`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
}
