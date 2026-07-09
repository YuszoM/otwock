---
phase: 02-content-demo-presentation
plan: DEMO
subsystem: ui
tags: [nextjs, framer-motion, playwright, healthcare, demo]

requires:
  - phase: 01-foundation-and-ui-baseline
    provides: layout shell, design tokens, NAV-01 routes, a11y baseline
provides:
  - Full content pages (team, services, about, contact, pricing, trust)
  - Mock booking wizard (/rezerwacja → confirmation)
  - Blog/aktualnoci from markdown
  - Premium framer-motion with prefers-reduced-motion
affects: [phase-3-booking-real, phase-5-polish]

tech-stack:
  added: [framer-motion, gray-matter]
  patterns: [mock booking state machine, FadeIn/Stagger motion primitives, demo server actions]

key-files:
  created:
    - src/components/booking/booking-wizard.tsx
    - src/components/motion/fade-in.tsx
    - src/components/content/trust-section.tsx
    - src/lib/booking/mock.ts
    - tests/e2e/booking-flow.spec.ts
    - tests/e2e/content-pages.spec.ts
  modified:
    - src/app/(public)/page.tsx
    - src/app/o-nas/page.tsx
    - src/app/zespol/page.tsx
    - src/app/uslugi/page.tsx
    - src/app/cennik/page.tsx
    - src/app/kontakt/page.tsx
    - src/app/rezerwacja/page.tsx

key-decisions:
  - "Presentation demo scope: mock booking + contact validation only; Supabase booking/admin deferred post-contract"
  - "4-step booking wizard (specialist → service → calendar → form) with deep-link ?specjalista= skip"
  - "Motion via shared FadeIn/StaggerChildren/HoverLift respecting useReducedMotion"

patterns-established:
  - "Motion: cubic-bezier [0.22,1,0.36,1] slides, staggered list reveals, hover lift on cards"
  - "SpecialistCard selectable mode for wizard (no nested links inside buttons)"

requirements-completed: [NAV-02, NAV-03, TEAM-01, TEAM-02, SERV-01, SERV-02, SEO-01, SEO-02, CONT-01, CONT-03]

coverage:
  - id: D1
    description: "Content pages with team, services, about, contact, pricing, trust"
    requirement: TEAM-01
    verification:
      - kind: e2e
        ref: "tests/e2e/content-pages.spec.ts"
        status: pass
    human_judgment: true
    rationale: "Visual polish and client impression require human review"
  - id: D2
    description: "Mock booking flow specialist → service → calendar → thank you"
    requirement: BOOK-01
    verification:
      - kind: e2e
        ref: "tests/e2e/booking-flow.spec.ts"
        status: pass
    human_judgment: false
  - id: D3
    description: "Conversion paths from home in ≤2 clicks"
    requirement: NAV-02
    verification:
      - kind: e2e
        ref: "tests/e2e/content-pages.spec.ts#NAV-02"
        status: pass
    human_judgment: false

duration: 120min
completed: 2026-07-09
status: complete
---

# Phase 2 Plan DEMO: Presentation Demo Summary

**Premium healthcare spa demo with framer-motion content pages and mock 4-step booking wizard — no backend**

## Performance

- **Duration:** ~120 min (continued session)
- **Completed:** 2026-07-09
- **Tasks:** 1 (demo bundle)
- **Files modified:** 40+

## Accomplishments

- All public content pages live with oowit.pl-aligned copy and elegant team/service cards
- Trust section, care process, and animated home hero for client presentation
- Mock `/rezerwacja` wizard with fake slots and confirmation page (`OOW-` reference codes)
- Blog at `/aktualnosci` from markdown; legal pages and sitemap updated
- Admin panel and real Supabase booking removed/deferred for demo scope
- Build, lint, and 26/26 e2e tests passing

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] framer-motion ease tuple TypeScript error**
- **Found during:** Build verification
- **Issue:** `ease: number[]` not assignable to `Easing`
- **Fix:** Added `as const` to cubic-bezier tuple in booking-wizard
- **Files modified:** `src/components/booking/booking-wizard.tsx`

**2. [Rule 2 - Missing Critical] Home conversion links for NAV-01 test**
- **Found during:** e2e nav-route-integrity
- **Issue:** `/uslugi` and `/kontakt` links missing from home `<main>`
- **Fix:** Added services CTA strip on home page
- **Files modified:** `src/app/(public)/page.tsx`

**3. [Scope pivot] Real booking DB and admin deferred**
- **Decision:** Per user — presentation demo only; Phases 3–4 post-contract

## Known Stubs

| File | Behavior | Reason |
|------|----------|--------|
| `src/app/actions/contact.ts` | Validates form, returns success without DB | Demo mode |
| `src/lib/booking/mock.ts` | Generates fake slots, no persistence | Demo mode |

## Next Phase Readiness

- **Ready for client demo** via `npm run dev`
- **Phase 3** (real booking): needs Supabase schema + slot integrity
- **Phase 4** (admin): deferred
- **Phase 5** partial: motion/blog done; CWV audit at launch

## Self-Check: PASSED

- SUMMARY exists at `.planning/phases/02-content-demo-presentation/02-DEMO-SUMMARY.md`
- Build/lint/e2e: 26/26 pass

---
*Phase: 02-content-demo-presentation*
*Completed: 2026-07-09*
