'use client';

import { useState, useMemo } from 'react';
import { menuItems, menuCategories } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'Semua' || item.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="pt-28 pb-24 lg:pt-32 lg:py-32 bg-ivory min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="section-label mb-4">Semua Menu</div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-4">
            Jelajahi Pilihan Kami
          </h1>
          <p className="text-ink-muted max-w-lg mb-10">
            Dari nasi box harian hingga paket acara lengkap — temukan yang tepat untuk kebutuhan Anda.
          </p>
        </ScrollReveal>

        {/* Search + Filters */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Cari menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-blush text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {menuCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-royal text-white'
                      : 'bg-white text-ink-soft border border-blush hover:border-royal/30 hover:text-royal'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <ScrollReveal>
            <div className="text-center py-20">
              <svg className="mx-auto h-12 w-12 text-ink-muted/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-ink-muted">Tidak ada menu yang cocok dengan pencarian Anda.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('Semua');
                }}
                className="mt-4 text-sm text-royal font-medium hover:underline"
              >
                Tampilkan semua menu
              </button>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.05}>
                <div className="bento-card group bg-white h-full flex flex-col">
                  {/* Image placeholder */}
                  <div className="relative aspect-[16/10] bg-blush overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-royal/20">
                      <div className="text-center">
                        <svg className="mx-auto h-10 w-10 mb-1 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-[10px] font-mono">Foto menu</span>
                      </div>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-md text-[10px] font-mono text-royal uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-bold text-ink mb-2 group-hover:text-royal transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed flex-1 mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-blush/50">
                      <p className="font-mono text-base font-bold text-gold">
                        {item.price}
                      </p>
                      <a
                        href={`https://wa.me/6281256789012?text=${encodeURIComponent(`Halo, saya tertarik dengan ${item.name}. Bisa info lebih lanjut?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-royal hover:text-royal-dark transition-colors flex items-center gap-1"
                      >
                        Pesan
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Back to home */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 text-center">
            <a href="/" className="btn-secondary">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Beranda
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
