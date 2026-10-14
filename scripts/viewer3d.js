/* Visor STL reutilizable. Carga three.js r128 (misma versión que S01) solo cuando el visor entra en pantalla.
   Declarativo:  <div class="stage-3d" data-viewer3d data-src="/models/pruebas/brida-eu97.stl" data-view="iso"></div>
   API:          const v = await Viewer3D.mount(el, { src, view, autoRotate });
                 await v.load(url) → { triangles, size: { x, y, z } }   (mm)
                 v.setView('iso' | 'front' | 'top' | 'right'); v.setWireframe(bool); v.snapshot() → dataURL; v.dispose();
   Eventos en el elemento: viewer3d:load (detail = estadísticas), viewer3d:error (detail = Error).
   Estado en el elemento:  data-state = loading | ready | error. */
(() => {
  'use strict';
  const CDN = [
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
    'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js',
    'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/STLLoader.js'
  ];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let threeReady;

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src; s.async = false;
      s.onload = resolve; s.onerror = () => reject(new Error(`No se pudo cargar ${src}`));
      document.head.appendChild(s);
    });
  }

  function loadThree() {
    if (window.THREE?.STLLoader) return Promise.resolve();
    threeReady ??= CDN.reduce((p, src) => p.then(() => loadScript(src)), Promise.resolve());
    return threeReady;
  }

  const css = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  const VIEWS = { iso: [1, .8, 1], front: [0, 0, 1], top: [0, 1, .0001], right: [1, 0, 0] };

  // Una sola instancia por elemento, aunque se llame varias veces mientras carga.
  function mount(el, opts = {}) {
    el._viewer3d ??= create(el, opts).catch(err => { delete el._viewer3d; el.dataset.state = 'error'; throw err; });
    return el._viewer3d;
  }

  async function create(el, opts) {
    el.dataset.state = 'loading';
    await loadThree();
    const T = window.THREE;

    const renderer = new T.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = T.sRGBEncoding;
    const canvas = renderer.domElement;
    canvas.className = 'stage-3d__canvas';
    el.querySelector('.stage-3d__hint')?.remove();
    el.prepend(canvas);

    const scene = new T.Scene();
    const camera = new T.PerspectiveCamera(35, 1, .1, 5000);
    const controls = new T.OrbitControls(camera, canvas);
    controls.enableDamping = !reduce;
    controls.autoRotate = !reduce && opts.autoRotate !== false;
    controls.autoRotateSpeed = 1.2;

    scene.add(new T.HemisphereLight(0xffffff, 0x445566, .9));
    const key = new T.DirectionalLight(0xffffff, .9); key.position.set(1, 2, 1.5); scene.add(key);
    const rim = new T.DirectionalLight(0xffffff, .35); rim.position.set(-1.5, .5, -1); scene.add(rim);

    const material = new T.MeshStandardMaterial({ metalness: .35, roughness: .45, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
    const edgeMat = new T.LineBasicMaterial({ transparent: true, opacity: .7 });
    const grid = new T.GridHelper(1, 20);
    grid.material.transparent = true; grid.material.opacity = .5;
    scene.add(grid);

    let mesh, edges, radius = 50, view = opts.view || el.dataset.view || 'iso';

    function applyTheme() {
      material.color.set(css('--steel-500') || '#2f5f8a');
      edgeMat.color.set(css('--steel-700') || '#1d3c58');
      const line = new T.Color(css('--line-strong') || '#b8c4d3');
      grid.material.color = line;
      if (Array.isArray(grid.material)) grid.material.forEach(m => m.color.copy(line));
      render();
    }

    function resize() {
      const w = el.clientWidth, h = el.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      render();
    }

    function setView(name) {
      view = VIEWS[name] ? name : 'iso';
      const dir = new T.Vector3(...VIEWS[view]).normalize();
      const dist = radius / Math.sin((camera.fov * Math.PI) / 360) * .8;
      camera.position.copy(dir.multiplyScalar(dist));
      camera.near = dist / 100; camera.far = dist * 10;
      camera.updateProjectionMatrix();
      controls.target.set(0, 0, 0);
      controls.update();
      render();
    }

    function setWireframe(on) { material.wireframe = !!on; render(); }

    async function load(src) {
      el.dataset.state = 'loading';
      try {
        const geo = await new Promise((res, rej) => new T.STLLoader().load(src, res, undefined, () => rej(new Error(`No se pudo cargar ${src}`))));
        geo.rotateX(-Math.PI / 2); // STL con Z arriba → escena con Y arriba
        geo.computeBoundingBox();
        const box = geo.boundingBox, size = new T.Vector3(), center = new T.Vector3();
        box.getSize(size); box.getCenter(center);
        geo.translate(-center.x, -box.min.y - size.y / 2, -center.z);
        geo.computeVertexNormals();

        if (mesh) { scene.remove(mesh, edges); mesh.geometry.dispose(); edges.geometry.dispose(); }
        mesh = new T.Mesh(geo, material);
        edges = new T.LineSegments(new T.EdgesGeometry(geo, 30), edgeMat);
        scene.add(mesh, edges);

        radius = size.length() / 2;
        grid.scale.setScalar(Math.ceil(Math.max(size.x, size.z) * 1.6));
        grid.position.y = -size.y / 2;
        setView(view);

        const stats = { triangles: geo.attributes.position.count / 3, size: { x: +size.x.toFixed(2), y: +size.z.toFixed(2), z: +size.y.toFixed(2) } };
        el.dataset.state = 'ready';
        el.dispatchEvent(new CustomEvent('viewer3d:load', { detail: stats }));
        return stats;
      } catch (err) {
        el.dataset.state = 'error';
        el.dispatchEvent(new CustomEvent('viewer3d:error', { detail: err }));
        throw err;
      }
    }

    let frame = 0, alive = true;
    function render() { renderer.render(scene, camera); }
    function loop() {
      if (!alive) return;
      frame = requestAnimationFrame(loop);
      if (controls.autoRotate || controls.enableDamping) controls.update();
      render();
    }
    controls.addEventListener('change', render);
    controls.addEventListener('start', () => { controls.autoRotate = false; });

    const ro = new ResizeObserver(resize); ro.observe(el);
    const mo = new MutationObserver(applyTheme);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    applyTheme(); resize();
    if (!reduce) loop();

    const api = {
      load, setView, setWireframe,
      snapshot: () => { render(); return canvas.toDataURL('image/png'); },
      dispose() {
        alive = false; cancelAnimationFrame(frame); ro.disconnect(); mo.disconnect(); controls.dispose();
        if (mesh) { mesh.geometry.dispose(); edges.geometry.dispose(); }
        material.dispose(); edgeMat.dispose(); renderer.dispose(); canvas.remove();
        delete el._viewer3d; delete el.dataset.state;
      }
    };
    const src = opts.src || el.dataset.src;
    if (src) await load(src).catch(() => {});
    return api;
  }

  function auto(root = document) {
    const els = root.querySelectorAll('[data-viewer3d]');
    if (!('IntersectionObserver' in window)) { els.forEach(el => mount(el).catch(() => {})); return; }
    const io = new IntersectionObserver(entries => {
      for (const e of entries) if (e.isIntersecting) { io.unobserve(e.target); mount(e.target).catch(() => {}); }
    }, { rootMargin: '200px' });
    els.forEach(el => io.observe(el));
  }

  window.Viewer3D = { mount, auto, loadThree };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => auto());
  else auto();
})();
