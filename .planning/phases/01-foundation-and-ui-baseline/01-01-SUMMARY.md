---
phase: 01-foundation-and-ui-baseline
plan: 01
subsystem: ui
tags: [nextjs, klocki, tailwind, design-tokens, navigation]

requires: []
provides:
  - Global layout shell with klocki modules (SEO, nav, cookies, WCAG)
  - Centralized site.ts IA configuration
  - Dark green/beige CSS token baseline
affects: [02-content-ia, 03-booking, 05-launch]

tech-stack:
  added: [next@16.2.9, react@19.2.4, tailwindcss@4, @supabase/supabase-js, @phosphor-icons/react]
  patterns: [klocki-first composition, semantic CSS variables, single siteConfig source]

key-files:
  created:
    - src/app/layout.tsx
    - src/config/site.ts
    - src/app/globals.css
    - src/styles/tokens.css
    - src/components/layout/site-header.tsx
    - src/components/layout/site-footer.tsx
  modified: []

key-decisions:
  - "Reused klocki modules instead of custom SEO/nav/cookie/a11y implementations"
  - "Auto-approved SUS packages per operator directive (next, tailwind, supabase)"
  - "Source Sans 3 + forest/beige/honey token palette per 01-UI-SPEC.md"

patterns-established:
  - "Pattern: siteConfig drives header/footer exclusively (NAV-01)"
  - "Pattern: Plan-compat re-exports (seo-root, skip-link, cookie-banner)"

requirements-completed: [NAV-01, DESIGN-01]

coverage:
  - id: D1
    description: Klocki foundation shell wired in root layout
    requirement: NAV-01
    verification:
      - kind: unit
        ref: "npm run lint"
        status: pass
    human_judgment: false
  - id: D2
    description: Dark green/beige semantic tokens applied to shell components
    requirement: DESIGN-01
    verification:
      - kind: unit
        ref: "npm run lint"
        status: pass
    human_judgment: false

duration: 45min
completed: 2026-07-09
status: complete
---

# Phase 1 Plan 01: Klocki Shell + Design Tokens Summary

**Modular OOWiT layout shell with klocki SEO/nav/cookies/a11y and tokenized forest/beige styling.**

## Performance

- **Duration:** ~45 min
- **Tasks:** 3/3
- **Files modified:** 31

## Accomplishments

- Integrated `modul-seo`, `modul-nawigacji-site-config`, `modul-dostepnosci-wcag`, `modul-ciasteczek` into `layout.tsx`
- Centralized NAV-01 links and footer legal links in `src/config/site.ts`
- Defined semantic CSS variables for forest (#1a3a2f), beige (#e8dcc8), and honey accent
- Restyled header, footer, skip-link, and cookie banner to match UI spec

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] React 19 lint rules on klocki client components**
- **Found during:** Task 1 verification
- **Issue:** `setState` in `useEffect` flagged by eslint react-hooks plugin
- **Fix:** `useSyncExternalStore` for mount gate; lazy state init for a11y prefs
- **Files modified:** cookie-consent-banner.tsx, accessibility-toolbar.tsx, site-header.tsx
- **Commit:** 3110e8f

### Checkpoint

**SUS package approval (Task 2):** Auto-approved per operator instruction. Standard stack installed.

## Self-Check: PASSED

- FOUND: src/config/site.ts
- FOUND: src/app/layout.tsx
- FOUND: commit 3110e8f
