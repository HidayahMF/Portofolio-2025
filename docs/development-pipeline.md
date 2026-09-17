# Portofolio-2025 — Development Pipeline

React personal portfolio with a separate Laravel scaffold. The visible project cards are defined in frontend code.

> Source review: **2026-09-17**, branch `main`, commit [`9e42aab2635c`](https://github.com/HidayahMF/Portofolio-2025/commit/9e42aab2635cae653ec43485910abec0925c7027). This is a code-grounded implementation overview and development guide, not a reconstructed historical timeline or a claim that runtime tests passed.

## At a glance

| Area | Finding |
| --- | --- |
| Review scope | Repository tree, dependency manifests, and selected entry points/domain implementations linked below |
| Automated CI | No files under `.github/workflows/` in this source snapshot |
| Validation performed | Static source and documentation review; application builds, tests, databases, and external services were not executed |

## Current implementation and proposed next steps

1. Maintain profile sections and the local projects array in the React components.

2. App.jsx composes About, Skills, Projects, Websites, and Contact into a single-page portfolio.

3. Build the frontend for static hosting; implement and route the Laravel portfolio controller only when introducing dynamic content.

## Source map

Principal source files used for this overview, pinned to the reviewed commit:

- [frontend/src/App.jsx](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/frontend/src/App.jsx)
- [frontend/src/components/Projects.jsx](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/frontend/src/components/Projects.jsx)
- [backend/routes/web.php](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/backend/routes/web.php)
- [backend/app/Http/Controllers/Admin/PortfolioController.php](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/backend/app/Http/Controllers/Admin/PortfolioController.php)

## Technology and commands

Version ranges below are declarations in source manifests, not independently verified installed versions.

| Manifest | Relevant declarations |
| --- | --- |
| [backend/composer.json](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/backend/composer.json) | `php ^8.2`, `laravel/framework ^12.0` |
| [backend/package.json](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/backend/package.json) | `vite ^7.0.7` |
| [frontend/package.json](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/frontend/package.json) | `react ^19.1.1`, `vite ^7.1.7` |
| [package.json](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/package.json) | `react ^19.2.0`, `vite ^7.1.12` |

Run each command from the indicated directory after installing the corresponding dependencies and configuring an isolated development environment. Commands are listed as declared; this review does not certify they succeed.

| Directory | Command | Implementation |
| --- | --- | --- |
| `backend` | `composer dev` | Declared: `Composer\Config::disableProcessTimeout; npx concurrently -c "#93c5fd,#c4b5fd,#fb7185,#fdba74" "php artisan serve" "php artisan queue:listen --tries=1" "php artisan pail --timeout=0" "npm run dev" --names=server,queue,logs,vite --kill-others` |
| `backend` | `composer test` | Declared: `@php artisan config:clear --ansi; @php artisan test` |
| `backend` | `npm run build` | Declared: `vite build` |
| `backend` | `npm run dev` | Declared: `vite` |
| `frontend` | `npm run dev` | Declared: `vite` |
| `frontend` | `npm run build` | Declared: `vite build` |
| `frontend` | `npm run lint` | Declared: `eslint .` |
| `.` | `npm run test` | Placeholder; not a quality check |

## Development sequence

| Stage | Work | Completion evidence |
| --- | --- | --- |
| 1. Establish scope | Read the source map and limitations; choose one concrete behavior to change. | Expected input, output, and failure behavior. |
| 2. Prepare environment | Use the manifests and configuration references. | Required local services reachable with synthetic data. |
| 3. Implement | Follow the implemented flow and update the layer that owns the behavior. | Focused diff with matching caller/callee contracts. |
| 4. Validate | Run applicable declared checks and the scenarios below. | Recorded commands, results, and untested dependencies. |
| 5. Review and release | Review the diff and update documentation; release after environment checks. | Reviewed change and target-environment smoke check. |

These stages are a recommended maintenance sequence, not a historical timeline.

## Configuration and runtime prerequisites

- [backend/.env.example](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/backend/.env.example)
- [backend/phpunit.xml](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/backend/phpunit.xml)

Configuration-file presence does not prove deployment success. Keep credentials outside version control and use synthetic records during setup.

## Verification plan

Verify every navigation anchor, external project link, image fallback, and mobile breakpoint. Do not count framework example tests as portfolio feature coverage.

Test-related files found in the repository tree (3; inventory only, not a passing-test count):

- [backend/tests/Feature/ExampleTest.php](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/backend/tests/Feature/ExampleTest.php)
- [backend/tests/TestCase.php](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/backend/tests/TestCase.php)
- [backend/tests/Unit/ExampleTest.php](https://github.com/HidayahMF/Portofolio-2025/blob/9e42aab2635cae653ec43485910abec0925c7027/backend/tests/Unit/ExampleTest.php)

## Known limitations and next work

PortfolioController methods are empty and backend/routes/web.php only returns the welcome view. A working CMS or frontend-to-backend portfolio integration is not established by this code.

Prioritize the acceptance checks above before expanding the feature set. A declared test command or example test does not establish production readiness.

## Keeping this document accurate

Update the source snapshot and affected flow when entry points, persistence, authentication, or integration contracts change. Keep planned capabilities separate from implemented behavior, and record actual build/test results only after running them.
