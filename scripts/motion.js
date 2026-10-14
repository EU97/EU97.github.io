/* Movimiento: revelado por scroll, escalonado, contadores, línea de tiempo y reordenado FLIP. */
(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init(root = document) {
    root.querySelectorAll('[data-stagger]').forEach(group => {
      [...group.children].forEach((child, i) => {
        child.classList.add('reveal');
        child.style.setProperty('--i', i);
      });
    });

    const targets = root.querySelectorAll('.reveal, .timeline[data-draw], [data-count]');
    if (reduce || !('IntersectionObserver' in window)) {
      targets.forEach(el => { el.classList.add('is-visible'); if (el.dataset.count) el.textContent = el.dataset.count; });
      return;
    }
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-visible');
        if (e.target.dataset.count) countUp(e.target);
        io.unobserve(e.target);
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => io.observe(el));
  }

  function countUp(el) {
    const end = Number(el.dataset.count);
    const t0 = performance.now(), dur = 1100;
    (function tick(now) {
      const p = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }

  // Reordena hijos con animación FLIP: mutate() cambia el DOM (mostrar/ocultar/ordenar).
  function flip(container, mutate) {
    const items = [...container.children];
    const first = new Map(items.map(el => [el, el.getBoundingClientRect()]));
    mutate();
    if (reduce) return;
    for (const el of container.children) {
      const a = first.get(el), b = el.getBoundingClientRect();
      if (!a || (!b.width && !b.height)) continue;
      const dx = a.left - b.left, dy = a.top - b.top;
      if (!dx && !dy) continue;
      el.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration: 420, easing: 'cubic-bezier(.22,.8,.24,1)' });
    }
  }

  window.Motion = { init, flip, countUp };
  document.addEventListener('DOMContentLoaded', () => init());
})();
