/* Hero: foto recortada con trabajos flotando alrededor, flujo potencial que rodea la figura,
   paralaje con el cursor y vínculo entre áreas de especialidad y elementos.
   Con prefers-reduced-motion: líneas de corriente fijas y sin paralaje. */
(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = document.querySelector('.hero');
  const canvas = document.getElementById('flow');
  const portrait = document.getElementById('portrait');
  const stage = document.getElementById('stage');
  if (!hero || !canvas || !portrait) return;
  const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

  // ---------- Foto: si existe el PNG recortado, reemplaza la silueta provisional ----------
  const src = portrait.dataset.photo;
  if (src) {
    const img = new Image();
    img.className = 'portrait__img';
    img.alt = 'Edgar Ulises Rojo Rodriguez';
    img.decoding = 'async';
    img.onload = () => { portrait.prepend(img); portrait.classList.add('has-photo'); start(); };
    img.src = src;
  }

  // ---------- Áreas ↔ elementos ----------
  const floats = [...stage.querySelectorAll('.float')];
  const areas = [...document.querySelectorAll('#areas [data-area]')];
  const mark = key => {
    floats.forEach(f => f.classList.toggle('is-on', f.dataset.area === key));
    areas.forEach(a => a.classList.toggle('is-on', a.dataset.area === key));
    stage.classList.toggle('has-focus', !!key);
  };
  [...areas, ...floats].forEach(el => {
    el.addEventListener('pointerenter', () => mark(el.dataset.area));
    el.addEventListener('pointerleave', () => mark(null));
  });

  // ---------- Flujo potencial alrededor de la figura ----------
  // u = U(1 - R²(x²-y²)/r⁴), v = -U·2R²xy/r⁴  (cilindro de radio R centrado en la figura)
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, cx = 0, cy = 0, R = 0, U = 60, color = '#2f5f8a', hot = '#e8641e';
  const vel = (x, y) => {
    const dx = x - cx, dy = y - cy, r2 = dx * dx + dy * dy;
    if (r2 < R * R) return [0, 0];
    const k = (R * R) / (r2 * r2);
    return [U * (1 - k * (dx * dx - dy * dy)), -U * 2 * k * dx * dy];
  };

  function measure() {
    const hb = hero.getBoundingClientRect(), pb = portrait.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = hb.width; H = hb.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = pb.left - hb.left + pb.width / 2; cy = pb.top - hb.top + pb.height * .48;
    R = Math.min(pb.width, pb.height) * .42;
    color = css('--primary') || color; hot = css('--accent') || hot;
    U = Math.max(40, W / 22);
  }

  const N = 520, P = [];
  const spawn = (p, anywhere) => {
    p.x = anywhere ? Math.random() * W : -10 - Math.random() * 60;
    p.y = Math.random() * H;
    const dx = p.x - cx, dy = p.y - cy;
    if (dx * dx + dy * dy < R * R) p.x = -10;
  };

  function staticLines() {
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 1; ctx.strokeStyle = color; ctx.globalAlpha = .16;
    for (let i = 0; i <= 28; i++) {
      let x = 0, y = (i / 28) * H;
      ctx.beginPath(); ctx.moveTo(x, y);
      for (let s = 0; s < 900 && x < W; s++) {
        const [u, v] = vel(x, y), m = Math.hypot(u, v) || 1;
        x += (u / m) * 4; y += (v / m) * 4; ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  // ---------- Paralaje ----------
  let tx = 0, ty = 0, px = 0, py = 0;
  hero.addEventListener('pointermove', e => {
    const b = hero.getBoundingClientRect();
    tx = ((e.clientX - b.left) / b.width - .5) * 2; ty = ((e.clientY - b.top) / b.height - .5) * 2;
  });
  hero.addEventListener('pointerleave', () => { tx = 0; ty = 0; });
  function drift(now) {
    px += (tx - px) * .06; py += (ty - py) * .06;
    for (const f of floats) {
      const d = +f.dataset.depth || 15, bob = Math.sin(now / 1600 + d) * 4;
      f.style.transform = `translate3d(${(-px * d).toFixed(1)}px, ${(-py * d * .6 + bob).toFixed(1)}px, 0)`;
    }
    portrait.style.transform = `translate3d(${(px * 6).toFixed(1)}px, ${(py * 4).toFixed(1)}px, 0)`;
  }

  let frame = 0, last = 0, visible = true;
  function tick(now) {
    frame = 0;
    const dt = Math.min(.05, (now - (last || now)) / 1000); last = now;
    ctx.globalCompositeOperation = 'destination-out'; // desvanecer el rastro conservando la transparencia
    ctx.fillStyle = 'rgba(0,0,0,.075)'; ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'source-over';
    ctx.lineWidth = 1.1;
    for (const p of P) {
      const [u, v] = vel(p.x, p.y), sp = Math.hypot(u, v) / U;
      const nx = p.x + u * dt, ny = p.y + v * dt;
      ctx.strokeStyle = sp > 1.55 ? hot : color;
      ctx.globalAlpha = Math.min(.55, .12 + (sp - .6) * .35);
      ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(nx, ny); ctx.stroke();
      p.x = nx; p.y = ny;
      if (p.x > W + 10 || p.y < -10 || p.y > H + 10 || (u === 0 && v === 0)) spawn(p, false);
    }
    ctx.globalAlpha = 1;
    drift(now);
    if (visible) frame = requestAnimationFrame(tick);
  }

  function start() {
    measure();
    if (reduce) { staticLines(); return; }
    if (!P.length) for (let i = 0; i < N; i++) { const p = {}; spawn(p, true); P.push(p); }
    else P.forEach(p => spawn(p, true));
    ctx.clearRect(0, 0, W, H);
    if (!frame && visible) frame = requestAnimationFrame(tick);
  }

  new ResizeObserver(() => start()).observe(hero);
  new MutationObserver(() => { color = css('--primary'); hot = css('--accent'); if (reduce) staticLines(); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !reduce && !frame) { last = 0; frame = requestAnimationFrame(tick); }
  }).observe(hero);
  document.fonts?.ready.then(start);
  start();
})();
