## 1. Project setup

- [x] 1.1 Add and configure `@nuxtjs/seo` (bundles sitemap/robots/schema-org/og-image) and `@nuxt/fonts` in `nuxt.config.ts`; verify `bun run dev` starts with no module errors
- [x] 1.2 Set `site: { url: 'https://sadeghsou.tech', name: 'Mohammad Sadegh Sousahabi' }` (and any other required `@nuxtjs/seo` site config) in `nuxt.config.ts`; verify config is read via `nuxt.config.ts` diff review
- [x] 1.3 Create `app/assets/css/tokens.css` with the Nocturne `:root` custom properties (colors, neutral/accent ramps, spacing, radius, shadow, font vars) copied verbatim from the source design system, plus a `base.css` with the resets/typography rules from the same source; register both in `nuxt.config.ts` `css`; verify the dev server renders with the tokens available (inspect `:root` in devtools)
- [x] 1.4 Create `app/data/resume.ts` exporting typed constants for: profile (name, title, tagline, availability status, headline stats), experience entries, skill groups, "how I work" cards, and contact links, transcribed from `Sadegh Sousahabi v2.dc.html`; verify the module type-checks (`nuxt typecheck` or `vue-tsc` if configured)

## 2. Page shell and header

- [x] 2.1 Replace `app/app.vue`'s `NuxtWelcome` with the resume page shell (root wrapper, background gradient) and mount point for sections; verify `bun run dev` shows a blank-but-styled page at `/`
- [x] 2.2 Build `app/components/resume/TheHeader.vue` (sticky header, logo mark, name, nav links to `#work`/`#skills`/`#approach`, "Get in touch" CTA) reading from `resume.ts`; verify nav links scroll to their target sections in the browser

## 3. Hero and experience sections

- [x] 3.1 Build `app/components/resume/HeroSection.vue` (availability badge, headline with gradient last-name span, bio paragraph, email/GitHub/LinkedIn CTAs, headline stat cards) from `resume.ts` data; verify all stat values and links match the source design's content
- [x] 3.2 Build `app/components/resume/ExperienceSection.vue` rendering the timeline rail and one entry per employer (company, role, date range, bullets) from `resume.ts`; verify all seven employers (Avijeh, Datis INT, MFT, 3Click/Deltaban, Eposence, Maana, Freelance) render with correct dates and bullets

## 4. Skills, approach, and contact sections

- [x] 4.1 Build `app/components/resume/SkillsSection.vue` with group-switch controls and an items panel driven by local component state, defaulting to the first group, with **all groups' items present in the rendered HTML** (not injected only on interaction) so JS-disabled/crawler access sees every skill; verify by viewing page source (not devtools-rendered DOM) and confirming every group's items appear as static text, then verify clicking each group tab updates the visible/active items
- [x] 4.2 Build `app/components/resume/ApproachSection.vue` rendering the four "how I work" cards from `resume.ts`; verify content matches the source design
- [x] 4.3 Build `app/components/resume/ContactSection.vue` (headline, mailto/tel/GitHub/LinkedIn cards, footer line with location and copyright) from `resume.ts`; verify each link's `href` is correct (`mailto:`, `tel:`, profile URLs)

## 5. Interactive enhancements (progressive)

- [x] 5.1 Implement `useReducedMotion()` composable reading `prefers-reduced-motion`; verify it returns `true` under a simulated reduced-motion environment (devtools emulation) and `false` otherwise
- [x] 5.2 Implement `useScrollProgress()` and wire it to the fixed top progress bar in the page shell, skipped/instant when reduced motion is preferred; verify the bar fills as the page is scrolled and stays static under reduced motion
- [x] 5.3 Implement `useRevealOnScroll()` (IntersectionObserver + 3.5s force-reveal fallback) and apply it to stat cards, experience entries, and approach cards, skipped/instant when reduced motion is preferred; verify sections fade/slide into view on scroll in a real browser, and verify content is present in the initial HTML by checking with JavaScript disabled
- [x] 5.4 Implement the headline stat count-up (0 → target) triggered on reveal, skipped when reduced motion is preferred; verify counters animate once per load and land on the correct final numbers
- [x] 5.5 Implement the cursor-follow glow effect on the page shell as a client-only enhancement; verify it does not throw or block rendering when the pointer never moves (e.g. touch device)
- [x] 5.6 Manually verify the "animation script fails to load" resume-page requirement by simulating a JS load failure (block the app bundle in devtools) and confirming all section content remains visible and readable

## 6. SEO metadata

- [x] 6.1 Add page-level `useSeoMeta`/`useHead` (or `@nuxtjs/seo` equivalents) for `title`, `description`, canonical link, and Open Graph/Twitter tags (title, description, type=`profile`, url, image) in `app/app.vue` or a root `app.config.ts`; verify by inspecting rendered `<head>` output (`view-source:` or `curl` the generated HTML)
- [x] 6.2 Add `Person` JSON-LD structured data (name, jobTitle, email, sameAs: [GitHub, LinkedIn]) via `nuxt-schema-org` composable or a manual `application/ld+json` script; verify the extracted JSON-LD validates against `schema.org/Person` (e.g. via Google's Rich Results Test or a JSON-LD validator)
- [x] 6.3 Verify `@nuxtjs/seo` generates `robots.txt` (not disallowing `/`) and `sitemap.xml` (listing the canonical `/` URL) after `bun run generate`, by inspecting `dist/robots.txt` and `dist/sitemap.xml`
- [x] 6.4 Review the rendered page's heading structure and confirm exactly one `h1` (the person's name) and one `h2` per major section (Experience, Skills, How I Work, Contact), with no skipped levels

## 7. Build verification

- [x] 7.1 Run `bun run generate` and verify it completes without errors and produces static HTML for `/` under `.output/public` (or configured output dir)
- [x] 7.2 Fetch the generated `/index.html` with a plain HTTP client (no JS execution) and verify all resume text (headings, experience, skills, contact) is present in the raw HTML
- [x] 7.3 Load the generated page in a real browser at mobile width (~375px) and desktop width (~1440px) and verify no horizontal overflow and all sections remain readable and non-overlapping
