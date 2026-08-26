import type { Metadata } from 'next';
import { Fraunces, Outfit, DM_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const fraunces = Fraunces({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const dmMono = DM_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Purple Catering | Sajian Istimewa dari Pontianak',
  description:
    'Purple Catering menyediakan jasa katering premium di Pontianak, Kalimantan Barat. Nasi box, prasmanan, tumpeng, snack box, dan paket acara untuk wedding, corporate, dan hajatan.',
  keywords: ['catering pontianak', 'katering kalimantan barat', 'nasi box pontianak', 'prasmanan', 'tumpeng', 'wedding catering'],
  openGraph: {
    title: 'Purple Catering | Sajian Istimewa dari Pontianak',
    description: 'Catering premium untuk setiap momen berharga di Pontianak.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${outfit.variable} ${dmMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
