/* ============================================
   ALON GALLERY — SHARED JS
   ============================================ */

   const FIREBASE_CONFIG = {
    apiKey:            "AIzaSyA3Ee9EyCqt51ikAa3-zLjmh-KSXdhX8yQ",
    authDomain:        "alon-gallery.firebaseapp.com",
    databaseURL:       "https://alon-gallery-default-rtdb.firebaseio.com",
    projectId:         "alon-gallery",
    storageBucket:     "alon-gallery.firebasestorage.app",
    messagingSenderId: "1067707889353",
    appId:             "1:1067707889353:web:3e4f7d6f4bef1d01cbff18",
    measurementId:     "G-P85JE9KYX7"
  };
  
  /* ── Theme ── */
  const Theme = {
    init() {
      const saved = localStorage.getItem('ag-theme') || 'dark';
      document.documentElement.setAttribute('data-theme', saved);
    },
    toggle() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('ag-theme', next);
    }
  };
  
  /* ── Language ── */
  // תרגומים: כל key הוא data-i18n attribute על האלמנט
  // הוסף/שנה תרגומים כאן
  const TRANSLATIONS = {
    he: {
      'nav.home':        'בית',
      'nav.gallery':     'גלריה',
      'nav.about':       'אודות',
      'nav.blog':        'בלוג',
      'nav.contact':     'צור קשר',
      'contact.cta':     'לפרטים נוספים',
      'footer.rights':   '© 2025 Alon Gallery. כל הזכויות שמורות.',
      'footer.terms':    'תנאי שימוש',
      'footer.privacy':  'פרטיות',
    },
    en: {
      'nav.home':        'Home',
      'nav.gallery':     'Gallery',
      'nav.about':       'About',
      'nav.blog':        'Blog',
      'nav.contact':     'Contact',
      'contact.cta':     'Get in Touch',
      'footer.rights':   '© 2025 Alon Gallery. All rights reserved.',
      'footer.terms':    'Terms of Use',
      'footer.privacy':  'Privacy',
    }
  };
  
  const Lang = {
    current: 'he',
    init() {
      const saved = localStorage.getItem('ag-lang') || 'he';
      this.apply(saved);
    },
    toggle() {
      this.apply(this.current === 'he' ? 'en' : 'he');
    },
    apply(lang) {
      this.current = lang;
      localStorage.setItem('ag-lang', lang);
      document.body.classList.toggle('en', lang === 'en');
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
      // update lang button text
      const btn = document.querySelector('.lang-btn');
      if (btn) btn.textContent = lang === 'he' ? 'EN' : 'עב';
      // translate elements
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang]?.[key]) el.textContent = TRANSLATIONS[lang][key];
      });
      // translate placeholders
      document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (TRANSLATIONS[lang]?.[key]) el.placeholder = TRANSLATIONS[lang][key];
      });
    }
  };
  
  /* ── Nav scroll effect ── */
  function initNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  
    // Mark active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });
  
    // Hamburger
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileClose = document.querySelector('.mobile-menu-close');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
      mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
      mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
    }
  
    // Theme toggle
    document.querySelectorAll('.theme-toggle').forEach(btn => btn.addEventListener('click', Theme.toggle.bind(Theme)));
  
    // Lang toggle
    document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', Lang.toggle.bind(Lang)));
  }
  
  /* ── Scroll reveal ── */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  }
  
  /* ── Toast ── */
  function showToast(msg, type = 'success') {
    let toast = document.querySelector('.toast');
    if (!toast) { toast = document.createElement('div'); toast.className = 'toast'; document.body.appendChild(toast); }
    toast.textContent = msg;
    toast.className = `toast ${type}`;
    requestAnimationFrame(() => { requestAnimationFrame(() => toast.classList.add('show')); });
    setTimeout(() => toast.classList.remove('show'), 4000);
  }
  
  /* ── Firebase init (lazy) ── */
  let _db = null;
  async function getDB() {
    if (_db) return _db;
    const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getDatabase } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js');
    const app = getApps().length ? getApps()[0] : initializeApp(FIREBASE_CONFIG);
    _db = getDatabase(app);
    return _db;
  }
  
  /* ── DOMContentLoaded ── */
  document.addEventListener('DOMContentLoaded', () => {
    Theme.init();
    Lang.init();
    initNav();
    initReveal();
  });
  