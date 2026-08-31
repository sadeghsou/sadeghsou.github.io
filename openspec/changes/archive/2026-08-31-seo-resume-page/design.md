## Context

The repo is a fresh Nuxt 4 scaffold (`nuxt`, `vue`, `vue-router` only; `app/app.vue` renders `NuxtWelcome`). There is no existing component structure, CSS system, or SEO tooling to reconcile with — this is greenfield within the project, but the visual and content source of truth is the Claude Design file `Sadegh Sousahabi v2.dc.html` (Nocturne design system) already read into this change's context. That file targets the Claude Design canvas runtime (`x-dc` custom element, `support.js`, React-based `DCLogic` component, `sc-if`/`sc-for`/`ref="{{ }}"`/`style-hover` templating) — none of which exists in a plain Nuxt app, so the design must be re-authored as native Vue SFCs rather than copied verbatim. See proposal.md for why this page needs to exist and be SEO-friendly.

## Goals / Non-Goals

**Goals:**
- Reproduce the Nocturne visual design (colors, spacing, radii, shadows, typography) and the v2 layout's content and structure faithfully in Vue/Nuxt.
- Ship the page fully static (prerendered HTML) so every requirement in `seo-metadata` (crawlable without JS, semantic structure, meta/structured data) is satisfied by default, not bolted on.
- Reproduce the source design's interactions (scroll progress, cursor glow, reveal-on-scroll, stat count-up, skill tab switch, chip stagger) as small, dependency-free Vue composables/directives.

**Non-Goals:**
- Multi-page site, blog, CMS-driven content, or i18n — out of scope; this change is one route only (`/`).
- Pixel-for-pixel porting of the Claude Design `.dc.html` markup or its canvas-runtime abstractions — the target is equivalent rendered output via idiomatic Vue, not a literal transcription.
- A second layout variant (`Sadegh Sousahabi.dc.html`, the v1 design also present in the Design project) — only v2 is in scope per the request.

## Decisions

### Rendering mode: `nuxt generate` (full static prerender)
The site is a single, content-only page with no user-specific or dynamic data, so `ssr: true` with `nitro.prerender.routes` covering `/` (Nuxt's default target for `generate`) is sufficient and gives the strongest crawlability guarantee: crawlers receive complete HTML with zero JavaScript execution. Alternative considered: plain SSR (Node server) — rejected as unnecessary hosting complexity for content that never changes per-request. Alternative considered: SPA/CSR (`ssr: false`) — rejected because it fails the "content accessible without JS" and "crawlable without executing JS" requirements outright.

### SEO tooling: `@nuxtjs/seo`
Adopt the `@nuxtjs/seo` module (bundles `nuxt-seo-utils`, `@nuxtjs/sitemap`, `@nuxtjs/robots`, `nuxt-schema-org`, `nuxt-og-image`) over hand-rolling `useHead`/`useSeoMeta` calls and a manual `public/robots.txt`/`public/sitemap.xml`. It centralizes `site.url`/`site.name` config, generates `sitemap.xml` and `robots.txt` from routes automatically, and provides a typed `schema-org` composable for the `Person` JSON-LD — directly matching every `seo-metadata` requirement with configuration instead of bespoke code. Alternative considered: static files in `public/` plus manual `useSeoMeta` — rejected as more surface area to keep in sync by hand for the same result.

### Design tokens: global CSS custom properties, no CSS framework
Port the Nocturne `:root` tokens (colors, spacing, radius, shadow, font vars) verbatim into a single `app/assets/css/tokens.css` imported once in `nuxt.config.ts` (`css: [...]`), plus a small `base.css` for resets/typography lifted from the same stylesheet. Component styles stay as scoped `<style>` blocks per SFC using `var(--color-*)` etc., mirroring the inline-style approach of the source file but scoped instead of inline. Alternative considered: adopt Tailwind and re-map tokens to a Tailwind theme — rejected as unnecessary build-time complexity for a single static page; scoped CSS keeps a 1:1 mapping to the source design's token names, which makes future re-syncs from Claude Design straightforward.

### Font loading: `@nuxt/fonts` (or self-hosted `@fontsource-variable/inter`) instead of the Google Fonts `<link>`
The source design loads Inter via a Google Fonts CSS `@import`. For a performance- and privacy-conscious static resume, use `@nuxt/fonts` to self-host and subset Inter automatically (no third-party request, no CLS from a late-loading `@import`). Alternative considered: keep the Google Fonts `<link>` — rejected; self-hosting is strictly better here with no added authoring cost.

### Component structure
One page (`app/pages/index.vue` via `@nuxt/content`-free plain routing, or `app/app.vue` directly since this is a single-route site) composed of section components under `app/components/resume/`: `TheHeader.vue`, `HeroSection.vue`, `ExperienceSection.vue`, `SkillsSection.vue`, `ApproachSection.vue`, `ContactSection.vue`. Resume data (experience entries, skill groups, approach cards, contact links) lives in a typed constants module (`app/data/resume.ts`) rather than inline in templates, so content can be updated without touching markup — mirrors the source file's `SKILL_GROUPS` array pattern but extended to all repeated content.

### Interactivity: small composables, `IntersectionObserver`-driven, motion-safe by default
Reimplement the source `DCLogic` behaviors as plain Vue composables invoked from `onMounted`:
- `useScrollProgress()` — scroll listener updating a `scaleX` transform on a fixed bar (matches source `onScroll`).
- `useRevealOnScroll(refs)` — `IntersectionObserver` wrapper toggling a "revealed" class (matches source `reveal()`/`countUp()`), with a 3.5s fallback that force-reveals to guarantee a stuck observer never hides content.
- `useReducedMotion()` — reads `matchMedia('(prefers-reduced-motion: reduce)')`; every animation composable checks it and short-circuits to the final visible state, directly satisfying the "reduced motion" resume-page requirement.
- Cursor glow and skills-tab switching stay as local component state (`ref`/`reactive`) — no need for a shared composable.
All of the above run only in `onMounted` (client-only), so their absence or failure never affects the prerendered HTML content itself — only the visual embellishment on top of it, matching the "progressive enhancement" requirement.

### Images
The source design hot-links a profile photo from `https://sadeghsou.github.io/sadegh.jpg`. Keep an external `<img>` reference (no `nuxt/image` processing needed for a single small photo) but add explicit `width`/`height`/`loading="eager"` (it's above the fold) and a descriptive `alt` to avoid CLS and support accessibility/SEO image guidance; used as-is unless Sadegh supplies a local asset.

## Risks / Trade-offs

- [Hand-porting inline-styled markup to scoped Vue components risks small visual drift from the source design] → Cross-check each section against the read `Sadegh Sousahabi v2.dc.html` content during implementation; token values (colors/spacing/radii/shadows) are copied verbatim from `styles.css`, not eyeballed.
- [`@nuxtjs/seo`'s `Person`/`ProfilePage` schema-org composable API may not map 1:1 to every field this resume needs (e.g. `sameAs` array, `jobTitle`)] → Fall back to a manually authored JSON-LD `<script type="application/ld+json">` via `useHead` if the composable proves limiting; the requirement is the emitted markup, not the tool used to emit it.
- [Self-hosting Inter via `@nuxt/fonts` adds a new dependency and a build-time font-fetch step] → Low risk for a static site; if it causes build friction, fall back to the source design's Google Fonts `<link>` without changing any spec-visible behavior.
- [Static prerender means the profile photo hotlink has no build-time control] → Acceptable for now since the source design already hotlinks it; flagged in Impact for Sadegh to optionally swap in a local asset later without a spec change.

## Open Questions

- Final production domain for `site.url` (canonical/OG URLs, sitemap) and the OG preview image asset — default to `https://sadeghsou.tech` and a generated static OG image unless Sadegh specifies otherwise before/during implementation.
