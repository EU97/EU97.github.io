// Genera páginas de redirección en las rutas antiguas a partir de docs/redirects.json.
// Uso: node tools/redirects.mjs   (las rutas que terminan en "/" generan <ruta>/index.html)
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const map = JSON.parse(readFileSync(path.join(root, 'docs/redirects.json'), 'utf8'));
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

let n = 0;
for (const [from, to] of Object.entries(map)) {
  if (from.startsWith('_')) continue;
  const target = path.join(root, decodeURI(to), to.endsWith('/') ? 'index.html' : '');
  if (!existsSync(target)) throw new Error(`Destino inexistente: ${to}`);
  const file = path.join(root, from.endsWith('/') ? path.join(from, 'index.html') : from);
  const href = encodeURI(to);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Redirigiendo…</title>
  <meta name="robots" content="noindex">
  <link rel="canonical" href="${esc(href)}">
  <meta http-equiv="refresh" content="0; url=${esc(href)}">
  <script>location.replace(${JSON.stringify(href)} + location.search + location.hash);</script>
</head>
<body>
  <p>Esta página se movió a <a href="${esc(href)}">${esc(to)}</a>.</p>
</body>
</html>
`);
  n++;
}
console.log(`${n} redirecciones generadas`);
