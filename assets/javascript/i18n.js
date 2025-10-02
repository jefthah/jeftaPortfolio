/* Minimal i18n for EN/ID with data-i18n attributes */
(function () {
  const translations = {
    en: {
      'nav.home': 'HOME',
      'nav.about': 'ABOUT',
      'nav.services': 'SERVICES',
      'nav.portfolio': 'PORTFOLIO',
      'nav.testimonial': 'TESTIMONIAL',
      'nav.resume': 'RESUME',
      'nav.contact': 'CONTACT',
      'profile.title': 'Full Stack & Web Developer',
      'contact.phone': 'PHONE:',
      'contact.email': 'EMAIL:',
      'contact.location': 'LOCATION:',
      'button.hire': 'Hire Me!',
      'button.download': 'Download CV',
      'home.greeting': 'Hi there! 👋',
      'home.title': 'Full Stack Developer.',
      'home.description': 'Fresh Informatics Engineering graduate interested in full-stack web development; experienced in building end-to-end apps, integrating relational/non-relational databases, prototyping products and visuals, with exposure to game development; recognized for persistence, responsibility, collaboration, and curiosity',
      'about.im': 'I\'m',
      'about.experts': 'Your Web Experts',
      'about.intro': 'Hello! I\'m Jefta—a fresh graduate in Informatics Engineering with a strong interest in full-stack web development. I design, prototype, and build end-to-end web products, from idea to launch.',
      'about.mission': 'I turn ideas into clear, useful digital experiences—reliable, accessible, and delightful for people and brands.',
      'stats.years': 'Years Of Exp.',
      'stats.hours': 'Work Hours',
      'stats.projects': 'Projects Done',
      'detail.name': 'Name',
      'detail.nationality': 'Nationality',
      'detail.phone': 'Phone',
      'detail.email': 'Email',
      'detail.experience': 'Experience',
      'detail.freelance': 'Freelance',
      'detail.github': 'Github',
      'detail.language': 'Language',
      'detail.available': 'Available',
      'detail.languages': 'English, Indonesia',
      'services.intro': 'I help teams ship reliable web products through thoughtful design, solid engineering, and clear execution.',
      'services.subtitle': 'From idea to prototype to launch—turning concepts into fast, usable, and maintainable digital experiences.',
      'services.web.title': 'Web Design & Development',
      'services.web.desc': 'End-to-end website & app delivery: information architecture, responsive UI, accessibility, and production-ready builds.',
      'services.ui.title': 'UI Design & Experience',
      'services.ui.desc': 'Wireframes to high-fidelity prototypes, design systems, and usability improvements that reduce friction and increase clarity.',
      'services.frontend.title': 'Front-End Interactions & Animation',
      'services.frontend.desc': 'Smooth micro-interactions and scroll-based storytelling with a focus on performance and accessibility.',
      'services.backend.title': 'Back-End & API Integration',
      'services.backend.desc': 'Authentication, RESTful APIs, file uploads, and database modeling—cleanly integrated into a maintainable codebase.',
      'services.content.title': 'Content, Video & Launch Assets',
      'services.content.desc': 'Product demo edits, social snippets, and visual assets that support launches and case studies.',
      'portfolio.title': 'Featured Projects',
      'portfolio.subtitle': 'Real projects, measurable impact—built with care from idea to delivery',
      'portfolio.showall': 'Show All',
      'portfolio.student': 'Student Project',
      'portfolio.major': 'Major Project',
      'form.send': 'Send Message'
    },
    id: {
      'nav.home': 'BERANDA',
      'nav.about': 'TENTANG',
      'nav.services': 'LAYANAN',
      'nav.portfolio': 'PORTOFOLIO',
      'nav.testimonial': 'TESTIMONI',
      'nav.resume': 'RIWAYAT',
      'nav.contact': 'KONTAK',
      'profile.title': 'Full Stack & Web Developer',
      'contact.phone': 'TELEPON:',
      'contact.email': 'EMAIL:',
      'contact.location': 'LOKASI:',
      'button.hire': 'Rekrut Saya!',
      'button.download': 'Unduh CV',
      'home.greeting': 'Halo! 👋',
      'home.title': 'Full Stack Developer.',
      'home.description': 'Lulusan Teknik Informatika yang tertarik dengan pengembangan web full-stack; berpengalaman dalam membangun aplikasi end-to-end, mengintegrasikan database relasional/non-relasional, membuat prototipe produk dan visual, dengan pengalaman dalam pengembangan game; dikenal karena ketekunan, tanggung jawab, kolaborasi, dan rasa ingin tahu',
      'about.im': 'Saya',
      'about.experts': 'Ahli Web Anda',
      'about.intro': 'Halo! Saya Jefta—lulusan baru Teknik Informatika dengan minat kuat dalam pengembangan web full-stack. Saya merancang, membuat prototipe, dan membangun produk web end-to-end, dari ide hingga peluncuran.',
      'about.mission': 'Saya mengubah ide menjadi pengalaman digital yang jelas dan berguna—dapat diandalkan, mudah diakses, dan menyenangkan untuk orang dan merek.',
      'stats.years': 'Tahun Pengalaman',
      'stats.hours': 'Jam Kerja',
      'stats.projects': 'Proyek Selesai',
      'detail.name': 'Nama',
      'detail.nationality': 'Kewarganegaraan',
      'detail.phone': 'Telepon',
      'detail.email': 'Email',
      'detail.experience': 'Pengalaman',
      'detail.freelance': 'Freelance',
      'detail.github': 'Github',
      'detail.language': 'Bahasa',
      'detail.available': 'Tersedia',
      'detail.languages': 'Bahasa Inggris, Indonesia',
      'services.intro': 'Saya membantu tim mengirimkan produk web yang dapat diandalkan melalui desain yang bijaksana, rekayasa yang solid, dan eksekusi yang jelas.',
      'services.subtitle': 'Dari ide ke prototipe hingga peluncuran—mengubah konsep menjadi pengalaman digital yang cepat, dapat digunakan, dan mudah dipelihara.',
      'services.web.title': 'Desain & Pengembangan Web',
      'services.web.desc': 'Pengiriman website & aplikasi end-to-end: arsitektur informasi, UI responsif, aksesibilitas, dan build siap produksi.',
      'services.ui.title': 'Desain UI & Pengalaman',
      'services.ui.desc': 'Wireframe hingga prototipe high-fidelity, sistem desain, dan peningkatan kegunaan yang mengurangi gesekan dan meningkatkan kejelasan.',
      'services.frontend.title': 'Interaksi & Animasi Front-End',
      'services.frontend.desc': 'Mikro-interaksi yang halus dan storytelling berbasis scroll dengan fokus pada performa dan aksesibilitas.',
      'services.backend.title': 'Back-End & Integrasi API',
      'services.backend.desc': 'Autentikasi, RESTful APIs, upload file, dan pemodelan database—terintegrasi dengan bersih ke dalam codebase yang dapat dipelihara.',
      'services.content.title': 'Konten, Video & Aset Peluncuran',
      'services.content.desc': 'Edit demo produk, cuplikan sosial, dan aset visual yang mendukung peluncuran dan studi kasus.',
      'portfolio.title': 'Proyek Unggulan',
      'portfolio.subtitle': 'Proyek nyata, dampak terukur—dibangun dengan hati-hati dari ide hingga pengiriman',
      'portfolio.showall': 'Tampilkan Semua',
      'portfolio.student': 'Proyek Mahasiswa',
      'portfolio.major': 'Proyek Utama',
      'form.send': 'Kirim Pesan'
    }
  };

  const defaultLang = localStorage.getItem('lang') || 'en';

  function setActiveButtons(lang) {
    const btnId = document.getElementById('btn-lang-id');
    const btnEn = document.getElementById('btn-lang-en');
    if (!btnId || !btnEn) return;
    btnId.classList.toggle('active', lang === 'id');
    btnEn.classList.toggle('active', lang === 'en');
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        // Handle special case for greeting with emoji
        if (key === 'home.greeting') {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });
    // Example: button in contact form
    const sendBtn = document.getElementById('sendBtn');
    if (sendBtn) {
      const icon = sendBtn.querySelector('img');
      sendBtn.textContent = dict['form.send'] || sendBtn.textContent;
      if (icon) sendBtn.appendChild(icon);
    }
    setActiveButtons(lang);
  }

  function initI18n() {
    applyTranslations(defaultLang);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const lang = this.getAttribute('data-lang');
        localStorage.setItem('lang', lang);
        applyTranslations(lang);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
})();


