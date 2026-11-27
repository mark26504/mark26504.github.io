# -mark26504.github.io

Personal portfolio website showcasing my .NET backend development skills and projects.

Mark Sameeh is a Back-End .NET Developer and a Computer Science graduate (2026).

- [GitHub](https://github.com/mark26504)
- [LinkedIn](https://www.linkedin.com/in/marksameeh)

## Local preview

Open `index.html` for the portfolio, `projects/library-management.html` for the Library case study, or `credits.html` for artwork credits. The site uses HTML, CSS, vanilla JavaScript, and SVG. It requires no package installation or build step.

## Project status

Phases 1 through 5, the Phase 6.1 project carousel, and the Phase 6.2 Library Management API case study are complete. The site has a sticky navbar with Home, About, and Projects, a GitHub shortcut, an accessible mobile menu, a hero with an animated backend diagram, a Core Technologies section, and an About Me section. Skills, Contact, and the CV controls are marked as coming soon.

Blue particles illustrate the runtime connections. The diagram keeps Docker and CI/CD separate under deployment. The button next to the diagram pauses or resumes decorative motion, including the availability pulse. Animations also pause offscreen and in hidden tabs, and the diagram stays readable with reduced motion or JavaScript disabled.

The technology grid uses eight local SVGs. It includes the Devicon C# mark, the .NET and EF Core project logos, GitHub’s Actions navigation icon, and licensed Primer symbols for ASP.NET Core, SQL Server, Redis, and Docker. See [Credits & Licenses](credits.html) for individual sources, licenses, and trademark notices.

The Redis artwork and notice appear on the credits page, linked below the grid. Add a small Credits & Licenses link to the footer in Phase 10 and remove the temporary link.

About Me presents the biography, personal information, and four highlights. The 36 endpoints belong to the Library Management API. The featured project count covers the Library Management API, Eatopia API, E-Commerce API, and Gym Management System.

Selected Work shows those four projects with local 4:3 WebP covers from the supplied promotional artwork. The carousel shows one complete card on mobile, two from `48rem`, and three from `64rem`. It supports arrows, pagination, keyboard navigation, and native horizontal scrolling with scroll snap. The track also works without JavaScript. The cards link to their GitHub repositories, and the Library Management API card also links to its deployed Swagger documentation.

The Library card's cover, title, and Explore Project action open its [case study](projects/library-management.html). Explore Project remains disabled for the planned pages at `projects/eatopia.html`, `projects/ecommerce.html`, and `projects/gym-management.html`.

The Library and E-Commerce covers show illustrated Swagger screens. The Library cover uses an illustrative hostname, shows an “Admin” group, and labels borrowing returns `PUT`. The [deployed Swagger specification](https://library-management-api.runasp.net/swagger/v1/swagger.json) groups user administration under Users and lists `POST` for borrowing returns. The Gym cover shows sample dashboard counts. The [Eatopia README](https://github.com/mark26504/Eatopia-Backend#readme) describes the AI module without documenting the exact diet-plan workflow shown on the cover.

Publication clearance for the third-party marks embedded in the supplied covers is unverified. Review the applicable [Docker](https://www.docker.com/legal/trademark-guidelines/), [Microsoft](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks), [Redis](https://redis.io/legal/redis-trademark-policy/), [Stripe](https://stripe.com/legal/marks), and [Swagger](https://swagger.io/license/) terms before publishing the artwork.

## Library Management API case study

The case study uses `css/projects.css` and `js/projects.js` for reusable layouts and an optional fullscreen image viewer. Every technical section and figure is visible in the page flow. The viewer supports zoom, reset, panning, keyboard access, and focus restoration. Figure links also open the image directly without JavaScript. Future case studies should reuse this structure and add previous or next links as their destinations become available.

The case study was checked against [LibraryManagementAPI at `0790454`](https://github.com/mark26504/LibraryManagementAPI/tree/079045485714d6249aabcdaae38a6a55e3c0eaba) and the [deployed v1 OpenAPI document](https://library-management-api.runasp.net/swagger/v1/swagger.json). The solution targets .NET 10 and contains seven projects. The 36 operations are counted by HTTP method and path and exclude `/health` and `/health/ready`. The source places JWT generation in Services and configures separate health probes. The public HTTPS Swagger link was checked directly. IIS, hosted SQL Server 2025, availability limits, and hosted email restrictions are documented by the project. Postman checks and CI deployment probes provide separate kinds of evidence, with no automated unit, integration, regression, or coverage result asserted.

The case study reuses `assets/images/projects/library-management.webp`. The five authentic screenshots, verified ERD, and three original diagrams are in `assets/images/projects/library/`. The screenshots retain their original dimensions in lossless WebP. The published Postman copy masks workspace and account labels and an unrelated collection name. The Docker Desktop copy masks three local container IDs and the account badge. The GitHub Actions copy masks two profile images. The Solution Explorer and Swagger captures required no redaction. The schema artwork now uses the EF Core default name `__EFMigrationsHistory`.

The site is intended for GitHub Pages. See [AGENTS.md](AGENTS.md) for development conventions and the remaining roadmap.
