## Purpose

Defines the single-page resume/CV that presents Mohammad Sadegh Sousahabi's professional profile — experience, skills, and contact details — as the site's primary content, ported from the "Sadegh Sousahabi v2" Claude Design layout.

## ADDED Requirements

### Requirement: Single-page resume structure
The system SHALL render one page containing, in order: a sticky header with name/nav, a hero section (headline, role summary, availability status, headline stats), an experience section, a skills section, a "how I work" section, and a contact section.

#### Scenario: Visitor loads the site root
- **WHEN** a visitor requests the site's root URL
- **THEN** the response contains the header, hero, experience, skills, approach, and contact sections in that order, with no separate route required to view any of them

#### Scenario: In-page navigation
- **WHEN** a visitor activates a header nav link ("Work", "Skills", "Approach") or the "Get in touch" link
- **THEN** the viewport scrolls to the matching section on the same page (`#work`, `#skills`, `#approach`, `#contact`)

### Requirement: Resume content is real and complete
The system SHALL display Mohammad Sadegh Sousahabi's actual resume content — full name, current role summary, headline stats (years experience, roles/teams, developers led, stack layers), full employment history with company, title, dates, and responsibility bullets, grouped skills, "how I work" principles, and contact channels (email, phone, GitHub, LinkedIn) — with no placeholder or lorem ipsum text.

#### Scenario: Experience history is present
- **WHEN** a visitor views the experience section
- **THEN** every employer from the source resume (Avijeh, Datis INT, MFT, 3Click/Deltaban, Eposence, Maana, Freelance) appears with its role title, date range, and responsibility bullets

#### Scenario: Contact details are actionable
- **WHEN** a visitor views the contact section
- **THEN** the email link opens a mail client addressed to the published email address, the phone link initiates a call to the published phone number, and the GitHub and LinkedIn links point to the published profile URLs

### Requirement: Skills are grouped and browsable
The system SHALL organize skills into named groups (e.g. Frontend, Backend, Mobile, Databases, DevOps, CMS) and let a visitor switch between groups to see that group's items.

#### Scenario: Switching skill groups
- **WHEN** a visitor selects a different skill group control
- **THEN** the displayed skill items update to that group's items and the previously selected group is no longer shown as active

#### Scenario: All skill groups are reachable without JavaScript
- **WHEN** a visitor or crawler loads the page with JavaScript disabled
- **THEN** every skill group's items are present in the page content (not exclusively revealed by client-side interaction)

### Requirement: Content is accessible without client-side JavaScript
The system SHALL render all resume text content (headings, experience entries, skills, contact details) into the initial HTML response so it is fully readable with JavaScript disabled.

#### Scenario: JavaScript-disabled request
- **WHEN** a visitor or crawler fetches the page with JavaScript disabled or unavailable
- **THEN** all section headings, experience entries, skill group names and items, and contact details are present and readable in the rendered HTML

### Requirement: Motion enhancements are progressive and non-blocking
The system SHALL treat scroll-linked and entrance animations (header scroll progress bar, cursor-follow glow, on-scroll section reveal, headline stat count-up, skill-chip stagger) as progressive enhancements that never hide or delay access to content.

#### Scenario: Reduced motion preference
- **WHEN** a visitor's operating system is set to prefer reduced motion
- **THEN** the page either omits the entrance/scroll animations or reduces them to instant, non-animated state changes while keeping all content visible

#### Scenario: Animation script fails to load
- **WHEN** the page's interactive/animation script fails to load or execute
- **THEN** all sections and their content remain visible and readable

### Requirement: Layout is responsive
The system SHALL present a usable, non-overlapping layout across common viewport widths from small mobile screens up through wide desktop screens.

#### Scenario: Narrow viewport
- **WHEN** the page is viewed at a mobile-width viewport (e.g. 375px wide)
- **THEN** the hero, stat cards, experience entries, skill controls, and contact cards stack in a single readable column with no horizontal overflow
