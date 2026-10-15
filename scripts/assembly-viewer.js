/* Visor de ensambles (Fase 7): piezas STL con color, vista explosionada animada, resaltado al pasar el cursor
   y aislamiento con clic. Usa three.js r128 vía Viewer3D.loadThree (scripts/viewer3d.js).
   API: const v = await AssemblyViewer.mount(el); await v.load(modelo); v.setExplode(0..1); v.play(bool);
        v.setView('iso'|'front'|'top'); v.setWireframe(bool); v.isolate(nombre|null)
   Eventos en el elemento: assembly:hover (detail = pieza|null), assembly:isolate (detail = nombre|null),
        assembly:explode (detail = 0..1). Estado: data-state = loading | ready | error. */
(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const VIEWS = { iso: [1, .75, 1.1], front: [0, .12, 1], top: [0, 1, .0001] };

  async function mount(el) {
    if (el._assembly) return el._assembly;
    el._assembly = create(el).catch(err => { el.dataset.state = 'error'; delete el._assembly; throw err; });
    return el._assembly;
  }

  async function create(el) {
    el.dataset.state = 'loading';
    await window.Viewer3D.loadThree();
    const T = window.THREE;
    const renderer = new T.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = T.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    const canvas = renderer.domElement; canvas.className = 'asm__canvas'; el.prepend(canvas);

    const scene = new T.Scene();
    const camera = new T.PerspectiveCamera(32, 1, 1, 5000);
    const controls = new T.OrbitControls(camera, canvas);
    controls.enableDamping = !reduce;
    scene.add(new T.HemisphereLight(0xffffff, 0x3a4a5c, .8));
    const sun = new T.DirectionalLight(0xffffff, .9); sun.position.set(200, 400, 260); sun.castShadow = true;
    Object.assign(sun.shadow.camera, { left: -300, right: 300, top: 300, bottom: -300, far: 1200 }); sun.shadow.mapSize.set(1024, 1024);
    scene.add(sun);
    const rim = new T.DirectionalLight(0xffffff, .35); rim.position.set(-300, 150, -200); scene.add(rim);
    const floor = new T.Mesh(new T.PlaneGeometry(2000, 2000), new T.ShadowMaterial({ opacity: .14 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
    const grid = new T.GridHelper(800, 32); Object.assign(grid.material, { vertexColors: false, transparent: true, opacity: .4 }); scene.add(grid);

    let parts = [], radius = 80, explode = 0, playing = false, view = 'iso', hovered = null, isolated = null, wire = false;
    const group = new T.Group(); scene.add(group);
    const center = new T.Vector3();

    function applyTheme() {
      grid.material.color = new T.Color(css('--line-strong') || '#b8c4d3');
      parts.forEach(p => p.edges.material.color.set(css('--ink-3') || '#6f7f92'));
      dirty();
    }

    function frame(t) {
      // encuadre fijo para el estado más explosionado, así la cámara no salta al animar
      const box = new T.Box3();
      parts.forEach(p => { const b = p.geo.boundingBox.clone(); b.translate(p.dir.clone().multiplyScalar(t)); box.union(b); });
      box.getCenter(center); radius = box.getSize(new T.Vector3()).length() / 2;
    }

    function setView(name) {
      view = VIEWS[name] ? name : 'iso';
      const dist = radius / Math.sin((camera.fov * Math.PI) / 360) * 1.05;
      camera.position.copy(center).add(new T.Vector3(...VIEWS[view]).normalize().multiplyScalar(dist));
      camera.near = dist / 100; camera.far = dist * 10; camera.updateProjectionMatrix();
      controls.target.copy(center); controls.update(); dirty();
    }

    function setExplode(t) {
      explode = Math.max(0, Math.min(1, t));
      parts.forEach(p => p.mesh.position.copy(p.dir).multiplyScalar(explode));
      el.dispatchEvent(new CustomEvent('assembly:explode', { detail: explode }));
      dirty();
    }

    function paint() {
      parts.forEach(p => {
        const dim = isolated && isolated !== p.info.name;
        p.mesh.material.transparent = !!dim; p.mesh.material.opacity = dim ? .12 : 1; p.mesh.material.depthWrite = !dim;
        p.mesh.material.emissive.set(p === hovered ? (css('--accent') || '#e8641e') : '#000000');
        p.mesh.material.emissiveIntensity = p === hovered ? .28 : 0;
        p.mesh.material.wireframe = wire;
        p.edges.visible = !dim;
      });
      dirty();
    }

    async function load(model) {
      el.dataset.state = 'loading';
      parts.forEach(p => { group.remove(p.mesh); p.geo.dispose(); p.mesh.material.dispose(); });
      parts = []; hovered = null; isolated = null;
      const loader = new T.STLLoader();
      const geos = await Promise.all(model.parts.map(pt => new Promise((res, rej) => loader.load(pt.file, res, undefined, rej))));
      const all = new T.Box3();
      geos.forEach(g => { g.rotateX(-Math.PI / 2); g.computeBoundingBox(); all.union(g.boundingBox); }); // Z arriba → Y arriba
      const c = all.getCenter(new T.Vector3());
      geos.forEach((g, i) => {
        g.translate(-c.x, -all.min.y, -c.z); g.computeVertexNormals(); g.computeBoundingBox();
        const info = model.parts[i];
        const mesh = new T.Mesh(g, new T.MeshStandardMaterial({ color: info.color, metalness: .35, roughness: .45, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }));
        mesh.castShadow = mesh.receiveShadow = true;
        const edges = new T.LineSegments(new T.EdgesGeometry(g, 35), new T.LineBasicMaterial({ transparent: true, opacity: .35 }));
        mesh.add(edges);
        const [ex, ey, ez] = info.explode || [0, 0, 0];
        parts.push({ info, geo: g, mesh, edges, dir: new T.Vector3(ex, ez, -ey) });
        group.add(mesh);
      });
      grid.scale.setScalar(Math.max(.4, Math.max(all.max.x - all.min.x, all.max.z - all.min.z) / 300));
      frame(1); setExplode(explode); setView(view); applyTheme(); paint();
      el.dataset.state = 'ready';
      return parts.map(p => p.info);
    }

    // ---------- interacción ----------
    const ray = new T.Raycaster(), ndc = new T.Vector2();
    const pick = ev => {
      const r = canvas.getBoundingClientRect();
      ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(ndc, camera);
      const hit = ray.intersectObjects(parts.filter(p => !isolated || p.info.name === isolated).map(p => p.mesh), false)[0];
      return hit ? parts.find(p => p.mesh === hit.object) : null;
    };
    canvas.addEventListener('pointermove', ev => {
      const p = pick(ev);
      if (p !== hovered) {
        hovered = p; canvas.style.cursor = p ? 'pointer' : 'grab'; paint();
        el.dispatchEvent(new CustomEvent('assembly:hover', { detail: p ? p.info : null }));
      }
    });
    canvas.addEventListener('pointerleave', () => { if (hovered) { hovered = null; paint(); el.dispatchEvent(new CustomEvent('assembly:hover', { detail: null })); } });
    let down = null;
    canvas.addEventListener('pointerdown', ev => { down = [ev.clientX, ev.clientY]; });
    canvas.addEventListener('click', ev => {
      if (down && Math.hypot(ev.clientX - down[0], ev.clientY - down[1]) > 4) return; // fue arrastre de órbita
      const p = pick(ev); isolate(p && p.info.name !== isolated ? p.info.name : null);
    });
    function isolate(name) { isolated = name; paint(); el.dispatchEvent(new CustomEvent('assembly:isolate', { detail: name })); }

    // ---------- bucle ----------
    let raf = 0, last = 0, wake = 0, phase = 0, visible = true;
    function dirty() { wake = performance.now() + 800; if (!raf && visible) raf = requestAnimationFrame(loop); }
    function loop(now) {
      raf = 0;
      const dt = Math.min(.05, (now - (last || now)) / 1000); last = now;
      if (playing) { phase += dt * .45; setExplode((1 - Math.cos(phase * Math.PI)) / 2); }
      controls.update(); renderer.render(scene, camera);
      if (!raf && visible && (playing || controls.enableDamping || now < wake)) raf = requestAnimationFrame(loop); // uno solo por cuadro
    }
    controls.addEventListener('change', dirty);
    const resize = () => {
      const w = el.clientWidth, h = el.clientHeight; if (!w || !h) return;
      renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); dirty();
    };
    new ResizeObserver(resize).observe(el);
    new MutationObserver(applyTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) dirty(); }).observe(el);
    resize();

    return {
      load, setExplode, setView, isolate,
      play(on) { playing = !!on && !reduce; if (playing) phase = Math.acos(1 - 2 * explode) / Math.PI; last = 0; dirty(); return playing; },
      setWireframe(on) { wire = !!on; paint(); },
      get explode() { return explode; }
    };
  }

  window.AssemblyViewer = { mount };
  (window.Scenes ??= {}).assembly = mount;
})();
