# -mark26504.github.io

Personal portfolio website showcasing my .NET backend development skills and projects.

Mark Sameeh is a Back-End .NET Developer and a Computer Science graduate (2026).

- [GitHub](https://github.com/mark26504)
- [LinkedIn](https://www.linkedin.com/in/marksameeh)

## Local preview

Open `index.html` for the portfolio, a page under `projects/` for a case study, or `credits.html` for artwork credits. Use port `5500` for a new local preview. The site uses HTML, CSS, vanilla JavaScript, and SVG and requires no package installation or build step.

## Project status

Phases 1 through 5, the Phase 6.1 project carousel, and all four case study pages through Phase 6.5 are implemented. The site has a sticky navbar with Home, About, and Projects, a GitHub shortcut, an accessible mobile menu, an animated backend diagram, a Core Technologies section, and an About Me section. Skills, Contact, and the CV controls are marked as coming soon.

Blue particles illustrate the runtime connections. The diagram keeps Docker and CI/CD separate under deployment. The button next to the diagram pauses or resumes decorative motion, including the availability pulse. Animations also pause offscreen and in hidden tabs, and the diagram stays readable with reduced motion or JavaScript disabled.

The technology grid uses eight local SVGs. It includes the Devicon C# mark, the .NET and EF Core project logos, GitHub’s Actions navigation icon, and licensed Primer symbols for ASP.NET Core, SQL Server, Redis, and Docker. See [Credits & Licenses](credits.html) for individual sources, licenses, and trademark notices.

The Redis artwork and notice appear on the credits page, linked below the grid. Add a small Credits & Licenses link to the footer in Phase 10 and remove the temporary link.

About Me presents the biography, personal information, and four highlights. The 36 endpoints belong to the Library Management API. The featured project count covers the Library Management API, Eatopia API, E-Commerce API, and Gym Management System.

Selected Work shows those four projects with local 4:3 WebP covers from the supplied promotional artwork. The carousel shows one complete card on mobile, two from `48rem`, and three from `64rem`. It supports arrows, pagination, keyboard navigation, and native horizontal scrolling with scroll snap. The track also works without JavaScript. The cards link to their GitHub repositories, and the Library Management API card also links to its deployed Swagger documentation.

The Library card's cover, title, and Explore Project action open its [case study](projects/library-management.html). The same action opens the [Eatopia](projects/eatopia.html), [E-Commerce](projects/ecommerce.html), and [Gym Management System](projects/gym.html) case studies from their cards.

The Library and E-Commerce covers show illustrated Swagger screens. The Library cover uses an illustrative hostname, shows an “Admin” group, and labels borrowing returns `PUT`. The [deployed Swagger specification](https://library-management-api.runasp.net/swagger/v1/swagger.json) groups user administration under Users and lists `POST` for borrowing returns. The Gym cover shows sample dashboard counts.

Publication clearance for the third-party marks embedded in the supplied covers is unverified. Review the applicable [Docker](https://www.docker.com/legal/trademark-guidelines/), [Microsoft](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks), [Redis](https://redis.io/legal/redis-trademark-policy/), [Stripe](https://stripe.com/legal/marks), and [Swagger](https://swagger.io/license/) terms before publishing the artwork.

## Library Management API case study

The case study uses `css/projects.css` and `js/projects.js` for reusable layouts and an optional fullscreen image viewer. Every technical section and figure is visible in the page flow. The viewer supports zoom, reset, panning, keyboard access, and focus restoration. Figure links also open the image directly without JavaScript. Future case studies should reuse this structure and add previous or next links as their destinations become available.

Use `.case-main` and `.case-hero` on new case study pages so they inherit the shared hero inset of about 24–32px on mobile and 32–48px on desktop. The hero stacks below `64rem` and top-aligns the copy and cover in two columns. For Solution Explorer captures, crop blank space below the last project while preserving the entire header, toolbar, and project tree. Keep the native image proportions and set the HTML dimensions to match the cropped file.

The case study was checked against [LibraryManagementAPI at `0790454`](https://github.com/mark26504/LibraryManagementAPI/tree/079045485714d6249aabcdaae38a6a55e3c0eaba) and the [deployed v1 OpenAPI document](https://library-management-api.runasp.net/swagger/v1/swagger.json). The solution targets .NET 10 and contains seven projects. The 36 operations are counted by HTTP method and path and exclude `/health` and `/health/ready`. The source places JWT generation in Services and configures separate health probes. The public HTTPS Swagger link was checked directly. IIS, hosted SQL Server 2025, availability limits, and hosted email restrictions are documented by the project. Postman checks and CI deployment probes provide separate kinds of evidence, with no automated unit, integration, regression, or coverage result asserted.

The case study reuses `assets/images/projects/library-management.webp`. The five authentic screenshots, verified ERD, and three original diagrams are in `assets/images/projects/library/`. The screenshots use lossless WebP. The published Postman copy masks workspace and account labels and an unrelated collection name. The Docker Desktop copy masks three local container IDs and the account badge. The GitHub Actions copy masks two profile images. The Solution Explorer and Swagger captures required no redaction. The Solution Explorer copy crops the blank bottom area to 607 × 420. The schema artwork now uses the EF Core default name `__EFMigrationsHistory`.

## Eatopia API case study

The case study follows the Library layout and image viewer. Eatopia was a collaborative graduation project with three backend developers. The [reviewed source at `287feeb`](https://github.com/mark26504/Eatopia-Backend/tree/287feebd2dd370370a43f0dacc67d031442139fb) has four projects targeting .NET 8 and 93 distinct v1 controller operations. The count excludes unversioned routes and the SignalR hub. Source code confirms the Python integration, and the public repository provides local Swagger setup.

The diagrams in `assets/images/projects/eatopia/` show all 28 application tables plus EF migration history, with one overview and seven module diagrams. Solid connectors represent migration-defined foreign keys. Dashed connectors mark EF mappings with no matching constraint in the checked-in DDL. The current model and repair SQL name the chat type column `MessageType`, while the supplied SQL Server capture shows `MediaType`. The supplied Solution Explorer and Swagger PNGs are displayed directly. The raw database captures served as references.

The public demo at `assets/videos/eatopia/eatopia-demo-public.mp4` preserves the full 2:12 recording, original frame size, playback speed, and audio track. The exported frames permanently mask local file details, account and profile information, sensitive form values, and identifying community and chat content. The original recording stays local and is ignored by Git. The native player uses `preload="metadata"` and starts on request.

## E-Commerce API case study

The [E-Commerce case study](projects/ecommerce.html) uses the shared case study layout, hero spacing, and image viewer. [The reviewed source at `027cc79`](https://github.com/mark26504/ECommerce-ASP.NET-Core-Web-API/tree/027cc79ce74d59246910294b7868c3759038b15e) contains eight projects and 16 REST method and route pairs, excluding MVC actions. The Web API targets .NET 8 and the dashboard targets .NET 9. The two SQL Server schemas contain 14 application tables and two migration history tables. The page documents the direct references, generic repository and Unit of Work, specifications, service injection, DTO mapping, typed results, error middleware, and response caching.

The eight supplied screenshots and five original SVGs are in `assets/images/projects/ecommerce/`. The Postman images mask workspace and account labels. The product screenshot’s bearer token remains masked, and its desktop taskbar was cropped. SQL Server reference captures stayed out of public assets. The diagrams separate compile-time references, SQL Server and Redis storage, and Stripe PaymentIntent creation from order persistence.

Manual Postman evidence shows the authenticated product list and basket creation returning HTTP 200. Redis Insight shows the cached product response and saved basket with their remaining TTLs. The supplied local session ran Redis in Docker, recorded a successful PING, and loaded the dashboard login. Stripe was reviewed in source, and the session completed no payments. The product query code returns page index 1 regardless of the supplied index.

The maintenance commit upgraded AutoMapper to 15.1.4 and removed the legacy MVC Core package while retaining the ASP.NET Core framework reference. The supplied session recorded a successful Release build and a transitive vulnerability audit with no known findings across eight projects at that time. Nullable-reference warnings remained.

## Gym Management System case study

The [Gym case study](projects/gym.html) uses the shared case study layout, responsive hero, and image viewer. The [reviewed source at `dcd95e6`](https://github.com/mark26504/gym-management-system/tree/dcd95e6b8b68471dbdd5953428a115c4612ed019) contains three .NET 9 projects with direct references from Presentation to Business Logic to Data Access. It uses injected services, a generic repository and specialized repositories, a Unit of Work, and AutoMapper profiles for ViewModels.

One SQL Server database contains seven gym tables, seven Identity tables, and one EF migration history table. Health information shares the Members table. Memberships and MemberSessions have composite keys. Identity uses cookie authentication with the Admin and SuperAdmin roles. The five supplied UI screenshots and three source-based diagrams are in `assets/images/projects/gym/`. The SQL Server reference captures stay private.

The local maintenance session recorded database migration, MVC startup, and a Release build with zero errors and 38 warnings. The maintenance revision upgraded AutoMapper from 15.0.1 to 15.1.4 and removed the legacy scaffolding package. The supplied transitive dependency audit reported no known findings across the three projects at that time.

The case study embeds the unchanged Gym demo at `assets/videos/gym/gym-demo-public.mp4`. The native player preserves the full 2:44.80 recording at 1920 × 1080, including its original audio track. The recording and the original Admins and Sessions screenshots show fictional test data. Sign-in password values are masked in the recording.

The site is intended for GitHub Pages. See [AGENTS.md](AGENTS.md) for development conventions and the remaining roadmap.
