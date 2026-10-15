// Utilidades criptográficas compartidas por tools/auth-users.mjs y tools/encrypt-courses.mjs.
// Mismo formato que scripts/auth.js en el navegador: AES-GCM 256 + PBKDF2-SHA256, base64.
import { webcrypto } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const { subtle } = webcrypto;
export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const ITERATIONS = 210000;

export const b64 = buf => Buffer.from(buf).toString('base64');
export const unb64 = s => new Uint8Array(Buffer.from(s, 'base64'));
export const random = n => webcrypto.getRandomValues(new Uint8Array(n));

const aes = raw => subtle.importKey('raw', raw, 'AES-GCM', false, ['encrypt', 'decrypt']);

export async function kek(password, salt, iterations = ITERATIONS) {
  const base = await subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
  return subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}

/** Cifra bytes con una llave (CryptoKey o bytes crudos). */
export async function seal(key, data) {
  const k = key instanceof Uint8Array ? await aes(key) : key;
  const iv = random(12);
  const ct = await subtle.encrypt({ name: 'AES-GCM', iv }, k, data);
  return { iv: b64(iv), ct: b64(ct) };
}

export async function unseal(key, box) {
  const k = key instanceof Uint8Array ? await aes(key) : key;
  return new Uint8Array(await subtle.decrypt({ name: 'AES-GCM', iv: unb64(box.iv) }, k, unb64(box.ct)));
}

/** Sobre para una página: HTML comprimido con gzip y cifrado con la llave del curso. */
export async function envelope(kid, keyRaw, html, title) {
  const box = await seal(keyRaw, gzipSync(Buffer.from(html, 'utf8')));
  return { v: 1, alg: 'AES-GCM', zip: 'gzip', kid, title, ...box };
}

// ---------- Archivos ----------
export const FILES = {
  users: path.join(root, 'auth/users.json'),          // público: sales y llaves envueltas
  keys: path.join(root, '_privado/keys.json'),        // privado: llave de cada curso
  userKeys: path.join(root, '_privado/user-keys.json') // privado: llave personal y cursos de cada usuario
};
export const readJSON = (f, dflt) => (existsSync(f) ? JSON.parse(readFileSync(f, 'utf8')) : dflt);
export function writeJSON(f, data) { mkdirSync(path.dirname(f), { recursive: true }); writeFileSync(f, JSON.stringify(data, null, 2) + '\n'); }

/** Vuelve a envolver las llaves de curso para cada usuario según sus cursos ("all" = todos). */
export async function syncUsers() {
  const keys = readJSON(FILES.keys, {});
  const priv = readJSON(FILES.userKeys, {});
  const pub = readJSON(FILES.users, { v: 1, kdf: { alg: 'PBKDF2-SHA256', iterations: ITERATIONS }, users: [] });
  for (const u of pub.users) {
    const p = priv[u.user];
    if (!p) { console.warn(`Sin llave privada para ${u.user}; se omite.`); continue; }
    const uk = unb64(p.uk);
    u.keys = {};
    for (const [kid, raw] of Object.entries(keys)) {
      if (p.courses.includes('all') || p.courses.includes(kid)) u.keys[kid] = await seal(uk, unb64(raw));
    }
  }
  writeJSON(FILES.users, pub);
  return pub;
}
