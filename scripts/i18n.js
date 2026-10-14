/* i18n ligero para las páginas nuevas (ES/EN). Reutiliza la misma clave y evento que translations.js. */
(() => {
  'use strict';
  const KEY = 'preferredLanguage';
  const dict = { en: {}, es: {} };

  function lang() {
    const v = localStorage.getItem(KEY);
    return v === 'es' ? 'es' : 'en';
  }

  function t(key, l = lang()) {
    return dict[l][key] ?? dict.en[key] ?? key;
  }

  function apply(root = document) {
    const l = lang();
    document.documentElement.lang = l;
    root.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n, l); });
    root.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria, l)); });
    root.querySelectorAll('[data-i18n-title]').forEach(el => { el.setAttribute('title', t(el.dataset.i18nTitle, l)); });
  }

  function set(l) {
    localStorage.setItem(KEY, l === 'es' ? 'es' : 'en');
    apply();
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang() } }));
  }

  function add(entries) {
    for (const l of Object.keys(entries)) Object.assign(dict[l] ??= {}, entries[l]);
    apply();
  }

  window.SiteI18n = { lang, t, set, add, apply };
  document.addEventListener('DOMContentLoaded', () => apply());
})();
