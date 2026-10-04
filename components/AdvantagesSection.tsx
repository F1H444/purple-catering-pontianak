'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';
import { advantagesData } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  leaf: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.97 0-9-2.69-9-6 0-3.04 3.12-5.36 6-6.44.52-.2 1.06-.34 1.61-.43A7.96 7.96 0 0112 8c1.45 0 2.84.3 4.08.86.6.27 1.17.61 1.7 1.02C20 11.3 21 13.1 21 15c0 3.31-4.03 6-9 6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V8" />
    </svg>
  ),
  shield: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  clock: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  tag: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  ),
};

export default function AdvantagesSection() {
  return (
    <section className="relative flex items-center py-16 lg:min-h-screen lg:pt-20 lg:pb-12 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="section-label mb-4">{advantagesData.label}</div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-6 max-w-2xl">
            {advantagesData.headline}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {advantagesData.items.map((item, i) => {
            const isFull = item.span === 'full';

            // Grid seragam 2 kolom (md ke atas) supaya kartu sejajar dan
            // section tetap muat dalam satu layar.
            return (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div
                  className="bento-card p-6 h-full flex flex-col"
                  style={{
                    background: isFull ? '#5B21B6' : '#ffffff',
                    color: isFull ? '#ffffff' : '#1C1917',
                    minHeight: 160,
                  }}
                >
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl mb-4"
                    style={{
                      background: isFull ? 'rgba(255,255,255,0.15)' : '#E9D5FF',
                      color: isFull ? '#ffffff' : '#5B21B6',
                    }}
                  >
                    {iconMap[item.icon]}
                  </div>
                  <h3
                    className="font-display text-xl font-bold mb-3"
                    style={{ color: isFull ? '#ffffff' : '#1C1917' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: isFull ? 'rgba(255,255,255,0.7)' : '#78716C' }}
                  >
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
