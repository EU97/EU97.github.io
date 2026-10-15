/* Autenticación y llaves (Fases 5 y 6).
   - Adaptador "local": usuarios fijos en /auth/users.json. La contraseña deriva (PBKDF2-SHA256) la llave que abre
     la llave personal del usuario; con ella se abren las llaves de sus cursos. En el sitio publicado no hay
     contraseñas ni llaves en claro.
   - Adaptador "oracle": misma interfaz contra una API REST (ORDS + Oracle Autonomous Database + OCI Vault).
     Se activa en /auth/config.json. Contrato en docs/AUTH.md.
   API: SiteAuth.ready, current(), login(u, p), logout(), has(kid), key(kid), decrypt(env), openLogin(), openAccount()
   Evento: document 'auth:change' (detail = sesión o null). */
(() => {
  'use strict';
  if (window.SiteAuth) return;
  const subtle = window.crypto?.subtle;
  const STORE = 'eu97.session';
  const lang = () => (localStorage.getItem('preferredLanguage') === 'es' ? 'es' : 'en');
  const T = {
    es: { title: 'Acceso de alumnos', user: 'Usuario', pass: 'Contraseña', go: 'Entrar', busy: 'Verificando…', cancel: 'Cancelar',
      bad: 'Usuario o contraseña incorrectos.', net: 'No se pudo contactar el servicio de acceso.', na: 'El acceso con cuenta no está disponible en este navegador.',
      hint: 'Solicita tu cuenta al docente del curso.', out: 'Cerrar sesión', close: 'Cerrar', who: 'Sesión iniciada como', courses: 'Cursos con acceso', guest: 'Invitado' },
    en: { title: 'Student access', user: 'Username', pass: 'Password', go: 'Sign in', busy: 'Checking…', cancel: 'Cancel',
      bad: 'Wrong username or password.', net: 'Could not reach the access service.', na: 'Account access is not available in this browser.',
      hint: 'Ask your course instructor for an account.', out: 'Sign out', close: 'Close', who: 'Signed in as', courses: 'Courses with access', guest: 'Guest' }
  };
  const t = k => T[lang()][k];

  // ---------- base64 ----------
  const b64 = buf => btoa(String.fromCharCode(...new Uint8Array(buf)));
  const unb64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  const aes = (raw, use = ['decrypt']) => subtle.importKey('raw', raw, 'AES-GCM', false, use);
  const unseal = async (key, box) => new Uint8Array(await subtle.decrypt({ name: 'AES-GCM', iv: unb64(box.iv) }, key, unb64(box.ct)));

  // ---------- configuración y sesión ----------
  let config;
  const loadConfig = () => (config ??= fetch('/auth/config.json', { cache: 'no-cache' }).then(r => r.json()).catch(() => ({ adapter: 'local', users: '/auth/users.json', sessionHours: 8 })));
  const read = () => {
    try {
      const s = JSON.parse(sessionStorage.getItem(STORE) || 'null');
      return s && s.exp > Date.now() ? s : null;
    } catch { return null; }
  };
  const write = s => { try { s ? sessionStorage.setItem(STORE, JSON.stringify(s)) : sessionStorage.removeItem(STORE); } catch { /* sin almacenamiento */ } };
  const emit = () => document.dispatchEvent(new CustomEvent('auth:change', { detail: read() }));

  // ---------- adaptadores ----------
  const adapters = {
    async local(user, pass, cfg) {
      const db = await fetch(cfg.users || '/auth/users.json', { cache: 'no-cache' }).then(r => { if (!r.ok) throw new Error('net'); return r.json(); });
      const u = db.users.find(x => x.user.toLowerCase() === user.toLowerCase());
      if (!u) { await new Promise(r => setTimeout(r, 300)); return null; }
      const base = await subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
      const kek = await subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt: unb64(u.salt), iterations: db.kdf.iterations }, base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
      let uk;
      try { uk = await aes(await unseal(kek, u.uk)); } catch { return null; } // GCM falla = contraseña incorrecta
      const keys = {};
      for (const [kid, box] of Object.entries(u.keys || {})) keys[kid] = b64(await unseal(uk, box));
      return { user: u.user, name: u.name, roles: u.roles, keys };
    },
    async oracle(user, pass, cfg) {
      const ep = cfg.oracle?.endpoint;
      if (!ep) throw new Error('net');
      const r = await fetch(`${ep}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ user, password: pass }) });
      if (r.status === 401) return null;
      if (!r.ok) throw new Error('net');
      const j = await r.json(); // { token, name, roles, courses }
      return { user, name: j.name, roles: j.roles, courses: j.courses, token: j.token, keys: {} };
    }
  };

  // ---------- proveedores de llaves ----------
  const keyProviders = {
    local: async (kid, s) => (s.keys[kid] ? aes(unb64(s.keys[kid])) : null),
    async oracle(kid, s, cfg) {
      if (s.keys[kid]) return aes(unb64(s.keys[kid]));
      const r = await fetch(`${cfg.oracle.endpoint}/keys/${encodeURIComponent(kid)}`, { headers: { Authorization: `Bearer ${s.token}` } });
      if (!r.ok) return null;
      const { key } = await r.json();
      s.keys[kid] = key; write(s); // cache de sesión
      return aes(unb64(key));
    }
  };

  async function login(user, pass) {
    if (!subtle) throw new Error('na');
    const cfg = await loadConfig();
    const res = await adapters[cfg.adapter || 'local'](user.trim(), pass, cfg);
    if (!res) return null;
    const s = { ...res, adapter: cfg.adapter || 'local', exp: Date.now() + (cfg.sessionHours || 8) * 3600e3 };
    write(s); emit(); return s;
  }
  function logout() { write(null); emit(); }
  const has = kid => { const s = read(); return !!s && (kid in (s.keys || {}) || !!s.courses?.includes(kid)); };
  async function key(kid) {
    const s = read(); if (!s || !subtle) return null;
    const cfg = await loadConfig();
    return keyProviders[s.adapter || 'local'](kid, s, cfg);
  }
  /** Descifra un sobre { kid, iv, ct, zip } → HTML, o null si no hay llave. */
  async function decrypt(env) {
    const k = await key(env.kid); if (!k) return null;
    let bytes = await unseal(k, env);
    if (env.zip === 'gzip') bytes = new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer());
    return new TextDecoder().decode(bytes);
  }

  // ---------- interfaz (Shadow DOM: funciona igual en páginas del sitio y en páginas sueltas) ----------
  let host, root;
  function ui() {
    if (root) return root;
    host = document.createElement('div'); host.id = 'eu97-auth';
    root = host.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        :host { all: initial; }
        dialog { border: 1px solid var(--line-strong, #31465f); border-radius: 16px; padding: 0; width: min(92vw, 380px);
                 background: var(--surface, #101a26); color: var(--ink, #e8eef5); box-shadow: 0 30px 60px -20px rgba(0,0,0,.5);
                 font: 15px/1.5 "IBM Plex Sans", system-ui, sans-serif; }
        dialog::backdrop { background: rgba(8, 14, 22, .55); backdrop-filter: blur(3px); }
        form, .acc { padding: 26px 26px 22px; display: grid; gap: 14px; }
        h2 { margin: 0; font-size: 20px; letter-spacing: -.01em; }
        .eyebrow { font: 600 11px "IBM Plex Mono", ui-monospace, monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--accent, #ff8a4c); }
        label { display: grid; gap: 6px; font-size: 13px; color: var(--ink-2, #aab9ca); }
        input { font: inherit; padding: 10px 12px; border-radius: 10px; border: 1px solid var(--line-strong, #31465f); background: var(--bg, #0a111a); color: var(--ink, #e8eef5); }
        input:focus { outline: none; border-color: var(--primary, #4d86b8); box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary, #4d86b8) 25%, transparent); }
        .row { display: flex; gap: 10px; justify-content: flex-end; margin-top: 4px; }
        button { font: 600 14px "IBM Plex Sans", system-ui, sans-serif; padding: 10px 16px; border-radius: 10px; cursor: pointer; border: 1px solid transparent; }
        .go { background: var(--primary, #4d86b8); color: #fff; }
        .go[disabled] { opacity: .6; cursor: progress; }
        .ghost { background: transparent; color: var(--ink, #e8eef5); border-color: var(--line-strong, #31465f); }
        .err { min-height: 1.2em; margin: 0; font-size: 13px; color: var(--accent, #ff8a4c); }
        .hint { margin: 0; font-size: 12px; color: var(--ink-3, #7f90a4); }
        .who b { display: block; font-size: 18px; }
        ul { margin: 0; padding-left: 18px; font-size: 13px; color: var(--ink-2, #aab9ca); }
      </style>
      <dialog id="login" aria-labelledby="lt">
        <form method="dialog" id="f" novalidate>
          <span class="eyebrow">EU97</span>
          <h2 id="lt"></h2>
          <label><span id="lu"></span><input name="u" autocomplete="username" required></label>
          <label><span id="lp"></span><input name="p" type="password" autocomplete="current-password" required></label>
          <p class="err" id="e" role="alert"></p>
          <div class="row"><button type="button" class="ghost" id="c"></button><button class="go" id="g"></button></div>
          <p class="hint" id="h"></p>
        </form>
      </dialog>
      <dialog id="account" aria-labelledby="at">
        <div class="acc">
          <span class="eyebrow">EU97</span>
          <div class="who"><span id="aw"></span><b id="an"></b></div>
          <div><span id="ac" class="hint"></span><ul id="al"></ul></div>
          <div class="row"><button type="button" class="ghost" id="ax"></button><button type="button" class="go" id="ao"></button></div>
        </div>
      </dialog>`;
    document.body.appendChild(host);
    return root;
  }

  function openLogin() {
    const r = ui(), d = r.getElementById('login'), f = r.getElementById('f'), e = r.getElementById('e'), g = r.getElementById('g');
    r.getElementById('lt').textContent = t('title'); r.getElementById('lu').textContent = t('user'); r.getElementById('lp').textContent = t('pass');
    r.getElementById('c').textContent = t('cancel'); g.textContent = t('go'); r.getElementById('h').textContent = t('hint');
    e.textContent = ''; f.reset();
    return new Promise(resolve => {
      const done = ok => { f.onsubmit = null; d.onclose = null; if (d.open) d.close(); resolve(ok); };
      r.getElementById('c').onclick = () => done(false);
      d.onclose = () => resolve(!!read());
      f.onsubmit = async ev => {
        ev.preventDefault();
        if (!f.u.value || !f.p.value) { e.textContent = t('bad'); return; }
        g.disabled = true; g.textContent = t('busy'); e.textContent = '';
        try {
          const s = await login(f.u.value, f.p.value);
          if (s) done(true); else { e.textContent = t('bad'); f.p.select(); }
        } catch (err) { e.textContent = err.message === 'na' ? t('na') : t('net'); }
        g.disabled = false; g.textContent = t('go');
      };
      d.showModal(); f.u.focus();
    });
  }

  async function openAccount() {
    const s = read(); if (!s) return openLogin();
    const r = ui(), d = r.getElementById('account');
    let titles = {};
    try {
      const cat = await fetch('/cursos/catalog.json').then(x => x.json());
      cat.areas.forEach(a => a.courses.forEach(c => { titles[c.id] = c.title[lang()] || c.title.en; }));
    } catch { /* sin catálogo */ }
    r.getElementById('aw').textContent = t('who'); r.getElementById('an').textContent = s.name;
    r.getElementById('ac').textContent = t('courses');
    r.getElementById('al').innerHTML = Object.keys(s.keys || {}).map(k => `<li>${(titles[k] || k).replace(/</g, '&lt;')}</li>`).join('');
    r.getElementById('ax').textContent = t('close'); r.getElementById('ao').textContent = t('out');
    r.getElementById('ax').onclick = () => d.close();
    r.getElementById('ao').onclick = () => { d.close(); logout(); };
    d.showModal();
  }

  // ---------- píldora de sesión de la barra superior ----------
  function paintChip() {
    const chip = document.querySelector('.session-chip'); if (!chip) return;
    const label = chip.querySelector('.session-chip__label'); const s = read();
    chip.dataset.state = s ? 'in' : 'out';
    if (label) {
      if (s) { label.removeAttribute('data-i18n'); label.textContent = s.name.split(' ')[0]; }
      else { label.setAttribute('data-i18n', 'topbar.guest'); label.textContent = window.SiteI18n?.t('topbar.guest') || t('guest'); }
    }
  }
  function wireChip() {
    const chip = document.querySelector('.session-chip'); if (!chip || chip.dataset.wired) return;
    chip.dataset.wired = '1';
    chip.addEventListener('click', () => (read() ? openAccount() : openLogin()));
    paintChip();
  }
  document.addEventListener('auth:change', paintChip);
  window.addEventListener('topbar:ready', wireChip);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wireChip); else wireChip();

  window.SiteAuth = { ready: loadConfig(), current: read, login, logout, has, key, decrypt, openLogin, openAccount };
})();
