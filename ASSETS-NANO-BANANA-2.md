# ASSETS-NANO-BANANA-2 — production-grade prompty OOWiT

> **Wersja:** 2.0 (lipiec 2026)  
> **Generator:** Nano Banana 2  
> **Paleta:** pine-900 `#1E3A2B`, pine-700 `#2C5240`, sand-50 `#F5F0E6`, sand-200 `#E3D8C4`, wood-700 `#6B4A2E`, clay-400 `#C4A98A`  
> **Region:** Mazowieckie Otwock — sosnowy mikroklimat uzdrowiska, architektura świdermajerska. **NIE** Tatry, Zakopane, Alpy.

**Mapowanie na kod (bez zmian w repo):** pliki docelowe w `public/images/`. Nazwy poniżej są kanoniczne dla v2; starsze aliasy (`hero-otwock-forest-16x9.webp` itd.) — patrz tabela na końcu.

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
| **Filename** | `hero-otwock-fullscreen-desktop.webp` |
| **Exact pixels** | **2560×1440** (16:9) |
| **Format** | WebP, quality 82–85, max **~220 KB** po `cwebp` / Squoosh |
| **Nano Banana 2** | Quality: **high** · Style: **raw / natural** · Aspect: **16:9** · Seed: zapisz przy pierwszym udanym renderze |

**PL:** Pełnoekranowe tło hero — willa świdermajerska w sosnowym lesie Otwocka. Lewa 40–45% i dolne 30% — ciemniejsza strefa bezpieczna pod biały/kremowy tekst.

**EN prompt:**
```
Production editorial photograph, exact output 2560x1440 pixels, 16:9 landscape. Otwock spa town, Mazovian Voivodeship, Poland — NOT Tatra mountains, NOT Zakopane highland architecture. Świdermajer wooden villa with ornate lace gable (ażur) woodwork, deep roof overhang, corbel brackets, nestled among tall mature Scots pine (Pinus sylvestris) forest. Camera simulation: 35mm prime lens, f/2.8, ISO 200, 1/250s, slight natural vignette. Lighting setup: early morning golden hour (07:30), low sun from frame right-rear at 25° elevation, soft rim light on pine needles, gentle fill from open sky left, subtle ground mist between trunks at 1–2m height. Color grading LUT "OOWiT Warm Pine": warm sand-beige highlights #F5F0E6, deep pine shadow greens #1E3A2B and #2C5240, wood brown accents #6B4A2E, lifted shadows, desaturated cyans. Composition: rule of thirds — villa roofline on upper-right third intersection; LEFT 42% of frame intentionally darker, softer, fewer details (safe zone for white headline text overlay); BOTTOM 32% calmer forest floor gradient; main visual interest center-right. Material textures: weathered pine wood grain on villa, matte painted wood lace ornament, dry pine needle carpet, sandy forest soil. Flat Mazovian terrain horizon. Photorealistic, editorial healthcare/wellness quality, shallow depth of field on foreground pines. Part of OOWiT visual system series, match lighting with asset #1. No people, no text, no logos, no vehicles.

Negative prompt: Tatry mountains, Zakopane, alpine chalet, Swiss chalet label, snow, ski resort, steep mountain slope, urban Warsaw skyline, glass skyscrapers, generic hospital, clinical blue-white corridor, fluorescent lighting, watermark, text overlay, logo, blurry, oversaturated, HDR halos, cartoon, 3D render, CGI, plastic trees, tropical vegetation, palm trees, desert, beach, ocean, people, cars, road signs, drones, lens flare streaks, chromatic aberration, noise grain, AI artifacts, duplicate elements, fisheye distortion, dutch angle, night scene, harsh midday sun, storm clouds, autumn orange overload, winter bare trees.
```

**Consistency anchor:** Asset #1 — master lighting reference for entire series.

---

## Asset #1b — Hero fullscreen mobile

| Pole | Wartość |
|------|---------|
| **Filename** | `hero-otwock-fullscreen-mobile.webp` |
| **Exact pixels** | **1080×1920** (9:16) |
| **Format** | WebP, quality 82–85, max **~180 KB** |
| **Nano Banana 2** | Quality: **high** · Style: **raw / natural** · Aspect: **9:16** · Seed: ten sam co desktop (jeśli model wspiera) lub regeneracja z tym samym promptem klimatu |

**PL:** Pionowy crop tego samego świata wizualnego — sosny, światło z góry-prawej, ciemniejsza lewa i dolna strefa pod tekst.

**EN prompt:**
```
Production editorial photograph, exact output 1080x1920 pixels, 9:16 vertical portrait orientation. Same scene and color science as OOWiT hero desktop asset #1: Otwock Mazovian spa pine forest, Świdermajer wooden villa lace gable glimpsed upper-right, tall Scots pine trunks rising through soft morning mist. Camera simulation: 35mm equivalent, f/2.8, vertical crop optimized for mobile viewport 100svh. Lighting: identical golden hour 07:30, warm key from upper-right, soft atmospheric haze between trunks. Color grading LUT "OOWiT Warm Pine": #F5F0E6 highlights, #1E3A2B/#2C5240 shadows, #6B4A2E wood. Composition: rule of thirds — brightest interest upper-center-right; LEFT 38% darker calmer zone for headline text; BOTTOM 35% soft dark forest floor safe zone; vertical leading lines of pine trunks. Material textures: pine bark furrows, needle clusters, weathered wood ornament. Flat Mazovian terrain. Photorealistic. Part of OOWiT visual system series, match lighting with asset #1. No people, no text, no logos.

Negative prompt: Tatry, Zakopane, mountains, alpine, snow, horizontal landscape crop, Warsaw city, hospital, clinical, watermark, text, logo, blurry, oversaturated, cartoon, 3D render, people, cars, tropical, palm trees, night, harsh noon sun, storm, HDR, AI artifacts, wide 16:9 composition squeezed into vertical, duplicated trunks, fisheye, neon colors, autumn oversaturation, bare winter trees.
```

**Consistency anchor:** Match lighting with asset #1 (hero desktop).

---

## Asset #2 — Ornament świdermajerski (referencja trace SVG)

| Pole | Wartość |
|------|---------|
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
| **Filename** | `team-{slug}.webp` × 5 (np. `team-anna-kowalska.webp`) |
| **Exact pixels** | **800×1000** każde (4:5) |
| **Format** | WebP, quality 85, max **~90 KB** / zdjęcie |
| **Nano Banana 2** | **NIE GENEROWAĆ TWARZY** — prompt poniżej tylko jako brief stylu retuszu |

> ⚠️ **CLIENT REAL PHOTOS PREFERRED** — klient musi dostarczyć autentyczne zdjęcia 5 specjalistów. Poniższy prompt służy wyłącznie jako **style guide** do jednolitego kadrowania i color gradingu po dostarczeniu materiałów. Do czasu dostarczenia — inicjały + badge „Demo dane” (zaimplementowane w kodzie). **Nie używać AI-generated faces na produkcji.**

**PL:** Spójna seria portretów — okolica pasa, ciepłe światło okna, tło sand-beige.

**EN prompt (style reference / retouch brief only — NOT for synthetic faces):**
```
Professional healthcare headshot style guide reference, exact output 800x1000 pixels per image, 4:5 vertical portrait. Five separate individual portraits (generate one at a time with different seeds) — CONSISTENT studio setup across all five. Waist-up crop, neutral warm approachable expression, direct eye contact. Camera simulation: 50mm prime, f/2.0, ISO 100, eye-level. Lighting: large soft window key from frame left 45°, white reflector fill right, subtle hair light from rear. Background: smooth sand-beige wall #F5F0E6, shallow depth of field, subtle pine green houseplant bokeh accent. Wardrobe: pine-700 #2C5240 or sand-toned professional attire, no loud patterns, no white coats. Color grading LUT "OOWiT Warm Pine": consistent skin tones, warm shadows, no orange cast. Composition: rule of thirds — eyes on upper horizontal third; 8% headroom; subject centered with slight left bias. Material textures: natural fabric weave, soft skin, matte wall. Central European Polish professional appearance, ages 28–55, diverse natural looks. Part of OOWiT visual system series, match lighting with asset #1 warm sand key light quality. No text, no logo, no stethoscope.

Negative prompt: AI face artifacts, uncanny valley, plastic skin, duplicate faces, identical person repeated, stock photo watermark, Shutterstock, Getty, American corporate cliché, stiff pose, crossed arms defensive, stethoscope, white coat doctor, hospital corridor background, cold flash, harsh shadows, group photo, collage, text, logo, cartoon, glamour over-retouching, porcelain skin, sunglasses, heavy makeup, neon lipstick, busy background, bookshelf mess, VR headset, clip art, low resolution, blurry eyes, asymmetrical face distortion, extra fingers, malformed hands, Tatry vacation background, mountain landscape.
```

**Consistency anchor:** Match warm key light quality with asset #1.

---

## Asset #4 — OG home (social share)

| Pole | Wartość |
|------|---------|
| **Filename** | `og-home.webp` |
| **Exact pixels** | **1200×630** (1.91:1 Open Graph standard) |
| **Format** | WebP, quality 85, max **~120 KB** |
| **Nano Banana 2** | Quality: **high** · Style: **raw / natural** + graphic left panel · Aspect: **1200×630** (custom) |

**PL:** Podgląd social — lewa część gradient sand, prawa — kadr lasu/willi; bez wbudowanego tekstu (dodawany w HTML/meta).

**EN prompt:**
```
Open Graph social preview image, exact output 1200x630 pixels, 1.91:1. Split composition: LEFT 55% smooth sand gradient #F5F0E6 to #E3D8C4 with subtle Świdermajer lace line art frieze in wood brown #6B4A2E at 8% opacity; RIGHT 45% cropped cinematic photograph of Otwock Mazovian pine forest edge and Świdermajer villa wooden lace gable, same golden hour lighting as OOWiT hero asset #1. Camera simulation: 35mm f/4 for photo portion. Color grading LUT "OOWiT Warm Pine". Composition: rule of thirds — photo focal point on right third intersection; bottom-left 40%×30% area kept calm for optional text overlay in code (NO baked text); small pine cone and lace corner detail bottom-right at 5% size. Flat Mazovian terrain, NOT mountains. Part of OOWiT visual system series, match lighting with asset #1. No embedded text, no logo, no watermark.

Negative prompt: Tatry, mountains, Zakopane, og-services duplicate layout, clinical blue, crowded icons, busy infographic, watermark, English text, Polish text, logo mockup, low resolution below 1200x630, pixelated, hospital, Warsaw skyline, people faces, QR code, social media UI chrome, Facebook template, Instagram frame, neon colors, cartoon, 3D render, split line too harsh, misaligned panels, JPEG artifacts.
```

**Consistency anchor:** Match lighting with asset #1.

---

## Asset #5 — Local Otwock trust

| Pole | Wartość |
|------|---------|
| **Filename** | `local-otwock-trust.webp` |
| **Exact pixels** | **1600×1000** (16:10) |
| **Format** | WebP, quality 82–85, max **~150 KB** |
| **Nano Banana 2** | Quality: **high** · Style: **raw / natural** · Aspect: **16:10** |

**PL:** Autentyczny kadr budujący zaufanie — leśna ścieżka, Otwock jako uzdrowisko, bez stockowego „safe space”.

**EN prompt:**
```
Documentary editorial photograph, exact output 1600x1000 pixels, 16:10 landscape. Otwock spa resort town, Mazovian Voivodeship, Poland — authentic local trust imagery, NOT generic wellness stock. Quiet sandy forest path through mature Scots pine stand, dappled early morning light, distant glimpse of Świdermajer wooden villa roofline with lace gable through tree trunks. Camera simulation: 35mm f/2.8, ISO 400, walking-eye perspective 1.6m height. Lighting: golden hour soft key through canopy gaps, gentle fill from sandy path reflectance. Color grading LUT "OOWiT Warm Pine": #F5F0E6 path highlights, #1E3A2B pine shadows, #6B4A2E weathered wood accents. Composition: rule of thirds — path leading line from lower-left to center-right third; top 15% calm sky glimpses through canopy. Material textures: compacted sand path, pine bark, dry needles, moss patches. Flat Mazovian terrain, peaceful therapeutic atmosphere. Part of OOWiT visual system series, match lighting with asset #1. No people, no text, no logos.

Negative prompt: Tatry, mountains, Zakopane, ski resort, tropical beach, yoga studio, meditation cushions, generic safe space cliché, American suburb, snow, winter, heavy fog whiteout, tourists crowd, map labels, street signs, Warsaw skyline, urban sprawl, watermark, text, logo, hospital, clinical, cartoon, 3D render, oversaturated, HDR, AI artifacts, drone aerial directly overhead, satellite view, Google Maps style.
```

**Consistency anchor:** Match lighting with asset #1.

---

## Asset #6 — Wnętrze / sala SI (integracja sensoryczna)

| Pole | Wartość |
|------|---------|
| **Filename** | `interior-si-room.webp` |
| **Exact pixels** | **1920×1080** (16:9) |
| **Format** | WebP, quality 82–85, max **~160 KB** |
| **Nano Banana 2** | Quality: **high** · Style: **raw / natural** · Aspect: **16:9** |

**PL:** Ciepłe wnętrze sali terapeutycznej SI — sand/pine palette, drewno, naturalne światło z widokiem na sosny.

**EN prompt:**
```
Interior architectural photograph, exact output 1920x1080 pixels, 16:9. Sensory integration therapy room in Polish family mental health support center, Otwock Mazovian spa town context. Warm sand-beige plaster walls #F5F0E6, pine green accent wall #2C5240, natural oak wood floor and open shelving. Camera simulation: 24mm wide-angle, f/4, ISO 320, corner standing position. Lighting: soft north-east daylight from large window with Scots pine forest view outside, sheer linen curtains diffusing, no fluorescent. Color grading LUT "OOWiT Warm Pine". Composition: rule of thirds — window light on right third; therapy swings, floor mats, balance board subtly visible but organized, professional not toy-store chaotic; Świdermajer-inspired wood corbel detail on ceiling beam. Material textures: matte plaster, oiled oak grain, woven cotton mats, natural rope swing. Child-friendly but dignified clinical space. Empty room, no people. Part of OOWiT visual system series, match lighting with asset #1 warm daylight quality. No text signage, no logos.

Negative prompt: hospital clinical white, fluorescent tubes, chaotic primary-color plastic toys explosion, gym equipment, VR headset, computer monitors, TV screens, institutional corridor, basement, dark moody, cage-like, rubber padded cell, watermark, text, logo, cartoon, 3D render, Tatry mountain view through window, city skyline, snow outside, night interior, harsh flash, wide-angle barrel distortion extreme, AI artifacts, messy clutter, dirty floor, stained walls.
```

**Consistency anchor:** Match warm daylight quality with asset #1.

---

## Asset #7 — Proces opieki 3 kroki (opcjonalny)

| Pole | Wartość |
|------|---------|
| **Filename** | `process-care-3steps.webp` |
| **Exact pixels** | **1600×1200** (4:3 — zgodne z `aspect-[4/3]` w `care-process.tsx`) |
| **Format** | WebP, quality 85, max **~100 KB** |
| **Nano Banana 2** | Quality: **high** · Style: **illustration / editorial flat** (nie raw photo) |
| **Status** | **Nadal używany** w kodzie (`/images/process-care-3steps.webp`) — wygenerować jeśli brak pliku |

**PL:** Pozioma ilustracja 3 kroków bez tekstu — diagnoza, terapia, wsparcie; paleta pine/sand.

**EN prompt:**
```
Editorial healthcare illustration, exact output 1600x1200 pixels, 4:3 landscape. Minimal three-step horizontal visual narrative WITHOUT any text or numbers: (1) left — seedling/sprout in warm soil symbolizing diagnosis and understanding, (2) center — two abstract human figures in gentle supportive conversation symbolizing therapy, (3) right — open sandy path through soft pine trees toward warm light symbolizing ongoing support. Flat design with subtle paper-grain texture, thin 2px line icons, generous whitespace. Color palette strict: pine-900 #1E3A2B, pine-700 #2C5240, sand-50 #F5F0E6, sand-200 #E3D8C4, wood-700 #6B4A2E accents. Composition: rule of thirds — three elements evenly spaced on horizontal third; 10% margin padding. Świdermajer lace motif as subtle 5% opacity border top edge only. Part of OOWiT visual system series, match lighting with asset #1 warm sand-beige tonal range. No text, no letters, no numbers, no logos.

Negative prompt: text, letters, numbers, words, labels, clipart, busy details, medical syringes, brain organ cliché, pill bottles, stethoscope, hospital cross, photorealistic, 3D render, dark moody, neon colors, Tatry mountains in background, snow, cartoon mascot, childish primary colors, watermark, logo, infographic arrows with text, PowerPoint style, low resolution, blurry, gradient banding, AI artifacts, crowded composition.
```

**Consistency anchor:** Match sand-beige tonal range with asset #1.

---

## Asset #8 — Hero ornament overlay (PNG transparent)

| Pole | Wartość |
|------|---------|
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

*Ostatnia aktualizacja: 2026-07-09 · v2 production-grade*
