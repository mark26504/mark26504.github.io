# Portfolio development guide

## Project requirements

- Build Mark Sameeh’s personal portfolio for a Back-End .NET Developer and Computer Science graduate (2026).
- Use semantic HTML5, CSS3, vanilla JavaScript, and SVG. Keep the site buildless and add dependencies only when the site needs them.
- Write English copy in a left-to-right layout. Use only supplied or verified personal details, projects, certifications, statistics, and GitHub activity.
- Use document-relative paths for local assets so the site works at the root of a domain and under a GitHub Pages repository path.
- Work within this repository and avoid destructive commands. Use repository files and approved public assets only. Complete the requested phase and stop for review. Commit, push, and deploy only with approval.

## Design system

| Role | CSS custom property | Value |
| --- | --- | --- |
| Background | `--color-background` | `#0B0F1C` |
| Surface | `--color-surface` | `#131B2B` |
| Accent | `--color-accent` | `#58B9EB` |
| Border | `--color-border` | `#293548` |
| Primary text | `--color-text-primary` | `#F1F5F9` |
| Secondary text | `--color-text-secondary` | `#94A3B8` |
| Success | `--color-success` | `#4ADE80` |

Use Space Grotesk for headings, Inter for body text, and JetBrains Mono for technical elements. The page loads the fonts through Google Fonts and defines system fallbacks in CSS.

Keep the visual style clean and engineering-inspired, with dark navy surfaces, sky blue accents, and a subtle grid. The hero’s conceptual SVG uses staggered particles to illustrate connections from the client to the ASP.NET Core API and from the API to SQL Server and Redis. Keep Docker and CI/CD visually separate as deployment infrastructure. Keep animations minimal and omit heavy 3D effects and a personal photo in the hero.

## Global container

Use the shared `.container` for the navbar and portfolio content. The inner content is capped at `1600px` and centered, with `20px` horizontal padding by default, `32px` from `48rem`, and `48px` from `80rem`. Add future portfolio sections within the existing main container to share those edges. Keep paragraph widths and SVG aspect ratios independent of the container width.

## File responsibilities

| Path | Responsibility |
| --- | --- |
| `index.html` | Document metadata, page landmarks, and portfolio content |
| `projects/` | Fully expanded, single-page technical case studies |
| `credits.html` | Artwork sources, copyrights, licenses, and trademark notices |
| `css/style.css` | Design tokens, reset, typography, and base and component styles |
| `css/responsive.css` | Mobile-first overrides, including section layouts at `48rem`, `64rem`, and `80rem` |
| `css/projects.css` | Shared case study layouts, figures, and image viewer styles |
| `js/main.js` | Deferred entry point for navigation and decorative motion controls |
| `js/projects.js` | Optional fullscreen image viewer, zoom controls, panning, and focus restoration |
| `assets/images/` | Images used by the portfolio |
| `assets/videos/` | Approved public video cuts used by case studies |
| `assets/icons/` | Local SVGs and [bundled MIT license texts](assets/icons/credits.txt) |
| `assets/cv/` | Approved public CV files |

Keep a `.gitkeep` in each empty asset directory so Git tracks it. Remove it when the directory contains a tracked asset.

## Coding and accessibility conventions

- Indent HTML, CSS, and JavaScript with two spaces. Use lowercase kebab-case for file names, CSS classes, and HTML IDs. Use `camelCase` for JavaScript names.
- Reuse design tokens and shared layout styles. Keep selectors simple and use the responsive styles for breakpoint overrides.
- Keep the mobile navigation breakpoint in `js/main.js` aligned with the `48rem` rule in `css/responsive.css`. The hero switches to two columns at `64rem`.
- Use native elements for landmarks, links, and controls. Maintain a logical heading order and keyboard tab order. Keep the skip link and visible focus indicators.
- Keep navigation destinations and calls to action visibly pending until their content is ready. Replace the placeholders with working links when the corresponding sections or approved CV are available.
- Put enabled section links in page order and give each a matching section ID. Active navigation follows those links as their sections reach the sticky header.
- Give meaningful images and diagrams accessible text. Keep text readable at narrow widths and when zoomed. Use text or another cue alongside color for status and meaning.
- Use `prefers-reduced-motion` when adding motion. Keep the base experience static and functional, and opt into nonessential animation when the visitor allows it.
- Keep particle paths aligned with the SVG runtime connectors. The motion control pauses the particles, API glow, and availability pulse together. Pause each effect when its element leaves the viewport, and pause all continuous effects while the document is hidden or reduced motion is enabled.
- Keep the Core Technologies grid at two columns on narrow screens, four from `48rem`, and eight from `80rem`. Keep the SVGs local and cite each source and license in [Credits & Licenses](credits.html). Use licensed category symbols where brand artwork lacks verified permission. Preserve the full accessible names for shortened labels.
- Use a generic cache symbol and the plain Redis label in Core Technologies. Keep the Redis artwork, attribution, and trademark notice on the credits page. Keep the temporary Credits & Licenses link below Core Technologies until Phase 10. Add a small Credits & Licenses link to the footer in that phase and remove the temporary link.
- Keep About at `#about` below Core Technologies. Use a stacked layout below `64rem` and place the highlights to the right at wider widths. Keep the 36-endpoint figure scoped to the Library Management API.
- Keep Selected Work at `#projects` below About. Use native horizontal scrolling and scroll snapping, with one complete card on mobile, two from `48rem`, and three from `64rem`. Previous and next move by one card. Keep pagination in sync with the reachable positions. Leave the track usable without JavaScript and respect reduced motion.
- Keep Technical Skills at `#skills` after Selected Work. Group verified skills into Backend Development, Databases & Caching, Architecture & Patterns, Security & Authentication, DevOps & Deployment, and Development Tools. Use inline category icons and informational technology tags with a divider below each category heading. Use one column by default and two from `48rem`. Let each row size to its content.
- Store project covers in `assets/images/projects/` as local 4:3 artwork with descriptive alt text and intrinsic dimensions. Verify claims and clearance for any embedded marks before publishing artwork. Use approved screenshots in case studies.
- The Library Management API cover, title, and Explore Project link open `projects/library-management.html`. The Explore Project actions for Eatopia, E-Commerce, and Gym open `projects/eatopia.html`, `projects/ecommerce.html`, and `projects/gym.html`. Keep repository and Swagger links independently accessible.

## Case studies

- Keep the sticky project header to two links, MS. on the left and Back to Projects with a left arrow on the right.
- Reuse the wide portfolio container, visible anchor navigation, shared technology pills, technical sections, and bottom navigation from the Library case study. Present every section, screenshot, and diagram in the normal page flow. Use the image viewer only to enlarge visible figures.
- Use `.case-main` and `.case-hero` for case study pages. The hero sets the entire top inset in `css/projects.css`, about 24–32px on mobile and 32–48px on desktop. Keep the stack below `64rem` and top-align the copy and cover when side by side.
- Keep screenshots and technical diagrams in the corresponding directory under `assets/images/projects/`. Reuse the homepage cover file. Preserve screenshot text and proportions, publish sanitized copies, and document redactions and asset sources. Use descriptive alt text, explicit dimensions, visible captions, and linked figures that open the media directly if JavaScript is disabled.
- Crop only blank space from Solution Explorer captures. Retain the complete header, toolbar, solution and project names, and a small bottom margin. Keep the native image proportions and update the HTML dimensions to match the cropped file.
- Publish full-length demo exports with sensitive details permanently masked in the video. Preserve the source timing, crop, and audio. Keep originals excluded from Git and link public exports through the native video player with controls, `preload="metadata"`, and no autoplay.
- Verify implementation claims against project files, models, migrations, and deployment configuration. For the Library API, the `net10.0` solution contains seven projects and 36 v1 OpenAPI operations excluding two health probes. Distinguish compile-time references from runtime calls, local Docker from public IIS, and Postman checks from deployment verification and regression testing.
- Eatopia targets `net8.0`. Count its v1 operations by HTTP method and route template, excluding unversioned aliases and the SignalR hub. Keep team contributions collaborative. Show database diagrams with migration-backed constraints distinguished from EF model mappings. Keep private source recordings and raw SQL Server reference images out of published assets.
- The E-Commerce solution contains eight projects, 16 REST endpoints, and two SQL Server databases. The API targets .NET 8 and the MVC dashboard targets .NET 9. Use the direct project references, actual project spellings, and migration-defined keys in diagrams. Keep the supplied manual Postman and Redis evidence distinct from source-verified PaymentIntent behavior and the historical dependency maintenance audit.
- The Gym MVC solution has three .NET 9 projects, two administrative roles, and one SQL Server database with seven gym tables, seven Identity tables, and EF migration history. Health fields share the Members table. The page uses five supplied screenshots and three SVG diagrams under `assets/images/projects/gym/`. Distinguish the earlier UI evidence from the supplied Release build, local startup, and dependency audit. Use the full approved Gym demo unchanged. The recording uses fictional test data and the sign-in screens mask password values.
- Use an existing local preview if available. Prefer port `5500` when starting a new preview.

## Development roadmap

1. Project Setup — complete
2. Navbar and Hero Section — complete
3. Animated Backend Architecture Diagram — complete
4. Core Technologies — complete
5. About Me — complete
6. Featured Projects — Carousel and all four case study pages complete through Phase 6.5.
7. Technical Skills — complete
8. Contact Section — next
9. Education and Certifications
10. Footer
11. Responsive Design
12. Accessibility, Performance and SEO
13. GitHub Pages Deployment

GitHub Activity remains pending.
