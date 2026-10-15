/* Barra común para simuladores y presentaciones que no usan el diseño del sitio.
   Es una píldora flotante encapsulada en Shadow DOM: no hereda ni altera los estilos de la página.
   Uso: <script src="/scripts/sim-bar.js" data-back="/herramientas/" defer></script>
   data-back = página a la que regresa (por defecto /herramientas/). */
(() => {
  'use strict';
  const me = document.currentScript;
  const back = me?.dataset.back || '/herramientas/';
  const es = (localStorage.getItem('preferredLanguage') || 'en') === 'es';
  const label = back.startsWith('/cursos') ? (es ? 'Cursos' : 'Courses') : (es ? 'Herramientas' : 'Tools');

  function mount() {
    if (document.getElementById('eu97-sim-bar')) return;
    const host = document.createElement('div');
    host.id = 'eu97-sim-bar';
    const root = host.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        :host { all: initial; }
        nav { position: fixed; left: 12px; bottom: 12px; z-index: 2147483000; display: flex; align-items: center; gap: 2px;
              padding: 4px; border-radius: 999px; background: rgba(16, 26, 38, .88); backdrop-filter: blur(8px);
              box-shadow: 0 6px 20px rgba(0,0,0,.28); font: 600 12px/1 "IBM Plex Mono", ui-monospace, Menlo, monospace; }
        a { display: inline-flex; align-items: center; gap: 6px; padding: 7px 11px; border-radius: 999px; color: #e8eef5; text-decoration: none; }
        a:hover, a:focus-visible { background: rgba(255,255,255,.12); outline: none; }
        .mark { width: 14px; height: 14px; border-radius: 4px; background: #4d86b8; position: relative; }
        .mark::after { content: ""; position: absolute; right: 2px; bottom: 2px; width: 5px; height: 5px; border-radius: 1px; background: #ff8a4c; }
        @media print { nav { display: none; } }
      </style>
      <nav aria-label="EU97">
        <a href="/" title="EU97"><span class="mark"></span>EU97</a>
        <a href="${back}">← ${label}</a>
      </nav>`;
    document.body.appendChild(host);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
