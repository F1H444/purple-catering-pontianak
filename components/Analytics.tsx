'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Analytics opsional (GA4) + pelacakan klik WhatsApp/tel.
 * - Hanya memuat GA bila NEXT_PUBLIC_GA_ID diisi (tanpa ID = tidak ada script).
 * - Pelacakan memakai satu listener global (delegasi), jadi tidak perlu
 *   mengubah setiap komponen menjadi client component.
 */
export default function Analytics() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute('href') || '';
      const eventName = href.includes('wa.me')
        ? 'whatsapp_click'
        : href.startsWith('tel:')
          ? 'phone_click'
          : null;
      if (!eventName) return;

      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, {
          link_url: href,
          link_text: (link.textContent || '').trim().slice(0, 80),
        });
      }
    };

    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
