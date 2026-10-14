// Uso: node tools/screenshot.mjs <fase> [ruta ...]
// Salida: docs/previews/<fase>/ (o docs/baseline/ si la fase es "baseline") y su index.md.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [phase = 'baseline', ...routes] = process.argv.slice(2);
const PAGES = routes.length ? routes : ['/'];
const outDir = path.join(root, 'docs', phase === 'baseline' ? 'baseline' : `previews/${phase}`);
mkdirSync(outDir, { recursive: true });

const PORT = 8765;
const server = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '127.0.0.1'], { cwd: root, stdio: 'ignore' });
await new Promise(r => setTimeout(r, 800));

const VIEWPORTS = { desktop: { width: 1366, height: 900 }, mobile: { width: 390, height: 844 } };
const THEMES = ['light', 'dark'];
const LANGS = ['es', 'en'];
const slug = p => (p === '/' ? 'home' : p.replace(/^\/|\/$/g, '').replace(/[^\w]+/g, '-').replace(/-html$/, ''));

const browser = await chromium.launch();
const shots = [];
try {
  for (const page_ of PAGES) {
    for (const [vpName, vp] of Object.entries(VIEWPORTS)) {
      for (const theme of THEMES) {
        for (const lang of LANGS) {
          const ctx = await browser.newContext({ viewport: vp, reducedMotion: 'reduce' });
          await ctx.addInitScript(([t, l]) => {
            localStorage.setItem('preferredTheme', t);
            localStorage.setItem('preferredLanguage', l);
          }, [theme, lang]);
          const page = await ctx.newPage();
          try {
            page.on('pageerror', e => console.error('JSERR', page_, e.message)); await page.goto(`http://127.0.0.1:${PORT}${page_}`, { waitUntil: 'load', timeout: 20000 });
            await page.waitForTimeout(600);
            // Visores y escenas 3D: los visores se montan al entrar en pantalla (se fuerzan); se espera a que terminen.
            if (await page.locator('[data-viewer3d], [data-scene]').count()) {
              await page.evaluate(() => document.querySelectorAll('[data-viewer3d]').forEach(el => window.Viewer3D?.mount(el)));
              await page.waitForFunction(() => [...document.querySelectorAll('[data-viewer3d], [data-scene]')].every(el => ['ready', 'error'].includes(el.dataset.state)), null, { timeout: 20000 });
              await page.waitForTimeout(300);
            }
            const file = `${slug(page_)}__${vpName}-${theme}-${lang}.png`;
            await page.screenshot({ path: path.join(outDir, file), fullPage: vpName === 'desktop' });
            shots.push({ page: page_, vpName, theme, lang, file });
          } catch (e) {
            console.error(`FALLO ${page_} ${vpName}/${theme}/${lang}: ${e.message}`);
          }
          await ctx.close();
        }
      }
    }
  }
} finally {
  await browser.close();
  server.kill();
}

let md = `# Vista previa — ${phase}\n\nGenerado con \`node tools/screenshot.mjs ${phase} ${PAGES.join(' ')}\`.\n`;
for (const p of PAGES) {
  md += `\n## ${p}\n\n| Escritorio claro | Escritorio oscuro |\n|---|---|\n`;
  for (const lang of LANGS) {
    const f = t => shots.find(s => s.page === p && s.vpName === 'desktop' && s.theme === t && s.lang === lang)?.file;
    md += `| ![${lang} claro](${f('light') ?? ''}) | ![${lang} oscuro](${f('dark') ?? ''}) |\n`;
  }
  md += `\nMóvil:\n\n`;
  for (const s of shots.filter(s => s.page === p && s.vpName === 'mobile')) md += `![${s.theme}-${s.lang}](${s.file}) `;
  md += '\n';
}
writeFileSync(path.join(outDir, 'index.md'), md);
console.log(`${shots.length} capturas en ${path.relative(root, outDir)}`);
