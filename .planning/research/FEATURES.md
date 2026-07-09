# Feature Landscape

**Domain:** Therapy center website redesign (Polish local clinic, trust-first healthcare UX)
**Researched:** 2026-07-09

## Table Stakes

Features users and staff will assume are present. Missing these makes the product feel broken or unsafe.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Multipage IA preserved from current OOWiT | Existing patients already navigate by service/team/pricing/contact; migration must avoid confusion | Med | Keep top-level IA: Home, O osrodku, Nasz zespol, Uslugi, Cennik, Aktualnosci, Kontakt, Rezerwacja, Praca, RODO/Polityka prywatnosci |
| Service catalog with dedicated detail pages | Therapy users compare scope, fit, and next step before booking | Med | One page per core service (terapia indywidualna, terapia par, diagnoza, SI, TUS, psycholog dzieciecy, testy, VR, opieka wytchnieniowa, wsparcie prawne) with clear CTA |
| Per-specialist booking flow (Booksy-style) | Users expect to choose service + therapist + date + slot in one flow | High | Flow must show only truly available slots and handle cancel/reschedule reliably |
| Specialist profile cards and detail pages | Healthcare trust depends on visible people, competencies, and fit | Med | Card: photo, role, competencies, languages, target populations, booking CTA; detail page adds credentials and methods |
| Transparent pricing and payment expectations | Price opacity blocks therapy conversions | Low | Keep explicit cennik by service/test; include billing methods and cancellation terms |
| Contact and clinic logistics | Booking confidence depends on phone/address/hours/access info | Low | Contact page must include map, opening times, directions, accessibility info, and alternatives to online booking |
| Careers page with active recruitment slots | Team growth and hiring credibility are expected on clinic sites | Low | Include open roles, requirements, application method, and simple ATS-lite form/email handoff |
| RODO/privacy and legal pages | Sensitive mental-health context requires clear data handling and rights info | Med | Separate RODO clause + privacy policy + consent language for forms and booking |
| Blog/news ("Aktualnosci") | Local SEO and ongoing trust require recent, credible content | Med | Clinician-reviewed posts, clear publish/review metadata, links to relevant services |
| WCAG baseline across all core flows | Accessibility is table stakes for healthcare and legal risk reduction | High | Booking and forms must be keyboard-usable, focus-visible, error-readable, contrast-safe, and mobile-accessible |
| Admin management for specialists/services/availability | Operations cannot rely on hardcoded content/schedules | High | CMS/admin must support CRUD for specialists, services, recurring schedules, date exceptions, and slot rules |

## Differentiators

Features that can separate OOWiT from generic clinic websites while still aligning with trust-first UX.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Guided matching path ("Pomoz mi wybrac specjaliste") | Reduces anxiety and decision paralysis for first-time visitors | Med | Guided questions map users to suggested specialists/services before calendar step |
| "First available" with specialist fallback | Improves conversion when preferred therapist has no near-term slots | High | Requires multi-specialist availability query with explicit patient consent before reassignment |
| Rich therapist trust module | Higher trust and lower no-show risk through transparent expertise | Med | Add verified credentials, modalities, populations, languages, and "for kogo to dobra pomoc" blocks |
| Booking reassurance micro-UX | Lowers abandonment in sensitive mental-health context | Med | Show clear step progress, privacy notices, expected response time, and easy "back without data loss" |
| Local trust layer for Otwock/Jozefow families | Better local relevance and confidence than generic SEO pages | Low | Include neighborhood context, transport/parking hints, and local support pathways |
| Structured follow-up pathway after first consultation | Improves retention by making "what happens next" explicit | Med | Confirmation page/email should present next-step options (therapy plan, diagnostics, contact point) |

## Anti-Features

Features to explicitly avoid in MVP because they add risk/complexity without improving core booking reliability.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Marketplace-scale platform behavior | OOWiT is a single-center website, not a multi-city demand/liquidity engine | Keep provider selection and booking scoped to OOWiT specialists only |
| Public therapist rating system in MVP | Reputation systems can create moderation/legal burden in healthcare context | Use curated trust signals: credentials, methods, team story, and clinician-reviewed content |
| Custom telehealth/video stack in phase 1 | Security/compliance and support burden is too high early | Link to vetted third-party teleconsultation tools only when needed |
| Deep EHR/EMR integration at launch | High integration risk can delay reliable booking rollout | Start with robust internal scheduling model + admin export/manual workflows |
| Heavy animation and decorative interactions | Conflicts with accessibility and clinical trust-first clarity | Use subtle, reduced-motion-safe microinteractions only |
| Advanced analytics dashboards before operational stability | Adds complexity before core workflow quality is proven | Ship essential booking/admin telemetry first (completion, failures, slot conflicts) |

## Feature Dependencies

```text
Preserved IA and service taxonomy -> URL/content model -> Navigation + internal linking

Specialist entity + service entity + availability rules
-> Booking flow (service -> specialist -> slot -> confirmation)
-> Admin scheduling panel

WCAG baseline + form/error standards
-> Accessible booking flow
-> Accessible contact/career/legal forms

Specialist profiles + credentials content
-> Trust module
-> Guided specialist matching

Pricing model + cancellation policy
-> Booking confirmation rules
-> Contact and FAQ clarity
```

## Dependencies by Category

- **Table stakes dependencies:** IA preservation, normalized specialist/service data model, robust availability engine, WCAG-first component library, legal content review.
- **Differentiator dependencies:** Stable table-stakes booking core, confidence in specialist metadata quality, and event tracking for abandonment/fallback optimization.
- **Anti-feature guardrails:** Scope discipline in roadmap governance to prevent marketplace, telehealth-platform, and deep-integration creep before core reliability metrics are met.

## MVP Recommendation

Prioritize:
1. Preserved multipage IA + service pages + specialist pages (trust-first content quality baseline)
2. Reliable per-specialist booking flow with slot integrity, cancel/reschedule, and accessibility-safe forms
3. Admin CRUD for specialists/services/availability + date exceptions + publication control
4. Pricing/legal/contact/careers pages with explicit RODO and transparent clinic operations
5. Basic blog/news pipeline with clinician-reviewed editorial workflow

Defer:
- Guided matching and "first available" cross-specialist routing until base booking reliability and admin workflows are stable.
- Any marketplace-like growth features, public ratings, deep EHR integrations, or custom telehealth infrastructure.

## Sources

- [oowit.pl homepage and IA snapshot](https://oowit.pl) (MEDIUM, direct site extraction)
- [Booksy online booking flow](https://help.booksy.com/hc/en-us/articles/21615958266770-How-can-I-book-an-appointment) (MEDIUM)
- [Booksy product booking controls](https://biz.booksy.com/en-us/features/online-booking) (MEDIUM)
- [W3C WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) (MEDIUM)
- [W3C WCAG 2.2 specification](https://www.w3.org/TR/WCAG22/Overview.html) (MEDIUM)
- [NHS accessibility standard summary](https://digital.nhs.uk/about-nhs-digital/standards-for-web-products/accessibility-for-digital-services) (MEDIUM)
- [NHS guidance for usable patient websites](https://www.england.nhs.uk/long-read/creating-a-highly-usable-and-accessible-gp-website-for-patients/) (MEDIUM)
- [Decoda scheduling module docs](https://docs.decodahealth.com/modules/scheduling) (MEDIUM)
- [Elation scheduling capabilities](https://help.elationhealth.com/articles/Scheduling-capabilities) (MEDIUM)
- [DPC Pro provider calendars](https://docs.dpcpro.com/scheduling/provider-calendars/) (MEDIUM)
