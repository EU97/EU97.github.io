/* Barra superior común. Uso: <div data-topbar data-active="home|cursos|herramientas"></div> */
(() => {
  'use strict';

  const LINKS = [
    { id: 'home', href: '/', key: 'topbar.home' },
    { id: 'cursos', href: '/cursos/', key: 'topbar.courses' },
    { id: 'herramientas', href: '/herramientas/', key: 'topbar.tools' },
  ];

  function render(mount) {
    const active = mount.dataset.active || '';
    mount.outerHTML = `
      <header class="topbar" id="topbar">
        <div class="container topbar__inner">
          <a class="brand" href="/" aria-label="EU97"><span class="brand__mark"></span><span>EU97</span></a>
          <nav class="topbar__nav" id="topbar-nav" aria-label="Principal">
            ${LINKS.map(l => `<a class="topbar__link" href="${l.href}"${l.id === active ? ' aria-current="page"' : ''} data-i18n="${l.key}"></a>`).join('')}
          </nav>
          <div class="topbar__tools">
            <span class="session-chip" data-state="out"><span class="session-chip__lock"></span><span data-i18n="topbar.guest"></span></span>
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
      en: { 'topbar.home': 'Portfolio', 'topbar.courses': 'Courses', 'topbar.tools': 'Tools', 'topbar.guest': 'Guest', 'topbar.lang': 'Change language', 'topbar.theme': 'Toggle theme', 'topbar.menu': 'Menu' },
      es: { 'topbar.home': 'Portafolio', 'topbar.courses': 'Cursos', 'topbar.tools': 'Herramientas', 'topbar.guest': 'Invitado', 'topbar.lang': 'Cambiar idioma', 'topbar.theme': 'Cambiar tema', 'topbar.menu': 'Menú' },
    });
    const mount = document.querySelector('[data-topbar]');
    if (!mount) return;
    render(mount);
    SiteI18n.apply();
    window.SiteTheme?.refresh();
    wire();
    window.dispatchEvent(new Event('topbar:ready'));
  });
})();
