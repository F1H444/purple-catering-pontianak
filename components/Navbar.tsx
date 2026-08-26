'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Beranda', href: '/#hero' },
    { label: 'Tentang', href: '/#tentang' },
    { label: 'Menu', href: '/menu' },
    { label: 'Testimoni', href: '/#testimoni' },
    { label: 'Kontak', href: '/#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(91,33,182,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-royal text-white font-display text-sm font-bold tracking-tight">
            PC
          </span>
          <span
            className={`font-display text-lg font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
          >
            Purple Catering
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-orchid ${
                  scrolled ? 'text-ink-soft' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#kontak"
              className="btn-primary !py-2.5 !px-5 !text-sm !rounded-lg"
            >
              Pesan Sekarang
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex flex-col gap-1.5 md:hidden p-2 ${
            scrolled ? 'text-ink' : 'text-white'
          }`}
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            } ${scrolled ? 'bg-ink' : 'bg-white'}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            } ${scrolled ? 'bg-ink' : 'bg-white'}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            } ${scrolled ? 'bg-ink' : 'bg-white'}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-ink-soft font-medium text-sm hover:text-orchid transition-colors border-b border-blush/50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#kontak"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full !text-sm"
              >
                Pesan Sekarang
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
