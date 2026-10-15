// Cifra las páginas de curso protegidas (Fase 6).
// Uso: node tools/encrypt-courses.mjs
//
// - Páginas protegidas = recursos de cursos/catalog.json con "access": "login" y URL local.
// - La fuente en claro vive en _privado/<misma ruta> (Jekyll no publica carpetas que empiezan con "_").
//   Si una página protegida todavía está en claro en su ruta pública, se copia a _privado/ la primera vez.
// - En la ruta pública queda un "cascarón": pide iniciar sesión y descifra el contenido en el navegador.
// - Cada curso tiene su llave (AES-GCM 256) en _privado/keys.json; al final se vuelven a envolver para
//   cada usuario (tools/auth-users.mjs sync).
import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { root, FILES, b64, unb64, random, envelope, readJSON, writeJSON, syncUsers } from './lib/vault.mjs';

const MARK = 'id="eu97-vault"';
const catalog = JSON.parse(readFileSync(path.join(root, 'cursos/catalog.json'), 'utf8'));
const keys = readJSON(FILES.keys, {});
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

const toFile = url => {
  const p = path.join(root, decodeURI(url.split(/[?#]/)[0]));
  return url.endsWith('/') || (existsSync(p) && statSync(p).isDirectory()) ? path.join(p, 'index.html') : p;
};

function shell(env, title) {
  // JSON dentro de <script>: escapar "</" para que no cierre la etiqueta.
  const json = JSON.stringify(env).replace(/<\//g, '<\\/');
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <title>${esc(title)} · EU97</title>
  <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap">
  <link rel="stylesheet" href="/styles/site.css">
  <link rel="stylesheet" href="/styles/hub.css">
  <script src="/scripts/theme.js"></script>
</head>
<body class="vault" data-state="loading">
  <div data-topbar data-active="cursos"></div>
  <main class="container">
    <header class="hub-head vault__gate">
      <span class="eyebrow" data-i18n="vault.k"></span>
      <h1>${esc(title)}</h1>
      <p class="lede" data-i18n="vault.lede"></p>
      <p class="vault__actions">
        <button class="btn btn--primary" id="vault-login" type="button" data-i18n="vault.go"></button>
        <a class="btn btn--ghost" href="/cursos/" data-i18n="vault.back"></a>
      </p>
      <p class="vault__msg" id="vault-msg" role="status"></p>
    </header>
  </main>
  <script type="application/json" ${MARK}>${json}</script>
  <script src="/scripts/i18n.js"></script>
  <script src="/scripts/topbar.js"></script>
  <script src="/scripts/auth.js"></script>
  <script src="/scripts/vault.js"></script>
</body>
</html>
`;
}

let n = 0, created = 0;
for (const area of catalog.areas) for (const course of area.courses) for (const it of course.items) {
  if (it.access !== 'login' || !it.url || /^https?:/.test(it.url)) continue;
  const pub = toFile(it.url);
  const priv = path.join(root, '_privado', path.relative(root, pub));
  if (!existsSync(priv)) {
    if (existsSync(pub) && !readFileSync(pub, 'utf8').includes(MARK)) {
      mkdirSync(path.dirname(priv), { recursive: true });
      writeFileSync(priv, readFileSync(pub));
      console.log(`Migrada a _privado/: ${path.relative(root, pub)}`);
    } else { console.error(`Falta la fuente: ${path.relative(root, priv)}`); process.exitCode = 1; continue; }
  }
  if (!keys[course.id]) { keys[course.id] = b64(random(32)); created++; }
  const html = readFileSync(priv, 'utf8');
  const title = (html.match(/<title>([^<]*)<\/title>/i)?.[1] || it.title.es || course.id).trim();
  const env = await envelope(course.id, unb64(keys[course.id]), html, title);
  mkdirSync(path.dirname(pub), { recursive: true });
  writeFileSync(pub, shell(env, title));
  console.log(`Cifrada [${course.id}] ${path.relative(root, pub)}  (${(html.length / 1024).toFixed(0)} KB → ${(env.ct.length / 1024).toFixed(0)} KB)`);
  n++;
}
writeJSON(FILES.keys, keys);
await syncUsers();
console.log(`${n} páginas cifradas${created ? `, ${created} llaves de curso nuevas` : ''}. Usuarios sincronizados.`);
