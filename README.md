# sujitt.com

Personal site + writing. Built with [Astro](https://astro.build). Off-White / industrial-Helvetica design system. Deploys to Vercel.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # outputs static site to ./dist
npm run preview    # preview the production build locally
```

## Adding an essay

Drop a markdown file into `src/content/writing/`. Frontmatter:

```yaml
---
title: "The Title"
subtitle: "Optional kicker"
description: "One-line summary for the index and meta tags."
date: 2026-06-07
place: "NEW YORK, NY"
draft: false
---
```

The filename becomes the URL slug (`my-essay.md` -> `/writing/my-essay`). Set `draft: true` to hide a post from the index and build.

## Structure

```
src/
├── content/writing/     # essays (markdown)
├── content.config.ts    # collection schema
├── layouts/Base.astro   # shell: head, nav, footer
├── pages/
│   ├── index.astro      # home — hero, work, writing
│   ├── about.astro
│   ├── 404.astro
│   └── writing/         # index + [...slug] post template
└── styles/global.css    # the design system
```

## Deploy (Vercel)

Vercel auto-detects Astro. Either run `vercel` from this directory, or connect
the GitHub repo at vercel.com and point the `sujitt.com` domain at the project.
No adapter needed — this is a static build.
