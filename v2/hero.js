/* Hero: flujo potencial alrededor del avatar (cilindro en flujo uniforme), horizonte artificial que se
   inclina con el cursor y anillo de rumbo. Con prefers-reduced-motion se dibujan líneas de corriente fijas. */
(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = document.querySelector('.hero');
  const canvas = document.getElementById('flow');
  const avatar = document.getElementById('avatar');
  const horizon = document.getElementById('horizon');
  const ring = document.getElementById('ring');
  if (!hero || !canvas || !avatar) return;
  const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

  // Anillo de rumbo: marcas cada 10°, largas cada 30°, letras cardinales.
  const NS = 'http://www.w3.org/2000/svg';
  for (let d = 0; d < 360; d += 10) {
    const a = (d - 90) * Math.PI / 180, long = d % 30 === 0;
    const r1 = 150, r2 = long ? 162 : 157;
    const l = document.createElementNS(NS, 'line');
    l.setAttribute('x1', 240 + r1 * Math.cos(a)); l.setAttribute('y1', 240 + r1 * Math.sin(a));
    l.setAttribute('x2', 240 + r2 * Math.cos(a)); l.setAttribute('y2', 240 + r2 * Math.sin(a));
    if (long) l.setAttribute('class', 'long');
    ring.appendChild(l);
  }
  [['N', 0], ['E', 90], ['S', 180], ['W', 270]].forEach(([t, d]) => {
    const a = (d - 90) * Math.PI / 180, x = document.createElementNS(NS, 'text');
    x.setAttribute('x', 240 + 174 * Math.cos(a)); x.setAttribute('y', 240 + 174 * Math.sin(a) + 4);
    x.textContent = t; ring.appendChild(x);
  });

  // ---------- Flujo potencial ----------
  // u = U(1 - R²(x²-y²)/r⁴), v = -U·2R²xy/r⁴  (cilindro de radio R centrado en el avatar)
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, cx = 0, cy = 0, R = 0, dpr = 1, U = 60, color = '#2f5f8a', hot = '#e8641e';
  const vel = (x, y) => {
    const dx = x - cx, dy = y - cy, r2 = dx * dx + dy * dy;
    if (r2 < R * R) return [0, 0];
    const k = (R * R) / (r2 * r2);
    return [U * (1 - k * (dx * dx - dy * dy)), -U * 2 * k * dx * dy];
  };

  function measure() {
    const hb = hero.getBoundingClientRect(), ab = avatar.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = hb.width; H = hb.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = ab.left - hb.left + ab.width / 2; cy = ab.top - hb.top + ab.height / 2;
    R = ab.width * (164 / 480);
    color = css('--primary') || color; hot = css('--accent') || hot;
    U = Math.max(40, W / 22);
  }

  // Partículas.
  const N = 520, P = [];
  const spawn = (p, anywhere) => {
    p.x = anywhere ? Math.random() * W : -10 - Math.random() * 60;
    p.y = Math.random() * H; p.life = 0;
    const dx = p.x - cx, dy = p.y - cy;
    if (dx * dx + dy * dy < R * R) p.x = -10;
  };

  function staticLines() {
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 1;
    for (let i = 0; i <= 28; i++) {
      let x = 0, y = (i / 28) * H;
      ctx.beginPath(); ctx.moveTo(x, y);
      for (let s = 0; s < 900 && x < W; s++) {
        const [u, v] = vel(x, y), m = Math.hypot(u, v) || 1;
        x += (u / m) * 4; y += (v / m) * 4; ctx.lineTo(x, y);
      }
      ctx.strokeStyle = color; ctx.globalAlpha = .16; ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  let frame = 0, last = 0, visible = true;
  function tick(now) {
    frame = 0;
    const dt = Math.min(.05, (now - (last || now)) / 1000); last = now;
    // desvanecer el rastro conservando la transparencia del fondo
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0,0,0,.075)'; ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'source-over';
    ctx.lineWidth = 1.1;
    for (const p of P) {
      const [u, v] = vel(p.x, p.y), sp = Math.hypot(u, v) / U;
      const nx = p.x + u * dt, ny = p.y + v * dt;
      ctx.strokeStyle = sp > 1.55 ? hot : color;
      ctx.globalAlpha = Math.min(.55, .12 + (sp - .6) * .35);
      ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(nx, ny); ctx.stroke();
      p.x = nx; p.y = ny; p.life += dt;
      if (p.x > W + 10 || p.y < -10 || p.y > H + 10 || (u === 0 && v === 0)) spawn(p, false);
    }
    ctx.globalAlpha = 1;
    tilt(now);
    if (visible) frame = requestAnimationFrame(tick);
  }

  // ---------- Horizonte artificial ----------
  let tx = 0, ty = 0, rx = 0, ry = 0, idle = true;
  hero.addEventListener('pointermove', e => {
    const b = hero.getBoundingClientRect();
    tx = ((e.clientX - b.left) / b.width - .5) * 2; ty = ((e.clientY - b.top) / b.height - .5) * 2; idle = false;
  });
  hero.addEventListener('pointerleave', () => { idle = true; });
  function tilt(now) {
    const gx = idle ? Math.sin(now / 2400) * .45 : tx, gy = idle ? Math.sin(now / 3100) * .3 : ty;
    rx += (gx - rx) * .06; ry += (gy - ry) * .06;
    horizon?.setAttribute('transform', `rotate(${(-rx * 14).toFixed(2)} 240 240) translate(0 ${(ry * 22).toFixed(2)})`);
  }

  function start() {
    measure();
    if (reduce) { staticLines(); horizon?.setAttribute('transform', 'rotate(-6 240 240)'); return; }
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
