# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio site for Suhee Lee (suheelee.com), a Senior Product Designer in Berlin. Built with **Astro 5** and deployed to GitHub Pages via the `main` branch.

## Commands

```bash
npm run dev       # start local dev server (http://localhost:4321)
npm run build     # build to ./dist
npm run preview   # preview the production build locally
```

There are no tests or linters configured. The CI pipeline (`deploy.yml`) runs `npm ci && npm run build` on every push to `main` and deploys the `./dist` output to GitHub Pages.

## Architecture

```
src/
  content/work/   # Markdown case studies (Astro Content Collections)
  pages/          # index.astro, about.astro, contact.astro, 404.astro
  layouts/        # Base.astro (shell), CaseStudy.astro (case study wrapper)
  components/     # Nav.astro, Footer.astro
  styles/         # global.css — all design tokens and shared utilities
public/images/    # static assets (referenced directly as /images/...)
```

### Content model

Case study entries live in `src/content/work/*.md` and are governed by the schema in `src/content.config.ts`. Key frontmatter fields:

| Field | Purpose |
|---|---|
| `featured` | `true` → large two-column card on homepage; `false` → smaller grid card |
| `order` | sort order on the homepage (lower = first) |
| `accent` | one of `orange / pink / lime / blue / violet` — drives hover tints and cover shadows |
| `cover` | hero image used in the case study layout (16:9) |
| `tile` | thumbnail used on the homepage cards |
| `draft` | `true` to hide from all collections queries |

Pages load the collection via `getCollection('work', e => !e.draft)` then split by `featured`. Case study URLs are `/work/<slug>` where the slug is the markdown filename without `.md`.

### Layouts

- **`Base.astro`** — full HTML shell. Accepts `title`, `description`, `current` (for nav active state), and `ogImage`. Loads Google Fonts (Bricolage Grotesque + Inter) and Google Analytics inline.
- **`CaseStudy.astro`** — wraps `Base.astro`. Renders the hero header (back link, title, tagline, meta grid), full-bleed cover image, and a `<div class="prose">` slot for the markdown body.

### Styling

All styles use **CSS custom properties** defined in `global.css`. Use the tokens — do not hardcode hex values or pixel sizes that map to existing tokens.

**Spacing scale** (`--s-1` = 4px through `--s-10` = 144px, doubling-ish increments)

**Accent colours**: `--accent-orange` (#FF5A1F), `--accent-pink` (#FF6FA8), `--accent-lime` (#D4FF3A), `--accent-blue` (#1D3CFF), `--accent-violet` (#7C3AED)

**Surfaces**: `--bg` (#FFF4E6 warm cream), `--bg-alt` (#FFE8C8), `--ink` (#0E0E0E)

**Fonts**: `--font-display` (Bricolage Grotesque) for headings and brand marks; `--font-body` (Inter) for body copy.

Layout helpers `.container` (max 1240px) and `.container-narrow` (max 780px) are global.

Component-level styles live in `<style>` blocks inside each `.astro` file. There is no CSS module system.

### Deployment

Merging to `main` triggers the GitHub Actions workflow, which builds and deploys to GitHub Pages automatically. The custom domain is `suheelee.com` (set via `public/CNAME`). The Astro config sets `trailingSlash: 'never'` and `build.format: 'file'` to match the GitHub Pages URL structure.
