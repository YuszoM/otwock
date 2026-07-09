# ASSETS-NANO-BANANA-2 — production-grade prompty OOWiT

> **Wersja:** 2.2 (lipiec 2026)  
> **Generator:** Nano Banana 2  
> **Paleta:** pine-900 `#1E3A2B`, pine-700 `#2C5240`, sand-50 `#F5F0E6`, sand-200 `#E3D8C4`, wood-700 `#6B4A2E`, clay-400 `#C4A98A`  
> **Region:** Mazowieckie Otwock — sosnowy mikroklimat uzdrowiska, architektura świdermajerska. **NIE** Tatry, Zakopane, Alpy.

---

## Audyt Pobrane/otwock (2026-07-09)

Źródło: `/home/itmaster/Pobrane/otwock/` · integracja: `node scripts/integrate-pobrane-assets.mjs`

| Plik (najnowsze →) | Werdykt | Asset docelowy / akcja |
|--------------------|---------|------------------------|
| `referencyjne.jpg` | **PASS** (kotwica stylu) | Nie deploy — tylko reference do Nano Banana |
| `Generated Image … 4_20PM.jpg` | **FAIL** | Tatry/Zakopane — góry, chaty podhalańskie — odrzucone |
| `Generated Image … 4_16PM.jpg` | **FAIL** | Wnętrze z ludźmi — nie pasuje do `interior-si-room` (pusty pokój) |
| `Generated Image … 4_10PM.jpg` | **PARTIAL** | Ikony procesu — OK paleta, ale gorsze niż 3_40PM; nie użyte |
| `Generated Image … 4_06PM.jpg` | **FAIL** | Styl tatrzański + tilt-shift blur — odrzucone |
| `Generated Image … 4_03PM.jpg` | **FAIL** | AI twarz — nie na produkcję (team = klient dostarcza) |
| `Generated Image … 4_00PM.jpg` | **FAIL** | Ikona checkerboard w pikselach — odrzucone |
| `Generated Image … 3_58PM.jpg` | **FAIL** | Ikona VR + checkerboard — odrzucone |
| `Generated Image … 3_55PM.jpg` | **FAIL** | Ikona 3 osoby + checkerboard — odrzucone |
| `Generated Image … 3_53PM (1).jpg` | **FAIL** | Duplikat ikony + checkerboard — odrzucone |
| `Generated Image … 3_53PM.jpg` | **FAIL** | Ikona VR + checkerboard — odrzucone |
| `Generated Image … 3_48PM.jpg` | **FAIL** | Ikona SI + checkerboard — odrzucone |
| `Generated Image … 3_42PM.jpg` | **FAIL** | Ikona osoba + dymek + checkerboard — odrzucone |
| `Generated Image … 3_40PM.jpg` | **PASS** | ✅ `process-care-3steps.webp` |
| `Generated Image … 3_38PM.jpg` | **FAIL** | Tylko tekstura drewna — brak mapowania w briefie |
| `Generated Image … 3_37PM.jpg` | **PASS** | ✅ `hero-otwock-fullscreen-desktop.webp`, `og-home.webp` |
| `Generated Image … 3_36PM.jpg` | **PASS** | ✅ `hero-otwock-fullscreen-mobile.webp`, `local-otwock-trust.webp` |

**Status assetów:**

| # | Asset | Status |
|---|-------|--------|
| 1 | hero desktop | ✅ USED — `3_37PM.jpg` |
| 1b | hero mobile | ✅ USED — `3_36PM.jpg` |
| 2 | ornament lace PNG | ⏳ STILL NEEDED |
| 3 | team ×5 | ⏸ KLIENT DOSTARCZA |
| 4 | og-home | ✅ USED — kompozyt z `3_37PM.jpg` |
| 5 | local-otwock-trust | ✅ USED — `3_36PM.jpg` |
| 6 | interior-si-room | ⏳ STILL NEEDED |
| 7 | process-care-3steps | ✅ USED — `3_40PM.jpg` |
| 8 | hero-ornament-overlay | ⏳ STILL NEEDED |

---

## ⚠️ ZDJĘCIE REFERENCYJNE (OBOWIĄZKOWE)

**Plik:** `/home/itmaster/Pobrane/otwock/referencyjne.jpg`

W Nano Banana 2 **zawsze dołącz `referencyjne.jpg` jako Image Reference / Style Reference** (image-to-image lub „match style of reference”). To najlepszy dotychczasowy kadr: sosny, golden hour, mgła, subtelny dach świdermajerski, paleta pine/sand — **wszystkie assety fotograficzne muszą wyglądać jak z tej samej sesji**.

**Co skopiować z referencji:**
- Oświetlenie: early golden hour, ciepły key z prawej-góry, miękki fill
- Paleta: `#F5F0E6` światło, `#1E3A2B` cienie sosnowe, `#6B4A2E` drewno
- Atmosfera: spokojna, terapeutyczna, „uzdrowisko w lesie”
- Tekstura: igły sosny, mgła 1–2 m, matowe drewno
- **NIE kopiować:** dokładnego kadru — każdy asset ma własną kompozycję z promptu

**Ustawienia Nano Banana 2 (sugerowane):**
- Reference strength / style influence: **60–75%** (hero desktop: 70%; OG/trust: 65%; wnętrze: 50%)
- Quality: **high** · Style: **raw / natural**

**Linia do wklejenia na początku każdego promptu fotograficznego:**
```
Use the uploaded reference image referencyjne.jpg as strict style anchor — match its golden hour lighting, warm sand-beige and deep pine green color grading, soft forest mist atmosphere, and calm OOWiT therapeutic mood. Same visual series as reference.
```

---

## Spójność systemu (wszystkie assety)

| Parametr | Wartość |
|----------|---------|
| Oświetlenie kotwica | Early golden hour, 07:00–09:00, soft directional key + gentle fill |
| Symulacja obiektywu | 35mm f/2.8 (hero/landscape), 50mm f/2.0 (portrety), 24mm f/4 (wnętrza) |
| Color grading LUT | „OOWiT Warm Pine” — lifted shadows +2, warm midtones +8 amber, desaturated cyans −15, pine greens preserved in hue range 140°–165° |
| Tekstury | Matowe drewno sosnowe, piasek uzdrowiskowy, igły sosny, tynk ciepły beżowy |
| Kompozycja | Rule of thirds; safe zones zaznaczone w % kadru |
| Lilac `#9078B8` | Tylko akcent UI — **nie** w fotografiach |

**Consistency anchor (wszystkie assety):**  
`Part of OOWiT visual system series, match lighting with asset #1 (hero desktop golden hour, warm sand-beige key, deep pine shadows).`

---

## Asset #1 — Hero fullscreen desktop

| Pole | Wartość |
|------|---------|
| **Status** | ✅ **USED** — źródło: `Generated Image July 09, 2026 - 3_37PM.jpg` (= `referencyjne.jpg`) |
| **Filename** | `hero-otwock-fullscreen-desktop.webp` |
| **Alias w kodzie** | `hero-otwock-forest-16x9.webp` |
| **Exact pixels** | **2560×1440** (16:9) · ~449 KB WebP q72 |
| **Integracja** | `public/images/` · `scripts/integrate-pobrane-assets.mjs` |

**PL:** Pełnoekranowe tło hero — sosnowy las, golden hour, willa w tle. Zatwierdzone w audycie wizualnej.

---

## Asset #1b — Hero fullscreen mobile

| Pole | Wartość |
|------|---------|
| **Status** | ✅ **USED** — źródło: `Generated Image July 09, 2026 - 3_36PM.jpg` |
| **Filename** | `hero-otwock-fullscreen-mobile.webp` |
| **Alias w kodzie** | `hero-otwock-forest-alt.webp` |
| **Exact pixels** | **1080×1920** (9:16) · ~250 KB |
| **Integracja** | crop `position: right` z 16:9 źródła |

---

## Asset #2 — Ornament świdermajerski (referencja trace SVG)

| Pole | Wartość |
|------|---------|
| **Status** | ⏳ **STILL NEEDED** |
| **Filename** | `ornament-swidermajer-lace-reference.png` |
| **Exact pixels** | **2048×1024** (2:1) |
| **Format** | PNG-24, lossless, max **~400 KB** (ostre linie, bez WebP dla trace) |
| **Nano Banana 2** | Quality: **high** · Style: **flat / graphic** (nie raw photo) · Background: **pure white #FFFFFF** |

**PL:** Płaski, wysokokontrastowy rysunek ażurowego gzymsu — do ręcznego trace w SVG. Jednolity stroke wood-700.

**EN prompt:**
```
Technical vector reference sheet, exact output 2048x1024 pixels, 2:1 horizontal. Single Świdermajer lace gable ornament (ażur) from early 20th century Otwock Mazovian wooden resort villa — NOT Zakopane folk carving, NOT Tatra mountain style. Clean high-contrast line art on pure white background #FFFFFF. Uniform 3px stroke weight at 2048px width scale, single color dark wood brown #6B4A2E only, no fill, no shading, no gradients. Symmetrical horizontal frieze: repeating geometric cutouts, small semicircular arches, diamond lattice, pierced wood lace pattern typical of Otwock Świdermajer villas. Include one corner corbel bracket detail inset bottom-right at 15% frame size. Flat orthographic front elevation view, vector-tracing clarity, crisp anti-aliased edges. Composition: ornament centered horizontally, 12% margin padding all sides. Part of OOWiT visual system series, match lighting with asset #1 (wood tone #6B4A2E from same palette). No photograph, no 3D, no text labels.

Negative prompt: photograph, photorealistic, 3D render, gradient, shadow, drop shadow, color fill, crosshatching, pencil sketch noise, hand-drawn wobble, mountain folk flowers, baroque scrollwork, art nouveau organic curves, blurry lines, anti-aliased gray mush, multiple colors, background texture, paper grain, watermark, text, logo, Zakopane ornament, alpine carving, stained wood texture, raster photo, JPEG compression artifacts, low resolution, uneven stroke weight, asymmetry errors, filled black shapes.
```

**Consistency anchor:** Wood stroke color `#6B4A2E` from asset #1 palette.

---

## Asset #3 — Zdjęcia zespołu (5 profili)

| Pole | Wartość |
|------|---------|
| **Status** | ⏸ **KLIENT DOSTARCZA** |
| **Filename** | `team-{slug}.webp` × 5 (np. `team-anna-kowalska.webp`) |
| **Exact pixels** | **800×1000** każde (4:5) |
| **Format** | WebP, quality 85, max **~90 KB** / zdjęcie |

⏸ **KLIENT DOSTARCZA** — wrzuć `team-{slug}.webp` do `Pobrane/otwock`, potem integracja.

> Odrzucono `4_03PM.jpg` (AI-generated face) — **nie używać syntetycznych twarzy na produkcji.** Do czasu dostarczenia — inicjały + badge „Demo dane” w kodzie.

---

## Asset #4 — OG home (social share)

| Pole | Wartość |
|------|---------|
| **Status** | ✅ **USED** — kompozyt: gradient sand (55%) + crop z `3_37PM.jpg` (45%) |
| **Filename** | `og-home.webp` |
| **Exact pixels** | **1200×630** (1.91:1) · ~83 KB |
| **Kod** | `src/app/(public)/layout.tsx` → `ogImage: "/images/og-home.webp"` |

---

## Asset #5 — Local Otwock trust

| Pole | Wartość |
|------|---------|
| **Status** | ✅ **USED** — źródło: `Generated Image July 09, 2026 - 3_36PM.jpg` |
| **Filename** | `local-otwock-trust.webp` |
| **Exact pixels** | **1600×1000** (16:10) · ~290 KB |
| **Uwaga** | Gotowy asset — jeszcze niepodpięty w kodzie (na przyszłą sekcję trust) |

---

## Asset #6 — Wnętrze / sala SI (integracja sensoryczna)

| Pole | Wartość |
|------|---------|
| **Status** | ⏳ **STILL NEEDED** — odrzucono `4_16PM.jpg` (ludzie w kadrze, nie pusty pokój SI) |
| **Filename** | `interior-si-room.webp` |
| **Exact pixels** | **1920×1080** (16:9) |
| **Format** | WebP, quality 82–85, max **~160 KB** |
| **Nano Banana 2** | Quality: **high** · Style: **raw / natural** · Aspect: **16:9** |

**PL:** Ciepłe wnętrze sali terapeutycznej SI — sand/pine palette, drewno, naturalne światło z widokiem na sosny.

**EN prompt:**
```
Use the uploaded reference image referencyjne.jpg as style anchor for warm daylight color grading and calm therapeutic mood — match sand-beige #F5F0E6 and pine #2C5240 palette from reference. Interior scene, not forest copy.

Interior architectural photograph, exact output 1920x1080 pixels, 16:9. Sensory integration therapy room in Polish family mental health support center, Otwock Mazovian spa town context. Warm sand-beige plaster walls #F5F0E6, pine green accent wall #2C5240, natural oak wood floor and open shelving. Camera simulation: 24mm wide-angle, f/4, ISO 320, corner standing position. Lighting: soft north-east daylight from large window with Scots pine forest view outside, sheer linen curtains diffusing, no fluorescent. Color grading LUT "OOWiT Warm Pine". Composition: rule of thirds — window light on right third; therapy swings, floor mats, balance board subtly visible but organized, professional not toy-store chaotic; Świdermajer-inspired wood corbel detail on ceiling beam. Material textures: matte plaster, oiled oak grain, woven cotton mats, natural rope swing. Child-friendly but dignified clinical space. Empty room, no people. Part of OOWiT visual system series, match lighting with asset #1 warm daylight quality. No text signage, no logos.

Negative prompt: hospital clinical white, fluorescent tubes, chaotic primary-color plastic toys explosion, gym equipment, VR headset, computer monitors, TV screens, institutional corridor, basement, dark moody, cage-like, rubber padded cell, watermark, text, logo, cartoon, 3D render, Tatry mountain view through window, city skyline, snow outside, night interior, harsh flash, wide-angle barrel distortion extreme, AI artifacts, messy clutter, dirty floor, stained walls.
```

**Consistency anchor:** Match warm daylight quality with asset #1.

---

## Asset #7 — Proces opieki 3 kroki

| Pole | Wartość |
|------|---------|
| **Status** | ✅ **USED** — źródło: `Generated Image July 09, 2026 - 3_40PM.jpg` |
| **Filename** | `process-care-3steps.webp` |
| **Exact pixels** | **1600×1200** (4:3) · ~42 KB |
| **Kod** | `src/components/content/care-process.tsx` |

---

## Asset #8 — Hero ornament overlay (PNG transparent)

| Pole | Wartość |
|------|---------|
| **Status** | ⏳ **STILL NEEDED** |
| **Filename** | `hero-ornament-overlay.png` |
| **Exact pixels** | **800×560** (10:7 — 2× retina względem SVG 160×112) |
| **Format** | PNG-32 z **przezroczystym tłem** (alpha), max **~40 KB** |
| **Nano Banana 2** | Quality: **high** · Style: **flat vector / graphic** · Background: **transparent** (lub wygeneruj na #00FF00 i usuń chroma key) |

**PL:** Subtelny narożnikowy ornament świdermajerski — zamiennik / uzupełnienie SVG `HeroOrnament`. Stroke wood-700, bez wypełnienia.

**EN prompt:**
```
Flat vector graphic corner ornament, exact output 800x560 pixels, 10:7 aspect ratio. Świdermajer wooden lace corbel and pierced frieze corner detail from Otwock Mazovian villa — bottom-right corner composition, L-shaped bracket with repeating lace cutout pattern and three horizontal pierced bands. Single stroke dark wood brown #6B4A2E, stroke weight 6px at 800px scale, no fill, transparent background (alpha channel). Clean SVG-export quality edges, subtle opacity variation 100%/70%/50% on decorative bands mimicking hand-crafted wood lace. Orthographic flat view, no perspective, no shadow. Part of OOWiT visual system series, match ornament style with asset #2 lace reference. Positioned for website hero bottom-right overlay at 15% opacity when used. No photograph, no 3D, no text, no background color.

Negative prompt: photograph, 3D render, gradient fill, drop shadow, cast shadow, background white, background color, checkerboard baked in, mountain folk pattern, Zakopane carving, baroque, blurry edges, multiple colors, text, logo, watermark, filled solid shapes, JPEG, low resolution, asymmetric glitch, hand-drawn sketch noise, raster photo texture, ornate baroque scrollwork, gold color, metallic shine.
```

**Consistency anchor:** Match ornament style with asset #2; wood tone `#6B4A2E` from asset #1.

---

## Checklist wymiarów (potwierdzenie)

| # | Filename | Exact pixels | ✓ |
|---|----------|--------------|---|
| 1 | `hero-otwock-fullscreen-desktop.webp` | **2560×1440** | ✓ |
| 1b | `hero-otwock-fullscreen-mobile.webp` | **1080×1920** | ✓ |
| 2 | `ornament-swidermajer-lace-reference.png` | **2048×1024** | ✓ |
| 3 | `team-{slug}.webp` × 5 | **800×1000** each | ✓ |
| 4 | `og-home.webp` | **1200×630** | ✓ |
| 5 | `local-otwock-trust.webp` | **1600×1000** | ✓ |
| 6 | `interior-si-room.webp` | **1920×1080** | ✓ |
| 7 | `process-care-3steps.webp` | **1600×1200** | ✓ |
| 8 | `hero-ornament-overlay.png` | **800×560** | ✓ |

---

## Mapowanie nazw v2 → istniejące w kodzie

| Plik v2 (ten dokument) | Alias w kodzie (bez zmian) |
|------------------------|----------------------------|
| `hero-otwock-fullscreen-desktop.webp` | `hero-otwock-forest-16x9.webp` |
| `hero-otwock-fullscreen-mobile.webp` | `hero-otwock-forest-alt.webp` |
| `team-{slug}.webp` | zastępuje `team-photo-style-reference.webp` per specjalista |

Po wygenerowaniu: wrzucić do `public/images/`, zoptymalizować WebP, zweryfikować rozmiary pikselowe przed deployem.

## Odrzucone pliki (nie promptować ponownie bez poprawki briefu)

| Plik | Powód |
|------|-------|
| `4_20PM.jpg` | Tatry/Zakopane — góry, chaty podhalańskie |
| `4_06PM.jpg` | Architektura tatrzańska + tilt-shift blur |
| `4_16PM.jpg` | Grupa ludzi — nie `interior-si-room` (wymaga pustego pokoju) |
| `4_03PM.jpg` | AI twarz — team tylko od klienta |
| `4_10PM.jpg` | Zastąpione lepszym `3_40PM.jpg` |
| `3_38PM.jpg` | Samotna tekstura drewna — brak use case |
| `3_42PM`–`4_00PM.jpg` | Ikony z checkerboard w pikselach — wymaga PNG alpha, nie JPG |

*Ostatnia aktualizacja: 2026-07-09 · v2.2 — audyt Pobrane + integracja*
