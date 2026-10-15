/* Envoltura de un post del blog. El post solo necesita, en <head>:
     <title>, <meta name="description">, <meta name="post:date" content="AAAA-MM-DD">,
     <meta name="post:tags" content="a, b"> y <script src="/scripts/post.js"></script>
   y su contenido dentro de <article>. Este script añade estilos, tema, barra superior, cabecera
   (fecha, tiempo de lectura, etiquetas) y navegación entre posts (desde /blog/posts.json). */
(() => {
  'use strict';
  // Recursos comunes; se escriben durante el análisis del <head> para evitar parpadeos.
  document.write(`
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Serif:ital,wght@0,400;0,500;1,400&display=swap">
    <link rel="stylesheet" href="/styles/site.css">
    <link rel="stylesheet" href="/styles/post.css">
    <script src="/scripts/theme.js"><\/script>`);

  const meta = n => document.querySelector(`meta[name="${n}"]`)?.content?.trim() || '';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fmtDate = (iso, lang) => {
    const d = new Date(iso + 'T12:00:00');
    return isNaN(d) ? iso : d.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Se registra antes que topbar.js, así el punto de montaje de la barra existe cuando ésta se pinta.
  document.addEventListener('DOMContentLoaded', () => {
    const article = document.querySelector('article');
    if (!article) return;
    const lang = document.documentElement.lang || 'es';
    const title = document.title.replace(/\s+[—|·-]\s+EU97$/, '');
    const words = article.innerText.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.round(words / 200));
    const tags = meta('post:tags').split(',').map(s => s.trim()).filter(Boolean);
    const date = meta('post:date');
    const cover = meta('post:cover');
    const L = lang === 'en' ? { blog: 'Blog', min: 'min read', back: 'All posts', prev: 'Previous', next: 'Next' }
                            : { blog: 'Blog', min: 'min de lectura', back: 'Todos los posts', prev: 'Anterior', next: 'Siguiente' };

    const top = document.createElement('div'); top.dataset.topbar = ''; top.dataset.active = 'blog';
    const head = document.createElement('header'); head.className = 'post-head container';
    head.innerHTML = `
      <a class="eyebrow" href="/blog/">${L.blog}</a>
      <h1>${esc(title)}</h1>
      ${meta('description') ? `<p class="post-head__lede">${esc(meta('description'))}</p>` : ''}
      <p class="post-head__meta"><time datetime="${esc(date)}">${esc(fmtDate(date, lang))}</time><span>${minutes} ${L.min}</span>
        ${tags.map(t => `<a class="tag" href="/blog/#${encodeURIComponent(t)}">${esc(t)}</a>`).join('')}</p>
      ${cover ? `<img class="post-head__cover" src="${esc(cover)}" alt="">` : ''}`;
    const progress = document.createElement('div'); progress.className = 'post-progress'; progress.setAttribute('aria-hidden', 'true');
    article.classList.add('post-body', 'container');
    const foot = document.createElement('footer'); foot.className = 'post-foot container';
    foot.innerHTML = `<nav class="post-nav" id="post-nav"></nav><p><a href="/blog/">← ${L.back}</a></p>`;
    document.body.prepend(top, progress, head);
    article.after(foot);
    const site = document.createElement('footer'); site.className = 'footer';
    site.innerHTML = '<div class="container"><p>© 2023–2026 Edgar Ulises Rojo Rodriguez · <a href="/">EU97</a></p></div>';
    foot.after(site);

    // Barra de progreso de lectura.
    const onScroll = () => {
      const r = article.getBoundingClientRect(), h = r.height - innerHeight * .6;
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, -r.top / Math.max(1, h)))})`;
    };
    addEventListener('scroll', onScroll, { passive: true }); onScroll();

    // Anterior / siguiente según el índice.
    fetch('/blog/posts.json').then(r => r.json()).then(({ posts }) => {
      const i = posts.findIndex(p => location.pathname.endsWith(p.url.replace(/^.*\//, '')) || p.url === location.pathname);
      if (i < 0) return;
      const newer = posts[i - 1], older = posts[i + 1];
      document.getElementById('post-nav').innerHTML =
        (older ? `<a class="post-nav__a" href="${esc(older.url)}"><span>← ${L.prev}</span>${esc(older.title)}</a>` : '<span></span>') +
        (newer ? `<a class="post-nav__a post-nav__a--next" href="${esc(newer.url)}"><span>${L.next} →</span>${esc(newer.title)}</a>` : '');
    }).catch(() => {});
  });

  document.write('<script src="/scripts/i18n.js"><\/script><script src="/scripts/topbar.js"><\/script>');
})();
