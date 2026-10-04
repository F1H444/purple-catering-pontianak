'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import MediaCard from './MediaCard';
import Lightbox from './Lightbox';
import { galleryData } from '@/lib/data';

export default function GallerySection() {
  const [index, setIndex] = useState<number | null>(null);

  const close = () => setIndex(null);
  const go = (dir: number) =>
    setIndex((i) => (i === null ? i : (i + dir + galleryData.length) % galleryData.length));

  const current = index === null ? null : galleryData[index];

  return (
    <section id="galeri" className="relative flex items-center py-16 lg:min-h-screen lg:pt-20 lg:pb-12 bg-white woven-texture">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="section-label mb-4">Galeri</div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-2xl">
            Hidangan Andalan dari Dapur Kami
          </h2>
          <p className="text-ink-muted mb-4 max-w-2xl">
            Kami menghadirkan sajian yang dibuat dengan bahan berkualitas, cita rasa
            yang lezat, dan pelayanan yang tulus — sebagian hidangan paling
            favorit kami di atas.
          </p>
        </ScrollReveal>

        {/* Grid seragam: semua ubin sama besar & sejajar (8 foto = 2×4) */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryData.map((img, i) => (
            <ScrollReveal key={img.id} delay={i * 0.06}>
              <MediaCard
                src={img.src}
                alt={img.alt}
                title={img.alt}
                onClick={() => setIndex(i)}
                className="aspect-[3/2]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {current && (
        <Lightbox
          key={current.src}
          src={current.src}
          alt={current.alt}
          caption={current.alt}
          width={1200}
          height={800}
          index={index ?? 0}
          total={galleryData.length}
          onPrev={() => go(-1)}
          onNext={() => go(1)}
          onClose={close}
        />
      )}
    </section>
  );
}
