// Uso: node tools/check-links.mjs [--inventory]
// Revisa href/src locales de los HTML. Con --inventory escribe docs/inventory.md.
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
    else if (name.endsWith('.html')) out.push(full);
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

if (process.argv.includes('--inventory')) {
  let md = '# Inventario de rutas y enlaces locales\n\nGenerado con `node tools/check-links.mjs --inventory`.\n\n## Páginas HTML\n\n';
  for (const p of pages) md += `- \`${path.relative(root, p)}\`\n`;
  md += '\n## Enlaces locales por página\n';
  for (const p of pages) {
    const rel = path.relative(root, p);
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
