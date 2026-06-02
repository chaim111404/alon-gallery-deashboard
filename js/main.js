/* ============================================
   ALON GALLERY — SHARED JS v2
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
  
  /* ── TRANSLATIONS (מורחב) ── */
  const T = {
    he: {
      'nav.home':'בית','nav.gallery':'גלריה','nav.about':'אודות','nav.blog':'בלוג','nav.contact':'צור קשר',
      'hero.eyebrow':'ART & PHOTOGRAPHY',
      'hero.title1':'תמונות שמספרות',
      'hero.title2':'סיפור',
      'hero.sub':'צילום מקצועי לצימרים, בתים ונדל״ן בצפון הארץ. כי הרושם הראשון נעשה בתמונה אחת.',
      'hero.cta1':'תיק עבודות','hero.cta2':'לפרטים ותיאום',
      'stats.projects':'פרויקטים מוצלחים','stats.years':'שנות ניסיון','stats.happy':'לקוחות מרוצים','stats.hours':'זמן עיבוד',
      'services.label':'שירותים','services.title':'מה אני','services.title.em':'מצלם',
      'services.sub':'כל נכס הוא עולם בפני עצמו. אני מגיע, מבין את הסיפור שלו, ומתעד אותו בצורה הטובה ביותר.',
      'services.zimmer':'צילום צימרים','services.realestate':'צילום נדל״ן','services.interior':'צילום אינטריאור',
      'services.zimmer.desc':'תמונות שמעוררות תשוקה להגיע. צימרים, בקתות ולינות בוטיק — אני יודע איך להפוך חלל אינטימי לחוויה ויזואלית שמביאה הזמנות.',
      'services.realestate.desc':'בתים פרטיים, דירות ומבנים מסחריים. תמונות מקצועיות שמקצרות את זמן המכירה ומעלות את המחיר.',
      'services.interior.desc':'עיצוב פנים, מלונות ואירוח. מאור נכון, קדרה מדויקת ופרטים שמספרים את הסיפור של החלל.',
      'portfolio.label':'תיק עבודות','portfolio.title':'עבודות','portfolio.title.em':'נבחרות',
      'portfolio.sub':'מבחר מתוך מאות פרויקטים מרחבי הצפון',
      'portfolio.cta':'לתיק העבודות המלא',
      'reviews.label':'ביקורות','reviews.title':'מה אומרים','reviews.title.em':'הלקוחות',
      'reviews.empty':'אין עדיין ביקורות',
      'reviews.cta':'השאר ביקורת',
      'cta.label':'בואו נעבוד יחד',
      'cta.title':'מוכן לתמונות שישנו את','cta.title.em':'העסק שלך?',
      'cta.sub':'השאר פרטים ואחזור אליך תוך 24 שעות עם הצעת מחיר מותאמת.',
      'cta.btn1':'לפרטים ותיאום','cta.btn2':'054-767-4646',
      'footer.rights':'© 2025 Alon Gallery. כל הזכויות שמורות.',
      'footer.terms':'תנאי שימוש','footer.privacy':'פרטיות',
      'popup.title':'רגע לפני שאתה עוזב','popup.sub':'השאר פרטים ואצור קשר תוך 24 שעות.',
      'popup.name':'שם מלא','popup.phone':'טלפון','popup.msg':'הודעה קצרה (אופציונלי)',
      'popup.send':'שלח פרטים','popup.close':'לא תודה',
      'contact.title':'צור','contact.title.em':'קשר',
      'contact.sub':'פרויקט חדש? שאלה? ממלאים את הטופס ואחזור אליכם תוך 24 שעות עם הצעת מחיר מפורטת.',
      'contact.name':'שם מלא *','contact.phone':'טלפון *','contact.email':'אימייל',
      'contact.service':'סוג שירות',
      'contact.chip1':'צילום צימרים','contact.chip2':'צילום נדל״ן','contact.chip3':'אינטריאור','contact.chip4':'אחר',
      'contact.msg':'הודעה *','contact.send':'שלח הודעה','contact.note':'אחזור אליך תוך 24 שעות',
      'review.modal.title':'השאר ביקורת','review.send':'שלח ביקורת','review.pending':'הביקורת תפורסם לאחר אישור',
      'review.name.ph':'השם שלך *','review.text.ph':'ספר על החוויה שלך *',
      'offline':'אין חיבור לאינטרנט — חלק מהתכנים עלולים שלא לטעון',
    },
    en: {
      'nav.home':'Home','nav.gallery':'Gallery','nav.about':'About','nav.blog':'Blog','nav.contact':'Contact',
      'hero.eyebrow':'ART & PHOTOGRAPHY',
      'hero.title1':'Images that tell a',
      'hero.title2':'Story',
      'hero.sub':'Professional photography for cabins, homes and real estate in northern Israel. Because the first impression is made in a single photo.',
      'hero.cta1':'Portfolio','hero.cta2':'Get in Touch',
      'stats.projects':'Successful Projects','stats.years':'Years Experience','stats.happy':'Happy Clients','stats.hours':'Processing Time',
      'services.label':'Services','services.title':'What I','services.title.em':'Photograph',
      'services.sub':'Every property has its own world. I arrive, understand its story, and document it in the best possible way.',
      'services.zimmer':'Cabin Photography','services.realestate':'Real Estate Photography','services.interior':'Interior Photography',
      'services.zimmer.desc':'Photos that inspire visits. Cabins, cottages and boutique stays — I know how to turn an intimate space into a visual experience that drives bookings.',
      'services.realestate.desc':'Private homes, apartments and commercial buildings. Professional photos that shorten selling time and raise the price.',
      'services.interior.desc':'Interior design, hotels and hospitality. The right light, precise framing and details that tell the story of the space.',
      'portfolio.label':'Portfolio','portfolio.title':'Selected','portfolio.title.em':'Works',
      'portfolio.sub':'A selection from hundreds of projects across the north',
      'portfolio.cta':'Full Portfolio',
      'reviews.label':'Reviews','reviews.title':'What','reviews.title.em':'Clients Say',
      'reviews.empty':'No reviews yet',
      'reviews.cta':'Leave a Review',
      'cta.label':'Let\'s Work Together',
      'cta.title':'Ready for photos that change','cta.title.em':'your business?',
      'cta.sub':'Leave your details and I\'ll get back to you within 24 hours with a tailored quote.',
      'cta.btn1':'Get in Touch','cta.btn2':'054-767-4646',
      'footer.rights':'© 2025 Alon Gallery. All rights reserved.',
      'footer.terms':'Terms of Use','footer.privacy':'Privacy',
      'popup.title':'Before you go…','popup.sub':'Leave your details and I\'ll get back to you within 24 hours.',
      'popup.name':'Full Name','popup.phone':'Phone','popup.msg':'Short message (optional)',
      'popup.send':'Send Details','popup.close':'No thanks',
      'contact.title':'Get in','contact.title.em':'Touch',
      'contact.sub':'New project? Question? Fill the form and I\'ll get back to you within 24 hours with a detailed quote.',
      'contact.name':'Full Name *','contact.phone':'Phone *','contact.email':'Email',
      'contact.service':'Service Type',
      'contact.chip1':'Cabin Photography','contact.chip2':'Real Estate','contact.chip3':'Interior','contact.chip4':'Other',
      'contact.msg':'Message *','contact.send':'Send Message','contact.note':'I\'ll get back to you within 24 hours',
      'review.modal.title':'Leave a Review','review.send':'Submit Review','review.pending':'Review will be published after approval',
      'review.name.ph':'Your name *','review.text.ph':'Tell us about your experience *',
      'offline':'No internet connection — some content may not load',
    }
  };
  
  /* ── THEME ── */
  const Theme = {
    init() {
      const saved = localStorage.getItem('ag-theme') || 'dark';
      document.documentElement.setAttribute('data-theme', saved);
    },
    toggle() {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('ag-theme', next);
    }
  };
  
  /* ── LANG ── */
  const Lang = {
    current: 'he',
    init() { this.apply(localStorage.getItem('ag-lang') || 'he'); },
    toggle() { this.apply(this.current === 'he' ? 'en' : 'he'); },
    apply(lang) {
      this.current = lang;
      localStorage.setItem('ag-lang', lang);
      document.body.classList.toggle('en', lang === 'en');
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
      document.querySelectorAll('.lang-btn').forEach(b => b.textContent = lang === 'he' ? 'EN' : 'עב');
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const v = T[lang]?.[el.dataset.i18n];
        if (v !== undefined) el.textContent = v;
      });
      document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const v = T[lang]?.[el.dataset.i18n + '.ph'] || T[lang]?.[el.dataset.i18n];
        if (v) el.placeholder = v;
      });
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const v = T[lang]?.[el.dataset.i18nHtml];
        if (v) el.innerHTML = v;
      });
    },
    t(key) { return T[this.current]?.[key] || T['he']?.[key] || key; }
  };
  
  /* ── NAV ── */
  function initNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
      if ((a.getAttribute('href') || '') === currentPage || (currentPage === '' && a.getAttribute('href') === 'index.html'))
        a.classList.add('active');
    });
  
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileClose = document.querySelector('.mobile-menu-close');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
      mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
      mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
    }
  
    document.querySelectorAll('.theme-toggle').forEach(b => b.addEventListener('click', () => Theme.toggle()));
    document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => Lang.toggle()));
  }
  
  /* ── SCROLL REVEAL ── */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
  }
  
  /* ── COUNTER ANIMATION (עולה כמו שעון) ── */
  function animateCounter(el, target, suffix = '', duration = 2000) {
    const start = performance.now();
    const isFloat = target % 1 !== 0;
    function update(now) {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      const value = isFloat ? (eased * target).toFixed(1) : Math.round(eased * target);
      el.textContent = value + suffix;
      if (elapsed < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }
  
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target;
          const target = parseFloat(el.dataset.counter);
          const suffix = el.dataset.suffix || '';
          animateCounter(el, target, suffix);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => io.observe(el));
  }
  
  /* ── HERO SLIDESHOW ── */
  function initHeroSlideshow(images) {
    const bg = document.getElementById('heroBg');
    if (!bg || !images?.length) return;
    let idx = 0;
    const preloaded = images.map(src => { const i = new Image(); i.src = src; return i; });
    bg.style.backgroundImage = `url('${images[0]}')`;
    setTimeout(() => bg.classList.add('loaded'), 100);
    setInterval(() => {
      idx = (idx + 1) % images.length;
      bg.style.transition = 'opacity 1.2s ease';
      bg.style.opacity = '0';
      setTimeout(() => {
        bg.style.backgroundImage = `url('${images[idx]}')`;
        bg.style.opacity = '1';
      }, 1200);
    }, 5000);
  }
  
  /* ── TOAST ── */
  function showToast(msg, type = 'success') {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    const icon = type === 'success'
      ? `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" width="18" height="18"><polyline points="20 6 9 17 4 12"/></svg>`
      : `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    t.innerHTML = icon + `<span>${msg}</span>`;
    t.className = `toast ${type}`;
    requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
    setTimeout(() => t.classList.remove('show'), 4500);
  }
  
  /* ── SPINNER SVG ── */
  function spinnerSVG(color = 'var(--accent-gold)', size = 20) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" class="svg-spinner"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" /></svg>`;
  }
  
  /* ── OFFLINE BANNER ── */
  function initOffline() {
    const banner = document.createElement('div');
    banner.className = 'offline-banner';
    banner.innerHTML = `
      <div class="offline-dot"></div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>
      <span data-i18n="offline">אין חיבור לאינטרנט — חלק מהתכנים עלולים שלא לטעון</span>
    `;
    document.body.prepend(banner);
    let shown = false;
    const check = () => {
      if (!navigator.onLine && !shown) {
        shown = true; banner.classList.add('show');
      } else if (navigator.onLine && shown) {
        shown = false; banner.classList.remove('show');
      }
    };
    window.addEventListener('online', check);
    window.addEventListener('offline', check);
    check();
  }
  
  /* ── EXIT INTENT POPUP (75% scroll) ── */
  function initExitPopup() {
    if (sessionStorage.getItem('ag-popup-shown')) return;
    let triggered = false;
    window.addEventListener('scroll', () => {
      if (triggered) return;
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (pct >= 0.75) {
        triggered = true;
        sessionStorage.setItem('ag-popup-shown', '1');
        showExitPopup();
      }
    }, { passive: true });
  }
  
  function showExitPopup() {
    const overlay = document.getElementById('exitPopup');
    if (overlay) { overlay.classList.add('open'); return; }
    const el = document.createElement('div');
    el.id = 'exitPopup';
    el.className = 'popup-overlay';
    el.innerHTML = `
      <div class="popup-box">
        <button class="popup-close" onclick="document.getElementById('exitPopup').classList.remove('open')">✕</button>
        <div style="text-align:center;margin-bottom:1.5rem">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5" width="48" height="48" style="margin:0 auto 1rem;display:block;animation:floatUp 3s ease infinite">
            <path d="M23 7l-7 5-4-6-4 6-7-5v13a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7z"/>
            <polyline points="16 2 12 6 8 2"/>
          </svg>
          <h3 style="font-family:var(--font-display);font-size:1.7rem;font-weight:300;margin-bottom:0.5rem" data-i18n="popup.title">רגע לפני שאתה עוזב</h3>
          <p style="font-size:0.86rem;color:var(--text-muted)" data-i18n="popup.sub">השאר פרטים ואצור קשר תוך 24 שעות.</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.9rem">
          <input type="text" id="popupName" class="form-input" placeholder="שם מלא" data-i18n-ph="popup.name" maxlength="80">
          <input type="tel"  id="popupPhone" class="form-input" placeholder="טלפון" data-i18n-ph="popup.phone" maxlength="20">
          <textarea id="popupMsg" class="form-textarea" placeholder="הודעה קצרה (אופציונלי)" data-i18n-ph="popup.msg" style="min-height:80px" maxlength="400"></textarea>
          <button class="btn btn-primary" style="width:100%;justify-content:center" id="popupSendBtn" onclick="submitPopup()">
            שלח פרטים
          </button>
          <button onclick="document.getElementById('exitPopup').classList.remove('open')"
            style="font-size:0.78rem;color:var(--text-dim);text-align:center;padding:0.4rem;cursor:pointer;background:none;border:none;font-family:var(--font-body)" data-i18n="popup.close">
            לא תודה
          </button>
        </div>
      </div>`;
    document.body.appendChild(el);
    el.classList.add('open');
    el.addEventListener('click', e => { if (e.target === el) el.classList.remove('open'); });
    Lang.apply(Lang.current);
  }
  
  window.submitPopup = async function() {
    const name  = document.getElementById('popupName')?.value.trim();
    const phone = document.getElementById('popupPhone')?.value.trim();
    const msg   = document.getElementById('popupMsg')?.value.trim();
    if (!name || !phone) { showToast(Lang.t('contact.name') + ' / ' + Lang.t('contact.phone'), 'error'); return; }
    const btn = document.getElementById('popupSendBtn');
    btn.innerHTML = spinnerSVG('#0a0a0a') + ' שולח...';
    btn.disabled = true;
    try {
      const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
      const { getDatabase, ref, push }  = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js');
      const app = getApps().length ? getApps()[0] : initializeApp(FIREBASE_CONFIG);
      await push(ref(getDatabase(app), 'contacts'), { name, phone, message: msg, source: 'popup', timestamp: Date.now(), read: false });
      document.getElementById('exitPopup').classList.remove('open');
      showToast('הפרטים נשלחו! נחזור אליך בקרוב');
    } catch(e) {
      showToast('שגיאה בשליחה', 'error');
      btn.innerHTML = Lang.t('popup.send');
      btn.disabled = false;
    }
  };
  
  /* ── INIT ── */
  document.addEventListener('DOMContentLoaded', () => {
    Theme.init();
    Lang.init();
    initNav();
    initReveal();
    initCounters();
    initOffline();
  
    // Prevent pinch zoom (נעילת זום)
    document.addEventListener('gesturestart', e => e.preventDefault(), { passive: false });
    document.addEventListener('touchmove', e => {
      if (e.touches.length > 1) e.preventDefault();
    }, { passive: false });
  });
  
  // Export for use in page scripts
  window.showToast = showToast;
  window.spinnerSVG = spinnerSVG;
  window.initHeroSlideshow = initHeroSlideshow;
  window.initExitPopup = initExitPopup;
  window.showExitPopup = showExitPopup;
  window.Lang = Lang;
  window.T = T;
  