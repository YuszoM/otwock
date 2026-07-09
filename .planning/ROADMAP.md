# Roadmap: OOWiT Website Redesign

## Overview

Roadmap prowadzi projekt od stabilnego fundamentu Next.js i modułów klocki, przez pełne strony zaufania i ofertę specjalistów, do niezawodnej rezerwacji oraz panelu operacyjnego. Zamknięcie obejmuje sekcję aktualnosci i twarde bramki jakosciowe (CWV, a11y, SEO migration), aby uruchomienie bylo bezpieczne biznesowo i technicznie.

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation and UI Baseline** - Next.js scaffold, design tokens, layout shell, i bazowe moduły klocki. (completed 2026-07-09)
- [ ] **Phase 2: Content, Services, and Team Pages** - Pelna IA tresciowa i strony zaufania z lokalnym SEO foundation.
- [ ] **Phase 3: Specialist Booking Experience** - Rezerwacje per-specjalista z integralnoscia slotow i mobile UX.
- [ ] **Phase 4: Admin Operations Panel** - Panel do zarzadzania specjalistami, uslugami, dostepnoscia i wizytami.
- [ ] **Phase 5: News, Polish, and Launch Hardening** - Blog/aktualnosci, dopracowanie UX, wydajnosc i migracja SEO.

## Phase Details

### Phase 1: Foundation and UI Baseline

**Goal**: Uzytkownik widzi stabilny, spojny wizualnie szkielet serwisu gotowy pod dalsze sekcje i flow.
**Depends on**: Nothing (first phase)
**Requirements**: NAV-01, DESIGN-01, A11Y-01
**Success Criteria** (what must be TRUE):

  1. Uzytkownik moze wejsc na strone glowna i zobaczyc globalny layout z naglowkiem, stopka i struktura IA przygotowana pod wszystkie kluczowe sekcje.
  2. Uzytkownik widzi konsekwentna palete dark green/beige oraz spojne komponenty bazowe na glownej i elementach nawigacyjnych.
  3. Uzytkownik moze korzystac z bazowego interfejsu bez krytycznych naruszen WCAG 2.1 AA (kontrast, semantyka, focus).

**Plans**: 3/3 plans complete
Plans:

- [x] 01-01-PLAN.md - Klocki-first foundation shell i design token baseline.
- [x] 01-02-PLAN.md - IA route skeleton NAV-01 oraz automatyczny gate route integrity.
- [x] 01-03-PLAN.md - A11Y baseline, reuse stron bledow i Supabase env/bootstrap foundation.

**UI hint**: yes

### Phase 2: Content, Services, and Team Pages

**Goal**: Uzytkownik szybko rozumie oferte osrodka, znajduje specjaliste i latwo dociera do stron konwersyjnych.
**Depends on**: Phase 1
**Requirements**: NAV-02, NAV-03, TEAM-01, TEAM-02, SERV-01, SERV-02, SEO-01, SEO-02, CONT-01, CONT-03
**Success Criteria** (what must be TRUE):

  1. Uzytkownik dociera z Home do Team, Services, Booking i Contact maksymalnie w dwoch kliknieciach.
  2. Uzytkownik przeglada karty specjalistow i otwiera profil ze specjalizacjami, jezykami i CTA do rezerwacji.
  3. Uzytkownik przeglada katalog uslug, rozumie dostepnosc jezykowa PL/EN i czyta jasny opis procesu opieki (diagnoza -> terapia -> wsparcie).
  4. Uzytkownik moze przejsc do legal pages ze stopki, a strony indeksowalne maja poprawne metadane i canonicale pod lokalne zapytania Otwock.
  5. Uzytkownik wysyla poprawnie zwalidowane zapytanie przez formularz kontaktowy i ma czytelne kanaly kontaktu.

**Plans**: TBD
**UI hint**: yes

### Phase 3: Specialist Booking Experience

**Goal**: Uzytkownik rezerwuje, przeklada i odwoluje wizyty per-specjalista bez ryzyka konfliktu terminow.
**Depends on**: Phase 2
**Requirements**: BOOK-01, BOOK-02, BOOK-03, BOOK-04, BOOK-05, UX-01, A11Y-02
**Success Criteria** (what must be TRUE):

  1. Uzytkownik widzi aktualna dostepnosc wybranego specjalisty i wybiera usluge oraz wolny termin.
  2. Uzytkownik finalizuje rezerwacje i otrzymuje potwierdzenie z kluczowymi szczegolami wizyty.
  3. Uzytkownik nie moze zarezerwowac zajetego slotu nawet przy rownoleglych probach rezerwacji.
  4. Uzytkownik moze bezpiecznie odwolac lub przelozyc rezerwacje po booking reference flow.
  5. Uzytkownik mobilny i klawiaturowy przechodzi caly booking flow bez ukrytych kontrolek i blokad nawigacji.

**Plans**: TBD
**UI hint**: yes

### Phase 4: Admin Operations Panel

**Goal**: Zespol osrodka utrzymuje aktualna oferte i kalendarze bez ingerencji deweloperskiej.
**Depends on**: Phase 3
**Requirements**: CMS-01, CMS-02, CMS-03, CMS-04
**Success Criteria** (what must be TRUE):

  1. Admin tworzy, edytuje i archiwizuje profile specjalistow w panelu.
  2. Admin zarzadza katalogiem uslug i mapowaniem uslug do konkretnych specjalistow.
  3. Admin konfiguruje reguly cyklicznej dostepnosci oraz wyjatki dat dla kazdego specjalisty.
  4. Admin przeglada i obsluguje wizyty w jednym panelu operacyjnym.

**Plans**: TBD
**UI hint**: yes

### Phase 5: News, Polish, and Launch Hardening

**Goal**: Uzytkownik dostaje kompletne, szybkie i dostepne doswiadczenie po migracji na nowa wersje serwisu.
**Depends on**: Phase 4
**Requirements**: CONT-02, DESIGN-02, A11Y-03, PERF-01, PERF-02, PERF-03, SEO-03
**Success Criteria** (what must be TRUE):

  1. Uzytkownik moze czytac aktualne wpisy news/blog i wracac do nich przez nawigacje.
  2. Uzytkownik widzi subtelne animacje, ktore automatycznie respektuja ustawienie reduced motion.
  3. Uzytkownik korzysta z kluczowych widokow przy LCP < 2.5s, CLS < 0.1 i INP < 200ms (mobile p75).
  4. Uzytkownik trafiajacy ze starych URL-i jest poprawnie przekierowany do nowych stron bez utraty tresci i widocznosci.

**Plans**: TBD
**UI hint**: yes

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 1.1 -> 1.2 -> 2 -> 2.1 -> 3 -> 4 -> 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation and UI Baseline | 3/3 | Complete   | 2026-07-09 |
| 2. Content, Services, and Team Pages | 0/0 | Not started | - |
| 3. Specialist Booking Experience | 0/0 | Not started | - |
| 4. Admin Operations Panel | 0/0 | Not started | - |
| 5. News, Polish, and Launch Hardening | 0/0 | Not started | - |
