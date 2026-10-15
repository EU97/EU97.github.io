// Extrae los STL embebidos en la presentación S01 (ensamble del exprimidor) y actualiza models/catalog.json.
// Uso: node tools/extract-stl.mjs
// Fuente: _privado/cursos/dibujo-computarizado/S01-fundamentos-cad.html (window.D.stl.<ensamble>[]).
// Salida: models/<ensamble>/<pieza>.stl y la entrada del ensamble en models/catalog.json.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(root, '_privado/cursos/dibujo-computarizado/S01-fundamentos-cad.html');
const CATALOG = path.join(root, 'models/catalog.json');
const TITLES = { exprimidor: { es: 'Exprimidor de cítricos', en: 'Citrus juicer' } };

// Lee el objeto JSON que empieza en `start` contando llaves fuera de cadenas.
function readObject(s, start) {
  let depth = 0, inStr = false, esc = false;
  for (let i = start; i < s.length; i++) {
    const c = s[i];
    if (inStr) { if (esc) esc = false; else if (c === '\\') esc = true; else if (c === '"') inStr = false; continue; }
    if (c === '"') inStr = true;
    else if (c === '{') depth++;
    else if (c === '}' && --depth === 0) return JSON.parse(s.slice(start, i + 1));
  }
  throw new Error('Objeto JSON sin cerrar');
}

const html = readFileSync(SRC, 'utf8');
const at = html.indexOf('window.D=');
if (at < 0) throw new Error('No se encontró window.D en S01');
const D = readObject(html, html.indexOf('{', at));

const catalog = existsSync(CATALOG) ? JSON.parse(readFileSync(CATALOG, 'utf8')) : { schema: 'models/1', models: [] };
for (const [id, parts] of Object.entries(D.stl || {})) {
  const dir = path.join(root, 'models', id);
  mkdirSync(dir, { recursive: true });
  const entry = {
    id, kind: 'assembly', title: TITLES[id] || { es: id, en: id }, units: 'mm',
    source: 'Dibujo Computarizado · S01', parts: []
  };
  for (const p of parts) {
    const file = `${p.nombre}.stl`;
    writeFileSync(path.join(dir, file), Buffer.from(p.stl, 'base64'));
    entry.parts.push({ name: p.nombre, file: `/models/${id}/${file}`, color: p.color, material: p.material, qty: p.cantidad, explode: p.explosion });
    console.log(`models/${id}/${file}  (${(Buffer.from(p.stl, 'base64').length / 1024).toFixed(0)} KB) · ${p.material}`);
  }
  catalog.models = catalog.models.filter(m => m.id !== id).concat(entry);
}
writeFileSync(CATALOG, JSON.stringify(catalog, null, 2) + '\n');
console.log(`models/catalog.json: ${catalog.models.length} modelos`);
