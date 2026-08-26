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
        { opacity: 0, y: 50, rotateX: -15 },
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
        { opacity: 0, scale: 0.92, x: 40 },
        { opacity: 1, scale: 1, x: 0, duration: 1 },
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
      className="relative min-h-screen flex items-center bg-royal overflow-hidden woven-texture-hero"
    >
      {/* Decorative diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-royal-dark/30 hidden lg:block" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="hero-label section-label !text-white/70 mb-6">
              <span className="!bg-white/70" />
              Purple Catering &mdash; Pontianak
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-6">
              <span className="hero-headline-word inline-block">{heroData.headline}</span>
              <br />
              <span className="hero-headline-word inline-block text-blush">
                {heroData.headlineAccent}
              </span>
            </h1>

            <p className="hero-desc text-lg text-white/70 max-w-lg leading-relaxed mb-8">
              {heroData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="hero-cta mt-10 flex items-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span>4.9/5 dari 200+ klien</span>
              </div>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>500+ acara terlayani</span>
            </div>
          </div>

          {/* Visual */}
          <div className="hero-visual order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-royal-dark/50">
              <Image
                src={heroData.image}
                alt="Hidangan catering premium dari Purple Catering"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-royal/10" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-xl px-5 py-3 shadow-lg">
              <p className="font-mono text-xs text-ink-muted uppercase tracking-wider">Sejak</p>
              <p className="font-display text-xl font-bold text-royal">Pontianak</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom woven cut */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-ivory" style={{ clipPath: 'polygon(0 60%, 100% 0, 100% 100%, 0 100%)' }} />
    </section>
  );
}
