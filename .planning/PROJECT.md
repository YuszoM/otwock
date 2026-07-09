# OOWiT Psychology Center Website Redesign

## What This Is

This project is a full redesign of `oowit.pl` for OOWiT (Otwocki Osrodek Wsparcia Rodziny, Diagnozy i Terapii), a psychology and pedagogy center in Otwock. The new product is a performant, multipage website with specialist-first booking flows, clear service communication, and trust-building content for children, youth, adults, and couples. It targets families and individuals seeking integrated diagnosis, therapy, and long-term support in one center.

## Core Value

People can quickly find the right specialist and book an available appointment in a trustworthy, high-quality digital experience.

## Business Context

- **Customer**: OOWiT center management and clinical team; patients and caregivers as end users
- **Revenue model**: Service appointments and therapeutic programs booked via website
- **Success metric**: Increased successful bookings per specialist with low abandonment
- **Strategy notes**: Preserve current service IA while upgrading UX, speed, and booking reliability

## Requirements

### Validated

(None yet - ship to validate)

### Active

- [ ] Multipage IA matching current OOWiT structure (home, center, team, services, pricing, news, contact, booking, careers, RODO)
- [ ] Per-specialist booking calendars with service and slot selection
- [ ] Elegant specialist profile cards with clear competencies, languages, and booking CTA
- [ ] Fast Core Web Vitals-first architecture (LCP, INP, CLS as first-class constraints)
- [ ] Design language aligned to dark green and beige, earth tones, and subtle Otwock/Swidermajer references
- [ ] CMS/admin capability for managing specialists, services, and availability
- [ ] Local SEO foundation for Otwock psychology center searches
- [ ] WCAG 2.1 AA baseline accessibility and reduced-motion-safe interactions

### Out of Scope

- Single-page website variant - rejected because IA and trust content require multipage clarity
- Kitsch visual themes or heavy decorative animation - rejected to preserve clinical trust and readability
- Full external marketplace replacement beyond center-owned booking (e.g. broad Booksy marketplace parity) - only specialist calendar UX parity is in scope

## Context

Current `oowit.pl` quality is low (readability, performance, and feature reliability), so redesign must treat usability and speed as non-negotiable. The implementation stack follows workspace conventions: Next.js App Router + Tailwind + Supabase, while reusing klocki modules where possible (`modul-seo`, `modul-nawigacji-site-config`, `modul-ciasteczek`, `modul-dostepnosci-wcag`, `modul-formularza-kontaktowego`, `modul-aktualnosci-blog`) and evolving booking from `modul-rezerwacji-stolika` into specialist calendars. Visual direction blends nature-informed tones and subtle regional identity cues, supported by custom graphics supplied by the user.

## Constraints

- **Tech stack**: Next.js App Router + Tailwind + Supabase - aligned with klocki and workspace standards
- **Information architecture**: Preserve and improve current section/service model - avoids patient confusion during migration
- **Performance**: Core Web Vitals are launch blockers - site speed is a primary pain point today
- **Accessibility**: WCAG 2.1 AA baseline with reduced-motion handling - healthcare context requires inclusive UX
- **Booking architecture**: Per-practitioner availability and slot integrity - core operational requirement
- **Content quality**: Polish-language clinical clarity and trust-first tone - audience confidence depends on clarity

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use multipage architecture, not one-page | Existing service breadth and SEO/local discoverability need clear dedicated pages | - Pending |
| Use Supabase-backed specialist booking model | Needed for practitioner availability, admin management, and reliable scheduling | - Pending |
| Start from klocki modules and extend booking module | Accelerates delivery while preserving reusable workspace conventions | - Pending |
| Use subtle motion and nature-inspired theme | Clinical trust and readability first; tasteful polish instead of visual noise | - Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? -> Move to Out of Scope with reason
2. Requirements validated? -> Move to Validated with phase reference
3. New requirements emerged? -> Add to Active
4. Decisions to log? -> Add to Key Decisions
5. "What This Is" still accurate? -> Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check - still the right priority?
3. Audit Out of Scope - reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-07-09 after initialization*
