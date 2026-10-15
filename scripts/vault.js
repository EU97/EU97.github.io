/* Cascarón de página protegida (Fase 6): pide iniciar sesión y descifra el contenido en el navegador.
   El sobre cifrado está en <script type="application/json" id="eu97-vault">. Requiere i18n.js y auth.js. */
(async () => {
  'use strict';
  const env = JSON.parse(document.getElementById('eu97-vault').textContent);
  const msg = document.getElementById('vault-msg');
  const btn = document.getElementById('vault-login');

  SiteI18n.add({
    es: { 'vault.k': 'Contenido para alumnos', 'vault.lede': 'Este recurso está protegido. Inicia sesión con tu cuenta de alumno para abrirlo.',
      'vault.go': 'Iniciar sesión', 'vault.back': 'Volver a cursos', 'vault.noaccess': 'Tu cuenta no tiene acceso a este curso.',
      'vault.opening': 'Abriendo…', 'vault.fail': 'No se pudo abrir el contenido. Vuelve a iniciar sesión.' },
    en: { 'vault.k': 'Student content', 'vault.lede': 'This resource is protected. Sign in with your student account to open it.',
      'vault.go': 'Sign in', 'vault.back': 'Back to courses', 'vault.noaccess': 'Your account has no access to this course.',
      'vault.opening': 'Opening…', 'vault.fail': 'The content could not be opened. Please sign in again.' }
  });

  let busy = false;
  async function open() {
    if (busy || !SiteAuth.current()) return false;
    if (!SiteAuth.has(env.kid)) { msg.textContent = SiteI18n.t('vault.noaccess'); return false; }
    busy = true; msg.textContent = SiteI18n.t('vault.opening');
    try {
      const html = await SiteAuth.decrypt(env);
      if (html) { document.open(); document.write(html); document.close(); return true; }
    } catch { msg.textContent = SiteI18n.t('vault.fail'); }
    busy = false;
    return false;
  }

  if (await open()) return;
  document.body.dataset.state = 'locked';
  btn.addEventListener('click', async () => { if (SiteAuth.current() || await SiteAuth.openLogin()) await open(); });
  document.addEventListener('auth:change', () => open()); // también si inicia sesión desde la píldora de la barra
})();
