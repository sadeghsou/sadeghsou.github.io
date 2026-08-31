## Why

The project is currently a bare Nuxt scaffold (`app/app.vue` renders only the default `NuxtWelcome`). Sadegh needs a live, SEO-friendly single-page resume/CV at sadeghsou.tech that recruiters and search engines can find and read, built from the "Sadegh Sousahabi v2" design imported from Claude Design.

## What Changes

- Replace the Nuxt starter page with a single-page resume/CV built with Nuxt's SSR/static generation so content is crawlable and indexable.
- Port the "Sadegh Sousahabi v2.dc.html" Claude Design layout (Nocturne design system) into native Vue/Nuxt components: sticky header/nav, hero with headline + stats, experience timeline, tabbed skills matrix, "how I work" cards, and a contact section — dropping the Claude Design canvas-runtime scaffolding (`x-dc`, `sc-if`, `sc-for`, `ref="{{ }}"`, `style-hover`, `DCLogic`) in favor of native Vue templates/composables that reproduce the same visuals and interactions (scroll progress bar, cursor glow, on-scroll reveal, stat count-up, skills tab switch, chip stagger).
- Add SEO fundamentals for the page: descriptive `<title>`/meta description, Open Graph/Twitter cards, canonical URL, `Person`/`ProfilePage` JSON-LD structured data, semantic landmark/heading structure, `robots.txt`, and `sitemap.xml`.
- Carry over the resume content already present in the design (name, title, bio, experience history, skills groups, contact details) as the real page content — no placeholder/lorem text.
- Reproduce the Nocturne design tokens (colors, spacing, radii, shadows, Inter typeface) as project CSS variables/theme so the page matches the source design.

## Capabilities

### New Capabilities
- `resume-page`: The single-page resume/CV UI — layout, sections, content, and the ported interactive behavior from the source design.
- `seo-metadata`: Search-engine-facing metadata and discoverability for the resume page (meta tags, structured data, sitemap, robots).

### Modified Capabilities
(none — this is a new project with no existing specs)

## Impact

- **Code**: `app/app.vue` and new `app/components/**` for resume sections; `app/assets` or `app/app.config.ts`/CSS for Nocturne design tokens; `nuxt.config.ts` for SEO modules/site config; `public/robots.txt`, `public/sitemap.xml` (or a sitemap module).
- **Dependencies**: likely adds `@nuxtjs/seo` (or `nuxt-seo-utils` + `@nuxtjs/sitemap`) for meta/sitemap/robots handling; no backend/API changes.
- **Build**: `nuxt generate` should produce a fully static, crawlable output suitable for static hosting.
