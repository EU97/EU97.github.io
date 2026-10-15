/* Celda de medición interactiva: brazo de 3 ejes con palpador, mesa giratoria y la brida de prueba.
   - El palpador sigue el cursor; clic sobre una cara superior de la pieza = medir ese punto.
   - Sin interacción, recorre un ciclo automático de palpado.
   - Con prefers-reduced-motion: pose fija, sin ciclo ni giro; el clic mide sin animación.
   Uso: <div data-scene="probe-cell" data-src="/models/pruebas/brida-eu97.stl"></div>
   Eventos en el elemento: probe:measure (detail = { n, x, y, z, dev }), probe:hover (detail = bool).
   Estado: data-state = loading | ready | error. Requiere scripts/viewer3d.js (Viewer3D.loadThree). */
(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

  // Geometría del brazo (mm).
  const ARM = { base: new Float32Array([-160, 0, -35]), h0: 90, L1: 136, L2: 126, probe: 46, hover: 34 };
  const TABLE = { r: 66, h: 22 };
  const TOL = 0.02; // ±mm, para colorear los puntos

  // Puntos del ciclo automático en coordenadas locales de la pieza (cara superior de brida y del cubo).
  function autoPoints(top, hubTop) {
    const pts = [];
    for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; pts.push([26 * Math.cos(a), top, 26 * Math.sin(a)]); }
    for (let i = 0; i < 3; i++) { const a = (i / 3) * Math.PI * 2 + .5; pts.push([14.5 * Math.cos(a), hubTop, 14.5 * Math.sin(a)]); }
    return pts;
  }

  // Desviación simulada, determinista por punto (±0.025 mm).
  function deviation(x, z) {
    const s = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453;
    return ((s - Math.floor(s)) - .5) * .05;
  }

  async function mount(el) {
    if (el._probe) return el._probe;
    el.dataset.state = 'loading';
    el._probe = create(el).catch(err => { el.dataset.state = 'error'; delete el._probe; throw err; });
    return el._probe;
  }

  async function create(el) {
    await window.Viewer3D.loadThree();
    const T = window.THREE;

    const renderer = new T.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = T.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = T.PCFSoftShadowMap;
    const canvas = renderer.domElement;
    canvas.className = 'scene__canvas';
    el.prepend(canvas);

    const scene = new T.Scene();
    const camera = new T.PerspectiveCamera(28, 1, 10, 4000);
    const look = new T.Vector3(-42, 66, -12);

    scene.add(new T.HemisphereLight(0xffffff, 0x3a4a5c, .75));
    const sun = new T.DirectionalLight(0xffffff, .95);
    sun.position.set(160, 380, 220);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -320, right: 320, top: 320, bottom: -320, near: 50, far: 900 });
    scene.add(sun);
    const rim = new T.DirectionalLight(0xffffff, .3); rim.position.set(-300, 120, -200); scene.add(rim);

    // Materiales (los colores se toman del tema).
    const M = {
      arm: new T.MeshStandardMaterial({ metalness: .25, roughness: .42 }),
      joint: new T.MeshStandardMaterial({ metalness: .5, roughness: .35 }),
      base: new T.MeshStandardMaterial({ metalness: .4, roughness: .5 }),
      table: new T.MeshStandardMaterial({ metalness: .2, roughness: .6 }),
      part: new T.MeshStandardMaterial({ color: 0xc3ccd6, metalness: .55, roughness: .32 }),
      ruby: new T.MeshStandardMaterial({ metalness: .1, roughness: .2, emissiveIntensity: .35 }),
      steel: new T.MeshStandardMaterial({ color: 0xd9dee4, metalness: .8, roughness: .25 }),
      ok: new T.MeshBasicMaterial(), out: new T.MeshBasicMaterial(),
      ring: new T.MeshBasicMaterial({ transparent: true, depthWrite: false }),
      edge: new T.LineBasicMaterial({ transparent: true, opacity: .35 })
    };
    const shadowed = m => { m.castShadow = true; m.receiveShadow = true; return m; };

    // Piso: sombra + rejilla.
    const floor = new T.Mesh(new T.PlaneGeometry(1400, 1400), new T.ShadowMaterial({ opacity: .16 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
    const grid = new T.GridHelper(700, 28); grid.position.y = .2; scene.add(grid);
    Object.assign(grid.material, { vertexColors: false, transparent: true, opacity: .45 });

    // Mesa giratoria.
    const table = new T.Group(); scene.add(table);
    const tableBody = shadowed(new T.Mesh(new T.CylinderGeometry(TABLE.r, TABLE.r + 4, TABLE.h, 64), M.table));
    tableBody.position.y = TABLE.h / 2; table.add(tableBody);
    const tableEdges = new T.LineSegments(new T.EdgesGeometry(tableBody.geometry, 20), M.edge);
    tableEdges.position.copy(tableBody.position); table.add(tableEdges);
    for (let i = 0; i < 8; i++) { // ranuras de la mesa, para que el giro se vea
      const slot = new T.Mesh(new T.BoxGeometry(TABLE.r - 30, .6, 3), M.joint);
      const a = (i / 8) * Math.PI * 2;
      slot.position.set(Math.cos(a) * (TABLE.r + 18) / 2, TABLE.h + .3, Math.sin(a) * (TABLE.r + 18) / 2);
      slot.rotation.y = -a; table.add(slot);
    }

    // Brazo.
    const yaw = new T.Group(); yaw.position.set(ARM.base[0], 0, ARM.base[2]); scene.add(yaw);
    const plinth = shadowed(new T.Mesh(new T.CylinderGeometry(40, 46, 24, 48), M.base)); plinth.position.y = 12; scene.add(plinth);
    plinth.position.x = ARM.base[0]; plinth.position.z = ARM.base[2];
    const turret = shadowed(new T.Mesh(new T.CylinderGeometry(28, 32, ARM.h0 - 24, 40), M.arm)); turret.position.y = 24 + (ARM.h0 - 24) / 2; yaw.add(turret);
    const shoulder = new T.Group(); shoulder.position.y = ARM.h0; yaw.add(shoulder);
    const jointGeo = (r, w) => new T.CylinderGeometry(r, r, w, 36).rotateX(Math.PI / 2);
    shoulder.add(shadowed(new T.Mesh(jointGeo(25, 58), M.joint)));
    const link = (L, w, h) => { const g = new T.BoxGeometry(L, h, w); g.translate(L / 2, 0, 0); return g; };
    const upper = shadowed(new T.Mesh(link(ARM.L1, 30, 26), M.arm)); shoulder.add(upper);
    const elbow = new T.Group(); elbow.position.x = ARM.L1; shoulder.add(elbow);
    elbow.add(shadowed(new T.Mesh(jointGeo(19, 44), M.joint)));
    const fore = shadowed(new T.Mesh(link(ARM.L2, 24, 20), M.arm)); elbow.add(fore);
    const wrist = new T.Group(); wrist.position.x = ARM.L2; elbow.add(wrist);
    wrist.add(shadowed(new T.Mesh(jointGeo(13, 34), M.joint)));
    const head = shadowed(new T.Mesh(new T.CylinderGeometry(9, 9, 18, 24).rotateZ(Math.PI / 2).translate(16, 0, 0), M.joint)); wrist.add(head);
    const stylus = shadowed(new T.Mesh(new T.CylinderGeometry(2, 2, ARM.probe - 30, 12).rotateZ(Math.PI / 2).translate(25 + (ARM.probe - 30) / 2, 0, 0), M.steel)); wrist.add(stylus);
    const ruby = new T.Mesh(new T.SphereGeometry(4.2, 20, 14), M.ruby); ruby.position.x = ARM.probe - 4.2; wrist.add(ruby);

    // Marcadores.
    const ring = new T.Mesh(new T.RingGeometry(5, 7, 40).rotateX(-Math.PI / 2), M.ring); ring.visible = false; scene.add(ring);
    const hoverRing = new T.Mesh(new T.RingGeometry(3.4, 4.6, 32).rotateX(-Math.PI / 2), M.ring.clone()); hoverRing.visible = false; scene.add(hoverRing);

    // Pieza.
    const geo = await new Promise((res, rej) => new T.STLLoader().load(el.dataset.src, res, undefined, () => rej(new Error('STL'))));
    geo.rotateX(-Math.PI / 2); geo.computeBoundingBox();
    const bb = geo.boundingBox, c = new T.Vector3(); bb.getCenter(c);
    geo.translate(-c.x, -bb.min.y, -c.z); geo.computeVertexNormals();
    const part = shadowed(new T.Mesh(geo, M.part)); part.position.y = TABLE.h; table.add(part);
    part.add(new T.LineSegments(new T.EdgesGeometry(geo, 35), M.edge));
    const partTop = 8.8, hubTop = bb.max.y - bb.min.y;
    const dots = new T.Group(); part.add(dots);
    const dotGeo = new T.SphereGeometry(1.6, 10, 8);

    function applyTheme() {
      M.arm.color.set(css('--primary') || '#2f5f8a');
      M.joint.color.set(css('--steel-700') || '#1d3c58');
      M.base.color.set(css('--ink-2') || '#44566b');
      M.table.color.set(css('--surface-2') || '#eef2f6');
      const acc = css('--accent') || '#e8641e';
      M.ruby.color.set(acc); M.ruby.emissive.set(acc);
      M.ring.color.set(acc); hoverRing.material.color.set(css('--primary') || '#2f5f8a');
      M.ok.color.set(css('--ok') || '#1e8a4c'); M.out.color.set(acc);
      M.edge.color.set(css('--ink-3') || '#6f7f92');
      grid.material.color = new T.Color(css('--line-strong') || '#b8c4d3');
      dirty();
    }

    // IK: posición de la punta (mundo) → ángulos. La punta apunta siempre hacia abajo.
    const tip = new T.Vector3(), goal = new T.Vector3();
    function solve(p) {
      const dx = p.x - ARM.base[0], dz = p.z - ARM.base[2];
      yaw.rotation.y = Math.atan2(-dz, dx);
      let r = Math.hypot(dx, dz);
      let y = p.y + ARM.probe - ARM.h0;
      let d = Math.hypot(r, y);
      const max = ARM.L1 + ARM.L2 - 1, min = Math.abs(ARM.L1 - ARM.L2) + 20;
      if (d > max || d < min) { const k = (d > max ? max : min) / d; r *= k; y *= k; d = Math.hypot(r, y); }
      const c2 = (d * d - ARM.L1 ** 2 - ARM.L2 ** 2) / (2 * ARM.L1 * ARM.L2);
      const t2 = -Math.acos(Math.min(1, Math.max(-1, c2)));
      const t1 = Math.atan2(y, r) - Math.atan2(ARM.L2 * Math.sin(t2), ARM.L1 + ARM.L2 * Math.cos(t2));
      shoulder.rotation.z = t1; elbow.rotation.z = t2; wrist.rotation.z = -Math.PI / 2 - t1 - t2;
    }

    // Estado e interacción.
    const ray = new T.Raycaster(), ndc = new T.Vector2(), hoverPlane = new T.Plane(new T.Vector3(0, 1, 0), -(TABLE.h + 60));
    const parallax = new T.Vector2();
    let pointerInside = false, lastInput = -1e9, n = 0;
    const queue = [];         // puntos por medir (coordenadas locales de la pieza)
    let job = null;           // { local, phase, t }
    let autoIdx = 0;
    const AUTO = autoPoints(partTop, hubTop);

    function hitPart(ev) {
      const r = canvas.getBoundingClientRect();
      ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(ndc, camera);
      const hit = ray.intersectObject(part, false)[0];
      if (hit && hit.face) {
        const nrm = hit.face.normal.clone().transformDirection(part.matrixWorld);
        if (nrm.y > .6) return hit;
      }
      return null;
    }

    canvas.addEventListener('pointermove', ev => {
      pointerInside = true; lastInput = performance.now();
      const hit = hitPart(ev);
      parallax.copy(ndc);
      hoverRing.visible = !!hit && !job;
      if (hit) { hoverRing.position.copy(hit.point).y += .25; }
      canvas.style.cursor = hit ? 'crosshair' : 'default';
      el.dispatchEvent(new CustomEvent('probe:hover', { detail: !!hit }));
      if (!job) {
        const p = new T.Vector3();
        if (hit) goal.copy(hit.point).y += ARM.hover;
        else if (ray.ray.intersectPlane(hoverPlane, p)) goal.copy(p);
      }
      dirty();
    });
    canvas.addEventListener('pointerleave', () => { pointerInside = false; hoverRing.visible = false; dirty(); });
    canvas.addEventListener('click', ev => {
      const hit = hitPart(ev); if (!hit) return;
      lastInput = performance.now();
      queue.length = 0; queue.push(part.worldToLocal(hit.point.clone()));
      if (job && job.auto) job = null;
      dirty();
    });

    function measure(local) {
      n += 1;
      const dev = deviation(local.x, local.z);
      const d = new T.Mesh(dotGeo, Math.abs(dev) <= TOL ? M.ok : M.out);
      d.position.copy(local); d.position.y += .4; dots.add(d);
      if (dots.children.length > 30) dots.remove(dots.children[0]);
      const w = part.localToWorld(local.clone());
      ring.position.copy(w).y += .3; ring.visible = true; ring.scale.setScalar(1); ring.userData.t = 0;
      el.dispatchEvent(new CustomEvent('probe:measure', { detail: { n, x: local.x, y: local.y, z: local.z, dev, tol: TOL } }));
    }

    // Duraciones (s) de cada fase del palpado.
    const PH = { approach: .7, descend: .45, dwell: .25, retract: .4 };
    function startJob(local, auto) { job = { local, auto, phase: 'approach', t: 0, from: tip.clone() }; hoverRing.visible = false; }

    function step(dt, now) {
      scene.updateMatrixWorld();
      const idle = now - lastInput > 2600;
      if (!job) {
        if (queue.length) startJob(queue.shift(), false);
        else if (idle && !reduce) { startJob(new T.Vector3(...AUTO[autoIdx % AUTO.length]), true); autoIdx++; }
      }
      const spinning = !reduce && (!job || job.phase === 'approach') && idle;
      if (spinning) table.rotation.y += dt * .22;

      if (job) {
        const w = part.localToWorld(job.local.clone());
        const above = w.clone(); above.y += ARM.hover;
        const contact = w.clone(); contact.y += 4.2;
        job.t += reduce ? 1e9 : dt;
        const k = x => x * x * (3 - 2 * x);
        if (job.phase === 'approach') {
          const a = Math.min(1, job.t / PH.approach); tip.lerpVectors(job.from, above, k(a));
          if (a >= 1) { job.phase = 'descend'; job.t = 0; }
        } else if (job.phase === 'descend') {
          const a = Math.min(1, job.t / PH.descend); tip.lerpVectors(above, contact, k(a));
          if (a >= 1) { job.phase = 'dwell'; job.t = 0; measure(job.local); }
        } else if (job.phase === 'dwell') {
          tip.copy(contact);
          if (job.t >= PH.dwell) { job.phase = 'retract'; job.t = 0; }
        } else {
          const a = Math.min(1, job.t / PH.retract); tip.lerpVectors(contact, above, k(a));
          if (a >= 1) { goal.copy(above); job = null; if (reduce) tip.copy(contact); }
        }
      } else {
        tip.lerp(goal, reduce ? 1 : 1 - Math.exp(-dt * 6));
      }
      solve(tip);

      if (ring.visible) {
        ring.userData.t += dt;
        const a = Math.min(1, ring.userData.t / .9);
        ring.scale.setScalar(1 + a * 3.2); ring.material.opacity = 1 - a;
        if (a >= 1 && !reduce) ring.visible = false;
        if (reduce) { ring.scale.setScalar(1.6); ring.material.opacity = .9; }
      }

      const px = reduce ? 0 : parallax.x * 22, py = reduce ? 0 : parallax.y * 12;
      camera.position.set(base.x + px, base.y + py, base.z);
      camera.lookAt(look);
    }

    const base = new T.Vector3();
    function resize() {
      const w = el.clientWidth, h = el.clientHeight; if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      const fit = Math.max(1, 1.45 / camera.aspect);
      base.set(330, 290, 470).multiplyScalar(1.06 * fit);
      camera.updateProjectionMatrix();
      dirty();
    }

    let frame = 0, last = performance.now(), visible = true, wake = 0;
    function dirty() { wake = performance.now() + 1500; if (!frame && visible) frame = requestAnimationFrame(loop); }
    function loop(now) {
      frame = 0;
      const dt = Math.min(.05, (now - last) / 1000); last = now;
      step(dt, now);
      renderer.render(scene, camera);
      if (visible && (!reduce || now < wake || job)) frame = requestAnimationFrame(loop);
    }

    new ResizeObserver(resize).observe(el);
    new MutationObserver(applyTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) { last = performance.now(); dirty(); } }).observe(el);

    // Pose inicial: tres puntos ya medidos y el palpador tocando el último (se ve bien en capturas estáticas).
    table.rotation.y = .5;
    scene.updateMatrixWorld(true);
    AUTO.slice(0, 3).forEach(p => measure(new T.Vector3(...p)));
    autoIdx = 3;
    const w0 = part.localToWorld(new T.Vector3(...AUTO[2])); w0.y += 4.2;
    tip.copy(w0); goal.copy(w0).y += ARM.hover;
    lastInput = performance.now();
    applyTheme(); resize();
    step(0, performance.now()); renderer.render(scene, camera);
    el.dataset.state = 'ready';
    if (!reduce) dirty();
    return { measure: local => { queue.push(new T.Vector3(...local)); dirty(); } };
  }

  window.ProbeCell = { mount };
  (window.Scenes ??= {})['probe-cell'] = mount; // registro común: tools/screenshot.mjs fuerza el montaje
  // Montaje diferido: three.js y el STL solo se cargan cuando la celda se acerca a la vista.
  const init = () => {
    const els = document.querySelectorAll('[data-scene="probe-cell"]');
    if (!('IntersectionObserver' in window)) { els.forEach(el => mount(el).catch(() => {})); return; }
    const io = new IntersectionObserver(entries => {
      for (const e of entries) if (e.isIntersecting) { io.unobserve(e.target); mount(e.target).catch(() => {}); }
    }, { rootMargin: '300px' });
    els.forEach(el => io.observe(el));
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
