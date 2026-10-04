'use client';

import Image from 'next/image';

interface MediaCardProps {
  src: string;
  alt: string;
  /** Teks caption utama (mis. nama hidangan / judul halaman). */
  title: string;
  /** Caption sekunder opsional (mis. deskripsi singkat). */
  subtitle?: string;
  onClick?: () => void;
  /** Kelas untuk wrapper — gunakan untuk mengatur rasio (aspect-[3/2]) atau tinggi (h-56 …). */
  className?: string;
  /** Posisi objek gambar, mis. 'object-top'. Default 'object-center'. */
  imagePosition?: string;
  sizes?: string;
  priority?: boolean;
  /** Label pada tombol hover. Default 'Perbesar'. */
  zoomLabel?: string;
}

/**
 * Kartu media seragam (foto galeri & cuplikan halaman price list).
 * Satu komponen dipakai di beberapa section supaya markup & tampilan konsisten:
 * gambar full-bleed, caption bergradasi di bawah, dan overlay "Perbesar" saat hover.
 */
export default function MediaCard({
  src,
  alt,
  title,
  subtitle,
  onClick,
  className = '',
  imagePosition = 'object-center',
  sizes = '(max-width: 768px) 100vw, 33vw',
  priority = false,
  zoomLabel = 'Perbesar',
}: MediaCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={title}
      className={`group relative block w-full cursor-pointer overflow-hidden rounded-2xl bg-blush ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imagePosition} transition-transform duration-500 group-hover:scale-105`}
      />

      {/* Overlay hover */}
      <span className="absolute inset-0 flex items-center justify-center bg-royal/0 transition-colors duration-300 group-hover:bg-royal/40">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-royal opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
          {zoomLabel}
        </span>
      </span>

      {/* Caption */}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 block bg-gradient-to-t from-ink/85 via-ink/45 to-transparent px-4 pb-3 pt-10 text-left">
        <span className="block font-display text-sm font-bold text-white">{title}</span>
        {subtitle && <span className="mt-0.5 block text-xs text-white/75">{subtitle}</span>}
      </span>
    </button>
  );
}
