import type { Metadata } from 'next';
import Link from 'next/link';
import { events } from '@/lib/events';

export const metadata: Metadata = {
  title: 'Jenis Acara yang Kami Layani',
  description:
    'Purple Catering Pontianak melayani catering untuk pernikahan, acara kantor & perusahaan, syukuran, dan arisan. Pilih jenis acara untuk melihat rekomendasi menunya.',
  alternates: { canonical: '/acara' },
};

export default function EventIndexPage() {
  return (
    <section className="pt-28 pb-24 lg:pt-36 lg:pb-28 bg-ivory">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <div className="section-label mb-4">Jenis Acara</div>
        <h1 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-2xl">
          Catering untuk Setiap Momen Anda
        </h1>
        <p className="text-ink-muted mb-10 max-w-2xl">
          Setiap acara punya kebutuhan yang berbeda. Pilih jenis acara di bawah untuk
          melihat rekomendasi menu, pertanyaan umum, dan cara pemesanannya.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {events.map((e) => (
            <Link
              key={e.slug}
              href={`/acara/${e.slug}`}
              className="bento-card group flex flex-col p-6"
            >
              <h2 className="font-display text-lg font-bold text-ink mb-2 group-hover:text-royal transition-colors">
                {e.label}
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted flex-1">{e.metaDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal">
                Lihat detail
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
