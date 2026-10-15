# Acceso de alumnos y cifrado (Fases 5 y 6)

## Cómo funciona

1. Cada curso protegido tiene una **llave de curso** (AES-GCM 256) en `_privado/keys.json`.
2. Cada usuario tiene una **llave personal** (`_privado/user-keys.json`). Las llaves de sus cursos se guardan envueltas
   con esa llave personal en `auth/users.json`.
3. La llave personal está envuelta con una llave derivada de la contraseña (PBKDF2-SHA256, 210 000 iteraciones).
4. Al iniciar sesión, el navegador deriva la llave, abre la llave personal (si falla, la contraseña es incorrecta) y
   después las llaves de curso. La sesión vive en `sessionStorage` (8 h) y se borra al cerrar la pestaña o la sesión.
5. Las páginas protegidas se publican como un **cascarón** con el HTML comprimido y cifrado. `scripts/vault.js` lo
   descifra en el navegador y lo muestra con la misma URL.

Páginas protegidas = recursos de `cursos/catalog.json` con `"access": "login"`.

## Límites (léelos)

- En el **sitio publicado** no hay contraseñas, llaves ni contenido protegido en claro.
- En el **repositorio** sí: `_privado/` contiene las fuentes y las llaves maestras. Jekyll no publica carpetas que
  empiezan con `_`, pero cualquiera con acceso al repositorio puede leerlas. Si el repositorio es público, esto es un
  filtro de interfaz, no seguridad real. La seguridad real llega con el adaptador Oracle (abajo).
- Si se agrega un archivo `.nojekyll`, `_privado/` pasaría a publicarse: no hacerlo sin mover `_privado/` fuera del sitio.

## Tareas comunes

```bash
# Crear una cuenta (sin --password genera una y la imprime una sola vez)
node tools/auth-users.mjs add jperez --name "Juan Pérez" --courses dsm,dibujo-computarizado
node tools/auth-users.mjs passwd jperez          # nueva contraseña
node tools/auth-users.mjs courses jperez --courses all
node tools/auth-users.mjs remove jperez
node tools/auth-users.mjs list

# Editar o proteger una página
#   1. Editar la fuente en _privado/<ruta>  (o poner "access": "login" en el catálogo a una página pública)
#   2. Volver a cifrar:
node tools/encrypt-courses.mjs
```

## Migración a Oracle Autonomous Database + OCI Vault

`/auth/config.json` → `"adapter": "oracle"` y `"oracle": { "endpoint": "https://<ords>/eu97" }`.
`scripts/auth.js` ya implementa el cliente; el servidor debe ofrecer:

| Método | Ruta | Entrada | Respuesta |
|---|---|---|---|
| `POST` | `/auth/login` | `{ "user", "password" }` | `200 { "token", "name", "roles", "courses": ["dsm", …] }` · `401` |
| `GET` | `/keys/{kid}` | cabecera `Authorization: Bearer <token>` | `200 { "key": "<base64 de 32 bytes>" }` · `403` |

- Las llaves de curso se guardan en OCI Vault; ORDS valida el token y solo entrega las llaves de los cursos del usuario.
- `tools/encrypt-courses.mjs` sigue cifrando igual; solo cambia de dónde sale la llave (exportarla de Vault en vez de
  `_privado/keys.json`). Con eso, `_privado/keys.json` y `_privado/user-keys.json` pueden salir del repositorio.
