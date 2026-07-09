---
phase: 01-foundation-and-ui-baseline
plan: 03
subsystem: accessibility
tags: [a11y, axe, playwright, supabase, error-pages]

requires:
  - phase: 01-02
    provides: NAV-01 routes for a11y smoke targets
provides:
  - A11Y shell contract with automated axe/keyboard tests
  - Token-styled error surfaces from modul-stron-bledow
  - Supabase env/bootstrap without booking schema
affects: [03-booking, 04-admin]

tech-stack:
  added: [@axe-core/playwright]
  patterns: [axe critical gate, lazy Supabase client factories]

key-files:
  created:
    - tests/e2e/a11y-shell.spec.ts
    - .env.example
    - src/lib/supabase/client.ts
    - src/lib/supabase/server.ts
  modified:
    - src/app/not-found.tsx
    - src/app/error.tsx
    - src/app/global-error.tsx

key-decisions:
  - "Supabase uses @supabase/supabase-js only (no schema/migrations in Phase 1)"
  - "Error copy aligned to 01-UI-SPEC.md Polish contract"

patterns-established:
  - "Pattern: acceptCookies helper in E2E before shell interaction"
  - "Pattern: Supabase clients throw only when factory is invoked"

requirements-completed: [A11Y-01, DESIGN-01]

coverage:
  - id: D1
    description: Automated axe + keyboard shell gate on /, /rezerwacja, /kontakt
    requirement: A11Y-01
    verification:
      - kind: e2e
        ref: "tests/e2e/a11y-shell.spec.ts"
        status: pass
    human_judgment: false
  - id: D2
    description: Error pages reuse modul-stron-bledow with OOWiT tokens
    requirement: DESIGN-01
    verification:
      - kind: unit
        ref: "npm run build"
        status: pass
    human_judgment: true
    rationale: Visual confirmation of not-found/error UX still needs human spot-check
  - id: D3
    description: Supabase env skeleton documented without booking tables
    verification:
      - kind: unit
        ref: "npm run build"
        status: pass
    human_judgment: false

duration: 20min
completed: 2026-07-09
status: complete
---

# Phase 1 Plan 03: A11Y + Errors + Supabase Env Summary

**Accessible shell with axe/keyboard gates, klocki error pages, and Supabase bootstrap-only env contract.**

## Performance

- **Duration:** ~20 min
- **Tasks:** 3/3
- **Files modified:** 7

## Accomplishments

- Added `a11y-shell.spec.ts` with axe critical checks and skip-link keyboard flow
- Restyled `not-found`, `error`, and `global-error` from `modul-stron-bledow`
- Added `.env.example` and lazy Supabase client/server factories (no booking schema)

## Deviations from Plan

None - plan executed as written.

## Auth Gates

None.

## Self-Check: PASSED

- FOUND: tests/e2e/a11y-shell.spec.ts
- FOUND: .env.example
- FOUND: commit 68b5982
