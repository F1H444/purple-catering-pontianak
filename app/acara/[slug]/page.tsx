import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { events, getEvent, sampleMenuFor } from '@/lib/events';
import { business } from '@/lib/site';
import { siteConfig } from '@/lib/data';

// Halaman di-prerender statis (SSG) supaya cepat & mudah di-index.
export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ev = getEvent(slug);
  if (!ev) return {};

  return {
    title: ev.metaTitle,
    description: ev.metaDescription,
    alternates: { canonical: `/acara/${ev.slug}` },
    openGraph: {
      type: 'website',
      locale: 'id_ID',
      url: `/acara/${ev.slug}`,
      siteName: 'Purple Catering',
      title: ev.metaTitle,
      description: ev.metaDescription,
    },
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ev = getEvent(slug);
  if (!ev) notFound();

  const samples = sampleMenuFor(ev.recommendedCategories);
  const waMessage = `Halo ${siteConfig.name}, saya ingin bertanya tentang catering untuk acara ${ev.label}.`;
  const waHref = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(waMessage)}`;
  const otherEvents = events.filter((e) => e.slug !== ev.slug);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${business.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Jenis Acara', item: `${business.url}/acara` },
        { '@type': 'ListItem', position: 3, name: ev.label, item: `${business.url}/acara/${ev.slug}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: ev.h1,
      serviceType: `Catering ${ev.label}`,
      description: ev.metaDescription,
      provider: { '@type': 'LocalBusiness', name: business.name, telephone: business.phone, url: business.url },
      areaServed: business.areaServed.map((name) => ({ '@type': 'Place', name })),
      url: `${business.url}/acara/${ev.slug}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: ev.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <div className="bg-ivory">
      {/* Konten JSON statis dari konstanta internal (bukan input pengguna). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-royal">
        <div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/acara" className="hover:text-white transition-colors">Jenis Acara</Link></li>
              <li aria-hidden>/</li>
              <li className="text-white">{ev.label}</li>
            </ol>
          </nav>

          <div className="section-label mb-4 !text-white/70 [&::before]:!bg-white/50">
            Catering Pontianak
          </div>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-white mb-6">
            {ev.h1}
          </h1>
          {ev.intro.map((p) => (
            <p key={p} className="text-white/75 leading-relaxed mb-3 max-w-2xl">
              {p}
            </p>
          ))}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !bg-white !text-royal hover:!bg-blush-light"
            >
              Tanya &amp; Pesan via WhatsApp
            </a>
            <Link
              href="/menu"
              className="btn-secondary !border-white/30 !text-white hover:!bg-white/10"
            >
              Lihat Daftar Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-ink mb-8">
            Yang kami siapkan untuk acara {ev.label.toLowerCase()}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ev.highlights.map((h) => (
              <div key={h.title} className="bento-card p-6">
                <h3 className="font-display text-lg font-bold text-ink mb-2">{h.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rekomendasi menu */}
      {samples.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-ink mb-2">
              Rekomendasi menu
            </h2>
            <p className="text-ink-muted mb-8">
              Contoh pilihan dari kategori yang cocok untuk acara {ev.label.toLowerCase()}.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {samples.map((group) => (
                <div key={group.category} className="rounded-2xl border border-blush bg-ivory p-6">
                  <h3 className="font-display text-base font-bold text-royal mb-4">{group.category}</h3>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item.id} className="text-sm text-ink-soft">
                        <span className="font-medium text-ink">{item.name}</span>
                        <span className="block text-ink-muted">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/menu" className="btn-secondary">
                Lihat semua menu &amp; harga
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto w-full max-w-3xl px-6 lg:px-8">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-ink mb-8">
            Pertanyaan umum
          </h2>
          <div className="space-y-3">
            {ev.faq.map((f) => (
              <details key={f.q} className="bento-card p-5 group">
                <summary className="cursor-pointer list-none font-semibold text-ink flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-royal transition-transform group-open:rotate-45 text-lg leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Acara lain */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto w-full max-w-3xl px-6 lg:px-8">
          <h2 className="font-display text-xl font-bold text-ink mb-6">Jenis acara lainnya</h2>
          <div className="flex flex-wrap gap-3">
            {otherEvents.map((e) => (
              <Link
                key={e.slug}
                href={`/acara/${e.slug}`}
                className="inline-flex items-center rounded-lg border border-blush px-4 py-2 text-sm font-medium text-ink-soft hover:bg-blush transition-colors"
              >
                {e.label}
              </Link>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-royal p-8 text-center">
            <p className="font-display text-xl font-bold text-white mb-2">
              Siap merencanakan hidangan untuk acara Anda?
            </p>
            <p className="text-white/70 mb-6">
              Konsultasikan jumlah tamu dan anggaran Anda — kami bantu susun menunya.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !bg-white !text-royal hover:!bg-blush-light"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
