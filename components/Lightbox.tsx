'use client';

import Image from 'next/image';
import { useEffect } from 'react';

interface LightboxProps {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  onClose: () => void;
  /** Navigasi opsional antar gambar (mis. galeri). */
  onPrev?: () => void;
  onNext?: () => void;
  /** Posisi gambar saat ini (0-based) dan total, untuk menampilkan penanda. */
  index?: number;
  total?: number;
}

/**
 * Overlay perbesar gambar — dipakai viewer halaman PDF di /menu,
 * cuplikan PDF di homepage, dan galeri. Klik di luar / ESC untuk menutup.
 * Bila `onPrev`/`onNext` diberikan, tampil tombol dan panah keyboard
 * untuk berpindah gambar tanpa menutup lightbox.
 */
export default function Lightbox({
  src,
  alt,
  caption,
  width,
  height,
  onClose,
  onPrev,
  onNext,
  index,
  total,
}: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft' && onPrev) onPrev();
      else if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-label={alt} aria-modal="true">
      {onPrev && (
        <button
          onClick={(e) => {
            stop(e);
            onPrev();
          }}
          aria-label="Gambar sebelumnya"
          className="absolute left-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 md:left-8"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {onNext && (
        <button
          onClick={(e) => {
            stop(e);
            onNext();
          }}
          aria-label="Gambar berikutnya"
          className="absolute right-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 md:right-8"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {typeof index === 'number' && typeof total === 'number' && (
        <p className="absolute top-6 left-1/2 z-10 -translate-x-1/2 font-mono text-xs text-white/60">
          {index + 1} / {total}
        </p>
      )}

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        sizes="92vw"
        className="max-w-[92vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
      />

      {caption && (
        <p className="absolute bottom-14 text-white text-sm font-medium px-4 text-center">
          {caption}
        </p>
      )}
      <p className="absolute bottom-8 text-white/40 text-xs font-mono">
        {onPrev || onNext
          ? 'Gunakan ← → untuk berpindah, ESC atau klik di luar untuk menutup'
          : 'Tekan ESC atau klik di luar untuk menutup'}
      </p>
    </div>
  );
}
