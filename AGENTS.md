<!-- gsd-project-start source:PROJECT.md -->

## Project

**OOWiT Psychology Center Website Redesign**

This project is a full redesign of `oowit.pl` for OOWiT (Otwocki Osrodek Wsparcia Rodziny, Diagnozy i Terapii), a psychology and pedagogy center in Otwock. The new product is a performant, multipage website with specialist-first booking flows, clear service communication, and trust-building content for children, youth, adults, and couples. It targets families and individuals seeking integrated diagnosis, therapy, and long-term support in one center.

**Core Value:** People can quickly find the right specialist and book an available appointment in a trustworthy, high-quality digital experience.

### Constraints

- **Tech stack**: Next.js App Router + Tailwind + Supabase - aligned with klocki and workspace standards
- **Information architecture**: Preserve and improve current section/service model - avoids patient confusion during migration
- **Performance**: Core Web Vitals are launch blockers - site speed is a primary pain point today
- **Accessibility**: WCAG 2.1 AA baseline with reduced-motion handling - healthcare context requires inclusive UX
- **Booking architecture**: Per-practitioner availability and slot integrity - core operational requirement
- **Content quality**: Polish-language clinical clarity and trust-first tone - audience confidence depends on clarity

<!-- gsd-project-end -->

<!-- gsd-stack-start source:research/STACK.md -->

## Technology Stack

## Recommended Stack (2026-ready)

### Core Web Platform

| Technology | Version Track | Purpose | Why this choice | Confidence |
|---|---|---|---|---|
| Next.js (App Router) | 16.x stable track | Multi-page SSR/SSG website + booking flows | Server Components by default keep JS low (better CWV), route-level caching/streaming, built-in Web Vitals reporting, mature deployment path on Vercel | MEDIUM |
| React | 19.x (bundled by Next) | UI runtime | Best-supported path for App Router, strong ecosystem for accessible form/calendar UI | MEDIUM |
| TypeScript | 5.9+ | Type-safe domain + API contracts | Reduces booking logic regressions (time ranges, status transitions, RLS-aware DTOs) | HIGH |
| Tailwind CSS | 4.x | Design system and utility styling | Fast iteration with predictable bundles; supports `focus-visible`, `motion-reduce`, ARIA/data-state variants needed for WCAG | MEDIUM |

### Data and Auth

| Technology | Version Track | Purpose | Why this choice | Confidence |
|---|---|---|---|---|
| Supabase Postgres | Managed PG 17/18 track | Core data store | Strong fit for relational booking model + RLS + SQL constraints (critical for no double-booking) | MEDIUM |
| `@supabase/supabase-js` | 2.x | App/data access | Standard integration path with Next.js App Router and server/client boundary support | HIGH |
| Supabase Auth | Current GA | Admin/staff auth | Native integration for role-aware panel access and RLS policy context (`auth.uid`, `auth.jwt`) | MEDIUM |
| Supabase Storage | Current GA | Practitioner photos/docs | Keeps CMS-like assets in same platform, simplifies operations | MEDIUM |

### Performance and Accessibility Tooling

| Tool | Version Track | Purpose | Why | Confidence |
|---|---|---|---|---|
| `next/web-vitals` + `useReportWebVitals` | Next 16 API | Real-user CWV tracking | Needed to enforce LCP/INP/CLS budgets route-by-route (home, specialist profile, booking) | MEDIUM |
| `@axe-core/playwright` + Playwright | latest stable | A11y + E2E gates | Prevents regressions in keyboard flow, form labels, dialogs, and booking widgets | HIGH |
| Lighthouse CI | latest stable | Perf budgets in CI | Catches regressions before deploy (especially LCP/CLS drift on content-heavy pages) | HIGH |

## Klocki Module Fit (mandatory reuse first)

## Supabase Schema Implications (per-practitioner calendars)

- `practitioners`
- `services`
- `practitioner_services`
- `availability_rules`
- `availability_exceptions`
- `appointments`

### Hard correctness requirement

- `tstzrange(starts_at, ends_at, '[)')`
- `EXCLUDE USING gist (practitioner_id WITH =, timeslot WITH &&)`
- `WHERE status IN ('pending','confirmed')`
- `btree_gist` extension enabled

### RLS direction

- Public (anon): create appointment only through tightly scoped insert policy/RPC.
- Staff (`authenticated`): read/manage appointments for assigned practitioners.
- Admin roles: broader management through membership/role table + helper function (`SECURITY DEFINER`) where needed.
- Performance: prefer `(select auth.uid())` pattern and index every policy predicate column.

## Booking Implementation Direction

## Do Not Use (anti-patterns)

- Do not store production bookings in JSON files (e.g. `data/reservations.json`).
- Do not implement booking safety as `check slot -> insert` only in application code.
- Do not overuse `'use client'` in whole page/layout trees; keep client islands minimal.
- Do not remove focus styles (`outline-none`) without WCAG-compliant replacement.
- Do not expose Supabase service role key to browser/client code.
- Do not encode authorization in user-editable metadata (`raw_user_meta_data`).
- Do not rely on one universal calendar table without practitioner/service boundaries.

## Concrete Package Set

# Core

# Booking/calendar UX (headless, accessible)

# Validation + testing

## Sources

- Next.js docs (Server/Client components): https://nextjs.org/docs/app/getting-started/server-and-client-components  
- Next.js analytics/Web Vitals guide: https://nextjs.org/docs/app/guides/analytics  
- Tailwind state variants (`focus-visible`, etc.): https://tailwindcss.com/docs/hover-focus-and-other-states  
- PostgreSQL range + exclusion constraints: https://www.postgresql.org/docs/current/rangetypes.html  
- Supabase RLS docs/search references: https://supabase.com/docs/guides/database/postgres/row-level-security  
- Local module baseline (`klocki`): `/home/itmaster/Pulpit/strony/klocki/README.md` and `modul-rezerwacji-stolika/README.md`

## Confidence Notes

- **HIGH:** local klocki reuse direction, TypeScript/testing recommendations, anti-patterns around JSON booking storage.  
- **MEDIUM:** exact Next.js/Tailwind/Supabase version-track best practices (validated across official docs + web cross-check, but provider tier remains medium).  
- **LOW:** none used for core recommendations.

<!-- gsd-stack-end -->

<!-- gsd-conventions-start source:CONVENTIONS.md -->

## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- gsd-conventions-end -->

<!-- gsd-architecture-start source:ARCHITECTURE.md -->

## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- gsd-architecture-end -->

<!-- gsd-skills-start source:skills/ -->

## Project Skills

No project skills found. Add skills to any of: `.cursor/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- gsd-skills-end -->

<!-- gsd-workflow-start source:GSD defaults -->

## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:

- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- gsd-workflow-end -->

<!-- gsd-profile-start -->

## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- gsd-profile-end -->
