/* ========================================
   PURPLE CATERING — Data & Placeholders
   ========================================
   SEMUA DATA DI BAWAH INI ADALAH PLACEHOLDER.
   Ganti dengan data asli saat tersedia.
======================================== */

export const siteConfig = {
  name: 'Purple Catering',
  tagline: 'Sajian Istimewa dari Jantung Pontianak',
  phone: '+62 812 5678 9012',
  phoneRaw: '6281256789012',
  email: 'hello@purplecatering.id',
  address: 'Jl. Edelweis Golden Park 1, Saigon, Kec. Pontianak Tim., Kota Pontianak, Kalimantan Barat 78242',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.98965537286!2d109.32149025!3d-0.0263129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1735bf49171227%3A0xa04583e8ee69c141!2sPontianak%2C%20West%20Kalimantan!5e0!3m2!1sen!2sid!4v1700000000000',
  operationalHours: 'Senin - Sabtu, 08:00 - 20:00 WIB',
  instagram: '@purplecatering',
  facebook: 'Purple Catering',
};

export const heroData = {
  headline: 'Setiap Suapan',
  headlineAccent: 'Cerita Cita Rasa',
  description: 'Dari dapur Pontianak ke meja Anda — Purple Catering menghadirkan masakan Indonesia otentik yang diracik dengan bahan segar, sentuhan modern, dan perhatian pada setiap detail.',
  ctaPrimary: { label: 'Lihat Menu', href: '/menu' },
  ctaSecondary: { label: 'Hubungi Kami', href: '#kontak' },
  image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=1000&fit=crop&crop=center',
};

export const aboutData = {
  label: 'Tentang Kami',
  headline: 'Dapur yang Berdiri di Atas Kepercayaan',
  story: 'Purple Catering lahir dari kecintaan mendalam terhadap kuliner Indonesia dan semangat untuk menghadirkan sajian yang melampaui ekspektasi. Berbasis di Pontianak, kami telah menjadi pilihan utama untuk berbagai acara — dari gathering perusahaan hingga perayaan keluarga intim.',
  storyExtended: 'Setiap piring yang kami sajikan adalah hasil kolaborasi antara resep warisan dan inovasi cita rasa kontemporer. Kami percaya makanan bukan sekadar pengisi perut, melainkan jembatan yang menghubungkan orang-orang dalam momen berharga.',
  image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=600&fit=crop&crop=center',
  stats: [
    { value: '500+', label: 'Acara Terlayani' },
    { value: '98%', label: 'Klien Puas' },
    { value: '50+', label: 'Menu Pilihan' },
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
  vision: 'Menjadi katering terpercaya di Kalimantan Barat yang mengangkat kekayaan cita rasa Nusantara ke level internasional.',
  mission: [
    'Menghadirkan sajian kuliner premium dengan harga yang berkeadilan.',
    'Mendukung petani dan produsen lokal melalui rantai pasok yang berkelanjutan.',
    'Menciptakan pengalaman gastronomi yang membangun kenangan.',
  ],
  motto: 'Rasa yang bicara,',
  mottoLine2: 'kenangan yang tinggal.',
};

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  featured?: boolean;
}

export const menuCategories = ['Semua', 'Nasi Box', 'Prasmanan', 'Snack Box', 'Tumpeng', 'Paket Acara'];

// MENU KOSONG — isi dengan data asli nanti
export const menuItems: MenuItem[] = [];

export const testimonialData = [
  {
    name: 'Ratna Sari',
    role: 'Event Manager, PT Kalimantan Jaya',
    rating: 5,
    text: 'Purple Catering selalu menjadi andalan kami untuk setiap corporate event. Responsnya cepat, makanannya luar biasa, dan tim mereka sangat profesional. Tidak pernah sekali pun mengecewakan.',
    initials: 'RS',
    featured: true,
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Pengantin, Desember 2025',
    rating: 5,
    text: 'Pernikahan kami jadi sempurna berkat Purple Catering. Tamu-tamu masih terus memuji makanannya sampai berminggu-minggu setelah acara.',
    initials: 'AF',
  },
  {
    name: 'Dewi Lestari',
    role: 'Ketua Panitia, Festival Kuliner Pontianak',
    rating: 5,
    text: 'Dari 20 vendor yang kami undang, Purple Catering menonjol dari segi rasa dan presentasi. Mereka benar-benar memahami selera lokal.',
    initials: 'DL',
  },
  {
    name: 'Budi Hartono',
    role: 'Klien Rutin',
    rating: 5,
    text: 'Sudah 3 tahun langganan untuk acara ulang tahun anak. Setiap tahun selalu ada menu baru yang membuat kami terkejut positif.',
    initials: 'BH',
  },
];

export const galleryData = [
  { id: 'g1', alt: 'Prasmanan wedding internasional', span: 'wide' as const, src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=900&h=600&fit=crop&crop=center' },
  { id: 'g2', alt: 'Tumpeng kuning tradisional', span: 'tall' as const, src: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&h=800&fit=crop&crop=center' },
  { id: 'g3', alt: 'Snack box untuk seminar', span: 'normal' as const, src: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&h=500&fit=crop&crop=center' },
  { id: 'g4', alt: 'Nasi box corporate', span: 'normal' as const, src: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&h=500&fit=crop&crop=center' },
  { id: 'g5', alt: 'Dapur Purple Catering', span: 'wide' as const, src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&h=600&fit=crop&crop=center' },
  { id: 'g6', alt: 'Hidangan prasmanan seafood', span: 'tall' as const, src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&h=800&fit=crop&crop=center' },
  { id: 'g7', alt: 'Tim Purple Catering', span: 'normal' as const, src: 'https://images.unsplash.com/photo-1577219491135-ce3957364262?w=500&h=500&fit=crop&crop=center' },
  { id: 'g8', alt: 'Dessert table', span: 'wide' as const, src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=900&h=600&fit=crop&crop=center' },
];

export const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com/purplecatering' },
  { name: 'Facebook', url: 'https://facebook.com/purplecatering' },
  { name: 'WhatsApp', url: `https://wa.me/6281256789012` },
];
