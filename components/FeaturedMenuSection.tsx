'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import MediaCard from './MediaCard';
import Lightbox from './Lightbox';

/**
 * Sebagian halaman Price List PDF (render: node scripts/render-pdf-pages.mjs).
 * Versi lengkap 10 halaman ada di halaman /menu.
 */
const FEATURED_PAGES = [
  {
    src: '/menu/pages/page-02.png',
    title: 'Price List Nasi Box',
    desc: 'Nasi box harian mulai Rp 15.000',
  },
  {
    src: '/menu/pages/page-06.png',
    title: 'Paket Prasmanan',
    desc: 'Paket acara mulai Rp 30.000',
  },
  {
    src: '/menu/pages/page-09.png',
    title: 'Deluxe Menu',
    desc: 'Hidangan istimewa mulai Rp 25.000',
  },
] as const;

export default function FeaturedMenuSection() {
  const [zoom, setZoom] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="menu-unggulan" className="relative flex items-center py-16 lg:min-h-screen lg:pt-20 lg:pb-12 bg-white woven-texture">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="section-label mb-4">Menu Unggulan</div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-2xl">
            Pilihan Terbaik dari Dapur Kami
          </h2>
          <p className="text-ink-muted mb-8 max-w-2xl">
            Sebagian dari price list kami — jelajahi harga dan paket lengkapnya di halaman menu.
          </p>
        </ScrollReveal>

        {/* Cuplikan halaman Price List PDF */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {FEATURED_PAGES.map((page, i) => (
            <ScrollReveal key={page.src} delay={0.1 * i}>
              <MediaCard
                src={page.src}
                alt={`Price List Purple Catering — ${page.title}`}
                title={page.title}
                subtitle={page.desc}
                onClick={() => setZoom({ src: page.src, title: page.title })}
                className="h-56 md:h-60 lg:h-64"
                imagePosition="object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-center">
            <Link href="/menu" className="btn-primary">
              Lihat Semua Menu
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Perbesar cuplikan halaman */}
      {zoom && (
        <Lightbox
          src={zoom.src}
          alt={`Price List Purple Catering — ${zoom.title}`}
          caption={`${zoom.title} — versi lengkap di halaman Menu`}
          width={1191}
          height={1685}
          onClose={() => setZoom(null)}
        />
      )}
    </section>
  );
}
