# Technology Stack

**Project:** OOWiT psychology/pedagogy center website (Otwock, PL)  
**Researched:** 2026-07-09  
**Mode:** Ecosystem (stack-focused)  
**Overall stack confidence:** **MEDIUM**

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

Start from existing modules, then extend where domain-specific:

1. Use directly:
   - `modul-seo`
   - `modul-nawigacji-site-config`
   - `modul-dostepnosci-wcag`
   - `modul-formularza-kontaktowego`
   - `modul-polityka-prywatnosci`
   - `modul-playwright-e2e`
2. Booking foundation:
   - Reuse concepts from `modul-rezerwacji-stolika` (public form, admin list, blocking dates, operational workflow).
3. Evolve for OOWiT:
   - Extract/introduce a dedicated module, e.g. `modul-rezerwacji-specjalistow`, replacing JSON storage with Supabase schema + RLS + exclusion constraints.

**Rationale:** this keeps delivery fast (klocki reuse) while avoiding the production risk called out in table-booking module docs (`reservations.json` non-durable on serverless).

## Supabase Schema Implications (per-practitioner calendars)

Recommended relational model:

- `practitioners`
  - `id`, `slug`, `full_name`, `profession` (psycholog/pedagog/...), `bio`, `active`
- `services`
  - `id`, `slug`, `name`, `duration_min`, `buffer_after_min`, `price_pln`, `active`
- `practitioner_services`
  - `practitioner_id`, `service_id`, optional overrides (`duration_min_override`, `price_override`)
- `availability_rules`
  - recurring windows per specialist (weekday, start_time, end_time, timezone, optional service scope)
- `availability_exceptions`
  - date-specific blocks/overrides (vacation, training, ad-hoc opening)
- `appointments`
  - `id`, `practitioner_id`, `service_id`, `starts_at`, `ends_at`, `status` (`pending|confirmed|cancelled|completed|no_show`), client contact fields, consent flags

### Hard correctness requirement

Use DB-enforced overlap prevention (not app-only checks):

- `tstzrange(starts_at, ends_at, '[)')`
- `EXCLUDE USING gist (practitioner_id WITH =, timeslot WITH &&)`
- `WHERE status IN ('pending','confirmed')`
- `btree_gist` extension enabled

This is the core guardrail for per-specialist calendars under concurrency.

### RLS direction

- Public (anon): create appointment only through tightly scoped insert policy/RPC.
- Staff (`authenticated`): read/manage appointments for assigned practitioners.
- Admin roles: broader management through membership/role table + helper function (`SECURITY DEFINER`) where needed.
- Performance: prefer `(select auth.uid())` pattern and index every policy predicate column.

## Booking Implementation Direction

Use this sequence:

1. Static-first marketing/content pages in App Router (best CWV baseline).
2. Server-rendered specialist pages with small client islands for calendar interactivity.
3. Slot computation server-side from `availability_rules - exceptions - existing appointments`.
4. Final booking write as single DB transaction; map overlap error to user-friendly "termin zajęty".

## Do Not Use (anti-patterns)

- Do not store production bookings in JSON files (e.g. `data/reservations.json`).
- Do not implement booking safety as `check slot -> insert` only in application code.
- Do not overuse `'use client'` in whole page/layout trees; keep client islands minimal.
- Do not remove focus styles (`outline-none`) without WCAG-compliant replacement.
- Do not expose Supabase service role key to browser/client code.
- Do not encode authorization in user-editable metadata (`raw_user_meta_data`).
- Do not rely on one universal calendar table without practitioner/service boundaries.

## Concrete Package Set

```bash
# Core
pnpm add next react react-dom tailwindcss @supabase/supabase-js zod date-fns

# Booking/calendar UX (headless, accessible)
pnpm add react-aria-components

# Validation + testing
pnpm add -D typescript playwright @axe-core/playwright lighthouse-ci
```

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
