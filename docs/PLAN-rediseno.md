# Plan de rediseño — portafolio de ingeniería

Rama de trabajo: `feat/portfolio-redesign` (nunca trabajar sobre `main`).
Retomar: `git checkout feat/portfolio-redesign`, revisar la primera fase sin marcar y sus verificaciones.

## Decisiones

- Todo sigue en GitHub Pages (`eu97.github.io`), sin backend.
- **Audiencia principal: la industria.** La portada vende servicios de I+D aplicada (metrología, control, validación). Docencia, cursos, herramientas y código abierto aparecen solo como enlaces secundarios hacia sus subpáginas (`/cursos/`, `/herramientas/`).
- **Narrativa** (tomada de las referencias davisryan.tech, sh.consulting, focusedperspectives.com y robwalling.com como forma de posicionarse, no como estilo): postura clara en el hero → problemas en voz de planta → método Medir · Diseñar · Validar → casos (reto, intervención, resultado) → credenciales con cifras → contacto.
- **Estilo propio, no genérico:** motivo de hoja de dibujo técnico (cajetín, marcas de esquina, regla, lecturas monoespaciadas), IBM Plex Sans/Mono, azul acero como color principal y naranja solo en detalles. Claro y oscuro. ES/EN.
- **3D = objetos animados e interactivos**, no solo visores: escenas que reaccionan al cursor, al clic y al scroll (`scripts/probe-cell.js`), más animaciones técnicas en SVG. Los CAD definitivos llegan después y reemplazan la pieza de prueba.
- Rutas en un solo dominio: `/` (portada), `/cursos/`, `/herramientas/`, `/proyectos/`. Ver «Estructura del sitio».
- Simuladores: no se rediseñan; solo reciben una barra superior común.
- Login: usuarios fijos (hash) como filtro de interfaz; adaptador reemplazable por Oracle Autonomous Database.
- Cifrado: sobre AES-GCM con `KeyProvider` (local ahora; Oracle ADB + OCI Vault después). Sin seguridad real mientras las llaves estén en el repositorio.
- 3D técnico: visor común `scripts/viewer3d.js` (three.js r128, igual que S01) y pieza de prueba procedural `models/pruebas/brida-eu97.stl` (`tools/make-test-part.mjs`).
- Cada fase deja capturas en `docs/previews/faseN/`. Línea base en `docs/baseline/`.

## Datos pendientes del autor (para la portada)

- Métrica de resultado por caso (los casos muestran "Métrica por confirmar"): p. ej. reducción de no conformidades (FEMSA), tiempo muerto evitado (Heineken), Cpk o scrap antes/después (Magna).
- Confirmar qué clientes se pueden nombrar y cuáles van como "Tier-1 automotriz" anónimo.
- Foto para el hero: PNG con fondo transparente (recorte de busto, ~1200 px de alto) en `images/perfil/edgar.png`, y poner esa ruta en `data-photo` de `#portrait` en `index.html`. Mientras tanto se muestra una silueta provisional.
- Imágenes o videos propios de proyectos (túnel de viento, plataformas UAV).
- Socios industriales: el sitio actual dice 6; confirmar la lista.

## Estructura del sitio

```
/                         portada (index.html · styles/home.css · scripts/home.js, hero.js, probe-cell.js)
/cursos/                  hub de cursos ← cursos/catalog.json
  dibujo-computarizado/   index (vista de curso), S01, T01
  dsm/                    index, matriz-diseno-axiomatica
  ingenieria-precision/act4/  index, metodologia
  taller-mecatronica/     simulador del rover
/herramientas/            hub de herramientas ← herramientas/catalog.json
  instrumentos-vuelo/     simulador + bundle Parcel + src/
  garmin-g1000/ · sistemas-aeronave/ · dinamica-fluidos/
  visor-3d/               visor de ensambles ← models/catalog.json
/proyectos/               páginas de proyectos (código abierto y divulgación)
/blog/                    índice ← blog/posts.json · posts en blog/posts/*.html · plantilla blog/_plantilla.html
/models/                  STL (pruebas/, conjunto-brida/, exprimidor/) + catalog.json
/auth/                    config.json y users.json (público: solo datos cifrados)
/_privado/                fuentes de cursos protegidos y llaves (no se publica)
/styleguide/              guía de estilo (no pública)
/404.html                 página no encontrada
curso/, addons/, projects/, CMindex.html, v2/   solo redirecciones (docs/redirects.json)
```

## Fases

- [x] **-1. Preparación**: rama, este plan.
- [x] **-1b. Línea base**: capturas del sitio actual en `docs/baseline/`.
- [x] **0. Inventario**: `docs/inventory.md` (enlaces y rutas) y catálogo de cursos por área (borrador, migrado a `cursos/catalog.json` en la Fase 3).
- [x] **1. Sistema de diseño**: `styles/site.css` (convive con `main.css` hasta la Fase 4), `scripts/i18n.js`, `scripts/motion.js`, `scripts/topbar.js`, guía de estilo en `/styleguide/`. Vista previa: `docs/previews/fase1/index.md`.
- [x] **1b. Banco de pruebas 3D**: `scripts/viewer3d.js` (API `mount`/`load`/`setView`/`setWireframe`/`snapshot`/`dispose`, montaje diferido, tema claro/oscuro), pieza de prueba y panel en `/styleguide/#modelo3d`. `tools/screenshot.mjs` espera a que los visores terminen. Vista previa: `docs/previews/fase1b/index.md`.
- [~] **2. Home para industria** (`/`): hero de identidad (nombre destacado, áreas de especialidad vinculadas a los elementos, foto recortada sin marco con trabajos flotando alrededor: dron, escaneo, perfil aerodinámico, control; flujo potencial que rodea la figura; cifras compactas como en el sitio original), sección "En acción" con la celda de medición, problemas, método con animaciones SVG, casos, trayectoria, enlaces secundarios y contacto. Vista previa: `docs/previews/fase2/index.md`. Falta: métricas reales de los casos, avatar definitivo y revisión del autor.
- [x] **3. Hubs**: `/cursos/` y `/herramientas/` generados por `scripts/hub.js` desde `cursos/catalog.json` y `herramientas/catalog.json` (filtros por área, búsqueda, enlace por `#área`, recursos «Alumnos» y «Próximamente»); vista de curso individual (`data-hub="curso"`). Vista previa: `docs/previews/fase3/index.md`.
- [x] **4. Reorganización**: la portada nueva pasa a `/`; cursos en `/cursos/<curso>/`, simuladores en `/herramientas/<herramienta>/`, proyectos en `/proyectos/`; 21 redirecciones desde las rutas antiguas (`docs/redirects.json` + `tools/redirects.mjs`), anclajes antiguos de la portada (`#precision`, `#projects`…) traducidos, barra común en simuladores (`scripts/sim-bar.js`), página 404, scripts y artefactos huérfanos retirados, IBM Plex en todo el sitio, `check-links` valida también los catálogos. Vista previa: `docs/previews/fase4/index.md`.
- [x] **5. Login con usuarios fijos**: `scripts/auth.js` (adaptador local con `auth/users.json` + PBKDF2, adaptador Oracle con la misma interfaz), diálogo desde la píldora de sesión, recursos «Desbloqueado» en los hubs, `tools/auth-users.mjs`. Vista previa: `docs/previews/fase5/index.md`.
- [x] **6. Cifrado migrable**: `tools/encrypt-courses.mjs` (gzip + AES-GCM 256 por curso, fuentes en `_privado/`), cascarón + `scripts/vault.js`, KeyProvider local/Oracle, `_config.yml`. Modelo y límites en `docs/AUTH.md`. Vista previa: `docs/previews/fase6/index.md`.
- [x] **7. Modelos 3D**: `tools/extract-stl.mjs` (exprimidor de S01), ensamble procedural brida–eje, `models/catalog.json`, `scripts/assembly-viewer.js` y la herramienta `/herramientas/visor-3d/` (vista explosionada animada, ficha de pieza, aislamiento). Los CAD definitivos se agregan al catálogo cuando existan. Vista previa: `docs/previews/fase7/index.md`.
- [x] **8. Blog**: `/blog/` desde `blog/posts.json`; posts HTML en `blog/posts/` envueltos por `scripts/post.js` + `styles/post.css`; plantilla `blog/_plantilla.html`; `tools/blog.mjs`; dos posts con demos interactivas. Vista previa: `docs/previews/blog/index.md`.
- [ ] **9. Mejora de diseño**: nuevos esquemas de diseño sobre la base terminada (siguiente etapa).

## Verificación por fase

1. `git branch --show-current` no es `main`.
2. `python3 -m http.server 8000` y `node tools/screenshot.mjs <fase>`.
3. Revisar `docs/previews/faseN/index.md`.
4. Sin enlaces rotos (`node tools/check-links.mjs`).
5. Claro/oscuro, ES/EN, escritorio/móvil.
6. `prefers-reduced-motion` desactiva las animaciones.

## Límites conocidos

- Login y cifrado: en el sitio publicado no hay contenido protegido en claro, pero `_privado/` (fuentes y llaves) está en el repositorio. Ver `docs/AUTH.md`.
- La seguridad real llega solo con llaves entregadas por Oracle ADB y OCI Vault.
