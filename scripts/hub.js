/* Hubs de cursos y herramientas: leen el catálogo JSON (data-catalog en <body>) y lo pintan.
   <body data-hub="cursos|herramientas" data-catalog="catalog.json">  →  #hub, #hub-filters, #hub-search
   Página de un curso: <body data-hub="curso" data-course="<id>" data-catalog="/cursos/catalog.json">
   (pinta #course-head y #hub; el HTML estático dentro de #hub sirve de respaldo sin JS). */
(() => {
  'use strict';
  const body = document.body;
  const kind = body.dataset.hub;
  const L = () => SiteI18n.lang();
  const tr = o => (o == null ? '' : typeof o === 'string' ? o : o[L()] ?? o.en ?? '');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = n => String(n).padStart(2, '0');

  SiteI18n.add({
    es: {
      'hub.all': 'Todas', 'hub.search': 'Buscar curso o recurso', 'hub.empty': 'No hay resultados con ese filtro.',
      'hub.draft': 'Borrador', 'hub.soon': 'Próximamente', 'hub.login': 'Alumnos', 'hub.login.t': 'Requiere cuenta de alumno', 'hub.open.ok': 'Desbloqueado',
      'hub.open': 'Abrir curso', 'hub.repo': 'Repositorio', 'hub.view': 'Ver',
      'type.presentation': 'Presentación', 'type.assignment': 'Tarea', 'type.interactive': 'Interactivo', 'type.procedure': 'Procedimiento',
      'type.reference': 'Referencia', 'type.tool': 'Herramienta', 'type.lesson': 'Tema', 'type.guide': 'Guía'
    },
    en: {
      'hub.all': 'All', 'hub.search': 'Search course or resource', 'hub.empty': 'No results for that filter.',
      'hub.draft': 'Draft', 'hub.soon': 'Coming soon', 'hub.login': 'Students', 'hub.login.t': 'Requires a student account', 'hub.open.ok': 'Unlocked',
      'hub.open': 'Open course', 'hub.repo': 'Repository', 'hub.view': 'View',
      'type.presentation': 'Presentation', 'type.assignment': 'Assignment', 'type.interactive': 'Interactive', 'type.procedure': 'Procedure',
      'type.reference': 'Reference', 'type.tool': 'Tool', 'type.lesson': 'Lesson', 'type.guide': 'Guide'
    }
  });

  // Iconos de línea (24×24) para las herramientas.
  const ICON = {
    gauge: '<circle cx="12" cy="13" r="8"/><path d="M12 13l4-4M6.5 17.5h11"/>',
    screen: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M6 12l3-3 3 2 4-4"/>',
    dial: '<circle cx="8" cy="12" r="5"/><circle cx="17" cy="9" r="3.5"/><path d="M8 12l2.5-2.5M17 9l1.5 1.5"/>',
    flow: '<path d="M3 8c4 0 6-3 10-3s5 3 8 3M3 13c4 0 6-3 10-3s5 3 8 3M3 18c4 0 6-3 10-3s5 3 8 3"/>',
    chart: '<path d="M4 20V4M4 20h16"/><path d="M7 15l4-5 3 3 5-7"/>',
    chip: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
    swarm: '<circle cx="6" cy="7" r="1.6"/><circle cx="12" cy="5" r="1.6"/><circle cx="17" cy="9" r="1.6"/><circle cx="8" cy="15" r="1.6"/><circle cx="15" cy="16" r="1.6"/><path d="M12 12l6 6"/>',
    bolt: '<path d="M13 2L5 14h6l-1 8 8-12h-6z"/>',
    cube: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/>'
  };
  const icon = k => `<svg class="hub-ico" viewBox="0 0 24 24" aria-hidden="true">${ICON[k] || ICON.spark}</svg>`;
  const lock = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
  const unlock = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 7.5-2"/></svg>';

  let data = null, area = 'all', query = '';
  const $ = id => document.getElementById(id);

  // ---------- Cursos ----------
  function itemRow(it, kid) {
    const type = `<span class="res__type">${esc(SiteI18n.t('type.' + it.type))}</span>`;
    const open = it.access === 'login' && window.SiteAuth?.has(kid);
    const acc = it.access !== 'login' ? ''
      : open ? `<span class="res__lock res__lock--open">${unlock}${esc(SiteI18n.t('hub.open.ok'))}</span>`
      : `<span class="res__lock" title="${esc(SiteI18n.t('hub.login.t'))}">${lock}${esc(SiteI18n.t('hub.login'))}</span>`;
    const t = `<span class="res__t">${it.code ? `<small class="res__code">${esc(tr(it.code))}</small>` : ''}${esc(tr(it.title))}</span>`;
    if (!it.url) return `<li class="res res--soon">${type}${t}<span class="res__soon">${esc(SiteI18n.t('hub.soon'))}</span></li>`;
    return `<li class="res"><a href="${esc(it.url)}">${type}${t}${acc}<span class="res__go" aria-hidden="true">→</span></a></li>`;
  }
  const matches = c => {
    if (!query) return true;
    const hay = [tr(c.title), c.code || '', tr(c.description), ...c.items.flatMap(i => [tr(i.title), i.code ? tr(i.code) : ''])].join(' ').toLowerCase();
    return hay.includes(query);
  };
  function renderCursos() {
    $('hub-filters').innerHTML = [['all', SiteI18n.t('hub.all')], ...data.areas.map(a => [a.id, tr(a.title)])]
      .map(([id, t]) => `<button class="chip" type="button" data-area="${esc(id)}" aria-pressed="${id === area}">${esc(t)}</button>`).join('');
    let shown = 0;
    const html = data.areas.map((a, i) => {
      if (area !== 'all' && a.id !== area) return '';
      const courses = a.courses.filter(matches);
      if (!courses.length) return '';
      shown += courses.length;
      return `<section class="area-block" id="${esc(a.id)}">
        <header class="area-block__head">
          <span class="area-block__n">${pad(i + 1)}</span>
          <h2>${esc(tr(a.title))}</h2>
          <p>${esc(tr(a.summary))}</p>
        </header>
        <div class="courses">${courses.map(c => `
          <article class="course">
            <div class="course__id">
              <h3>${c.url ? `<a href="${esc(c.url)}">${esc(tr(c.title))}</a>` : esc(tr(c.title))}</h3>${c.code ? ` <span class="course__code">${esc(c.code)}</span>` : ''}
              ${c.status === 'draft' ? `<span class="course__draft">${esc(SiteI18n.t('hub.draft'))}</span>` : ''}
              <p>${esc(tr(c.description))}</p>
              ${c.url ? `<a class="course__open" href="${esc(c.url)}">${esc(SiteI18n.t('hub.open'))} →</a>` : ''}
            </div>
            <ul class="course__res">${c.items.map(it => itemRow(it, c.id)).join('')}</ul>
          </article>`).join('')}
        </div>
      </section>`;
    }).join('');
    $('hub').innerHTML = shown ? html : `<p class="hub-empty">${esc(SiteI18n.t('hub.empty'))}</p>`;
  }

  // ---------- Herramientas ----------
  function renderHerramientas() {
    $('hub').innerHTML = data.groups.map((g, i) => `
      <section class="area-block" id="${esc(g.id)}">
        <header class="area-block__head">
          <span class="area-block__n">${pad(i + 1)}</span>
          <h2>${esc(tr(g.title))}</h2>
          <p>${esc(tr(g.summary))}</p>
        </header>
        <div class="tools">${g.items.map(t => `
          <article class="tool">
            <a class="tool__main" href="${esc(t.url)}">
              <span class="tool__ico">${icon(t.icon)}</span>
              <h3>${esc(tr(t.title))}</h3>
              <p>${esc(tr(t.description))}</p>
              <span class="tool__tags">${(t.tags || []).map(x => `<span class="tag">${esc(x)}</span>`).join('')}</span>
            </a>
            ${t.repo ? `<a class="tool__repo" href="${esc(t.repo)}" target="_blank" rel="noopener">${esc(SiteI18n.t('hub.repo'))} ↗</a>` : ''}
          </article>`).join('')}
        </div>
      </section>`).join('');
  }

  // ---------- Un curso ----------
  function renderCurso() {
    const id = body.dataset.course;
    let area, course;
    data.areas.forEach(a => a.courses.forEach(c => { if (c.id === id) { area = a; course = c; } }));
    if (!course) return;
    document.title = `${tr(course.title)} — EU97`;
    $('course-head').innerHTML = `
      <a class="eyebrow" href="/cursos/#${esc(area.id)}">${esc(tr(area.title))}</a>
      <h1>${esc(tr(course.title))}</h1>
      <p class="lede">${esc(tr(course.description))}</p>`;
    $('hub').innerHTML = `<ul class="course__res course__res--page">${course.items.filter(i => i.url !== course.url).map(it => itemRow(it, course.id)).join('')}</ul>
      <p class="mono"><a href="/cursos/">← ${esc(SiteI18n.t('topbar.courses'))}</a></p>`;
  }

  const render = () => {
    if (!data) return;
    ({ cursos: renderCursos, herramientas: renderHerramientas, curso: renderCurso })[kind]?.();
  };

  if (kind === 'cursos') {
    const fromHash = () => { const h = decodeURIComponent(location.hash.slice(1)); area = data?.areas.some(a => a.id === h) ? h : 'all'; };
    $('hub-filters')?.addEventListener('click', e => {
      const b = e.target.closest('[data-area]'); if (!b) return;
      area = b.dataset.area;
      history.replaceState(null, '', area === 'all' ? location.pathname : `#${area}`);
      render();
    });
    $('hub-search')?.addEventListener('input', e => { query = e.target.value.trim().toLowerCase(); render(); });
    window.addEventListener('hashchange', () => { fromHash(); render(); });
    fetch(body.dataset.catalog).then(r => r.json()).then(j => { data = j; fromHash(); render(); body.dataset.state = 'ready'; })
      .catch(() => { $('hub').innerHTML = '<p class="hub-empty">No se pudo cargar el catálogo.</p>'; body.dataset.state = 'error'; });
  } else if (kind === 'curso') {
    fetch(body.dataset.catalog).then(r => r.json()).then(j => { data = j; render(); body.dataset.state = 'ready'; })
      .catch(() => { body.dataset.state = 'error'; });
  } else {
    fetch(body.dataset.catalog).then(r => r.json()).then(j => {
      data = j; render(); body.dataset.state = 'ready';
      if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
    }).catch(() => { $('hub').innerHTML = '<p class="hub-empty">No se pudo cargar el catálogo.</p>'; body.dataset.state = 'error'; });
  }
  document.addEventListener('languageChanged', render);
  document.addEventListener('auth:change', render);
})();
