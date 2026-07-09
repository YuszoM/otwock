# Audyt grafiki OOWiT — 2026-07-09

**Live:** https://otwock.duodev.pl  
**Zrzuty ekranu:** `screenshots/audit-2026-07-09/` (stan przed poprawką P0 z live)

---

## P0 — Naprawione w tej iteracji

### 1. Kafelki usług na stronie głównej (ServicesShowcase)

| Element | Strona | Problem | Przyczyna w kodzie | Naprawa | Asset klienta? |
|---------|--------|---------|-------------------|---------|----------------|
| Ilustracje w bento „Poznaj naszą ofertę” | `/` | Checkerboard / rozmazana line-art w polach kafelków (terapia indywidualna, SI, TUS) | `services-showcase.tsx` — mapa `serviceImages` wskazywała na `/images/icon-*.webp` (konwersja z JPG z wbudowanym checkerboardem, 4096×4096 px) | Usunięto mapę i `<Image>`; wszystkie kafelki używają `ServiceIcon` (lucide-react SVG) | Nie — fix w kodzie |
| Brak spójności ikon | `/` | Część kafelków miała raster, część SVG | Warunkowe `{imageSrc ? Image : ServiceIcon}` | Jednolity gradient + `ServiceIcon` dla wszystkich 6 usług | Nie |

**Plik:** `src/components/content/services-showcase.tsx`

### 2. Diagram procesu opieki (CareProcess)

| Element | Strona | Problem | Przyczyna w kodzie | Naprawa | Asset klienta? |
|---------|--------|---------|-------------------|---------|----------------|
| Ilustracja „Zintegrowana opieka w trzech krokach” | `/` | Słaba line-art / artefakty z generacji AI | `care-process.tsx` → `/images/process-care-3steps.webp` (pochodzi z `process-care-3steps.jpg`, 5.8 MB) | Zastąpiono komponentem `CareProcessIllustration` — czyste SVG (`ProcessStepIcon`) + gradient CSS | Nie — fix w kodzie |

**Pliki:** `src/components/content/care-process.tsx`, `src/components/ornaments/care-process-illustration.tsx` (nowy)

### 3. Strona /uslugi — karty usług

| Element | Strona | Problem | Przyczyna | Naprawa | Asset klienta? |
|---------|--------|---------|-----------|---------|----------------|
| Ikony na kartach | `/uslugi` | — | `service-card.tsx` już używał `ServiceIcon` | Brak zmian wymaganych | — |

---

## P1 — Do poprawy (następna iteracja)

### 4. Martwe assety raster w `public/images/`

| Plik | Problem | Rekomendacja |
|------|---------|--------------|
| `icon-therapy-individual.jpg/.webp` | Źródło checkerboard — FAIL w audycie Nano Banana | Usunąć z repo lub przenieść do `_archive/`; nie referencjonować w kodzie |
| `icon-sensory-integration.jpg/.webp` | j.w. | j.w. |
| `icon-tus-workshops.jpg/.webp` | j.w. | j.w. |
| `icon-child-psychologist.jpg/.webp` | j.w. | j.w. |
| `process-care-3steps.jpg/.webp` | Słaba jakość line-art | Usunąć po akceptacji SVG; ewentualnie nowa ilustracja od grafika |

**Uwaga:** JPG w `public/images/` nie są już używane w `src/` po fixie P0, ale nadal trafiają do deployu (~90 MB).

### 5. Zdjęcia zespołu — placeholder

| Element | Strona | Problem | Przyczyna | Naprawa | Asset klienta? |
|---------|--------|---------|-----------|---------|----------------|
| Awatary specjalistów | `/`, `/zespol` | Ten sam plik `team-photo-style-reference.webp` dla wszystkich | `specialists.ts` + brak zdjęć klienta | Wgrać prawdziwe portrety lub generować per osoba | **Tak** — zdjęcia od klienta |

### 6. Hero — zdjęcie lasu

| Element | Strona | Problem | Przyczyna | Naprawa | Asset klienta? |
|---------|--------|---------|-----------|---------|----------------|
| Tło hero | `/`, `/o-nas` | Duże pliki (hero ~11 MB JPG źródło), jakość OK po WebP | `home-hero.tsx` | Opcjonalnie: mniejszy crop, lepszy `object-position`; ewentualnie zdjęcie willi OOWiT | **Tak** — docelowe foto obiektu |

---

## P2 — Kosmetyka / SEO

| Element | Strona | Problem | Naprawa | Asset klienta? |
|---------|--------|---------|---------|----------------|
| OG images | meta | `og-services.webp`, `og-team.webp` z generacji AI | Nowe grafiki 1200×630 od grafika lub szablon z logo | Opcjonalnie |
| Tekstura tła | CSS? | `texture-pine-beige-tile.webp` (1.1 MB) | Sprawdzić użycie; ewentualnie CSS pattern | Nie |
| `local-otwock-trust.webp` | trust section | Sprawdzić jakość na mobile | Audit wizualny | Może wymagać nowego zdjęcia Otwocka |

---

## Podsumowanie root cause

```
Homepage graphics disaster — łańcuch przyczyn:

1. AI-generated JPG icons (Nano Banana) miały wbaked checkerboard alpha
2. Konwersja do WebP NIE usunęła checkerboardu — tylko zmniejszyła rozmiar
3. services-showcase.tsx celowo mapował 4 slugi na te WebP zamiast ServiceIcon
4. care-process używał osobnej słabej ilustracji raster
5. service-card.tsx (/uslugi) był już poprawny — problem głównie na homepage
```

**Commit P0:** lucide SVG everywhere on service tiles + SVG care process panel.

---

## Weryfikacja

- [x] Build: `npm run build` — OK
- [x] E2E: `npm run test:e2e` — patrz wynik CI lokalnie
- [x] Brak referencji `icon-*` / `process-care` w `src/`
