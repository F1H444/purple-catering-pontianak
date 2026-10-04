import { menuItems, menuCategories } from './data';

export interface EventFaq {
  q: string;
  a: string;
}

export interface EventType {
  slug: string;
  /** Label pendek untuk navigasi. */
  label: string;
  h1: string;
  /** Judul SEO tanpa nama brand (template layout menambahkan "| Purple Catering"). */
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  highlights: { title: string; text: string }[];
  /** Kategori menu yang relevan (nama harus ada di menuCategories). */
  recommendedCategories: string[];
  faq: EventFaq[];
}

/**
 * Jawaban FAQ sengaja memakai fakta yang memang ada di price list
 * (mis. minimal 50 paket untuk prasmanan/ricebox) agar tidak menyesatkan.
 */
const sharedFaq: EventFaq[] = [
  {
    q: 'Berapa jumlah minimal pemesanan?',
    a: 'Untuk paket prasmanan dan ricebox, pemesanan minimal 50 paket. Untuk nasi box satuan, jumlahnya dapat menyesuaikan — silakan konsultasi lewat WhatsApp.',
  },
  {
    q: 'Apakah menu bisa disesuaikan?',
    a: 'Ya. Kami membantu menyesuaikan susunan menu dengan kebutuhan, jumlah tamu, dan anggaran acara Anda.',
  },
  {
    q: 'Bagaimana cara memesannya?',
    a: 'Pilih menu, lalu hubungi kami via WhatsApp untuk konfirmasi ketersediaan tanggal dan rincian pesanan.',
  },
];

export const events: EventType[] = [
  {
    slug: 'pernikahan',
    label: 'Pernikahan',
    h1: 'Catering Pernikahan di Pontianak',
    metaTitle: 'Catering Pernikahan Pontianak',
    metaDescription:
      'Catering pernikahan di Pontianak: paket prasmanan, kabsah & briyani, dan deluxe untuk akad serta resepsi. Konsultasi menu dan tanggal via WhatsApp.',
    intro: [
      'Pernikahan adalah momen sekali seumur hidup, dan hidangan yang disajikan menjadi bagian penting dari kesannya. Purple Catering membantu menyiapkan sajian untuk akad, resepsi, hingga jamuan keluarga di Pontianak dan sekitarnya.',
      'Kami menghadirkan prasmanan dengan pilihan menu yang bisa disesuaikan, nampan kabsah & briyani untuk jamuan keluarga, serta paket deluxe untuk acara yang lebih intim.',
    ],
    highlights: [
      { title: 'Prasmanan untuk resepsi', text: 'Beragam pilihan paket prasmanan dengan sayur, lauk, sambal, dan pelengkap untuk tamu undangan.' },
      { title: 'Nampan Kabsah & Briyani', text: 'Pilihan nampan untuk jamuan keluarga atau akad dengan porsi 5 hingga 8 orang per nampan.' },
      { title: 'Menu dapat disesuaikan', text: 'Susunan menu dibantu sesuai tema acara, jumlah tamu, dan anggaran Anda.' },
      { title: 'Melayani Pontianak & sekitar', text: 'Pengantaran untuk area Pontianak dan sekitarnya; hubungi kami untuk lokasi lain.' },
    ],
    recommendedCategories: ['Prasmanan', 'Kabsah & Briyani', 'Deluxe'],
    faq: sharedFaq,
  },
  {
    slug: 'kantor',
    label: 'Kantor & Perusahaan',
    h1: 'Catering Kantor & Perusahaan di Pontianak',
    metaTitle: 'Catering Kantor Pontianak',
    metaDescription:
      'Catering kantor di Pontianak: nasi box harian, paket prasmanan, dan minuman untuk rapat, gathering, serta acara perusahaan. Pesan mudah via WhatsApp.',
    intro: [
      'Untuk kebutuhan rapat, pelatihan, gathering, atau acara perusahaan, Purple Catering menyediakan nasi box harian hingga paket prasmanan yang praktis dan konsisten rasanya.',
      'Pemesanan dapat dilakukan secara rutin maupun untuk satu kali acara, dengan pilihan menu yang bisa digilir agar tim tidak bosan.',
    ],
    highlights: [
      { title: 'Nasi box harian', text: 'Pilihan nasi box praktis untuk rapat dan kebutuhan makan siang tim, mulai dari Rp 15.000.' },
      { title: 'Prasmanan acara kantor', text: 'Paket prasmanan untuk gathering atau acara perusahaan dengan pilihan menu yang beragam.' },
      { title: 'Minuman & dessert', text: 'Tambahan minuman segar dan dessert untuk melengkapi hidangan acara.' },
      { title: 'Pemesanan rutin', text: 'Bisa menjadi langganan harian dengan pemesanan yang mudah lewat WhatsApp.' },
    ],
    recommendedCategories: ['Nasi Box', 'Prasmanan', 'Minuman'],
    faq: sharedFaq,
  },
  {
    slug: 'syukuran',
    label: 'Syukuran & Arisan',
    h1: 'Catering Syukuran & Arisan di Pontianak',
    metaTitle: 'Catering Syukuran & Arisan Pontianak',
    metaDescription:
      'Catering syukuran dan arisan di Pontianak: nasi box, prasmanan, dan dessert untuk acara keluarga serta perkumpulan. Pesan mudah via WhatsApp.',
    intro: [
      'Acara syukuran, arisan, dan perkumpulan keluarga biasanya berlangsung santai namun tetap istimewa. Purple Catering menyiapkan hidangan yang pas untuk suasana kebersamaan seperti ini.',
      'Anda bisa memilih nasi box yang praktis, prasmanan untuk tamu dalam jumlah lebih besar, atau menambahkan dessert dan minuman sebagai pelengkap.',
    ],
    highlights: [
      { title: 'Nasi box praktis', text: 'Mudah dibagikan dan cocok untuk perkumpulan dengan tamu terbatas.' },
      { title: 'Prasmanan keluarga', text: 'Pilihan paket prasmanan untuk syukuran dengan tamu yang lebih banyak.' },
      { title: 'Dessert & minuman', text: 'Menu manis dan minuman segar sebagai pelengkap acara.' },
      { title: 'Harga jelas', text: 'Rincian harga transparan sebelum Anda memutuskan, tanpa biaya tersembunyi.' },
    ],
    recommendedCategories: ['Nasi Box', 'Prasmanan', 'Dessert'],
    faq: sharedFaq,
  },
];

export function getEvent(slug: string): EventType | undefined {
  return events.find((e) => e.slug === slug);
}

/** Ambil beberapa contoh menu dari kategori terpilih, untuk ditampilkan di halaman acara. */
export function sampleMenuFor(categories: string[], perCategory = 3) {
  return categories
    .filter((c) => menuCategories.includes(c))
    .map((category) => ({
      category,
      items: menuItems.filter((m) => m.category === category).slice(0, perCategory),
    }));
}
