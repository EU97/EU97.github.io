// Regenera el índice del blog a partir de los posts.
// Uso: node tools/blog.mjs
// Lee blog/posts/*.html (los que empiezan con "_" se ignoran) y escribe blog/posts.json, del más nuevo al más viejo.
// Cada post debe tener <title>, <meta name="description">, <meta name="post:date" content="AAAA-MM-DD">
// y opcionalmente <meta name="post:tags" content="a, b"> y <meta name="post:cover" content="/ruta.png">.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'blog/posts');
const meta = (html, name) => html.match(new RegExp(`<meta\\s+name=["']${name}["']\\s+content=["']([^"']*)["']`, 'i'))?.[1]?.trim() || '';
const text = html => (html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)?.[1] || '')
  .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');

const posts = [], problems = [];
for (const file of readdirSync(dir).filter(f => f.endsWith('.html') && !f.startsWith('_'))) {
  const html = readFileSync(path.join(dir, file), 'utf8');
  const post = {
    url: `/blog/posts/${file}`,
    title: (html.match(/<title>([^<]*)<\/title>/i)?.[1] || '').replace(/\s+[—|·-]\s+EU97$/, '').trim(),
    description: meta(html, 'description'),
    date: meta(html, 'post:date'),
    tags: meta(html, 'post:tags').split(',').map(s => s.trim()).filter(Boolean),
    lang: html.match(/<html[^>]*\blang=["']([^"']+)["']/i)?.[1] || 'es',
    minutes: Math.max(1, Math.round(text(html).trim().split(/\s+/).length / 200))
  };
  const cover = meta(html, 'post:cover'); if (cover) post.cover = cover;
  if (!post.title) problems.push(`${file}: falta <title>`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(post.date)) problems.push(`${file}: falta o es inválida <meta name="post:date"> (AAAA-MM-DD)`);
  if (!html.includes('/scripts/post.js')) problems.push(`${file}: falta <script src="/scripts/post.js"></script>`);
  posts.push(post);
}
posts.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
writeFileSync(path.join(root, 'blog/posts.json'), JSON.stringify({ updated: new Date().toISOString().slice(0, 10), posts }, null, 2) + '\n');
for (const p of posts) console.log(`${p.date}  ${p.title}  (${p.minutes} min) ${p.tags.length ? '· ' + p.tags.join(', ') : ''}`);
for (const p of problems) console.warn('AVISO ' + p);
console.log(`${posts.length} posts en blog/posts.json`);
process.exitCode = problems.length ? 1 : 0;
