'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import Lightbox from '@/components/Lightbox';

const PRICE_LIST_PDF = '/PRCELIST%20PURPLE%20CATERING%20.pdf';

/**
 * Setiap halaman Price List PDF (public/PRCELIST PURPLE CATERING .pdf)
 * sudah dirender ke PNG oleh `node scripts/render-pdf-pages.mjs`
 * ke public/menu/pages/. Urutan & label mengikuti isi PDF.
 */
const PDF_PAGES = [
  { src: '/menu/pages/page-01.png', title: 'Sampul' },
  { src: '/menu/pages/page-02.png', title: 'Price List — Nasi Box' },
  { src: '/menu/pages/page-03.png', title: 'Price List — Minuman' },
  { src: '/menu/pages/page-04.png', title: 'Menu Ayam' },
  { src: '/menu/pages/page-05.png', title: 'Tahu, Tempe & Sambal' },
  { src: '/menu/pages/page-06.png', title: 'Paket Prasmanan — Mulai Rp 30.000' },
  { src: '/menu/pages/page-07.png', title: 'Paket Prasmanan — Mulai Rp 40.000' },
  { src: '/menu/pages/page-08.png', title: 'Party Add-ons' },
  { src: '/menu/pages/page-09.png', title: 'Deluxe Menu — Mulai Rp 25.000' },
  { src: '/menu/pages/page-10.png', title: 'Galeri Hidangan' },
] as const;

export default function MenuPage() {
  const [zoom, setZoom] = useState<{ src: string; title: string; index: number } | null>(null);

  return (
    <section className="pt-28 pb-24 lg:pt-32 lg:py-32 bg-ivory min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="section-label mb-4">Semua Menu</div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-4">
            Jelajahi Pilihan Kami
          </h1>
          <p className="text-ink-muted max-w-lg mb-6">
            Price list lengkap Purple Catering — telusuri halaman demi halaman,
            dari nasi box harian hingga paket prasmanan dan deluxe.
          </p>
          <a
            href={PRICE_LIST_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-12 text-sm font-semibold text-royal hover:text-royal-dark transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2M7 9V5a2 2 0 012-2h4.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V9" />
            </svg>
            Unduh Price List (PDF)
          </a>
        </ScrollReveal>

        {/* Halaman Price List — satu per satu */}
        <div className="space-y-14">
          {PDF_PAGES.map((page, i) => (
            <ScrollReveal key={page.src}>
              <figure className="mx-auto max-w-4xl">
                <figcaption className="mb-3 flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-royal font-mono text-[11px] font-bold text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display text-sm lg:text-base font-semibold text-ink-soft whitespace-nowrap">
                    {page.title}
                  </h2>
                  <span className="h-px flex-1 bg-blush" />
                </figcaption>
                <div className="overflow-hidden rounded-2xl border border-blush bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => setZoom({ src: page.src, title: page.title, index: i + 1 })}
                    className="group relative block w-full cursor-zoom-in"
                    aria-label={`Perbesar halaman ${i + 1}: ${page.title}`}
                  >
                    <Image
                      src={page.src}
                      alt={`Price List Purple Catering — halaman ${i + 1}: ${page.title}`}
                      width={1191}
                      height={1685}
                      priority={i === 0}
                      sizes="(max-width: 896px) 100vw, 896px"
                      className="h-auto w-full"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-royal/0 group-hover:bg-royal/30 transition-colors duration-300">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1.5 bg-white rounded-lg px-3 py-1.5 text-xs font-semibold text-royal shadow">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                        Perbesar
                      </span>
                    </span>
                  </button>
                </div>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <p className="text-ink-muted mb-6">
              Menemukan menu yang pas? Hubungi kami untuk konsultasi &amp; pemesanan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/6285250239161?text=Halo%20Purple%20Catering%2C%20saya%20ingin%20bertanya%20tentang%20menu%20Anda."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Pesan via WhatsApp
              </a>
              <Link href="/" className="btn-secondary">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Perbesar halaman */}
      {zoom && (
        <Lightbox
          src={zoom.src}
          alt={`Price List Purple Catering — halaman ${zoom.index}: ${zoom.title}`}
          caption={`Halaman ${zoom.index} — ${zoom.title}`}
          width={1191}
          height={1685}
          onClose={() => setZoom(null)}
        />
      )}
    </section>
  );
}
