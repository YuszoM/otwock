# Architecture Patterns

**Domain:** Greenfield multipage healthcare booking website (OOWiT)  
**Researched:** 2026-07-09  
**Overall architecture confidence:** **MEDIUM**

## Recommended Architecture

Use a **static-first multipage App Router architecture** with a **server-first booking core**:

- Marketing and information pages render as Server Components with cached/static shells.
- Booking and admin use small client islands for interaction, but writes always go through server-side actions/route handlers.
- Supabase Postgres is the source of truth for scheduling logic and overlap prevention.
- Reuse klocki modules for SEO/navigation/WCAG/contact/admin shell, then extend booking into a dedicated specialist-booking module.

```text
Browser (Public + Admin)
  -> Next.js App Router (RSC + client islands)
      -> Server Actions / Route Handlers
          -> Domain services (booking, availability, CMS)
              -> Supabase Postgres (RLS + constraints)
              -> Supabase Storage (media)
```

## Component Boundaries

| Component | Responsibility | Communicates With |
|-----------|---------------|-------------------|
| `app/(public)` routes | Multipage IA, content, SEO pages, specialist profile pages | Content service, booking read APIs |
| Booking UI island (`booking-wizard`) | Service/specialist/date/slot selection UX, optimistic interactions | Booking query endpoint, booking create action |
| Booking domain service | Slot generation, booking validation, idempotency/conflict mapping | Availability tables, appointments table |
| `app/(admin)` routes | Admin panel for specialists, services, schedules, content, appointment ops | Auth guards, admin services |
| Admin booking service | CRUD for schedules/exceptions/appointments, operational status changes | Supabase server client/service role paths |
| Content service | CMS entries, page sections, team/service metadata | Supabase content tables, Storage |
| Auth/authorization layer | Session verification, role lookup, route-level and action-level checks | Supabase Auth (`getClaims`), role tables, RLS |
| Observability layer | CWV capture, booking funnel, conflict/error telemetry | Web-vitals reporter, logs/events table |

## Data Flow

### 1) Public content flow (LCP-first)
1. Request hits App Router page (Server Component by default).
2. Cached/static content + SEO metadata render in server response.
3. Optional client islands hydrate (search/filter/accordion only where needed).
4. Images/fonts use Next optimizations (`next/image`, `next/font`) to reduce LCP/CLS risk.

### 2) Booking read flow (availability)
1. User picks specialist/service/date in booking client island.
2. Client calls server endpoint with selected context.
3. Server computes slots from:
   - recurring availability rules,
   - date exceptions/blocks,
   - active appointments (pending/confirmed),
   - service duration + buffer.
4. Server returns bookable slots only (already filtered and timezone-safe).

### 3) Booking write flow (conflict-safe)
1. Client submits selected slot + contact payload + idempotency key.
2. Server action validates payload and runs transactional insert path.
3. Postgres exclusion constraint rejects overlap if slot already taken.
4. API maps conflict to user-facing message ("termin juz zajety, wybierz inny").
5. Success returns confirmation data; optional notification job is triggered asynchronously.

### 4) Admin management flow
1. Admin route guarded by server-side claims check.
2. Admin operations (schedule edit, exception block, appointment status change, CMS edits) run in server-only handlers.
3. Writes persist to Supabase with stricter role checks + audit fields.
4. Cache invalidation/revalidation updates affected public pages and booking availability views.

## Trust Boundaries

| Boundary | Untrusted Side | Trusted Side | Controls |
|----------|----------------|--------------|----------|
| Internet -> public routes | Anonymous browser input | Next server runtime | Input validation, rate limits on booking endpoints, CSRF-safe actions |
| Client component -> server action | Browser payload and local state | Server domain logic | Zod/schema validation, idempotency key checks, server-only secrets |
| Next server -> Supabase (user-scoped) | Potential spoofed client intent | RLS-enforced DB access | `authenticated`/`anon` RLS policies, per-operation policies, indexed predicates |
| Next server -> Supabase (privileged ops) | Admin UI requests | Service role server paths only | No service keys in client bundle, route-level role checks, action-level authorization |
| App logic -> scheduling integrity | Race conditions under concurrent writes | Database constraints | `tstzrange` + `EXCLUDE USING GIST`, transaction boundaries, conflict error handling |
| Admin surface -> sensitive data | Over-broad staff access | Least-privilege role model | Role table, row scoping per practitioner/team, auditable update metadata |

## Schema-Level Booking Architecture

### Core entities

| Entity | Purpose | Key columns |
|--------|---------|-------------|
| `practitioners` | Specialist directory | `id`, `slug`, `full_name`, `timezone`, `is_active` |
| `services` | Bookable service definitions | `id`, `slug`, `duration_min`, `buffer_after_min`, `price_pln`, `is_active` |
| `practitioner_services` | Which specialist offers which service | `practitioner_id`, `service_id`, optional duration/price overrides |
| `availability_rules` | Recurring weekly windows | `practitioner_id`, `weekday`, `start_local_time`, `end_local_time`, `timezone` |
| `availability_exceptions` | Date-specific overrides/blocks | `practitioner_id`, `starts_at`, `ends_at`, `type` (`blocked`/`override`) |
| `appointments` | Actual bookings and lifecycle state | `id`, `practitioner_id`, `service_id`, `starts_at`, `ends_at`, `status`, patient contact/consent fields |
| `appointment_holds` (optional) | Short reservation holds before confirmation | `practitioner_id`, `slot_range`, `expires_at`, `idempotency_key` |
| `admin_roles` / `staff_assignments` | Role + scope mapping | `user_id`, `role`, optional `practitioner_id` scope |

### Integrity constraints (non-negotiable)

```sql
create extension if not exists btree_gist;

alter table appointments
  add column slot_range tstzrange
  generated always as (tstzrange(starts_at, ends_at, '[)')) stored;

alter table appointments
  add constraint appointments_no_overlap
  exclude using gist (
    practitioner_id with =,
    slot_range with &&
  )
  where (status in ('pending', 'confirmed'));
```

### Indexing baseline

- `appointments (practitioner_id, starts_at)` for schedule views.
- Partial index for active appointments: `where status in ('pending','confirmed')`.
- RLS predicate columns indexed (`user_id`, `practitioner_id`, role mapping keys).
- `availability_rules (practitioner_id, weekday)` and `availability_exceptions (practitioner_id, starts_at)`.

### RLS direction

- Public users (`anon`) can only create/read constrained booking artifacts through explicit policies or RPC.
- Staff/admin (`authenticated`) read and mutate only their scoped rows by role.
- Service-role bypass is limited to server-only administrative paths; never exposed in browser code.

## Performance-Critical Architecture Decisions (LCP/CLS/INP)

- Keep page/layout trees server-rendered by default; mark only interactive leaves with `'use client'`.
- Split booking widget into small client islands; keep data orchestration server-side.
- Use `Suspense` boundaries for dynamic fragments and keep stable fallback dimensions to avoid CLS.
- Treat media as first-class CWV assets: `next/image` with explicit dimensions/sizes and `next/font` self-hosting.
- Use cache/revalidation strategy per segment (static shell + dynamic availability stream).

## Suggested Build Order

1. **Foundation and boundaries**
   - Scaffold route groups (`(public)`, `(admin)`), shared layout, auth guard skeleton.
   - Integrate klocki modules: SEO, navigation config, WCAG, contact form, admin panel shell.
2. **Booking data model first**
   - Create Supabase schema, constraints, RLS, indexes, and role model.
   - Add slot computation service and conflict-safe booking transaction path.
3. **Public booking UX**
   - Build specialist pages and booking wizard client island on top of server APIs.
   - Implement clear error states for slot conflicts and validation.
4. **Admin operations**
   - Add admin CRUD for practitioners/services/rules/exceptions/appointments.
   - Add audit metadata and safe mutation workflows.
5. **Hardening and budgets**
   - Enforce CWV budgets (LCP/CLS/INP), a11y checks, concurrency tests, and RLS policy tests.
   - Finalize observability for booking success/conflict/cancellation metrics.

## Sources

- Next.js Server/Client components: https://nextjs.org/docs/app/getting-started/server-and-client-components (**LOW via provider-tier seam**)  
- Next.js caching and revalidation (Cache Components/PPR): https://nextjs.org/docs/app/getting-started/caching-and-revalidating (**LOW**)  
- Next.js image optimization: https://nextjs.org/docs/app/getting-started/images (**LOW**)  
- Next.js font optimization: https://nextjs.org/docs/app/getting-started/fonts (**LOW**)  
- Supabase RLS docs: https://supabase.com/docs/guides/database/postgres/row-level-security (**LOW**)  
- Supabase Next.js SSR/auth guidance: https://supabase.com/docs/guides/auth/server-side/nextjs (**LOW**)  
- PostgreSQL range types and scheduling constraints: https://www.postgresql.org/docs/current/rangetypes.html (**LOW**)  
- PostgreSQL constraints/exclusion overview: https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-EXCLUSION (**LOW**)  
- Ecosystem booking design cross-check (community/system design references):  
  - https://letsbuildsolutions.com/blog/system-design/designing-a-reservation-and-booking-system-availability-windows-double-booking-prevention-and-calendar-synchronization-at-scale/ (**MEDIUM**)  
  - https://www.techinterview.org/post/3233472829/lld-healthcare-appointment-system/ (**MEDIUM**)  
  - https://butterbase.ai/blog/build-an-appointment-scheduler (**MEDIUM**)  
- Local reuse baseline: `/home/itmaster/Pulpit/strony/klocki/README.md`, `modul-rezerwacji-stolika/README.md`, `modul-panel-zarzadzania/README.md` (**HIGH internal confidence**)
