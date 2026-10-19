# Daaman Shah — Portfolio

A single-page portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, and Motion.

## Run locally

```sh
npm ci
npm run dev
```

Open the localhost URL printed by Next.js. For a production preview, run `npm run build` followed by `npm run start`.

## Checks

```sh
npm run lint
npm run build
```

The build includes TypeScript checking. Read `AGENTS.md` and the installed Next.js guides in `node_modules/next/dist/docs/` before changing framework code.

## Where to edit

- `app/page.tsx`: section order and homepage composition.
- `app/layout.tsx`: page and social metadata, global motion preferences.
- `app/globals.css`: shared styles, focus indicators, and reduced-motion rules.
- `components/data/profile.ts`: name, email, professional links, role, and resume URL.
- `components/data/work.ts`: project stories, technologies, metrics, categories, and links.
- `components/data/journey.ts`: experience, education, and coursework.
- `components/data/sideQuests.ts`: hobbies, anime, karate, and personal collections.
- `components/data/comments.ts`: curated guestbook comments.
- `components/`: active section components and their supporting UI.
- `components/navigation/SectionLink.tsx`: shared in-page scrolling without URL/history changes on ordinary clicks; native fragment links remain available for direct sharing.
- `public/side-quests/`: personal collection images.
- `public/resume/Daaman-Shah-Resume.pdf`: downloadable resume; preserve the path when replacing it.

## Content and forms

Projects in the `featured` and `systems` collections share the main grid. Category filters select relevant work; `archive` entries appear in the expandable archive. The intentionally hidden QR utility remains in the data for reference.

Guestbook notes and side-quest suggestions use the existing Formspree endpoint. Displayed guestbook comments are curated separately; submissions do not automatically become public comments. The secret side quest links to the guestbook rather than maintaining a visitor counter.

`PORTFOLIO_UPDATE.md` records content sources and unresolved factual questions. Keep it as an editorial reference when updating project claims.
