---
phase: 01-foundation-and-ui-baseline
plan: 02
subsystem: routing
tags: [nextjs, app-router, playwright, ia]

requires:
  - phase: 01-01
    provides: siteConfig shell and global layout
provides:
  - Complete NAV-01 placeholder routes
  - Homepage hero wired to public images
  - Route integrity Playwright gate
affects: [02-content-ia, 03-booking]

tech-stack:
  added: [@playwright/test, playwright]
  patterns: [config-driven route tests, placeholder page template]

key-files:
  created:
    - src/app/(public)/page.tsx
    - tests/e2e/nav-route-integrity.spec.ts
    - src/components/placeholder-page.tsx
  modified:
    - src/config/site.ts
    - src/app/sitemap.ts

key-decisions:
  - "Rezerwacja exposed as header CTA only (not duplicated in text nav)"
  - "Playwright uses production server (next start) to avoid Turbopack watch limits"

patterns-established:
  - "Pattern: getAllNavPaths() exports testable IA path list from site.ts"

requirements-completed: [NAV-01]

coverage:
  - id: D1
    description: All NAV-01 routes exist and return HTTP 200
    requirement: NAV-01
    verification:
      - kind: e2e
        ref: "tests/e2e/nav-route-integrity.spec.ts"
        status: pass
      - kind: unit
        ref: "npm run build"
        status: pass
    human_judgment: false

duration: 25min
completed: 2026-07-09
status: complete
---

# Phase 1 Plan 02: IA Route Skeleton Summary

**Walking skeleton with 11 NAV-01 routes, hero homepage, and automated route integrity tests.**

## Performance

- **Duration:** ~25 min
- **Tasks:** 2/2
- **Files modified:** 26

## Accomplishments

- Created placeholder pages for all IA sections plus RODO and privacy policy
- Wired homepage hero (`hero-otwock-forest-16x9.jpg`) and process image section
- Added `nav-route-integrity.spec.ts` iterating paths from `siteConfig`
- Updated sitemap to include all NAV-01 paths

## Deviations from Plan

None - plan executed as written.

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Playwright dev server Turbopack panic**
- **Found during:** Task 2 verification
- **Issue:** `next dev` hit OS file watch limit under Playwright webServer
- **Fix:** Playwright webServer uses `npm run start` after production build
- **Commit:** 300d16e

## Self-Check: PASSED

- FOUND: src/app/(public)/page.tsx
- FOUND: tests/e2e/nav-route-integrity.spec.ts
- FOUND: commit 300d16e
