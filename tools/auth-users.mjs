// Administra los usuarios fijos del sitio (Fase 5) y sus llaves de curso (Fase 6).
//
//   node tools/auth-users.mjs add <usuario> --name "Nombre" [--roles alumno] [--courses all|dsm,dibujo-computarizado] [--password X]
//   node tools/auth-users.mjs passwd <usuario> [--password X]
//   node tools/auth-users.mjs courses <usuario> --courses all|a,b
//   node tools/auth-users.mjs remove <usuario>
//   node tools/auth-users.mjs list
//   node tools/auth-users.mjs sync          (vuelve a envolver las llaves de curso; lo llama encrypt-courses)
//
// Sin --password se genera una contraseña aleatoria y se imprime una sola vez.
// auth/users.json es público (sal, llave personal envuelta con la contraseña, llaves de curso envueltas).
// _privado/user-keys.json guarda la llave personal en claro para poder añadir cursos sin pedir la contraseña.
import { FILES, ITERATIONS, b64, random, kek, seal, readJSON, writeJSON, syncUsers } from './lib/vault.mjs';

const [cmd, user, ...rest] = process.argv.slice(2);
const opt = name => { const i = rest.indexOf(`--${name}`); return i >= 0 ? rest[i + 1] : undefined; };
const list = s => (s ? s.split(',').map(x => x.trim()).filter(Boolean) : undefined);
const genPassword = () => {
  const abc = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return [...random(14)].map(b => abc[b % abc.length]).join('');
};

const pub = readJSON(FILES.users, { v: 1, kdf: { alg: 'PBKDF2-SHA256', iterations: ITERATIONS }, users: [] });
const priv = readJSON(FILES.userKeys, {});
const find = u => pub.users.find(x => x.user === u);

async function setPassword(entry, password) {
  const salt = random(16);
  const k = await kek(password, salt, pub.kdf.iterations);
  entry.salt = b64(salt);
  entry.uk = await seal(k, Buffer.from(priv[entry.user].uk, 'base64'));
}

function need(cond, msg) { if (!cond) { console.error(msg); process.exit(1); } }

switch (cmd) {
  case 'add': {
    need(user && /^[a-z0-9._-]{3,32}$/i.test(user), 'Usuario inválido (3–32 caracteres: letras, números, . _ -).');
    need(!find(user), `El usuario ${user} ya existe.`);
    const password = opt('password') || genPassword();
    priv[user] = { uk: b64(random(32)), courses: list(opt('courses')) || ['all'] };
    const entry = { user, name: opt('name') || user, roles: list(opt('roles')) || ['alumno'], salt: '', uk: null, keys: {} };
    await setPassword(entry, password);
    pub.users.push(entry);
    writeJSON(FILES.userKeys, priv); writeJSON(FILES.users, pub);
    await syncUsers();
    console.log(`Usuario ${user} creado. Cursos: ${priv[user].courses.join(', ')}`);
    if (!opt('password')) console.log(`Contraseña: ${password}`);
    break;
  }
  case 'passwd': {
    const entry = find(user); need(entry && priv[user], `No existe ${user}.`);
    const password = opt('password') || genPassword();
    await setPassword(entry, password);
    writeJSON(FILES.users, pub);
    console.log(`Contraseña de ${user} actualizada.`);
    if (!opt('password')) console.log(`Contraseña: ${password}`);
    break;
  }
  case 'courses': {
    need(find(user) && priv[user], `No existe ${user}.`);
    priv[user].courses = list(opt('courses')) || ['all'];
    writeJSON(FILES.userKeys, priv);
    await syncUsers();
    console.log(`Cursos de ${user}: ${priv[user].courses.join(', ')}`);
    break;
  }
  case 'remove': {
    need(find(user), `No existe ${user}.`);
    pub.users = pub.users.filter(x => x.user !== user); delete priv[user];
    writeJSON(FILES.users, pub); writeJSON(FILES.userKeys, priv);
    console.log(`Usuario ${user} eliminado.`);
    break;
  }
  case 'list':
    for (const u of pub.users) console.log(`${u.user.padEnd(16)} ${u.name.padEnd(24)} ${u.roles.join(',').padEnd(12)} ${(priv[u.user]?.courses || []).join(',')}  [${Object.keys(u.keys).length} llaves]`);
    break;
  case 'sync':
    await syncUsers();
    console.log('Llaves de curso sincronizadas.');
    break;
  default:
    console.log('Comandos: add, passwd, courses, remove, list, sync. Ver el encabezado de este archivo.');
}
