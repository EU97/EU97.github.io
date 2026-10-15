// Uso: node tools/check-links.mjs [--inventory]
// Revisa href/src locales de los HTML y los "url" de los catálogos JSON. Con --inventory escribe docs/inventory.md.
import { readdirSync, readFileSync, existsSync, statSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKIP = new Set(['node_modules', '.git', 'docs', 'tools']);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name.endsWith('.html') && !name.startsWith('_')) out.push(full); // _plantilla.html y similares no se publican
  }
  return out;
}

function resolveTarget(fromFile, ref) {
  let clean = decodeURIComponent(ref.split('#')[0].split('?')[0]);
  if (!clean) return null;
  const base = clean.startsWith('/') ? path.join(root, clean) : path.resolve(path.dirname(fromFile), clean);
  if (existsSync(base) && statSync(base).isDirectory()) return path.join(base, 'index.html');
  return base;
}

const pages = walk(root);
const rows = [];
const broken = [];
const re = /(?:href|src)\s*=\s*["']([^"']+)["']/gi;

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const rel = path.relative(root, file);
  const links = new Set();
  for (const m of html.matchAll(re)) {
    const ref = m[1].trim();
    if (/^(https?:|mailto:|tel:|data:|javascript:|#|\{)/i.test(ref) || ref.includes('${')) continue;
    links.add(ref);
  }
  for (const ref of links) {
    const target = resolveTarget(file, ref);
    if (!target) continue;
    const ok = existsSync(target);
    rows.push({ from: rel, ref, ok });
    if (!ok) broken.push({ from: rel, ref });
  }
}

// Catálogos JSON: cada "url" local debe existir.
const CATALOGS = ['cursos/catalog.json', 'herramientas/catalog.json'];
for (const cat of CATALOGS) {
  const file = path.join(root, cat);
  if (!existsSync(file)) continue;
  const urls = [];
  JSON.parse(readFileSync(file, 'utf8'), (k, v) => { if (k === 'url' && typeof v === 'string') urls.push(v); return v; });
  for (const ref of urls) {
    if (/^https?:/i.test(ref)) continue;
    const ok = existsSync(resolveTarget(file, ref));
    rows.push({ from: cat, ref, ok });
    if (!ok) broken.push({ from: cat, ref });
  }
}

if (process.argv.includes('--inventory')) {
  let md = '# Inventario de rutas y enlaces locales\n\nGenerado con `node tools/check-links.mjs --inventory`.\n\n## Páginas HTML\n\n';
  for (const p of pages) md += `- \`${path.relative(root, p)}\`\n`;
  md += '\n## Enlaces locales por página\n';
  for (const rel of [...pages.map(p => path.relative(root, p)), ...CATALOGS]) {
    const mine = rows.filter(r => r.from === rel);
    if (!mine.length) continue;
    md += `\n### ${rel}\n\n`;
    for (const r of mine) md += `- ${r.ok ? '' : '**ROTO** '}\`${r.ref}\`\n`;
  }
  md += `\n## Enlaces rotos (${broken.length})\n\n`;
  md += broken.length ? broken.map(b => `- \`${b.from}\` → \`${b.ref}\``).join('\n') : 'Ninguno.';
  writeFileSync(path.join(root, 'docs', 'inventory.md'), md + '\n');
}

console.log(`${pages.length} páginas, ${rows.length} enlaces locales, ${broken.length} rotos`);
for (const b of broken) console.log(`ROTO  ${b.from} -> ${b.ref}`);
process.exit(broken.length ? 1 : 0);
