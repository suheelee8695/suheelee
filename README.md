# suheelee.com

Personal portfolio of Suhee Lee — UX/UI Designer based in Berlin.

Built with [Astro](https://astro.build/). Deployed to [GitHub Pages](https://pages.github.com/) at [suheelee.com](https://suheelee.com).

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to ./dist
npm run preview  # preview the production build
```

## Project structure

```
src/
  content/work/        # case studies as Markdown (frontmatter-driven)
  pages/               # routes — index, about, contact, 404, work/[slug]
  layouts/             # Base.astro, CaseStudy.astro
  components/          # Nav.astro, Footer.astro
  styles/global.css    # design tokens, typography, base
public/
  images/              # all project imagery
  CNAME                # custom domain for GitHub Pages
.github/workflows/
  deploy.yml           # CI/CD: build + deploy on push to main
```

## Adding a case study

Create `src/content/work/<slug>.md`:

```yaml
---
title: "Project name"
tagline: "One-line hook for hero/cards"
summary: "2–3 sentence description shown on the home tile"
cover: "/images/cover.png"     # full-width hero image on case study page
tile: "/images/tile.png"       # square-ish image used on the home grid
accent: "orange"               # orange | pink | lime | blue | violet
role: "Lead Product Designer"  # optional
year: "2025"                   # optional
tags: ["UX research", "Mobile"]
featured: true                 # shows in top featured grid
order: 5                       # sort order on home (lower = earlier)
---

## Overview

Markdown body — supports headings, lists, links, and inline `<figure>`/`<img>` for images.
Use `class="figure-wide"` on a figure to break out wider than the prose column.
```

That's it — the route at `/work/<slug>` and home tile are wired automatically.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml` which builds and publishes to GitHub Pages. The custom domain (`suheelee.com`) is set via `public/CNAME`. In GitHub repo settings → Pages, set source to **GitHub Actions**.
