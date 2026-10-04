'use client';

import ScrollReveal from './ScrollReveal';
import { siteConfig } from '@/lib/data';

export default function ContactSection() {
  return (
    <section id="kontak" className="relative flex items-center py-16 lg:min-h-screen lg:pt-20 lg:pb-12 bg-ivory">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="section-label mb-4">Kontak & Lokasi</div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-12 max-w-2xl">
            Kami Tunggu Di Sini
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Contact Info — spans 2 cols */}
          <ScrollReveal className="lg:col-span-2" delay={0}>
            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`https://wa.me/${siteConfig.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card flex items-center gap-4 p-5 group"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-ink-muted mb-0.5">WhatsApp</p>
                  <p className="text-sm font-semibold text-ink group-hover:text-royal transition-colors">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="bento-card flex items-start gap-4 p-5">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blush text-royal">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-ink-muted mb-0.5">Alamat</p>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="bento-card flex items-center gap-4 p-5">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blush text-royal">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-ink-muted mb-0.5">Jam Operasional</p>
                  <p className="text-sm font-semibold text-ink">
                    {siteConfig.operationalHours}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Map — spans 4 cols */}
          <ScrollReveal className="lg:col-span-4" delay={0.15}>
            <div className="bento-card overflow-hidden h-full min-h-[360px]">
              <iframe
                src={siteConfig.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Purple Catering"
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
