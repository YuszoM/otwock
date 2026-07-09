# Domain Pitfalls

**Domain:** Greenfield therapy center website with specialist booking
**Researched:** 2026-07-09

## Critical Pitfalls

### Pitfall 1: Slot integrity broken by race conditions and timezone drift
**What goes wrong:** Two users book overlapping slots for the same specialist, or slots shift around DST boundaries and no longer match therapist availability.
**Why it happens:** Availability is validated in app code (read-then-write) instead of enforced atomically in Postgres; local-time storage leaks into persistence and comparisons.
**Consequences:** Double bookings, invalid confirmations, manual admin conflict resolution, and trust loss for patients.
**Warning signs:** Duplicate/overlapping appointments in DB, spikes in "slot just disappeared" errors, timezone-specific complaints around DST switch weeks.
**Prevention strategy:** Model appointments with `tstzrange`, enforce non-overlap with `EXCLUDE USING GIST` (`btree_gist`), use transactional conflict handling/retry, store UTC in DB and convert only at UI edges, and run concurrency tests with parallel booking attempts.
**Recommended phase mapping:** **Phase 1 (Data model + booking engine foundation)** as a launch blocker, then re-validated in **Phase 3 (hardening)**.

### Pitfall 2: Supabase authorization drift (RLS gaps, metadata misuse, exposed data)
**What goes wrong:** Authenticated users read or mutate records outside their scope, or privileged operations run from client context.
**Why it happens:** Missing RLS on newly added tables, policies without `WITH CHECK`, permissions tied to `raw_user_meta_data`, stale `auth.jwt()` assumptions, or leaked service-role usage patterns.
**Consequences:** Cross-patient data exposure, unauthorized edits, compliance and legal risk, emergency security rewrites.
**Warning signs:** Tables in exposed schema without RLS, policies that only define `USING`, business authorization decisions based on user-editable metadata, broad `anon/authenticated` grants.
**Prevention strategy:** Enforce RLS on every exposed table by migration default, use `TO authenticated` + `USING` + `WITH CHECK`, authorize from `app_metadata` or server-side lookups, keep service-role only in trusted server execution paths, and add policy regression tests in CI.
**Recommended phase mapping:** **Phase 1 (Security baseline)** and deep hardening in **Phase 3 (security verification + penetration checklist)**.

### Pitfall 3: SEO authority loss during IA/content migration from legacy `oowit.pl`
**What goes wrong:** Rankings and local-intent traffic drop after launch because old URLs and content signals are not preserved correctly.
**Why it happens:** Missing 1:1 redirect mapping, redirect chains, homepage-mass redirects, canonical/sitemap mismatch, and weak post-launch crawl monitoring.
**Consequences:** Organic traffic decline, lower discoverability for therapist/service pages, slower recovery and higher paid-acquisition dependency.
**Warning signs:** 404/soft-404 growth in Search Console, indexed old URLs persisting, key service pages losing impressions/clicks, canonical conflicts between old/new paths.
**Prevention strategy:** Create complete old-to-new URL map before build freeze, deploy one-hop permanent redirects (`301`/`308`) at cutover, update canonicals/internal links/sitemaps to new URLs, and run T+0/T+1/T+7 monitoring.
**Recommended phase mapping:** **Phase 2 (Content + IA migration prep)** with final execution in **Phase 4 (go-live migration window)**.

### Pitfall 4: Misfitting `modul-rezerwacji-stolika` semantics for specialist calendars
**What goes wrong:** The adapted booking flow keeps restaurant assumptions (tables/turns/party logic) that conflict with therapy workflows (specialist qualifications, intake, buffers, confidentiality).
**Why it happens:** Direct reuse of module domain model without replacing core scheduling semantics and privacy boundaries.
**Consequences:** Invalid slot logic, broken admin operations, privacy leaks in reminders/intake handling, expensive refactor mid-project.
**Warning signs:** Domain vocabulary in code/UI still references table/party concepts, slot duration rules not specialist-specific, no explicit intake/privacy fields split.
**Prevention strategy:** Reuse only transport/UI primitives from the module; redesign schema/events around specialist, service type, session length, prep/cooldown buffers, and consent-aware intake; run domain-model review before implementation.
**Recommended phase mapping:** **Phase 0 (discovery + architecture decisions)** and locked in **Phase 1 (schema/API design)**.

## Moderate Pitfalls

### Pitfall 1: Accessibility regressions from animated healthcare UI
**What goes wrong:** Motion-heavy transitions trigger vestibular discomfort and keyboard users lose focus visibility under sticky/animated layers.
**Prevention strategy:** Implement `prefers-reduced-motion` for all non-essential interaction-triggered motion, keep focus targets unobscured (WCAG 2.4.11), and run manual keyboard walkthroughs across breakpoints and reduced-motion mode.
**Warning signs:** Focus jumps under sticky headers, motion cannot be disabled, reduced-motion mode still runs transform/scroll animations.
**Recommended phase mapping:** **Phase 2 (design system + component library)** with QA gates in **Phase 4 (a11y audit)**.

### Pitfall 2: Core Web Vitals regressions in Next.js App Router
**What goes wrong:** LCP, CLS, and INP degrade late in development due to expanding client boundaries, oversized bundles, and unstable streaming fallbacks.
**Prevention strategy:** Keep client components at leaf nodes, preload only true LCP image(s), size all media/skeleton fallbacks deterministically, and instrument RUM via `useReportWebVitals` in a dedicated client component.
**Warning signs:** CLS spikes tied to Suspense boundaries, increasing JS payload per route, no field-data telemetry, fixes based only on lab Lighthouse snapshots.
**Recommended phase mapping:** Baseline in **Phase 1 (performance budget definition)** and enforced continuously in **Phase 3-4 (pre-launch performance gates)**.

## Minor Pitfalls

### Pitfall 1: Over-collecting sensitive data in booking forms
**What goes wrong:** Intake requests gather unnecessary health details too early in a public booking step.
**Prevention strategy:** Collect minimum scheduling data first; defer clinical details to authenticated or protected follow-up flow.
**Warning signs:** Public forms ask for diagnosis history, medications, or detailed symptoms before appointment confirmation.
**Recommended phase mapping:** **Phase 1 (privacy-by-design form schema review)**.

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Discovery and module reuse decision | Restaurant-domain leakage into therapy booking model | Run explicit domain remapping before coding; reject table/party assumptions |
| Schema and API foundation | Slot overlap + timezone inconsistency | Postgres range/exclusion constraints, UTC storage, conflict retries |
| Security baseline | RLS gaps on new tables and unsafe metadata authorization | Migration checklist: RLS required, `WITH CHECK`, `app_metadata` only |
| UX and interaction design | Motion/focus a11y failures in animated UI | Reduced-motion defaults + keyboard/focus-not-obscured test matrix |
| IA/content migration | Traffic/ranking drop from redirect or canonical errors | 1:1 map, one-hop redirects, staged verification, Search Console monitoring |
| Pre-launch hardening | CWV regressions hidden until production | Field-data instrumentation and threshold-based release gate |

## Sources

- [Supabase RLS docs](https://supabase.com/docs/guides/database/postgres/row-level-security) (MEDIUM confidence via context7-classified seam)
- [PostgreSQL range types and exclusion constraints](https://www.postgresql.org/docs/19/rangetypes.html) (MEDIUM confidence, cross-checked)
- [W3C WCAG 2.3.3 animation from interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) (MEDIUM confidence, cross-checked)
- [W3C WCAG 2.4.11 focus not obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) (MEDIUM confidence, cross-checked)
- [Google Search Central site move with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) (MEDIUM confidence, cross-checked)
- [Next.js `useReportWebVitals` docs](https://nextjs.org/docs/15/app/api-reference/functions/use-report-web-vitals) (MEDIUM confidence via context7-classified seam)
- [Next.js Image component docs](https://nextjs.org/docs/app/api-reference/components/image) (MEDIUM confidence via context7-classified seam)
