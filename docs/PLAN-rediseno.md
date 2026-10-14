# Plan de rediseño — portafolio de ingeniería

Rama de trabajo: `feat/portfolio-redesign` (nunca trabajar sobre `main`).
Retomar: `git checkout feat/portfolio-redesign`, revisar la primera fase sin marcar y sus verificaciones.

## Decisiones

- Todo sigue en GitHub Pages (`eu97.github.io`), sin backend.
- Rutas en un solo dominio: `/cursos`, `/herramientas`.
- Estilo: referencia thanhvtran.com, adaptado a ingeniería. Azul acero como color principal, naranja solo en detalles. Claro y oscuro. ES/EN.
- Simuladores: no se rediseñan; solo reciben una barra superior común.
- Login: usuarios fijos (hash) como filtro de interfaz; adaptador reemplazable por Oracle Autonomous Database.
- Cifrado: sobre AES-GCM con `KeyProvider` (local ahora; Oracle ADB + OCI Vault después). Sin seguridad real mientras las llaves estén en el repositorio.
- 3D: reutilizar el visor y los STL del exprimidor de `addons/S01-fundamentos-cad.html`.
- Cada fase deja capturas en `docs/previews/faseN/`. Línea base en `docs/baseline/`.

## Fases

- [x] **-1. Preparación**: rama, este plan.
- [x] **-1b. Línea base**: capturas del sitio actual en `docs/baseline/`.
- [x] **0. Inventario**: `docs/inventory.md` (enlaces y rutas) y catálogo de cursos por área (`docs/catalog-draft.json`).
- [x] **1. Sistema de diseño**: `styles/site.css` (convive con `main.css` hasta la Fase 4), `scripts/i18n.js`, `scripts/motion.js`, `scripts/topbar.js`, guía de estilo en `/styleguide/`. Vista previa: `docs/previews/fase1/index.md`.
- [ ] **2. Home**: hero, resumen, experiencia, proyectos, docencia por áreas, herramientas, contacto.
- [ ] **3. Hubs**: `cursos/` y `herramientas/` con catálogos JSON.
- [ ] **4. Reorganización**: mover carpetas, redirecciones, rutas absolutas.
- [ ] **5. Login con usuarios fijos**: `scripts/auth.js`.
- [ ] **6. Cifrado migrable**: `tools/encrypt-courses.mjs`, `KeyProvider`.
- [ ] **7. Modelos 3D**: `tools/extract-stl.mjs`, `scripts/viewer3d.js`.

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
