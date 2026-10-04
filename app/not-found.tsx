import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center bg-ivory py-24">
      <div className="mx-auto w-full max-w-2xl px-6 text-center lg:px-8">
        <p className="section-label mb-4 justify-center">404</p>
        <h1 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-ink-muted mb-8">
          Maaf, halaman yang Anda cari tidak ada atau sudah dipindahkan. Silakan
          kembali ke beranda atau lihat daftar menu kami.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            Kembali ke Beranda
          </Link>
          <Link href="/menu" className="btn-secondary">
            Lihat Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
