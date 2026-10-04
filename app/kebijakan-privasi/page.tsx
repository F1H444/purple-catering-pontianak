import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description:
    'Kebijakan privasi Purple Catering: data apa yang kami kumpulkan melalui situs dan WhatsApp, bagaimana penggunaannya, serta hak Anda sebagai pengguna.',
  alternates: { canonical: '/kebijakan-privasi' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="pt-28 pb-24 lg:pt-36 lg:pb-28 bg-ivory">
      <div className="mx-auto w-full max-w-3xl px-6 lg:px-8">
        <div className="section-label mb-4">Privasi</div>
        <h1 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-4">
          Kebijakan Privasi
        </h1>
        <p className="text-ink-muted mb-10">
          Kebijakan ini menjelaskan bagaimana {siteConfig.name} menangani data
          pengunjung situs, sesuai prinsip pelindungan data pribadi di Indonesia.
        </p>

        <div className="space-y-8 text-ink-soft leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-bold text-ink mb-2">Data yang kami kumpulkan</h2>
            <p>
              Situs ini tidak memiliki formulir pendaftaran. Kami hanya menerima data
              yang Anda kirimkan secara sadar melalui WhatsApp (misalnya nama, nomor
              telepon, dan detail pesanan). Untuk analitik, kami dapat memakai data
              kunjungan teragregasi yang bersifat anonim (halaman yang dibuka dan
              interaksi seperti klik tombol WhatsApp).
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink mb-2">Cara kami menggunakan data</h2>
            <p>
              Data yang Anda kirimkan digunakan hanya untuk menanggapi pertanyaan dan
              memproses pesanan. Data analitik digunakan untuk memahami halaman mana
              yang berguna bagi pengunjung, tanpa mengidentifikasi Anda secara pribadi.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink mb-2">Berbagi data</h2>
            <p>
              Kami tidak menjual atau menyewakan data Anda. Data dapat diproses oleh
              penyedia layanan yang kami gunakan (misalnya layanan hosting atau
              analitik) sebatas untuk mengoperasikan situs ini.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink mb-2">Hak Anda</h2>
            <p>
              Anda dapat meminta informasi, koreksi, atau penghapusan data pribadi
              yang pernah Anda kirimkan kepada kami dengan menghubungi nomor di
              bawah.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink mb-2">Hubungi kami</h2>
            <p>
              Untuk pertanyaan mengenai privasi, hubungi {siteConfig.name} di{' '}
              <a
                href={`https://wa.me/${siteConfig.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-royal hover:text-royal-dark transition-colors"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link href="/" className="btn-secondary">Kembali ke Beranda</Link>
        </div>
      </div>
    </section>
  );
}
