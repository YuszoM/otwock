# Project Research Summary

**Project:** OOWiT
**Domain:** Local psychology and pedagogy center website with specialist booking
**Researched:** 2026-07-09
**Confidence:** MEDIUM

## Executive Summary

OOWiT should be delivered as a trust-first healthcare website, not as a generic marketing landing page and not as a marketplace product. The strongest expert pattern across research is a static-first multi-page information architecture (clear services, specialists, pricing, legal, contact) with a server-first booking core that guarantees slot correctness under concurrency. This keeps patient confidence high and supports local SEO continuity while protecting operational reliability.

The recommended approach is to ship in strict dependency order: (1) booking data integrity and security baseline, (2) public IA/content and specialist discovery, (3) booking UX and admin operations, then (4) hardening and migration/go-live controls. Stack choices are stable and pragmatic: Next.js App Router + TypeScript + Tailwind + Supabase Postgres/Auth/Storage, with accessibility and CWV gates enforced in CI.

The highest risks are double booking/timezone bugs, RLS authorization gaps, and SEO losses during migration from legacy URLs. Mitigation is explicit and non-negotiable: Postgres exclusion constraints on appointment ranges, policy-tested Supabase RLS with least privilege, and a one-hop 1:1 redirect/canonical migration plan monitored at T+0/T+1/T+7.

## Key Findings

### Recommended Stack

The stack should prioritize booking correctness and low front-end complexity over novelty. Next.js App Router provides server-rendered performance and predictable route segmentation, while Supabase Postgres and RLS cover transactional scheduling integrity and access control. TypeScript is a strong reliability multiplier for booking lifecycles and admin operations.

**Core technologies:**
- Next.js 16 (App Router): multipage SSR/SSG foundation with server components for low-JS delivery.
- React 19 + TypeScript 5.9+: typed UI and domain contracts for booking state and admin workflows.
- Tailwind CSS 4: fast iteration with accessibility-aware state patterns.
- Supabase Postgres + Auth + Storage: unified data/auth/media platform with RLS and constraints.
- Playwright + axe + Lighthouse CI: hard gates for accessibility, booking flow regressions, and CWV budgets.

**Critical stack decision:**
- Extend `modul-rezerwacji-stolika` into `modul-rezerwacji-specjalisty` (new specialist-domain module path), reusing UI/flow primitives but replacing table/party semantics and JSON persistence with a Supabase relational model + RLS + exclusion constraints.

### Expected Features

Research alignment is clear: MVP must deliver trust and operational reliability before advanced matching logic. Table stakes include preserved IA, detailed service and specialist pages, transparent pricing/legal/privacy, and an accessible booking flow with admin scheduling controls.

**Must have (table stakes):**
- Preserved multipage IA and service taxonomy from current OOWiT.
- Specialist profiles (cards + detail pages) with credentials and clear CTAs.
- Per-specialist booking flow (service -> specialist -> slot -> confirmation) with cancel/reschedule.
- Admin CRUD for specialists, services, recurring availability, and exceptions.
- Pricing/contact/legal/RODO pages and WCAG baseline across critical flows.

**Should have (competitive):**
- Guided specialist matching ("help me choose").
- "First available" fallback routing across specialists.
- Reassurance micro-UX and stronger post-first-visit pathway.

**Defer (v2+):**
- Marketplace-like behaviors, public ratings, custom telehealth stack, deep EHR integrations.
- Advanced analytics dashboards before booking/admin reliability is proven.

**Asset-production note:**
- Plan custom visual assets as a dedicated content stream; use user-led production with "nano banana" graphics for differentiated brand visuals, but keep launch-critical UI independent of custom graphic delivery timing.

### Architecture Approach

Architecture should be server-first with explicit trust boundaries. Public routes and content are Server Components by default; booking interactivity runs in small client islands; all writes flow through server actions/handlers into Supabase with DB-enforced slot integrity. Admin functionality lives in guarded `(admin)` routes with role-scoped operations and auditable mutations.

**Major components:**
1. Public content routes (`app/(public)`) - IA, SEO pages, specialist/service presentation.
2. Booking wizard island - interactive selection UX consuming server-computed availability.
3. Booking domain service - slot computation, validation, idempotent conflict-safe writes.
4. Admin routes/services (`app/(admin)`) - schedule, exceptions, appointment lifecycle, content ops.
5. Auth + authorization layer - session claims, role mapping, route/action gating, RLS alignment.

### Critical Pitfalls

1. **Slot overlap and timezone drift** - prevent with UTC storage, `tstzrange`, `EXCLUDE USING GIST`, and concurrency tests.
2. **RLS/security drift** - enforce RLS on all exposed tables, require `USING` + `WITH CHECK`, keep service role server-only, test policies in CI.
3. **SEO migration losses** - execute 1:1 redirect mapping with one-hop permanent redirects and post-launch crawl/index monitoring.
4. **Wrong module semantics from table-booking reuse** - remap domain model early; avoid restaurant vocabulary and logic in specialist booking.
5. **A11y/CWV regressions late in build** - keep client islands minimal, enforce reduced-motion/focus rules, and gate releases on field telemetry + CI budgets.

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Booking Integrity and Security Foundation
**Rationale:** All downstream UX depends on conflict-safe scheduling and authorization correctness.
**Delivers:** Supabase schema, exclusion constraints, RLS policies, role model, booking transaction path, baseline telemetry.
**Addresses:** Per-specialist booking reliability and admin correctness prerequisites.
**Avoids:** Double booking, timezone inconsistency, early security debt.

### Phase 2: IA and Trust Content Migration
**Rationale:** Preserved navigation and service/specialist clarity are conversion-critical and SEO-sensitive.
**Delivers:** Multipage IA, specialist/service pages, pricing/contact/legal/RODO content, redirect map prep.
**Uses:** Next.js server-rendered public routes, SEO/navigation klocki modules.
**Implements:** Public content component boundaries and canonical content model.

### Phase 3: Booking UX and Admin Operations
**Rationale:** After stable data/security/content base, user-facing flow and operational tooling can scale safely.
**Delivers:** Booking wizard, conflict/error UX, cancel/reschedule path, admin CRUD for availability/exceptions/appointments.
**Addresses:** Table-stakes booking + operations and selected trust micro-UX.
**Avoids:** Mid-project refactor from domain mismatch and operational bottlenecks.

### Phase 4: Hardening, Migration Cutover, and Differentiators
**Rationale:** Launch risk reduction requires final validation before optional feature expansion.
**Delivers:** Accessibility and CWV gates, migration execution (redirects/canonicals/sitemaps), post-launch monitoring, then guided matching/first-available pilots.
**Addresses:** Launch readiness and controlled differentiator rollout.
**Avoids:** SEO traffic drops, hidden performance regressions, unstable "nice-to-have" features.

### Phase Ordering Rationale

- Data integrity and security precede UX polish because booking correctness is existential in healthcare flows.
- Content/IA migration is early to protect trust and maintain legacy discoverability before cutover.
- Booking/admin implementation follows architecture boundaries to minimize semantic leakage from reused modules.
- Differentiators are intentionally delayed until reliability KPIs (conflicts, completion rate, policy-test pass rate, CWV) stabilize.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 1:** Detailed RLS policy matrix and role-scope edge cases for admin/staff assignment.
- **Phase 4:** Legacy-to-new SEO migration validation plan with concrete URL inventory and monitoring thresholds.

Phases with standard patterns (skip research-phase):
- **Phase 2:** Multipage content architecture, SEO metadata conventions, and legal/contact page patterns.
- **Phase 3:** Standard booking wizard interaction patterns once schema and transaction contracts are locked.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | MEDIUM | Strong official-doc alignment, but exact version-track choices and hosting behavior still require implementation-time verification. |
| Features | MEDIUM | Clear table stakes and anti-features from domain benchmarks; differentiator impact assumptions need real usage data. |
| Architecture | MEDIUM | Pattern is coherent and dependency-aware; needs validation with real admin workflows and production telemetry. |
| Pitfalls | MEDIUM-HIGH | Risks are concrete and repeatedly corroborated (DB integrity, RLS, SEO migration, a11y/CWV regressions). |

**Overall confidence:** MEDIUM

### Gaps to Address

- RLS detail gap: finalize per-role policy matrix and test fixtures before feature expansion.
- SEO migration gap: produce exhaustive old-to-new URL mapping from real legacy crawl data before go-live freeze.
- Differentiator validation gap: guided matching and first-available logic need post-MVP conversion and abandonment analytics.
- Operations gap: confirm staffing model for schedule governance, exception handling SLA, and cancellation policy enforcement.

## Sources

### Primary (HIGH confidence)
- Internal `klocki` module documentation (`README`, booking/admin modules) - reuse feasibility and module strategy.

### Secondary (MEDIUM confidence)
- Next.js docs (Server/Client Components, analytics/web vitals, caching, images/fonts).
- Supabase docs (RLS, Next.js auth/server patterns).
- PostgreSQL docs (range types and exclusion constraints).
- W3C WCAG 2.2 references (animation from interactions, focus not obscured).
- Google Search Central migration guidance.
- OOWiT current site IA snapshot and booking-domain product references (Booksy and scheduling cross-checks).

### Tertiary (LOW confidence)
- Community architecture/system-design references for healthcare/reservation platforms used as directional cross-check only.

---
*Research completed: 2026-07-09*
*Ready for roadmap: yes*
