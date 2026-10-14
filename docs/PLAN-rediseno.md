# Plan de rediseño — portafolio de ingeniería

Rama de trabajo: `feat/portfolio-redesign` (nunca trabajar sobre `main`).
Retomar: `git checkout feat/portfolio-redesign`, revisar la primera fase sin marcar y sus verificaciones.

## Decisiones

- Todo sigue en GitHub Pages (`eu97.github.io`), sin backend.
- **Audiencia principal: la industria.** La portada vende servicios de I+D aplicada (metrología, control, validación). Docencia, cursos, herramientas y código abierto aparecen solo como enlaces secundarios hacia sus subpáginas (`/cursos`, `/herramientas`, GitHub).
- **Narrativa** (tomada de las referencias davisryan.tech, sh.consulting, focusedperspectives.com y robwalling.com como forma de posicionarse, no como estilo): postura clara en el hero → problemas en voz de planta → método Medir · Diseñar · Validar → casos (reto, intervención, resultado) → credenciales con cifras → contacto.
- **Estilo propio, no genérico:** motivo de hoja de dibujo técnico (cajetín, marcas de esquina, regla, lecturas monoespaciadas), IBM Plex Sans/Mono, azul acero como color principal y naranja solo en detalles. Claro y oscuro. ES/EN.
- **3D = objetos animados e interactivos**, no solo visores: escenas que reaccionan al cursor, al clic y al scroll (`scripts/probe-cell.js`), más animaciones técnicas en SVG. Los CAD definitivos llegan después y reemplazan la pieza de prueba.
- Rutas en un solo dominio: `/cursos`, `/herramientas`. La nueva portada se construye en `/v2/` y reemplaza a `/` en la Fase 4.
- Simuladores: no se rediseñan; solo reciben una barra superior común.
- Login: usuarios fijos (hash) como filtro de interfaz; adaptador reemplazable por Oracle Autonomous Database.
- Cifrado: sobre AES-GCM con `KeyProvider` (local ahora; Oracle ADB + OCI Vault después). Sin seguridad real mientras las llaves estén en el repositorio.
- 3D técnico: visor común `scripts/viewer3d.js` (three.js r128, igual que S01) y pieza de prueba procedural `models/pruebas/brida-eu97.stl` (`tools/make-test-part.mjs`).
- Cada fase deja capturas en `docs/previews/faseN/`. Línea base en `docs/baseline/`.

## Datos pendientes del autor (para la portada)

- Métrica de resultado por caso (los casos muestran "Métrica por confirmar"): p. ej. reducción de no conformidades (FEMSA), tiempo muerto evitado (Heineken), Cpk o scrap antes/después (Magna).
- Confirmar qué clientes se pueden nombrar y cuáles van como "Tier-1 automotriz" anónimo.
- Foto profesional y, si existen, imágenes o videos propios de proyectos (túnel de viento, plataformas UAV).
- Socios industriales: el sitio actual dice 6; confirmar la lista.

## Fases

- [x] **-1. Preparación**: rama, este plan.
- [x] **-1b. Línea base**: capturas del sitio actual en `docs/baseline/`.
- [x] **0. Inventario**: `docs/inventory.md` (enlaces y rutas) y catálogo de cursos por área (`docs/catalog-draft.json`).
- [x] **1. Sistema de diseño**: `styles/site.css` (convive con `main.css` hasta la Fase 4), `scripts/i18n.js`, `scripts/motion.js`, `scripts/topbar.js`, guía de estilo en `/styleguide/`. Vista previa: `docs/previews/fase1/index.md`.
- [x] **1b. Banco de pruebas 3D**: `scripts/viewer3d.js` (API `mount`/`load`/`setView`/`setWireframe`/`snapshot`/`dispose`, montaje diferido, tema claro/oscuro), pieza de prueba y panel en `/styleguide/#modelo3d`. `tools/screenshot.mjs` espera a que los visores terminen. Vista previa: `docs/previews/fase1b/index.md`.
- [~] **2. Home para industria** (`/v2/`): hero con celda de medición interactiva, problemas, método con animaciones SVG, casos, trayectoria, enlaces secundarios y contacto. Vista previa: `docs/previews/fase2/index.md`. Falta: métricas reales de los casos y revisión del autor.
- [ ] **3. Hubs**: `cursos/` y `herramientas/` con catálogos JSON.
- [ ] **4. Reorganización**: mover carpetas, redirecciones, rutas absolutas; `/v2/` pasa a `/` y los enlaces secundarios apuntan a `/cursos/` y `/herramientas/`.
- [ ] **5. Login con usuarios fijos**: `scripts/auth.js`.
- [ ] **6. Cifrado migrable**: `tools/encrypt-courses.mjs`, `KeyProvider`.
- [ ] **7. Modelos 3D**: `tools/extract-stl.mjs`, CAD definitivos y más escenas interactivas (p. ej. banco de pruebas o mecanismo ligado al scroll) sobre `viewer3d.js` y `probe-cell.js`.

## Verificación por fase

1. `git branch --show-current` no es `main`.
2. `python3 -m http.server 8000` y `node tools/screenshot.mjs <fase>`.
3. Revisar `docs/previews/faseN/index.md`.
4. Sin enlaces rotos (`node tools/check-links.mjs`).
5. Claro/oscuro, ES/EN, escritorio/móvil.
6. `prefers-reduced-motion` desactiva las animaciones.

## Límites conocidos

- Login y cifrado con llaves en el repositorio no son seguridad.
- La seguridad real llega solo con llaves entregadas por Oracle ADB y OCI Vault.
