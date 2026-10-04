'use client';

import ScrollReveal from './ScrollReveal';
import { visionData } from '@/lib/data';

export default function VisionSection() {
  return (
    <section className="relative flex items-center py-16 lg:min-h-screen lg:pt-20 lg:pb-12 bg-ivory">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="section-label mb-4">{visionData.label}</div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Visi */}
          <ScrollReveal delay={0}>
            <div className="bento-card p-8 min-h-[260px] h-full flex flex-col" style={{ background: '#ffffff' }}>
              <div
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg mb-5"
                style={{ background: '#E9D5FF', color: '#5B21B6' }}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-bold text-ink mb-3 uppercase tracking-wide">
                Visi
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed flex-1">
                {visionData.vision}
              </p>
            </div>
          </ScrollReveal>

          {/* Misi */}
          <ScrollReveal delay={0.1}>
            <div className="bento-card p-8 min-h-[260px] h-full flex flex-col" style={{ background: '#ffffff' }}>
              <div
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg mb-5"
                style={{ background: '#E9D5FF', color: '#5B21B6' }}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-bold text-ink mb-3 uppercase tracking-wide">
                Misi
              </h3>
              <ol className="text-ink-soft text-sm leading-relaxed space-y-2 flex-1 list-decimal list-inside">
                {visionData.mission.map((m, i) => (
                  <li key={i} className="pl-1">
                    {m}
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>

          {/* Motto */}
          <ScrollReveal delay={0.2}>
            <div
              className="bento-card p-8 min-h-[260px] h-full flex flex-col items-center justify-center text-center woven-texture relative overflow-hidden"
              style={{ background: '#5B21B6', color: '#ffffff' }}
            >
              <div className="relative z-10">
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg mb-5"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                >
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="font-display text-2xl lg:text-3xl font-bold leading-tight text-white">
                  {visionData.motto}
                </p>
                <p className="font-display text-2xl lg:text-3xl font-bold leading-tight" style={{ color: '#E9D5FF' }}>
                  {visionData.mottoLine2}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
