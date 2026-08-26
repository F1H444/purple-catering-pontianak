'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { galleryData } from '@/lib/data';

export default function GallerySection() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState('');

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <section id="galeri" className="relative py-24 lg:py-32 bg-white woven-texture">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="section-label mb-4">Galeri</div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-lg">
            Momen yang Kami Abadikan
          </h2>
          <p className="text-ink-muted mb-12 max-w-md">
            Setiap acara memiliki cerita. Ini adalah sebagian dari cerita yang kami banggakan.
          </p>
        </ScrollReveal>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-[160px] md:auto-rows-[180px]">
          {galleryData.map((img, i) => {
            const spanClass =
              img.span === 'wide'
                ? 'col-span-2 row-span-2'
                : img.span === 'tall'
                ? 'col-span-1 row-span-2'
                : 'col-span-1 row-span-1';

            return (
              <ScrollReveal
                key={img.id}
                delay={i * 0.06}
                className={`${spanClass}`}
              >
                <button
                  onClick={() => { setLightboxImg(img.src); setLightboxAlt(img.alt); }}
                  className="group relative w-full h-full rounded-xl overflow-hidden bg-blush cursor-pointer"
                  aria-label={img.alt}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-royal/0 group-hover:bg-royal/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-lg px-3 py-1.5">
                      <svg className="h-4 w-4 text-royal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-label={lightboxAlt}
        >
          <Image
            src={lightboxImg}
            alt={lightboxAlt}
            width={1200}
            height={800}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
          />
          <p className="absolute bottom-8 text-white/40 text-xs font-mono">Tekan ESC atau klik di luar untuk menutup</p>
        </div>
      )}
    </section>
  );
}
