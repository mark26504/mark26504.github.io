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

Keep the visual style clean and engineering-inspired, with dark navy surfaces, sky blue accents, and a subtle grid. Plan a lightweight animated SVG backend architecture diagram that remains readable when static. Keep animations minimal and omit heavy 3D effects and a personal photo in the hero.

## File responsibilities

| Path | Responsibility |
| --- | --- |
| `index.html` | Document metadata, page landmarks, and portfolio content |
| `css/style.css` | Design tokens, reset, typography, and base and component styles |
| `css/responsive.css` | Mobile-first overrides at `48rem` and `64rem` |
| `js/main.js` | Deferred entry point for client-side behavior |
| `assets/images/` | Images used by the portfolio |
| `assets/icons/` | SVG icons |
| `assets/cv/` | Approved public CV files |

Keep a `.gitkeep` in each empty asset directory so Git tracks it. Remove it when the directory contains a tracked asset.

## Coding and accessibility conventions

- Indent HTML, CSS, and JavaScript with two spaces. Use lowercase kebab-case for file names, CSS classes, and HTML IDs. Use `camelCase` for JavaScript names.
- Reuse design tokens and shared layout styles. Keep selectors simple and use the responsive styles for breakpoint overrides.
- Use native elements for landmarks, links, and controls. Maintain a logical heading order and keyboard tab order. Keep the skip link and visible focus indicators.
- Give meaningful images and diagrams accessible text. Keep text readable at narrow widths and when zoomed. Use text or another cue alongside color for status and meaning.
- Use `prefers-reduced-motion` when adding motion. Keep the base experience static and functional, and opt into nonessential animation when the visitor allows it.

## Development roadmap

1. Project Setup
2. Navbar and Hero Section
3. Animated Backend Architecture Diagram
4. Core Technologies
5. About Me
6. Featured Projects
7. Technical Skills
8. Education and Certifications
9. GitHub Activity
10. Contact and Footer
11. Responsive Design
12. Accessibility, Performance and SEO
13. GitHub Pages Deployment
