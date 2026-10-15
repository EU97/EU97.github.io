# Edgar Ulises Rojo Rodriguez — EU97 Portfolio

[![Portfolio](https://img.shields.io/badge/Portfolio-eu97.github.io-blue?style=flat-square&logo=github)](https://eu97.github.io)

Personal portfolio website for **Edgar Ulises Rojo Rodriguez** — Systems Engineer, Researcher, and Associate Professor at FIME-UANL.

---

## About

M.Sc. in Aeronautical Engineering and Ph.D. Candidate with 8+ years of experience in:

- **Control Systems & Automation**
- **Industrial Metrology & Advanced Manufacturing**
- **Applied AI & Intelligent Systems**
- **Mechatronics Engineering**

Currently serving as Associate Professor at [FIME-UANL](https://www.fime.uanl.mx/) and conducting industry-engaged research bridging physical systems with intelligent automation.

---

## Site structure

| Route | Content |
|---|---|
| `/` | Industry-focused home: identity, interactive measurement cell, method, case studies, track record, contact |
| `/cursos/` | Course hub generated from `cursos/catalog.json` (areas → courses → resources) |
| `/cursos/<course>/` | Course pages and activities (Dibujo Computarizado, DSM, Ingeniería de Precisión, Taller de Mecatrónica) |
| `/herramientas/` | Tools hub generated from `herramientas/catalog.json` (simulators, open source, outreach) |
| `/herramientas/<tool>/` | Browser simulators (flight instruments, Garmin G1000, aircraft systems, fluid dynamics) |
| `/herramientas/visor-3d/` | 3D assembly viewer (exploded view) fed by `models/catalog.json` |
| `/proyectos/` | Open-source and outreach project pages |
| `/blog/` | Blog index generated from `blog/posts.json`; posts are plain HTML files in `blog/posts/` |
| `/styleguide/` | Design system preview (not linked publicly) |

Old URLs (`/curso/…`, `/addons/…`, `/projects/…`, `/CMindex.html`) redirect to their new location (`docs/redirects.json`).

### Adding content

- **Course or resource:** add an object to `cursos/catalog.json`.
- **Tool or project:** add an object to `herramientas/catalog.json`.
- **Moved page:** add `"old": "new"` to `docs/redirects.json` and run `node tools/redirects.mjs`.
- **Blog post:** copy `blog/_plantilla.html` to `blog/posts/<slug>.html`, fill title/description/date/tags, write HTML inside `<article>`, run `node tools/blog.mjs`.
- **3D model:** add the STL under `models/` and an entry in `models/catalog.json` (parts with color, material and explode vector).
- **Student accounts / protected pages:** `node tools/auth-users.mjs add <user> …` and `node tools/encrypt-courses.mjs` (see `docs/AUTH.md`).

### Checks

```bash
python3 -m http.server 8000          # local preview
node tools/check-links.mjs           # local links + catalog URLs
node tools/screenshot.mjs <phase> /  # light/dark · ES/EN · desktop/mobile captures
```

---

## Tech stack

- **HTML5 / CSS3 / JavaScript**, no build step for the site (the flight-instruments simulator ships a Parcel bundle and its source in `herramientas/instrumentos-vuelo/`)
- **three.js r128** for the interactive 3D measurement cell and STL viewer
- Light/dark themes, **Spanish / English**, `prefers-reduced-motion` support

---

## License

© Edgar Ulises Rojo Rodriguez. All rights reserved.
