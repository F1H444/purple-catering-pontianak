'use client';

import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { menuItems } from '@/lib/data';

export default function FeaturedMenuSection() {
  const featured = menuItems.filter((item) => item.featured);

  return (
    <section id="menu-unggulan" className="relative py-24 lg:py-32 bg-white woven-texture">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="section-label mb-4">Menu Unggulan</div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-lg">
            Pilihan Terbaik dari Dapur Kami
          </h2>
          <p className="text-ink-muted mb-12 max-w-md">
            Setiap menu diracik dengan resep turunan dan bahan pilihan. Lihat selengkapnya di halaman menu kami.
          </p>
        </ScrollReveal>

        {featured.length === 0 ? (
          <ScrollReveal delay={0.1}>
            <div className="text-center py-16 bg-blush/30 rounded-2xl border border-blush">
              <svg className="mx-auto h-14 w-14 text-royal/20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <p className="text-ink-muted mb-2">Menu sedang dalam penyusunan.</p>
              <p className="text-sm text-ink-muted/60">Segera hadir — nantikan update dari kami.</p>
            </div>
          </ScrollReveal>
        ) : (
          <>
            {/* Bento grid: first item large, rest in smaller grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
              {/* Featured large card */}
              {featured[0] && (
                <ScrollReveal className="lg:col-span-5 lg:row-span-2" delay={0}>
                  <div className="bento-card group h-full min-h-[360px] relative overflow-hidden bg-blush flex flex-col">
                    <div className="flex-1 flex items-center justify-center p-8">
                      <div className="text-royal/20 text-center">
                        <svg className="mx-auto h-16 w-16 mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6 bg-white">
                      <span className="font-mono text-xs text-orchid uppercase tracking-wider">
                        {featured[0].category}
                      </span>
                      <h3 className="font-display text-xl font-bold text-ink mt-1 mb-2 group-hover:text-royal transition-colors">
                        {featured[0].name}
                      </h3>
                      <p className="text-sm text-ink-muted mb-3 line-clamp-2">
                        {featured[0].description}
                      </p>
                      <p className="font-mono text-lg font-bold text-gold">
                        {featured[0].price}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Smaller cards grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {featured.slice(1, 5).map((item, i) => (
                  <ScrollReveal key={item.id} delay={0.1 * (i + 1)}>
                    <div className="bento-card group bg-white h-full">
                      <div className="flex items-center gap-4 p-5">
                        <div className="w-20 h-20 rounded-xl bg-blush shrink-0 flex items-center justify-center">
                          <svg className="h-6 w-6 text-royal/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <span className="font-mono text-[10px] text-orchid uppercase tracking-wider">
                            {item.category}
                          </span>
                          <h3 className="font-display text-base font-bold text-ink mt-0.5 truncate group-hover:text-royal transition-colors">
                            {item.name}
                          </h3>
                          <p className="font-mono text-sm font-bold text-gold mt-1">
                            {item.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </>
        )}

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link href="/menu" className="btn-primary">
              Lihat Semua Menu
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
