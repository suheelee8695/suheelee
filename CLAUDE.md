# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server at http://localhost:4321
npm run build     # production build → ./dist
npm run preview   # preview the production build locally
```

No linting or test commands are configured.

## Architecture

This is an [Astro](https://astro.build/) static site (v5) for Suhee Lee's design portfolio, deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`.

### Content layer

Case studies live in `src/content/work/*.md` and are driven entirely by frontmatter. The Astro content collection is defined in `src/content.config.ts` with a Zod schema. Key frontmatter fields:

| Field | Type | Notes |
|-------|------|-------|
| `title`, `tagline`, `summary` | string | Used in hero, tiles, meta |
| `cover` | string | `/images/...` — 16:9 hero image |
| `tile` | string | `/images/...` — 4:3 image for home grid |
| `accent` | `orange \| pink \| lime \| blue \| violet` | Tints box-shadows and hover states |
| `featured` | boolean | `true` → large featured grid; `false` → smaller "more work" grid |
| `order` | number | Sort order on home (lower = earlier) |
| `draft` | boolean | Excluded from all collections when `true` |
| `locked` | boolean | Shows password gate; SHA-256 hash checked client-side against `PASSWORD_HASH` in `CaseStudy.astro` |

A writing collection also exists (`src/content/writing/*.md`) with `title`, `description`, `date`, and `tags` — but those pages are not fully wired yet.

### Routing

- `/` → `src/pages/index.astro` — hero, featured grid, more-work grid, venture section
- `/work/[slug]` → `src/pages/work/[slug].astro` — renders each case study via `CaseStudy.astro` layout; appends a "Next project" strip cycling through sorted entries
- `/about`, `/contact`, `/side` → standalone pages
- `/notes/` → directory exists but is in progress

### Layouts & components

- `Base.astro` — HTML shell with Google Fonts (Bricolage Grotesque + Inter), GA tag (`G-439BBVEHF7`), canonical URL, OG tags
- `CaseStudy.astro` — wraps case study body; handles the password gate (SHA-256 checked via Web Crypto API, unlock state in `sessionStorage`)
- `Nav.astro`, `Footer.astro` — site-wide chrome

### Styles

All design tokens are in `src/styles/global.css` (imported by `Base.astro`). Tokens cover surfaces (`--bg`, `--bg-alt`), ink colours, accent palette, spacing scale (`--s-1` through `--s-10`), radius scale (`--r-sm` through `--r-pill`), and layout widths (`--container: 1240px`, `--container-narrow: 780px`). Component styles are co-located as `<style>` blocks inside each `.astro` file.

### Adding a case study

1. Create `src/content/work/<slug>.md` with required frontmatter (see schema above).
2. Drop images in `public/images/`.
3. The route `/work/<slug>` and home tile are wired automatically — no page file needed.

Use `class="figure-wide"` on a `<figure>` in the Markdown body to break outside the narrow prose column.
