# Portofolio-2025 — Development Pipeline

> Code-grounded architecture and delivery guide for the current repository snapshot. Reviewed from `main` at `9e42aab2635c` on 2026-09-17.

This repository contains a React portfolio frontend and a separate Laravel scaffold. The visible portfolio content is currently driven by frontend source rather than a working CMS/backend integration.

## 1. Current architecture

```mermaid
flowchart LR
    V[Visitor] --> R[React App]
    R --> ABOUT[About]
    R --> SKILL[Skills]
    R --> PROJECT[Projects]
    R --> WEB[Websites]
    R --> CONTACT[Contact]

    L[Laravel Scaffold] -. not currently driving portfolio content .-> R
```

## 2. Portfolio rendering flow

```mermaid
flowchart TD
    APP[App.jsx] --> ABOUT[About Section]
    APP --> SKILLS[Skills Section]
    APP --> PROJECTS[Projects Section]
    APP --> WEBSITES[Websites Section]
    APP --> CONTACT[Contact Section]
    PROJECTS --> DATA[Local project definitions]
    DATA --> CARDS[Rendered project cards]
```

## 3. Current backend status

```mermaid
flowchart LR
    ROUTE[backend/routes/web.php] --> WELCOME[Welcome View]
    CTRL[PortfolioController] --> EMPTY[Methods currently empty]
    EMPTY -. no established CMS/data flow .-> FRONTEND[React Portfolio]
```

## 4. Runtime ownership

| Layer | Responsibility | Key source |
| --- | --- | --- |
| React app | Main page composition | `frontend/src/App.jsx` |
| Projects component | Visible project cards/content | `frontend/src/components/Projects.jsx` |
| Laravel routes | Current backend web route | `backend/routes/web.php` |
| Portfolio controller | Backend scaffold for future dynamic content | `PortfolioController.php` |

## 5. Development pipeline

```mermaid
flowchart LR
    SRC[Pull source] --> FE[Install frontend deps]
    SRC --> BE[Install backend deps if needed]
    FE --> DEV[Run React/Vite]
    DEV --> CONTENT[Edit portfolio content]
    CONTENT --> LINT[Lint]
    LINT --> BUILD[Production build]
    BUILD --> PREVIEW[Preview]
    PREVIEW --> REVIEW[Review]
```

| Directory | Command | Purpose |
| --- | --- | --- |
| `frontend` | `npm run dev` | Portfolio dev server |
| `frontend` | `npm run build` | Portfolio production build |
| `frontend` | `npm run lint` | Frontend lint |
| `backend` | `composer dev` | Laravel dev stack |
| `backend` | `composer test` | Laravel tests |
| `backend` | `npm run build` | Laravel-side Vite build |

## 6. Content update pipeline

```mermaid
flowchart TD
    CHANGE[Project / Profile Change] --> SOURCE[Update React Source]
    SOURCE --> LINKS[Verify links/images]
    LINKS --> MOBILE[Check responsive layout]
    MOBILE --> BUILD[Build]
    BUILD --> DEPLOY[Deploy static frontend]
```

## 7. Verification gates

- Every navigation anchor lands on the correct section.
- Every external project/contact link is valid.
- Images have usable fallbacks/alt text.
- Project descriptions match what is actually implemented.
- Mobile/tablet breakpoints remain readable.
- Static build completes successfully.
- Laravel example tests are not counted as portfolio feature coverage.

## 8. Release pipeline

```mermaid
flowchart LR
    PR[Reviewed PR] --> LINT[Lint]
    LINT --> BUILD[Frontend build]
    BUILD --> LINKS[Link/image smoke test]
    LINKS --> RESPONSIVE[Responsive preview]
    RESPONSIVE --> DEPLOY[Static deployment]
```

No GitHub Actions workflow was found in the reviewed snapshot.

## 9. Known gaps

1. `PortfolioController` methods are empty.
2. `backend/routes/web.php` currently serves the Laravel welcome view.
3. A working frontend-to-backend portfolio CMS flow is not established by the reviewed source.
4. Root-level `npm run test` is a placeholder and should not be treated as real coverage.

## 10. Source map

- [`frontend/src/App.jsx`](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/frontend/src/App.jsx)
- [`frontend/src/components/Projects.jsx`](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/frontend/src/components/Projects.jsx)
- [`backend/routes/web.php`](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/backend/routes/web.php)
- [`backend/app/Http/Controllers/Admin/PortfolioController.php`](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/backend/app/Http/Controllers/Admin/PortfolioController.php)

Keep this guide synchronized with portfolio content ownership and any future CMS/backend integration.