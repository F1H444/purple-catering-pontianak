'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { heroData } from '@/lib/data';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !sectionRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.hero-label',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        '.hero-headline-word',
        { opacity: 0, y: 40, rotateX: -15 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.15 },
        '-=0.3'
      )
      .fromTo(
        '.hero-desc',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        '.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 },
        '-=0.3'
      )
      .fromTo(
        '.hero-visual',
        { opacity: 0, scale: 0.94, y: 24 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9 },
        '-=0.8'
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-royal woven-texture-hero"
    >
      {/* Soft decorative glows — no hard edges */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[40rem] w-[40rem] rounded-full bg-royal-dark/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-[-6rem] h-[32rem] w-[32rem] rounded-full bg-orchid/25 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* ── Text ── */}
          <div className="order-2 max-w-xl lg:order-1">
            <div className="hero-label section-label mb-6 !text-white/70 [&::before]:!bg-white/50">
              Purple Catering &mdash; Pontianak
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl mb-6">
              <span className="hero-headline-word inline-block">{heroData.headline}</span>
              <span className="hero-headline-word mt-1 block text-blush">
                {heroData.headlineAccent}
              </span>
            </h1>

            <p className="hero-desc mb-8 max-w-lg text-lg leading-relaxed text-white/70">
              {heroData.description}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={heroData.ctaPrimary.href}
                className="hero-cta btn-primary !bg-white !text-royal hover:!bg-blush-light"
              >
                {heroData.ctaPrimary.label}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href={heroData.ctaSecondary.href}
                className="hero-cta btn-secondary !border-white/30 !text-white hover:!bg-white/10"
              >
                {heroData.ctaSecondary.label}
              </Link>
            </div>

            {/* Trust signals */}
            <div className="hero-cta mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span>4.9/5 dari 200+ klien</span>
              </div>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span>Melayani Pontianak &amp; sekitarnya</span>
            </div>
          </div>

          {/* ── Visual ── */}
          <div className="hero-visual order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-royal-dark/50 shadow-2xl shadow-royal-dark/40">
                <Image
                  src={heroData.image}
                  alt="Hidangan catering premium dari Purple Catering"
                  fill
                  className="object-cover"
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/60 via-transparent to-transparent" />

                {/* Badge — contained inside the frame */}
                <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">Sejak</p>
                  <p className="font-display text-lg font-bold leading-tight text-royal">Pontianak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
