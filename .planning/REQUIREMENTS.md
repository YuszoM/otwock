# Requirements: OOWiT Website Redesign

**Defined:** 2026-07-09  
**Core Value:** People can quickly find the right specialist and book an available appointment in a trustworthy digital experience.

## v1 Requirements

### Navigation and Information Architecture

- [x] **NAV-01**: User can navigate a multipage IA matching current OOWiT structure (Home, About, Team, Services, Pricing, News, Contact, Booking, Careers, RODO)
- [ ] **NAV-02**: User can reach any key conversion page (Team, Services, Booking, Contact) in at most two clicks from Home
- [ ] **NAV-03**: User can access legal pages (RODO/privacy/terms) from global footer navigation

### Booking

- [ ] **BOOK-01**: User can view per-specialist real-time availability calendar
- [ ] **BOOK-02**: User can book consultation by selecting specialist, service, and available slot
- [ ] **BOOK-03**: User cannot book an already taken slot (conflict-safe booking integrity)
- [ ] **BOOK-04**: User receives booking confirmation details after successful reservation
- [ ] **BOOK-05**: User can cancel or reschedule booking using secure booking reference flow

### Team and Services Presentation

- [ ] **TEAM-01**: User can browse elegant specialist cards with photo, specialties, languages, and booking CTA
- [ ] **TEAM-02**: User can open specialist detail view with competencies and available services
- [ ] **SERV-01**: User can browse full service catalog including current OOWiT therapy/diagnosis offerings
- [ ] **SERV-02**: User can identify whether service is available in PL, EN, or both (where applicable)

### CMS and Admin

- [ ] **CMS-01**: Admin can create, update, and archive specialists
- [ ] **CMS-02**: Admin can manage services and map services to specialists
- [ ] **CMS-03**: Admin can manage recurring availability rules and date exceptions per specialist
- [ ] **CMS-04**: Admin can view and manage appointments in operational panel

### Design and UX Quality

- [x] **DESIGN-01**: UI uses dark green and beige earth-tone palette with subtle nature/Otwock references
- [ ] **DESIGN-02**: User sees tasteful, accessible animations that respect reduced-motion preferences
- [ ] **UX-01**: User can complete core booking flow on mobile without layout breaks or hidden controls

### Accessibility

- [x] **A11Y-01**: Core pages and booking flow meet WCAG 2.1 AA baseline
- [ ] **A11Y-02**: Keyboard-only user can complete booking flow and contact flow
- [ ] **A11Y-03**: Reduced-motion preference disables non-essential motion effects

### Performance

- [ ] **PERF-01**: Mobile LCP is below 2.5s on key pages at p75
- [ ] **PERF-02**: Mobile CLS remains below 0.1 on key pages at p75
- [ ] **PERF-03**: Interaction latency (INP) remains below 200ms on booking-critical views at p75

### SEO and Local Discovery

- [ ] **SEO-01**: User can discover OOWiT pages through local SEO intent (Otwock psychology center and related service queries)
- [ ] **SEO-02**: All indexable pages include structured metadata and valid canonicals
- [ ] **SEO-03**: Legacy URL migration preserves discoverability via redirect mapping and sitemap updates

### Content and Trust

- [ ] **CONT-01**: User can read clear center description emphasizing integrated care process (diagnosis -> therapy -> support)
- [ ] **CONT-02**: User can access up-to-date News/Blog entries
- [ ] **CONT-03**: User can contact center through validated contact channels and contact form

## User Stories

- As a parent, I want to find a suitable specialist quickly, so I can schedule support for my child without confusion.
- As an adult seeking therapy, I want to compare specialists and available times, so I can book the best-fitting consultation.
- As an admin, I want to manage specialists and schedules in one panel, so booking availability stays accurate.

## Acceptance Criteria

- Booking flow blocks slot collisions under concurrent booking attempts.
- Team cards and service pages are readable and actionable on mobile and desktop.
- Core IA pages from current site are represented and internally linked.
- Accessibility checks pass for keyboard navigation, contrast, and reduced motion.
- Performance budgets (LCP/CLS/INP) are verified before launch.

## Definition of Done

- All v1 requirements are mapped to roadmap phases.
- Each requirement has at least one verification method (automated or manual).
- Launch checklist includes CWV, SEO migration checks, and booking reliability checks.

## v2 Requirements

### Differentiators

- **MATCH-01**: User can answer guided questions to get specialist recommendations
- **BOOK-06**: User can request first-available slot across selected specialists
- **CONTENT-04**: Admin has richer editorial scheduling and taxonomy controls for blog/news

## Out of Scope

| Feature | Reason |
|---------|--------|
| Full marketplace model with multi-clinic discovery | Out of MVP scope; OOWiT needs center-owned booking |
| Deep EHR integration and telemedicine stack | High compliance and implementation complexity for initial release |
| Public ratings/reviews platform for specialists | Not required for initial trust strategy and legal moderation overhead |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| NAV-01 | Phase 1 | Complete |
| NAV-02 | Phase 2 | Pending |
| NAV-03 | Phase 2 | Pending |
| BOOK-01 | Phase 3 | Pending |
| BOOK-02 | Phase 3 | Pending |
| BOOK-03 | Phase 3 | Pending |
| BOOK-04 | Phase 3 | Pending |
| BOOK-05 | Phase 3 | Pending |
| TEAM-01 | Phase 2 | Pending |
| TEAM-02 | Phase 2 | Pending |
| SERV-01 | Phase 2 | Pending |
| SERV-02 | Phase 2 | Pending |
| CMS-01 | Phase 4 | Pending |
| CMS-02 | Phase 4 | Pending |
| CMS-03 | Phase 4 | Pending |
| CMS-04 | Phase 4 | Pending |
| DESIGN-01 | Phase 1 | Complete |
| DESIGN-02 | Phase 5 | Pending |
| UX-01 | Phase 3 | Pending |
| A11Y-01 | Phase 1 | Complete |
| A11Y-02 | Phase 3 | Pending |
| A11Y-03 | Phase 5 | Pending |
| PERF-01 | Phase 5 | Pending |
| PERF-02 | Phase 5 | Pending |
| PERF-03 | Phase 5 | Pending |
| SEO-01 | Phase 2 | Pending |
| SEO-02 | Phase 2 | Pending |
| SEO-03 | Phase 5 | Pending |
| CONT-01 | Phase 2 | Pending |
| CONT-02 | Phase 5 | Pending |
| CONT-03 | Phase 2 | Pending |

**Coverage:**

- v1 requirements: 31 total
- Mapped to phases: 31
- Unmapped: 0

---
*Requirements defined: 2026-07-09*  
*Last updated: 2026-07-09 after roadmap initialization*
