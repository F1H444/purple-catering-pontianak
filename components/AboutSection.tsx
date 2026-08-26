'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { aboutData } from '@/lib/data';

export default function AboutSection() {
  return (
    <section id="tentang" className="relative py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="section-label mb-4">{aboutData.label}</div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-6 lg:gap-8 items-start">
          {/* Image — spans 4 cols */}
          <ScrollReveal direction="left" className="lg:col-span-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-blush">
              <Image
                src={aboutData.image}
                alt="Suasana dapur dan penyajian Purple Catering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
          </ScrollReveal>

          {/* Content — spans 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink leading-tight">
                {aboutData.headline}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-ink-soft leading-relaxed">
                {aboutData.story}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-ink-muted leading-relaxed text-sm">
                {aboutData.storyExtended}
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-blush">
                {aboutData.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-mono text-2xl lg:text-3xl font-bold text-royal">
                      {stat.value}
                    </p>
                    <p className="text-xs text-ink-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
