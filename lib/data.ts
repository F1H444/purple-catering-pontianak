/* ========================================
   PURPLE CATERING — Data & Placeholders
   ========================================
   SEMUA DATA DI BAWAH INI ADALAH PLACEHOLDER.
   Ganti dengan data asli saat tersedia.
======================================== */

export const siteConfig = {
  name: 'Purple Catering',
  tagline: 'Dari Dapur Sederhana, Hadirkan Rasa Istimewa',
  phone: '+62 852-5023-9161',
  phoneRaw: '6285250239161',
  address: 'Jl. Edelweis Golden Park 1, Saigon, Kec. Pontianak Tim., Kota Pontianak, Kalimantan Barat 78242',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.98965537286!2d109.32149025!3d-0.0263129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1735bf49171227%3A0xa04583e8ee69c141!2sPontianak%2C%20West%20Kalimantan!5e0!3m2!1sen!2sid!4v1700000000000',
  operationalHours: 'Senin - Sabtu, 08:00 - 20:00 WIB',
  instagram: '@purplecatering',
  facebook: 'Purple Catering',
};

export const heroData = {
  headline: 'Setiap Suapan',
  headlineAccent: 'Cerita Cita Rasa',
  description: 'Purple Catering hadir sejak 2019, berawal dari dapur rumahan dan frozen food sederhana hingga terus berkembang menjadi pilihan catering untuk berbagai kebutuhan.',
  ctaPrimary: { label: 'Lihat Menu', href: '/menu' },
  ctaSecondary: { label: 'Hubungi Kami', href: '#kontak' },
  // Foto diambil dari galeri (render halaman terakhir Price List PDF).
  image: '/menu/page-10-img-1.png', // Sate
};

export const aboutData = {
  label: 'Tentang Kami',
  headline: 'Berawal dari dapur sederhana, tumbuh bersama kepercayaan pelanggan.',
  story: 'Purple Catering hadir sejak 2019, berawal dari sebuah usaha kecil yang dimulai dari dapur rumahan dengan penuh semangat dan kesederhanaan. Langkah pertama kami dimulai dengan menghadirkan berbagai pilihan frozen food untuk memenuhi kebutuhan makanan yang praktis, lezat, dan berkualitas.',
  storyExtended: 'Dari waktu ke waktu, kepercayaan dan dukungan pelanggan menjadi bagian penting dalam perjalanan kami. Berbekal pengalaman tersebut, Purple Catering terus berkembang dan berkomitmen untuk menghadirkan produk serta layanan catering yang mengutamakan rasa, kualitas, kebersihan, dan kepuasan pelanggan.',
  storyClosing: 'Bagi kami, setiap hidangan memiliki cerita. Karena itu, kami selalu berusaha memberikan yang terbaik dalam setiap proses, mulai dari pemilihan bahan hingga penyajian.',
  storySignoff: 'Purple Catering — dari dapur rumahan, untuk menghadirkan cita rasa yang istimewa bagi setiap momen Anda.',
  // Foto diambil dari galeri (render halaman terakhir Price List PDF).
  image: '/menu/page-10-img-4.png', // Sambal goreng
  // Ditampilkan sebagai poin keunggulan, bukan angka statistik,
  // karena data jumlah klien/rating belum tersedia.
  stats: [
    { value: 'Segar', label: 'Bahan Pilihan' },
    { value: 'Higienis', label: 'Proses & Penyajian' },
  ],
};

export const advantagesData = {
  label: 'Mengapa Memilih Kami',
  headline: 'Bukan Sekadar Katering, Tapi Pengalaman',
  items: [
    {
      title: 'Bahan Segar Pilihan',
      description: 'Setiap bahan baku dipilih langsung dari supplier terpercaya. Tidak ada kompromi pada kualitas, dari sayuran hijau hingga protein premium.',
      icon: 'leaf',
      span: 'large' as const,
    },
    {
      title: 'Higienis Terjamin',
      description: 'Dapur kami memenuhi standar keamanan pangan internasional. Setiap proses produksi dipantau ketat.',
      icon: 'shield',
      span: 'small' as const,
    },
    {
      title: 'Tepat Waktu',
      description: 'Komitmen waktu yang tidak pernah kami ingkari. Pesanan Anda tiba saat dijanjikan.',
      icon: 'clock',
      span: 'small' as const,
    },
    {
      title: 'Harga Transparan',
      description: 'Tanpa biaya tersembunyi. Kami memberikan rincian lengkap sebelum Anda memutuskan, sehingga Anda bisa merencanakan anggaran dengan tenang.',
      icon: 'tag',
      span: 'full' as const,
    },
  ],
};

export const visionData = {
  label: 'Visi, Misi & Motto',
  vision: 'Menjadi pilihan catering yang terpercaya dengan menghadirkan makanan berkualitas, cita rasa yang istimewa, dan pelayanan yang sepenuh hati.',
  mission: [
    'Menghadirkan makanan yang lezat, berkualitas, dan higienis dengan bahan-bahan yang terpilih.',
    'Menjaga konsistensi cita rasa dan kualitas dalam setiap hidangan.',
    'Memberikan pelayanan yang ramah, profesional, dan responsif kepada setiap pelanggan.',
    'Terus berinovasi dalam menghadirkan pilihan menu yang sesuai dengan kebutuhan dan selera pelanggan.',
    'Membangun hubungan jangka panjang dengan pelanggan melalui kepercayaan, kualitas, dan pelayanan terbaik.',
  ],
  motto: 'Dari Dapur Sederhana,',
  mottoLine2: 'Hadirkan Rasa Istimewa.',
};

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  featured?: boolean;
}

export const menuCategories = ['Semua', 'Nasi Box', 'Prasmanan', 'Kabsah & Briyani', 'Minuman', 'Dessert', 'Deluxe'];

/* Catatan foto: diambil dari gambar tertanam di PriceList PDF
   (ekstraksi: node scripts/extract-menu.mjs -> public/menu/*.png).
   Item tanpa foto menggunakan placeholder elegan di kartu menu. */
const img = (file: string) => `/menu/${file}`;
const PHOTO = {
  bakso: img('page-10-img-0.png'),
  sate: img('page-10-img-1.png'),
  ayamLadaHitam: img('page-10-img-2.png'),
  soto: img('page-10-img-3.png'),
  sambal: img('page-10-img-4.png'),
  ayamGoreng: img('page-10-img-5.png'),
  ikanBalado: img('page-10-img-6.png'),
  ikanPindang: img('page-10-img-7.png'),
};

// MENU — bersumber dari PriceList Purple Catering (public/PRCELIST PURPLE CATERING .pdf)
export const menuItems: MenuItem[] = [
  // ===== Nasi Box =====
  { id: 'nb-1', name: 'Nasi Lengkap', description: 'Nasi putih dengan lauk pauk lengkap khas dapur Purple Catering.', price: 'Rp 30.000', category: 'Nasi Box', image: PHOTO.ayamGoreng, featured: true },
  { id: 'nb-2', name: 'Bakso Sapi', description: 'Bakso sapi kenyal dengan kuah kaldu sapi yang gurih.', price: 'Rp 20.000', category: 'Nasi Box', image: PHOTO.bakso, featured: true },
  { id: 'nb-3', name: 'Siomay', description: 'Siomay ikan dengan saus kacang dan perasan jeruk limau.', price: 'Rp 20.000', category: 'Nasi Box' },
  { id: 'nb-4', name: 'Tekwan', description: 'Sup bakso ikan khas Palembang dengan jamur dan soun.', price: 'Rp 20.000', category: 'Nasi Box', image: PHOTO.bakso },
  { id: 'nb-5', name: 'Sate Ayam', description: 'Sate ayam bumbu kunyit dengan saus kacang dan lontong.', price: 'Rp 25.000', category: 'Nasi Box', image: PHOTO.sate, featured: true },
  { id: 'nb-6', name: 'Lontong Sayur', description: 'Lontong dengan sayur labu siam, santan, dan sambal goreng.', price: 'Rp 20.000', category: 'Nasi Box' },
  { id: 'nb-7', name: 'Soto Ayam', description: 'Soto ayam bening dengan perasan jeruk dan sambal.' , price: 'Rp 20.000', category: 'Nasi Box', image: PHOTO.soto },
  { id: 'nb-8', name: 'Bubur Pedas', description: 'Bubur pedas khas Pontianak — rempah, sayuran, dan kacang.', price: 'Rp 15.000', category: 'Nasi Box' },
  { id: 'nb-9', name: 'Bubur Sapi/Lemak Pontianak', description: 'Bubur lemak Pontianak dengan potongan daging sapi.', price: 'Rp 20.000', category: 'Nasi Box' },
  { id: 'nb-10', name: 'Roti Cane', description: 'Roti cane lembyut dengan kari ayam/sapi.', price: 'Rp 17.000', category: 'Nasi Box' },
  { id: 'nb-11', name: 'Mie Tiaw Goreng/Rebus', description: 'Mie tiaw dengan kuah atau digoreng, pilihan favorit Pontianak.', price: 'Rp 20.000', category: 'Nasi Box' },
  { id: 'nb-12', name: 'Bihun Goreng', description: 'Bihun goreng dengan sayuran dan bumbu dapur kami.', price: 'Rp 30.000', category: 'Nasi Box' },
  { id: 'nb-13', name: 'Nasi Goreng Ayam', description: 'Nasi goreng ayam dengan bumbu rempah dan telur.', price: 'Rp 20.000', category: 'Nasi Box' },
  { id: 'nb-14', name: 'Nasi Goreng Sapi', description: 'Nasi goreng sapi dengan potongan daging melimpah.', price: 'Rp 20.000', category: 'Nasi Box' },
  { id: 'nb-15', name: 'Nasi Goreng Seafood', description: 'Nasi goreng dengan udang, cumi, dan sayuran segar.', price: 'Rp 22.000', category: 'Nasi Box' },

  // ===== Kabsah & Briyani (nampan) =====
  { id: 'kb-1', name: 'Kabsah Kambing — Nampan 8 Porsi', description: 'Nasi kabsah/briyani brasmati, daging kambing, sambal goreng hati, acar timun, sambal, kerupuk emping.', price: 'Rp 600.000', category: 'Kabsah & Briyani' },
  { id: 'kb-2', name: 'Kabsah Kambing — Nampan 5 Porsi', description: 'Nasi kabsah/briyani brasmati dengan daging kambing pilihan.', price: 'Rp 450.000', category: 'Kabsah & Briyani' },
  { id: 'kb-3', name: 'Kabsah Sapi — Nampan 8 Porsi', description: 'Nasi kabsah/briyani brasmati, daging sapi, sambal goreng hati, acar timun, sambal, kerupuk emping.', price: 'Rp 500.000', category: 'Kabsah & Briyani' },
  { id: 'kb-4', name: 'Kabsah Sapi — Nampan 5 Porsi', description: 'Nasi kabsah/briyani brasmati dengan daging sapi pilihan.', price: 'Rp 400.000', category: 'Kabsah & Briyani' },
  { id: 'kb-5', name: 'Kabsah Ayam — Nampan 8 Porsi', description: 'Nasi kabsah/briyani brasmati dengan daging ayam utuh.', price: 'Rp 450.000', category: 'Kabsah & Briyani' },
  { id: 'kb-6', name: 'Kabsah Ayam — Nampan 5 Porsi', description: 'Nasi kabsah/briyani brasmati dengan daging ayam.', price: 'Rp 350.000', category: 'Kabsah & Briyani' },

  // ===== Prasmanan =====
  { id: 'pr-1', name: 'Paket Prasmanan A', description: 'Nasi putih, menu ayam, menu sambal, menu sayuran, mineral.', price: 'Rp 30.000', category: 'Prasmanan' },
  { id: 'pr-2', name: 'Paket Prasmanan B', description: 'Nasi putih, menu ayam, menu sambal, menu gorengan, menu sayuran, kerupuk, mineral.', price: 'Rp 33.000', category: 'Prasmanan' },
  { id: 'pr-3', name: 'Paket Prasmanan C', description: 'Nasi putih, menu sapi, menu sambal, menu sayuran, kerupuk, mineral.', price: 'Rp 32.000', category: 'Prasmanan' },
  { id: 'pr-4', name: 'Paket Prasmanan D', description: 'Nasi putih, menu ikan, menu sambal, menu sayuran, kerupuk, mineral.', price: 'Rp 37.000', category: 'Prasmanan' },
  { id: 'pr-5', name: 'Paket Prasmanan E', description: 'Nasi putih, menu seafood, menu sambal, menu sayuran, mineral.', price: 'Rp 40.000', category: 'Prasmanan' },
  { id: 'pr-6', name: 'Paket Prasmanan F', description: 'Nasi putih, menu ikan, menu sambal, menu gorengan, menu sayuran, kerupuk, mineral.', price: 'Rp 41.000', category: 'Prasmanan' },
  { id: 'pr-7', name: 'Paket Prasmanan G', description: 'Nasi putih, menu seafood, menu sambal, menu sayuran, menu gorengan, kerupuk, mineral.', price: 'Rp 43.000', category: 'Prasmanan' },
  { id: 'pr-8', name: 'Paket Prasmanan H', description: 'Nasi putih, menu ayam, menu sambal, menu sayuran, menu sapi, menu gorengan, kerupuk, mineral.', price: 'Rp 45.000', category: 'Prasmanan' },

  // ===== Deluxe =====
  { id: 'dx-1', name: 'Deluxe Menu', description: 'Pilihan menu ayam & sayuran, ditambah bihun goreng, mie goreng jawa, nasi putih, orek tempe, telur balado, acar, kerupuk, dan mineral.', price: 'Rp 25.000', category: 'Deluxe', image: PHOTO.sambal, featured: true },

  // ===== Minuman =====
  { id: 'mn-1', name: 'Es Serbatt', description: 'Es serbat segar dengan perasan jeruk.', price: 'Rp 6.000', category: 'Minuman' },
  { id: 'mn-2', name: 'Es Serai Lemon', description: 'Teh serai dengan perasan lemon, menyegarkan.', price: 'Rp 8.000', category: 'Minuman' },
  { id: 'mn-3', name: 'Es Rujak', description: 'Es rujak buah dengan bumbu rujak pedas-manis.', price: 'Rp 7.000', category: 'Minuman' },
  { id: 'mn-4', name: 'Es Buah', description: 'Cocokan buah segar dengan sirup dan es serut.', price: 'Rp 10.000', category: 'Minuman' },
  { id: 'mn-5', name: 'Es Tahu', description: 'Es tahu khas — tahu, sirup, dan susu.', price: 'Rp 6.000', category: 'Minuman' },
  { id: 'mn-6', name: 'Es Sari Kacang Hijau', description: 'Sari kacang hijau dingin yang creamy.', price: 'Rp 7.000', category: 'Minuman' },
  { id: 'mn-7', name: 'Es Coco Pandan', description: 'Kelapa muda dengan sirup pandan.', price: 'Rp 6.000', category: 'Minuman' },
  { id: 'mn-8', name: 'Es Orange', description: 'Es jeruk perasan segar.', price: 'Rp 6.000', category: 'Minuman' },
  { id: 'mn-9', name: 'Es Syrup', description: 'Es sirup dengan pilihan rasa.', price: 'Rp 6.000', category: 'Minuman' },

  // ===== Dessert =====
  { id: 'ds-1', name: 'Kolak Pisang', description: 'Kolak pisang dengan santan dan gula aren.', price: 'Rp 10.000', category: 'Dessert' },
  { id: 'ds-2', name: 'Setup Pisang', description: 'Pisang setup hangat dengan kuah manis.', price: 'Rp 10.000', category: 'Dessert' },
  { id: 'ds-3', name: 'Salad Buah', description: 'Salad buah dengan mayo dan keju.', price: 'Rp 15.000', category: 'Dessert' },
  { id: 'ds-4', name: 'Serawah Durian', description: 'Serawa durian khas Pontianak dengan santan.', price: 'Rp 15.000', category: 'Dessert' },
];

// Catatan tambahan dari PriceList:
// - Pemesanan Paket Prasmanan minimal 50 paket dan 50 paket ricebox.
// - Party Add-Ons: Pisang Singapore/Berangan/Jeruk/Nanas Rp 2.500, Es Cream Rp 3.000,
//   Kopi Susu Rp 10.000, Kue Asin/Manis/Talam Rp 2.000, Puding Rp 2.500, Kukusan Rp 2.000, Rujak Rp 10.000.

// CATATAN: 5 testimoni di bawah ini DUMMY (contoh) — ganti dengan ulasan asli
// (mis. dari Google Maps / WhatsApp pelanggan) saat sudah tersedia.
export const testimonialData = [
  {
    name: 'Rina Kartika',
    role: 'Acara Ulang Tahun Anak',
    rating: 5,
    text: 'Pesan nasi box untuk ulang tahun anak, semuanya habis dalam sekejap! Rasanya hompimpa dan packing-nya rapi. Anak-anak sampai minta tambah.',
    initials: 'RK',
    featured: true,
  },
  {
    name: 'Hendra Wijaya',
    role: 'Panitia Acara Kantor',
    rating: 5,
    text: 'Prasmanan untuk 150 tamu berjalan mulus. Makanan datang tepat waktu, masih hangat, dan timnya sigap membantu penataan. Recommended untuk acara kantor.',
    initials: 'HW',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Akad Nikah',
    rating: 5,
    text: 'Kami pesan Kabsah nampan untuk akad nikah. Penampilannya cantik, rasanya juara, banyak tamu yang menanyakan cateringnya di mana.',
    initials: 'SN',
  },
  {
    name: 'Andre Saputra',
    role: 'Langganan Nasi Box Kantor',
    rating: 4,
    text: 'Sudah beberapa bulan langganan nasi box harian untuk tim. Menu berganti-ganti jadi tidak bosan, porsi pas, dan pemesanan via WhatsApp cepat dibalas.',
    initials: 'AS',
  },
  {
    name: 'Maria Yuliana',
    role: 'Hajatan Keluarga',
    rating: 5,
    text: 'Untuk hajatan keluarga kami ambil paket prasmanan. Sambal gorengnya juara, sayuran segar, dan harga sepadan dengan kualitas. Terima kasih Purple Catering!',
    initials: 'MY',
  },
];

/**
 * Foto hidangan hasil ekstraksi halaman terakhir Price List PDF
 * (public/menu/page-10-img-*.png, via node scripts/extract-menu.mjs).
 */
export const galleryData = [
  { id: 'g1', alt: 'Bakso sapi', src: '/menu/page-10-img-0.png' },
  { id: 'g2', alt: 'Sate', src: '/menu/page-10-img-1.png' },
  { id: 'g3', alt: 'Ayam lada hitam', src: '/menu/page-10-img-2.png' },
  { id: 'g4', alt: 'Soto & tekwan', src: '/menu/page-10-img-3.png' },
  { id: 'g5', alt: 'Sambal goreng', src: '/menu/page-10-img-4.png' },
  { id: 'g6', alt: 'Ayam goreng', src: '/menu/page-10-img-5.png' },
  { id: 'g7', alt: 'Ikan balado', src: '/menu/page-10-img-6.png' },
  { id: 'g8', alt: 'Ikan pindang', src: '/menu/page-10-img-7.png' },
];

export const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com/purplecatering' },
  { name: 'Facebook', url: 'https://facebook.com/purplecatering' },
  { name: 'WhatsApp', url: `https://wa.me/6285250239161` },
];
