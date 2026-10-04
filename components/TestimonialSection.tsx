'use client';

import { useRef, useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { testimonialData } from '@/lib/data';

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.offsetWidth * 0.7;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="testimoni" className="relative flex items-center py-16 lg:min-h-screen lg:pt-20 lg:pb-12 bg-ivory">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="section-label mb-4">Testimoni</div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink max-w-2xl">
                Kata Mereka yang Sudah Merasakan
              </h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blush text-ink hover:bg-blush transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Geser ke kiri"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blush text-ink hover:bg-blush transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Geser ke kanan"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonialData.map((t, i) => {
            const isFeatured = t.featured;
            return (
              <ScrollReveal
                key={t.name}
                delay={i * 0.08}
                className="shrink-0 w-[340px] snap-start"
              >
                <div
                  className="bento-card p-6 h-full flex flex-col"
                  style={{
                    background: isFeatured ? '#5B21B6' : '#ffffff',
                    color: isFeatured ? '#ffffff' : '#1C1917',
                  }}
                >
                  {/* Rating stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <svg
                        key={si}
                        className="h-4 w-4"
                        style={{ color: '#B8860B' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p
                    className="text-sm leading-relaxed flex-1 mb-5"
                    style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : '#44403C' }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div
                    className="flex items-center gap-3 pt-4"
                    style={{ borderTop: `1px solid ${isFeatured ? 'rgba(255,255,255,0.1)' : '#E9D5FF'}` }}
                  >
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full font-display text-xs font-bold"
                      style={{
                        background: isFeatured ? 'rgba(255,255,255,0.2)' : '#E9D5FF',
                        color: isFeatured ? '#ffffff' : '#5B21B6',
                      }}
                    >
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: isFeatured ? '#ffffff' : '#1C1917' }}>
                        {t.name}
                      </p>
                      <p className="text-xs" style={{ color: isFeatured ? 'rgba(255,255,255,0.5)' : '#78716C' }}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
