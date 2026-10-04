import type { Metadata } from 'next';

// Metadata route-level untuk /menu (halaman menu-nya sendiri berupa
// client component, sehingga metadata didefinisikan di layout ini).
export const metadata: Metadata = {
  title: 'Daftar Menu & Harga Catering Pontianak',
  description:
    'Price list lengkap Purple Catering Pontianak: nasi box, paket prasmanan, kabsah & briyani, menu ayam, minuman, dessert, dan party add-ons. Unduh PDF atau pesan via WhatsApp.',
  alternates: { canonical: '/menu' },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/menu',
    siteName: 'Purple Catering',
    title: 'Daftar Menu & Harga Catering Pontianak — Purple Catering',
    description:
      'Jelajahi daftar menu dan harga katering Purple Catering di Pontianak, dari nasi box harian hingga paket prasmanan dan deluxe.',
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
