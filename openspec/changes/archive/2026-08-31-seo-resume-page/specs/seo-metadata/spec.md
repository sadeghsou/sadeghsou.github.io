## Purpose

Ensures the resume page is discoverable, correctly represented in search results and social shares, and structured so that search engines and crawlers can index and understand it as a person's professional profile.

## ADDED Requirements

### Requirement: Descriptive page metadata
The system SHALL serve a unique, descriptive `<title>` and meta description for the page that identify the person (Mohammad Sadegh Sousahabi) and their role (Senior Frontend Engineer), and SHALL declare a canonical URL for the page.

#### Scenario: Crawler reads page head
- **WHEN** a crawler or browser requests the page
- **THEN** the response `<head>` contains a `<title>` naming the person and role, a `<meta name="description">` summarizing their experience, and a `<link rel="canonical">` pointing to the page's own URL

### Requirement: Social share previews
The system SHALL provide Open Graph and Twitter Card meta tags (title, description, type, URL, and a preview image) so that sharing the page's URL on social platforms and chat apps renders a rich preview.

#### Scenario: Link unfurled on a social platform
- **WHEN** the page URL is shared on a platform that reads Open Graph or Twitter Card tags
- **THEN** the unfurled preview shows the person's name/role as the title, a matching description, and a preview image

### Requirement: Structured data for a person profile
The system SHALL embed machine-readable structured data (JSON-LD, `schema.org` `Person` type) describing the person's name, job title, contact points, and profile links (GitHub, LinkedIn).

#### Scenario: Structured data validation
- **WHEN** the page's JSON-LD is extracted and validated against the `schema.org` `Person` schema
- **THEN** it validates without errors and includes name, jobTitle, email, and sameAs links to GitHub and LinkedIn

### Requirement: Crawlable, indexable rendering
The system SHALL serve the page's full resume content in the initial HTML response (server-rendered or statically generated), without requiring JavaScript execution to reveal indexable text.

#### Scenario: Crawler fetches without executing JavaScript
- **WHEN** a crawler fetches the page and does not execute JavaScript
- **THEN** the returned HTML already contains the section headings, experience entries, skills, and contact details as text

### Requirement: Semantic landmark and heading structure
The system SHALL use semantic HTML landmarks (`header`, `nav`, `main`/`section`, `footer` or equivalent) and a single logical heading hierarchy (one `h1` for the person's name, `h2` per major section) so assistive technology and search engines can parse the page's structure.

#### Scenario: Heading hierarchy check
- **WHEN** the page's heading elements are listed in document order
- **THEN** there is exactly one `h1` and every section (Experience, Skills, How I Work, Contact) is introduced by an `h2`, with no heading level skipped from `h1` to the section headings

### Requirement: Crawler access files
The system SHALL serve a `robots.txt` that permits crawling of the page and a `sitemap.xml` that lists the page's canonical URL.

#### Scenario: Crawler checks robots and sitemap
- **WHEN** a crawler requests `/robots.txt` and `/sitemap.xml`
- **THEN** `robots.txt` does not disallow the page's path and `sitemap.xml` lists the page's canonical URL with a valid last-modified date
