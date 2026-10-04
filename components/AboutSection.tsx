'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { aboutData } from '@/lib/data';

export default function AboutSection() {
  return (
    <section id="tentang" className="relative flex items-center py-16 lg:min-h-screen lg:pt-20 lg:pb-12 bg-ivory">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="section-label mb-4">{aboutData.label}</div>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          {/* Image — spans 4 cols */}
          <ScrollReveal direction="left" className="md:col-span-1 lg:col-span-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-blush lg:aspect-[3/4]">
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
          <div className="md:col-span-1 lg:col-span-4 space-y-4">
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-ink leading-tight">
                {aboutData.headline}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-sm text-ink-soft leading-relaxed">
                {aboutData.story}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-ink-muted leading-relaxed text-sm">
                {aboutData.storyExtended}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="text-ink-muted leading-relaxed text-sm">
                {aboutData.storyClosing}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-sm leading-relaxed font-medium text-royal">
                {aboutData.storySignoff}
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.4}>
              <div
                className={`grid gap-4 pt-4 border-t border-blush ${
                  aboutData.stats.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
                }`}
              >
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
