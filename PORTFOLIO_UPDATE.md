# Portfolio update and evidence review

Local repository update only; no deployment, remote push, or history deletion.

## Repository cleanup — October 19, 2026

Removed 23 source files outside the active app import graph: legacy portfolio and scene implementations, their supporting project components/data, the disabled mood widget/data, and the unused alternate project card. Removed five unreferenced starter SVGs and the obsolete `visual` project field. Shared name/email values now come from `profile.ts`. The README describes the current implementation instead of the Next.js starter. Historical file lists below include files removed by this cleanup; the evidence review remains useful as an editorial reference.

Removed the temporary `.codex-tmp/` research downloads, PDF tools, screenshots, and one-off verification scripts after checks completed. Production build, TypeScript with unused-local/parameter checks, and all 30 local asset references passed. ESLint passed with the same two pre-existing personal-gallery image warnings. Current dependencies, personal assets, archived project content, resume, forms, and Git history were preserved.

## Presentation refinements — October 19, 2026

- All now shows the systems projects in the same featured grid. Systems / Embedded remains a category filter; its separate heading and introductory disclaimer were removed.
- Project descriptions and details now follow the idea, approach, interesting decisions, and outcome. Selected metrics retain their measurement context, while source-audit notes remain in this report rather than the visitor experience.
- Removed the green evidence notes and featured-project status badges, including “Locally validated.” Archive labels still distinguish training and concepts.
- Replaced text/emoji link arrows with inherited-color Lucide SVG icons.
- Removed the browser-local defeat counter and its storage subscription. “Hands up, I got had” now links to the existing guestbook and focuses the message field. No database, public tally, or new form service was added; existing guestbook submission behavior is preserved.

The sections below record the original evidence review and implementation decisions; the presentation refinements above supersede the original grouping and audit-note presentation.

## Content and presentation

- Preserved the green/cream palette, serif headings, friendly introduction, mascots, side quests, anime, karate history, and existing guestbook comments and Formspree endpoint.
- Updated the hero, professional experience, Binghamton education, contact links, metadata, and the stable `/resume/Daaman-Shah-Resume.pdf` asset from the supplied PDF.
- Centralized professional links and the resume URL in `components/data/profile.ts`. The older unused project presentation now derives facts from the active project collection.
- Replaced rotating project sets with featured work, a separate Systems / Embedded group, and a collapsed archive. Filters remain available, with explicit selected states and result announcements.
- Expanded project details with contributions, decisions, limitations, evidence, and verified repository/publication actions. Unavailable links are omitted.
- Added native project dialogs, scroll locking, focus restoration, Escape closing, and explicit Tab wrapping. Improved small-screen navigation and filter wrapping, focus outlines, guestbook field labels, and reduced-motion support.
- Preserved the pre-existing contact edit that already replaced the profile placeholders.

## Project decisions

| Project | Placement | Reason |
| --- | --- | --- |
| Watson Tech Talent / Micro-Internship Platform | Featured | Current professional product work; experience contains impact, project contains technical scope. |
| Schrödinger’s Human | Featured | Real-time systems and durability, supported by local architecture and benchmark documentation. |
| GameVault | Featured | Implemented discovery and recommendations, with reproducible performance evidence. |
| Real-Time Transcription & Speaker Recognition | Featured | Published research and public implementation. |
| CoursePilot AI | Featured, In Progress | Authentication and infrastructure verified; conflicting tutor-completion claims omitted. |
| Industrial Robotic Workcell Controller | Systems / Embedded | Explicitly simulated devices, with service and operator-console architecture. |
| Real-Time Embedded Motion Controller | Systems / Embedded | Host validation and ARM cross-build distinguished from physical execution. |
| TubeScript | Archive, Concept / prototype | Existing notes conflict; no verifiable implementation was found. |
| JPMorganChase | Archive, Forage Job Simulation | Training rather than original product or employment. |
| Admission Prediction | Archive | Earlier notes support preprocessing, visualization, and regression; no stronger evaluation claim. |
| Sports Community / Personal Portfolio | Archive | Useful early frontend work and this site's implementation, secondary to current work. |
| QR utility | Hidden | Basic QR generation, without verified AI chatbot functionality. Data retained; no destructive cleanup. |

## Sources and factual findings

The supplied `C:/Users/HP/Downloads/DaamanShah-Resume.pdf` is authoritative for current professional titles, dates, contact links, and graduate education. The downloadable PDF is copied unchanged, even where project wording needs review.

- **Watson:** Resume confirms Software Engineer, December 2025–Present, BM25, outreach reduction of 80%, approximately 60% less developer intervention, 80% frontend refactor, accessibility checks, migrations, and GitHub Actions. These are resume-reported contributions; this task did not independently audit university impact or access private systems. University IT collaboration comes from supplied project notes.
- **Konze:** Current resume confirms Software Engineer Intern, June–December 2024, OCR and React/Node/Express defect work. An older public portfolio has different dates/title and other impact claims; those were not carried forward because the current resume is authoritative.
- **Other experience:** Campus technical support, Edunet, BrainyBeam, martial arts leadership, and Forage retain existing repository dates and descriptions, shortened where useful. Hardcoded elapsed durations and unsupported numerical impact claims were removed. These entries are absent from the current one-page resume and were not independently employment-verified.
- **Education:** MS CS, Artificial Intelligence Track, GPA 3.97/4.0, expected December 2026 are confirmed. Silver Oak B.Tech degree/date/GPA details are absent from both supplied PDF and available current repository records. The publication establishes a Silver Oak affiliation but does not establish degree completion, May 2024, or 9.10/10. Those details were not added without supporting evidence.
- **Schrödinger:** Neighboring `Schrödinger's Chatbot` source and `docs/BENCHMARK-RESULTS.md` confirm Socket.IO, Redis reservations, PostgreSQL history, FastAPI, durable leases, and stale-response fencing. The October 5, 2026 report records 118–138 ms p95 at 100 simulated clients / 50 conversations **on one API process**. Two-process runs were 2.51–3.85 s p95 at that load. 4,080/4,080 delivered and persisted messages spans 12 runs; retry/recovery results are separate exercises. No deployment, adoption, AI quality, or automatic failover claims.
- **GameVault:** Neighboring `GameVault/docs/resume-evidence.md`, `docs/performance.md`, and baseline/optimized artifacts establish the metric: discovery median mobile Lighthouse LCP 5.38 → 3.69 seconds (31.5%) in five-run local production comparisons. This is not generic “search performance.” Detail LCP regressed 2.82 → 3.33 seconds. Request reduction refers to initiated browser requests, not proven upstream RAWG calls. OpenAI extracts preferences; deterministic ranking uses RAWG metadata. No deployment claim.
- **CoursePilot discrepancy:** Resume describes completed RAG tutoring and document processing. Local README calls RAG upcoming; source contains auth/RBAC, Prisma, Redis/BullMQ and Docker infrastructure, while the worker logs jobs and returns a scaffold result. Public copy omits completed RAG, progressive-hint, and document-processing claims. A newer implementation is needed to support them.
- **Speech research:** [IJCSMC paper](https://ijcsmc.com/docs/papers/September2024/V13I9202401.pdf), Figure 3, and the public `RTSR.ipynb` support reported 91.7% accuracy and weighted F1 approximately 0.945. The notebook contains seven speaker classes. These are saved historical evaluation outputs, not an independently rerun benchmark. The supplied RTF ≈0.62 conflicts with paper Table I (0.78 for Medium and 0.68 for Distil-Large-V2), so RTF is omitted. Aaveshkar and SAP top-25/613 recognition are retained as project-history reports, not publication-verified achievements.
- **Embedded:** Current README and Phase 9 report distinguish 100 Hz configured motion, 50 Hz safety, 10 Hz telemetry, and a 1,000-step/s numerical plant. They record 103/103 host tests in Debug and Release. Earlier frequencies/counts refer to different scopes/phases. Public copy omits these counts and frequencies; no physical STM32 or Renode execution is claimed. An ARM cross-build is supported, with peripheral execution unvalidated.
- **Industrial:** README and architecture/technical-summary documents verify the simulation, C++ ownership of control state, WPF → REST → ASP.NET → TCP → C++ → HAL boundary, and asynchronous PostgreSQL history. No physical hardware or safety certification claim. The approximate loop timing was not needed for public copy.

## Links and assets

The public GitHub API confirms the profile and repositories for CoursePilot, industrial workcell, embedded controller, speech research, and this portfolio. LinkedIn is taken directly from the supplied PDF; automated availability may be restricted by LinkedIn. The publication PDF was downloaded and visually inspected.

Missing verified public repositories for Schrödinger and GameVault; no verified project live demos or product screenshots were available. Watson private source/infrastructure remains undisclosed. TubeScript, admission, sports, and Forage have no verified project-specific links. No guessed URLs, placeholder buttons, or fabricated screenshots were added. The workcell visual is explicitly an architecture diagram.

## Verification

Passed production build, TypeScript (`npx tsc --noEmit`), and ESLint with zero errors. Two pre-existing `@next/next/no-img-element` warnings remain in the personal image galleries; no dependencies were added to the application.

Headless Chromium checks passed at desktop 1440×1000 and mobile 390×844 / 320×844: category filtering, archive access, Enter-to-open, focus containment/restoration, Escape and close-button behavior, anchor targets, resume HTTP response and byte equality with the supplied PDF, actual download, guestbook success/error UI, viewport overflow, navigation fit, reduced-motion scrolling, runtime errors, and loaded asset HTTP failures. Desktop/mobile screenshots were visually reviewed. This is targeted accessibility review, not a full WCAG certification.

Browser checks use the installed local headless Chromium because the in-app browser failed during initialization. Guestbook success/error verification intercepts the existing Formspree request locally; no test notes are sent and real service delivery is not claimed. Temporary checks and screenshots live in the ignored `.codex-tmp/` directory.

## Files and preview

Main content: `components/data/work.ts`, `components/data/journey.ts`, `components/data/profile.ts`, `data/projects.ts`.

Presentation: `components/home/Hero.tsx`, `components/work/{ProjectPortal,ProjectDrawer,PortalProjectCard,ProjectFilters}.tsx`, `components/journey/JourneyTimeline.tsx`, `components/navigation/DynamicIslandNav.tsx`, `components/contact/ContactSection.tsx`, legacy `components/portfolio/Contact.tsx` and `components/scenes/ContactScene.tsx`.

Accessibility/support: `components/MotionPreferences.tsx`, `components/guestbook/GuestbookForm.tsx`, `components/side-quests/SideQuestsSection.tsx`, `app/globals.css`, `app/layout.tsx`, `eslint.config.mjs`, `.gitignore`.

Resume: `public/resume/Daaman-Shah-Resume.pdf`. This report: `PORTFOLIO_UPDATE.md`.

Run `npm run dev`, then open the localhost URL printed by Next.js. For production preview: `npm run build` followed by `npm run start`. Temporary research and browser artifacts are ignored under `.codex-tmp/` and are not site assets or dependencies.
