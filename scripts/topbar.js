/* Barra superior común. Uso: <div data-topbar data-active="home|cursos|herramientas|blog"></div>
   Variante de la portada para industria: <div data-topbar data-variant="industry"></div> (secciones + enlace a docencia, sin sesión). */
(() => {
  'use strict';

  const LINKS = [
    { id: 'home', href: '/', key: 'topbar.home' },
    { id: 'cursos', href: '/cursos/', key: 'topbar.courses' },
    { id: 'herramientas', href: '/herramientas/', key: 'topbar.tools' },
    { id: 'blog', href: '/blog/', key: 'topbar.blog' },
  ];
  const INDUSTRY = [
    { id: 'servicios', href: '#servicios', key: 'topbar.services' },
    { id: 'casos', href: '#casos', key: 'topbar.cases' },
    { id: 'trayectoria', href: '#trayectoria', key: 'topbar.record' },
    { id: 'contacto', href: '#contacto', key: 'topbar.contact' },
  ];

  function render(mount) {
    const active = mount.dataset.active || '';
    const industry = mount.dataset.variant === 'industry';
    const links = industry ? INDUSTRY : LINKS;
    mount.outerHTML = `
      <header class="topbar" id="topbar">
        <div class="container topbar__inner">
          <a class="brand" href="/" aria-label="EU97"><span class="brand__mark"></span><span>EU97</span></a>
          <nav class="topbar__nav" id="topbar-nav" aria-label="Principal">
            ${links.map(l => `<a class="topbar__link" href="${l.href}"${l.id === active ? ' aria-current="page"' : ''} data-i18n="${l.key}"></a>`).join('')}
          </nav>
          <div class="topbar__tools">
            ${industry
              ? '<a class="topbar__aside" href="/cursos/" data-i18n="topbar.courses"></a><a class="topbar__aside" href="/herramientas/" data-i18n="topbar.tools"></a><a class="topbar__aside" href="/blog/" data-i18n="topbar.blog"></a>'
              : '<button class="session-chip" type="button" data-state="out"><span class="session-chip__lock"></span><span class="session-chip__label" data-i18n="topbar.guest"></span></button>'}
            <button class="icon-btn" id="lang-btn" type="button" data-i18n-aria="topbar.lang"></button>
            <button class="icon-btn" type="button" data-theme-toggle data-theme-icon-only aria-pressed="false" data-i18n-aria="topbar.theme"><span class="theme-icon"></span></button>
            <button class="icon-btn topbar__burger" id="burger" type="button" aria-expanded="false" aria-controls="topbar-nav" data-i18n-aria="topbar.menu">&#9776;</button>
          </div>
        </div>
      </header>`;
  }

  function wire() {
    const langBtn = document.getElementById('lang-btn');
    const burger = document.getElementById('burger');
    const nav = document.getElementById('topbar-nav');
    const paintLang = () => { if (langBtn) langBtn.textContent = SiteI18n.lang() === 'es' ? 'EN' : 'ES'; };
    langBtn?.addEventListener('click', () => SiteI18n.set(SiteI18n.lang() === 'es' ? 'en' : 'es'));
    document.addEventListener('languageChanged', paintLang);
    paintLang();
    burger?.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    SiteI18n.add({
      en: { 'topbar.home': 'Portfolio', 'topbar.courses': 'Courses', 'topbar.tools': 'Tools', 'topbar.guest': 'Guest', 'topbar.lang': 'Change language', 'topbar.theme': 'Toggle theme', 'topbar.menu': 'Menu', 'topbar.services': 'Services', 'topbar.cases': 'Case studies', 'topbar.record': 'Track record', 'topbar.contact': 'Contact', 'topbar.teaching': 'Teaching', 'topbar.blog': 'Blog' },
      es: { 'topbar.home': 'Portafolio', 'topbar.courses': 'Cursos', 'topbar.tools': 'Herramientas', 'topbar.guest': 'Invitado', 'topbar.lang': 'Cambiar idioma', 'topbar.theme': 'Cambiar tema', 'topbar.menu': 'Menú', 'topbar.services': 'Servicios', 'topbar.cases': 'Casos', 'topbar.record': 'Trayectoria', 'topbar.contact': 'Contacto', 'topbar.teaching': 'Docencia', 'topbar.blog': 'Blog' },
    });
    const mount = document.querySelector('[data-topbar]');
    if (!mount) return;
    render(mount);
    SiteI18n.apply();
    window.SiteTheme?.refresh();
    wire();
    // La píldora de sesión necesita scripts/auth.js; se carga solo si la página no lo trae.
    if (document.querySelector('.session-chip') && !window.SiteAuth && !document.querySelector('script[src="/scripts/auth.js"]')) {
      const s = document.createElement('script'); s.src = '/scripts/auth.js'; document.head.appendChild(s);
    }
    window.dispatchEvent(new Event('topbar:ready'));
  });
})();
