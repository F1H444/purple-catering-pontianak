import type { Metadata } from 'next';
import { Fraunces, Outfit, DM_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import Analytics from '@/components/Analytics';
import { siteUrl } from '@/lib/site';
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

// Title ≤ 60 karakter, description ≤ 155 karakter (batas tampil di hasil pencarian).
const homeTitle =
  'Catering Pontianak — Nasi Box & Prasmanan | Purple Catering';
const homeDescription =
  'Jasa katering Pontianak sejak 2019: nasi box, tumpeng, prasmanan & snack box untuk pernikahan, kantor, arisan, dan syukuran. Pesan via WhatsApp.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: '%s | Purple Catering',
  },
  description: homeDescription,
  keywords: [
    'catering pontianak',
    'katering pontianak',
    'nasi box pontianak',
    'tumpeng pontianak',
    'prasmanan pontianak',
    'catering pernikahan pontianak',
    'catering kantor pontianak',
    'katering kalimantan barat',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: 'Purple Catering',
    title: homeTitle,
    description:
      'Catering Pontianak untuk nasi box, tumpeng, prasmanan & snack box. Dari dapur rumahan, hadirkan rasa istimewa untuk setiap momen Anda.',
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description:
      'Catering Pontianak untuk nasi box, tumpeng, prasmanan & snack box. Pesan mudah via WhatsApp.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  // Verifikasi Google Search Console (isi env NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION).
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
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
        <StructuredData />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
