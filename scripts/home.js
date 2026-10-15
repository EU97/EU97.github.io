/* Portada para industria: textos ES/EN, listas generadas, animaciones SVG y lectura de la celda 3D. */
(() => {
  'use strict';
  // Anclajes de la portada anterior (enlaces ya compartidos): llevarlos a su nuevo lugar.
  const LEGACY = { precision: '/cursos/', projects: '#casos', skills: '#servicios', about: '#trayectoria', timeline: '#trayectoria', contact: '#contacto', home: '#inicio' };
  const fromLegacy = () => {
    const to = LEGACY[location.hash.slice(1)];
    if (to?.startsWith('/')) { location.replace(to); return true; }
    if (to) { history.replaceState(null, '', to); document.querySelector(to)?.scrollIntoView(); }
    return false;
  };
  window.addEventListener('hashchange', fromLegacy);
  if (fromLegacy()) return;
  const L = () => SiteI18n.lang();
  const tr = o => (typeof o === 'string' ? o : o[L()] ?? o.en);

  SiteI18n.add({
    es: {
      'h.eyebrow': 'Ing. Mecatrónico · M.Sc. Aeronáutica · Candidato a Ph.D.',
      'h.title': 'Convierto problemas de planta en sistemas <em>medidos</em>, <em>controlados</em> y <em>validados</em>.',
      'ar.1': 'Metrología industrial', 'ar.2': 'Control y automatización', 'ar.3': 'Sistemas no tripulados', 'ar.4': 'Validación aerodinámica',
      'ph.tag': 'Foto pendiente',
      'st.1': 'Años en la industria', 'st.2': 'Socios industriales', 'st.3': 'Cursos rediseñados', 'st.4': 'Idiomas · ES EN FR',
      'lab.k': 'En acción', 'lab.title': 'Metrología automatizada, en vivo',
      'lab.lede': 'Una celda de medición simulada: el brazo palpa la pieza, compara cada punto con la tolerancia y reporta la desviación. Mueve el cursor o haz clic en la pieza.',
      'lab.ok': 'Dentro de ±0.02 mm', 'lab.out': 'Fuera de tolerancia',
      'h.cta': 'Agendar una conversación técnica', 'h.cta2': 'Ver casos',
      'h.clients': 'Proyectos con',
      'cell.name': 'Celda de medición', 'cell.hint': 'Mueve el cursor · clic en la pieza para medir',
      'cell.hint.on': 'Clic para medir este punto', 'cell.hint.touch': 'Toca la pieza para medir un punto', 'cell.sim': 'Simulación interactiva',
      'p.k': 'El problema', 'p.title': 'Lo que escucho en planta',
      'p.lede': 'Casi todos los proyectos empiezan con una frase así. Detrás hay una causa técnica que se puede medir.',
      's.k': 'Método', 's.title': 'Medir, diseñar, validar. En ese orden.',
      's.lede': 'Cada proyecto empieza con datos, no con suposiciones, y termina con un proceso que tu equipo puede sostener.',
      's.deliv': 'Entregable',
      'c.k': 'Casos', 'c.one': 'Caso', 'c.title': 'Problemas reales, resueltos con método',
      'c.lede': 'Varios proyectos están bajo acuerdo de confidencialidad: se describe el reto y la intervención, no los datos del cliente.',
      'c.challenge': 'Reto', 'c.action': 'Intervención', 'c.result': 'Resultado', 'c.pending': 'Métrica por confirmar', 'c.nda': 'Bajo NDA',
      'r.k': 'Trayectoria', 'r.title': 'Industria, investigación y aula, al mismo tiempo',
      'r.exp': 'Experiencia', 'r.edu': 'Formación',
      'a.k': 'Además',
      'a.t1': 'Docencia y cursos', 'a.d1': 'Profesor Asociado en FIME-UANL: metrología, sistemas eléctricos y aerodinámica.',
      'a.t2': 'Herramientas y simuladores', 'a.d2': 'Calculadoras e instrumentos de vuelo interactivos para formación técnica.',
      'a.t3': 'Código abierto', 'a.d3': 'Firmware de adquisición, análisis de rugosidad y optimización en GitHub.',
      'a.t4': 'Blog', 'a.d4': 'Notas técnicas y divulgación con ejemplos interactivos.',
      'k.title': '¿Tienes un problema de medición, control o validación?',
      'k.lede': 'Cuéntame qué pasa en tu proceso. En la primera conversación definimos si se puede medir, qué datos faltan y cómo se validaría la solución.',
      'f.copy': '© 2023–2026 Edgar Ulises Rojo Rodriguez'
    },
    en: {
      'h.eyebrow': 'Mechatronics Eng. · M.Sc. Aeronautics · Ph.D. candidate',
      'h.title': 'I turn shop‑floor problems into <em>measured</em>, <em>controlled</em>, <em>validated</em> systems.',
      'ar.1': 'Industrial metrology', 'ar.2': 'Control & automation', 'ar.3': 'Unmanned systems', 'ar.4': 'Aerodynamic validation',
      'ph.tag': 'Photo pending',
      'st.1': 'Years in industry', 'st.2': 'Industry partners', 'st.3': 'Courses redesigned', 'st.4': 'Languages · ES EN FR',
      'lab.k': 'In action', 'lab.title': 'Automated metrology, live',
      'lab.lede': 'A simulated measurement cell: the arm probes the part, checks each point against the tolerance and reports the deviation. Move the cursor or click the part.',
      'lab.ok': 'Within ±0.02 mm', 'lab.out': 'Out of tolerance',
      'h.cta': 'Book a technical conversation', 'h.cta2': 'See case studies',
      'h.clients': 'Projects with',
      'cell.name': 'Measurement cell', 'cell.hint': 'Move the cursor · click the part to measure',
      'cell.hint.on': 'Click to measure this point', 'cell.hint.touch': 'Tap the part to measure a point', 'cell.sim': 'Interactive simulation',
      'p.k': 'The problem', 'p.title': 'What I hear on the shop floor',
      'p.lede': 'Almost every project starts with a sentence like these. Behind each one is a technical cause that can be measured.',
      's.k': 'Method', 's.title': 'Measure, design, validate. In that order.',
      's.lede': 'Every project starts with data, not assumptions, and ends with a process your team can sustain.',
      's.deliv': 'Deliverable',
      'c.k': 'Case studies', 'c.one': 'Case', 'c.title': 'Real problems, solved with method',
      'c.lede': 'Several projects are under NDA: the challenge and the intervention are described, not the client’s data.',
      'c.challenge': 'Challenge', 'c.action': 'Intervention', 'c.result': 'Result', 'c.pending': 'Metric to be confirmed', 'c.nda': 'Under NDA',
      'r.k': 'Track record', 'r.title': 'Industry, research and teaching, at the same time',
      'r.exp': 'Experience', 'r.edu': 'Education',
      'a.k': 'Also',
      'a.t1': 'Teaching and courses', 'a.d1': 'Associate Professor at FIME-UANL: metrology, electrical systems and aerodynamics.',
      'a.t2': 'Tools and simulators', 'a.d2': 'Interactive calculators and flight instruments for technical training.',
      'a.t3': 'Open source', 'a.d3': 'Acquisition firmware, roughness analysis and optimization on GitHub.',
      'a.t4': 'Blog', 'a.d4': 'Technical notes and outreach with interactive examples.',
      'k.title': 'Have a measurement, control or validation problem?',
      'k.lede': 'Tell me what is happening in your process. In the first conversation we define whether it can be measured, which data is missing and how the solution would be validated.',
      'f.copy': '© 2023–2026 Edgar Ulises Rojo Rodriguez'
    }
  });

  const PAINS = [
    { q: { es: '“Las piezas pasan en el CMM, pero no ensamblan.”', en: '“The parts pass on the CMM, but they don’t assemble.”' },
      d: { es: 'Acumulación de tolerancias y datums mal elegidos', en: 'Tolerance stack-up and poorly chosen datums' }, c: 1 },
    { q: { es: '“Las no conformidades regresan cada mes y nadie sabe por qué.”', en: '“Non-conformances come back every month and nobody knows why.”' },
      d: { es: 'Falta de datos de proceso y de causa raíz', en: 'Missing process data and root cause' }, c: 2 },
    { q: { es: '“La refacción ya no existe y la línea está parada.”', en: '“The spare part no longer exists and the line is down.”' },
      d: { es: 'Ingeniería inversa y manufactura aditiva', en: 'Reverse engineering and additive manufacturing' }, c: 3 },
    { q: { es: '“Necesitamos demostrar que el prototipo funciona antes de invertir.”', en: '“We need to prove the prototype works before investing.”' },
      d: { es: 'Instrumentación, control y validación experimental', en: 'Instrumentation, control and experimental validation' }, c: 4 }
  ];

  const METHOD = [
    { k: 'scan', t: { es: 'Medir', en: 'Measure' },
      p: { es: 'Entender el problema con datos antes de proponer una solución.', en: 'Understand the problem with data before proposing a solution.' },
      i: { es: ['Escaneo 3D y CMM', 'Estudios MSA y SPC', 'Análisis de causa raíz'], en: ['3D scanning and CMM', 'MSA and SPC studies', 'Root cause analysis'] },
      o: { es: 'Diagnóstico con datos y causas priorizadas', en: 'Data-backed diagnosis with ranked causes' } },
    { k: 'gears', t: { es: 'Diseñar', en: 'Design' },
      p: { es: 'Especificar la solución y probarla en prototipo.', en: 'Specify the solution and test it as a prototype.' },
      i: { es: ['GD&T y selección de datums', 'Control PID/LQR e instrumentación', 'Ingeniería inversa y manufactura aditiva'], en: ['GD&T and datum selection', 'PID/LQR control and instrumentation', 'Reverse engineering and additive manufacturing'] },
      o: { es: 'Solución especificada y prototipo funcional', en: 'Specified solution and working prototype' } },
    { k: 'step', t: { es: 'Validar', en: 'Validate' },
      p: { es: 'Demostrar que funciona y dejarlo en manos de tu equipo.', en: 'Prove it works and hand it over to your team.' },
      i: { es: ['Planes de control (IATF 16949)', 'Pruebas en túnel de viento y bancos de fuerza', 'Capacitación técnica del personal'], en: ['Control plans (IATF 16949)', 'Wind-tunnel and force-bench testing', 'Technical training for your staff'] },
      o: { es: 'Proceso documentado y equipo capacitado', en: 'Documented process and trained team' } }
  ];

  const CASES = [
    { client: 'Magna Powertrain', sector: { es: 'Automotriz Tier-1', en: 'Automotive Tier-1' }, nda: true,
      t: { es: 'Inspección dimensional de carcasas de transferencia', en: 'Dimensional inspection of transfer housings' },
      ch: { es: 'Fundiciones con problemas de acumulación de tolerancias en el ensamble.', en: 'Castings with tolerance stack-up issues at assembly.' },
      ac: { es: 'Protocolos de inspección con escaneo 3D y CMM, selección de datums y estrategia GD&T, diagramas de flujo, planes de control y layouts bajo IATF 16949.', en: '3D scanning and CMM inspection protocols, datum selection and GD&T strategy, process flows, control plans and layouts under IATF 16949.' },
      re: { es: 'Problemas de acumulación de tolerancias resueltos.', en: 'Tolerance stack-up issues resolved.' },
      tags: ['GD&T', 'CMM', '3D scan', 'IATF 16949'] },
    { client: 'FEMSA', sector: { es: 'Bebidas', en: 'Beverages' }, nda: true,
      t: { es: 'Integridad de sello en latas y botellas', en: 'Seal integrity for cans and bottles' },
      ch: { es: 'No conformidades de producción en el sello de latas de aluminio y botellas de vidrio.', en: 'Production non-conformances in aluminium can and glass bottle seals.' },
      ac: { es: 'Inspección con escaneo 3D y SPC, planes de control y análisis de causa raíz de las desviaciones críticas.', en: '3D scanning and SPC inspection, control plans and root cause analysis of critical deviations.' },
      re: { es: 'Reducción de no conformidades de producción.', en: 'Fewer production non-conformances.' },
      tags: ['SPC', '3D scan', 'RCA'] },
    { client: 'Heineken', sector: { es: 'Bebidas', en: 'Beverages' }, nda: true,
      t: { es: 'Refacciones por ingeniería inversa', en: 'Spare parts through reverse engineering' },
      ch: { es: 'Componentes mecánicos heredados sin refacción disponible.', en: 'Legacy mechanical components with no spare parts available.' },
      ac: { es: 'Ingeniería inversa, materiales inteligentes y manufactura aditiva (DMLS, SLA, FDM).', en: 'Reverse engineering, smart materials and additive manufacturing (DMLS, SLA, FDM).' },
      re: { es: 'Menos tiempo muerto de mantenimiento.', en: 'Less maintenance downtime.' },
      tags: ['DMLS', 'SLA', 'FDM'] },
    { client: 'ONR Global', sector: { es: 'Investigación financiada', en: 'Funded research' }, nda: false,
      t: { es: 'Plataformas UAV y UTV de extremo a extremo', en: 'End-to-end UAV and UTV platforms' },
      ch: { es: 'Construir plataformas aéreas y terrestres bajo estándares aeronáuticos (Grant N62909-20-1-2030).', en: 'Build aerial and ground platforms to aeronautical standards (Grant N62909-20-1-2030).' },
      ac: { es: 'Arquitectura de control, algoritmos PID/LQR en tiempo real, integración de sensores, comunicaciones y telemetría.', en: 'Control architecture, real-time PID/LQR algorithms, sensor, communications and telemetry integration.' },
      re: { es: 'Plataformas desarrolladas como ingeniero líder, 2021–2024.', en: 'Platforms delivered as lead engineer, 2021–2024.' },
      tags: ['PID/LQR', 'UAV', 'Telemetry'] },
    { client: 'University of Southampton', sector: { es: 'Aeroespacial', en: 'Aerospace' }, nda: false,
      t: { es: 'Validación aerodinámica de un UAV convertible', en: 'Aerodynamic validation of a convertible UAV' },
      ch: { es: 'Asegurar la estabilidad en la fase de transición de configuraciones convertibles.', en: 'Ensure stability during the transition phase of convertible configurations.' },
      ac: { es: 'Diseño aerodinámico y validación experimental en túnel de viento, correlacionada con modelos CFD.', en: 'Aerodynamic design and wind-tunnel validation, correlated with CFD models.' },
      re: { es: 'Correlación túnel–CFD para optimizar la transición. Estancia de investigación 2024.', en: 'Tunnel–CFD correlation to optimize transition. 2024 research fellowship.' },
      tags: ['CFD', 'Wind tunnel'] }
  ];

  const EXP = [
    ['2017–', { es: 'Ingeniero de innovación · proyectos de I+D industrial', en: 'Innovation engineer · industrial R&D projects' }],
    ['2021–24', { es: 'Ingeniero líder · proyecto ONR Global', en: 'Lead engineer · ONR Global project' }],
    ['2023–', { es: 'Profesor Asociado · FIME-UANL', en: 'Associate Professor · FIME-UANL' }],
    ['2023–', { es: 'Director técnico · Simposio DUAS', en: 'Technical director · DUAS Symposium' }],
    ['2024', { es: 'Investigador visitante · University of Southampton', en: 'Research fellow · University of Southampton' }]
  ];
  const EDU = [
    ['2019', { es: 'Ingeniería Mecatrónica · UANL', en: 'B.Eng. Mechatronics · UANL' }],
    ['2021', { es: 'M.Sc. Ingeniería Aeronáutica · UANL', en: 'M.Sc. Aeronautical Engineering · UANL' }],
    ['2026', { es: 'Ph.D. Ingeniería Aeronáutica · en curso', en: 'Ph.D. Aeronautical Engineering · in progress' }]
  ];

  // ---------- Animaciones SVG del método ----------
  // Respuesta al escalón: y(t) se dibuja como 88 − 69.12·y (setpoint y=1 → 18.9; banda ±2 %).
  function gearPath(teeth, ro, ri) {
    const pts = [], step = (Math.PI * 2) / teeth;
    for (let i = 0; i < teeth; i++) {
      const a = i * step;
      [[ri, 0], [ro, .22], [ro, .48], [ri, .7]].forEach(([r, f]) => {
        const t = a + f * step; pts.push(`${(r * Math.cos(t)).toFixed(2)},${(r * Math.sin(t)).toFixed(2)}`);
      });
    }
    return `M${pts.join('L')}Z`;
  }
  function stepPath(w, h, zeta = .32, wn = 9) {
    const wd = wn * Math.sqrt(1 - zeta * zeta), phi = Math.acos(zeta), pts = [];
    for (let i = 0; i <= 80; i++) {
      const t = i / 80, y = 1 - Math.exp(-zeta * wn * t) * Math.sin(wd * t + phi) / Math.sqrt(1 - zeta * zeta);
      pts.push(`${(t * w).toFixed(1)},${(h - y * h * .72).toFixed(1)}`);
    }
    return `M${pts.join('L')}`;
  }
  const ART = {
    scan: () => `<svg viewBox="0 0 160 96" class="art art--scan" aria-hidden="true">
        <path class="art__part" d="M20 78 V40 H52 V26 H108 V40 H140 V78 Z"/>
        <circle class="art__hole" cx="80" cy="56" r="9"/>
        <g class="art__beam"><rect x="10" y="0" width="140" height="10" class="art__glow"/><line x1="10" y1="10" x2="150" y2="10"/></g>
        <g class="art__dim"><line x1="20" y1="88" x2="140" y2="88"/><line x1="20" y1="84" x2="20" y2="92"/><line x1="140" y1="84" x2="140" y2="92"/></g>
      </svg>`,
    gears: () => `<svg viewBox="0 0 160 96" class="art art--gears" aria-hidden="true">
        <g transform="translate(62 50)"><path class="art__gear art__gear--a" d="${gearPath(12, 30, 24)}"/><circle r="6" class="art__axle"/></g>
        <g transform="translate(113.5 50)"><g transform="rotate(${180 / 8 + 4})"><path class="art__gear art__gear--b" d="${gearPath(8, 21, 15.5)}"/></g><circle r="4.5" class="art__axle"/></g>
      </svg>`,
    step: () => `<svg viewBox="0 0 160 96" class="art art--step" aria-hidden="true">
        <rect class="art__band" x="10" y="17.5" width="140" height="2.8"/>
        <line class="art__sp" x1="10" y1="18.9" x2="150" y2="18.9"/>
        <g transform="translate(10 -8)"><path class="art__curve" pathLength="1" d="${stepPath(140, 96)}"/></g>
        <line class="art__axis" x1="10" y1="88" x2="150" y2="88"/><line class="art__axis" x1="10" y1="12" x2="10" y2="88"/>
      </svg>`
  };

  // ---------- Render ----------
  const $ = id => document.getElementById(id);
  function render() {
    $('pains').innerHTML = PAINS.map((p, i) => `
      <article class="pain">
        <span class="pain__n">${String(i + 1).padStart(2, '0')}</span>
        <p class="pain__q">${tr(p.q)}</p>
        <p class="pain__d"><span aria-hidden="true">→</span> ${tr(p.d)}</p>
        <a class="pain__link" href="#caso-${String(p.c).padStart(2, '0')}">${SiteI18n.t('c.one')} ${String(p.c).padStart(2, '0')} ↓</a>
      </article>`).join('');

    $('method').innerHTML = METHOD.map((m, i) => `
      <li class="stage reveal" style="--i:${i}">
        <div class="stage__art">${ART[m.k]()}</div>
        <span class="stage__n">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="stage__t">${tr(m.t)}</h3>
        <p>${tr(m.p)}</p>
        <ul class="stage__list">${tr(m.i).map(x => `<li>${x}</li>`).join('')}</ul>
        <p class="stage__out"><span>${SiteI18n.t('s.deliv')}</span>${tr(m.o)}</p>
      </li>`).join('');

    $('cases').innerHTML = CASES.map((c, i) => `
      <article class="case reveal" id="caso-${String(i + 1).padStart(2, '0')}">
        <div class="case__id">
          <span class="case__n">${String(i + 1).padStart(2, '0')}</span>
          <span class="case__client">${c.client}</span>
          <span class="case__sector">${tr(c.sector)}</span>
          ${c.nda ? `<span class="case__nda">${SiteI18n.t('c.nda')}</span>` : ''}
        </div>
        <div class="case__body">
          <h3>${tr(c.t)}</h3>
          <dl>
            <dt>${SiteI18n.t('c.challenge')}</dt><dd>${tr(c.ch)}</dd>
            <dt>${SiteI18n.t('c.action')}</dt><dd>${tr(c.ac)}</dd>
          </dl>
          <div class="case__tags">${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
        <div class="case__result">
          <span class="case__rk">${SiteI18n.t('c.result')}</span>
          <p>${tr(c.re)}</p>
          <span class="pending">${SiteI18n.t('c.pending')}</span>
        </div>
      </article>`).join('');

    const row = ([w, t]) => `<li><span class="record__when">${w}</span><span>${tr(t)}</span></li>`;
    $('record-exp').innerHTML = EXP.map(row).join('');
    $('record-edu').innerHTML = EDU.map(row).join('');
  }
  render();
  document.addEventListener('languageChanged', () => { render(); document.querySelectorAll('.stage.reveal, .case.reveal').forEach(el => el.classList.add('is-visible')); });

  // ---------- Lectura de la celda 3D ----------
  const cell = document.querySelector('[data-scene="probe-cell"]');
  const fmt = v => (v >= 0 ? '+' : '−') + Math.abs(v).toFixed(3);
  cell?.addEventListener('probe:measure', e => {
    const { n, x, y, z, dev, tol } = e.detail;
    $('ro-n').textContent = `P-${String(n).padStart(2, '0')}`;
    $('ro-x').textContent = fmt(x); $('ro-y').textContent = fmt(y); $('ro-z').textContent = fmt(z);
    const dv = $('ro-dev');
    dv.textContent = `Δ ${fmt(dev)} mm`;
    dv.dataset.ok = String(Math.abs(dev) <= tol);
    cell.classList.remove('is-hit'); void cell.offsetWidth; cell.classList.add('is-hit');
  });
  const touch = window.matchMedia('(hover: none)').matches;
  if (touch) { $('cell-hint').dataset.i18n = 'cell.hint.touch'; SiteI18n.apply(); }
  cell?.addEventListener('probe:hover', e => {
    if (touch) return;
    const h = $('cell-hint');
    h.dataset.i18n = e.detail ? 'cell.hint.on' : 'cell.hint';
    h.textContent = SiteI18n.t(h.dataset.i18n);
  });
})();
