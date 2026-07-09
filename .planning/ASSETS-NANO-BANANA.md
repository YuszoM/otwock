# Grafiki OOWiT — prompty Nano Banana

**Status folderu:** `pobrane/otwock` — jeszcze nie istnieje (sprawdzaj okresowo).

**Paleta:** ciemna zieleń `#1a3a2f`, beż `#e8dcc8`, ziemia/miód `#c4a574`  
**Klimat:** spokój, zaufanie, profesjonalna opieka zdrowia psychicznego; sosny Otwocka, subtelny świdermajer (drewno, ciepłe światło).  
**Zasada:** bez tekstu w obrazie.

---

## 1. Hero — tło strony głównej

| Pole | Wartość |
|------|---------|
| Plik | `hero-otwock-forest-16x9.webp`, `hero-otwock-forest-21x9.webp` |
| Wymiary | 1920×1080, 2560×1080 |

**Prompt (EN):**
```
Wide cinematic photograph of a calm pine forest edge at golden hour near a small Polish spa town, soft morning mist between tree trunks, warm beige sunlight filtering through needles, subtle wooden villa roofline hinting Swiss chalet style in far background, dark forest green shadows in foreground, peaceful therapeutic atmosphere, editorial quality, shallow depth of field, no people, no text, no logos
```

**Negative:** text, watermark, logo, cartoon, neon colors, crowded city, hospital clinical look, scary mood

**Style tags:** editorial photography, cinematic, natural light, muted earth tones

---

## Hero fullscreen — kompozycja pod crop 16:9 / 9:16

Tło hero na stronie głównej: pełny viewport (`100svh`), `object-cover`, gradient pod tekst po lewej i na dole. Przy generowaniu **zostaw negatywną przestrzeń** na headline i CTA.

### Specyfikacja techniczna

| Pole | Wartość |
|------|---------|
| Pliki | `hero-otwock-forest-16x9.webp` (desktop), `hero-otwock-forest-9x16.webp` lub `hero-otwock-forest-alt.webp` (mobile crop) |
| Desktop | 1920×1080 lub 2560×1080 (21:9 z bezpieczną strefą centralną) |
| Mobile | 1080×1920 (9:16) lub ten sam 16:9 z focal pointem pod crop pionowy |
| **Focal point** | Główny motyw (sosny, światło) w **prawej / środkowej części** kadru |
| **Safe zone tekstu** | Lewa 40–45% i dolne 35% — spokojniejsze, ciemniejsze, bez rozpraszających detali |
| **Ultrawide** | Przy 21:9: ważne elementy w środkowych 60% szerokości; skrajne boki mogą być „puste” lasem |

### Prompt — desktop (16:9 + ultrawide safe zone)

```
Wide cinematic photograph of a calm pine forest edge at golden hour near a small Polish spa town, soft morning mist between tree trunks, warm beige sunlight filtering through needles on the RIGHT and CENTER of frame, subtle wooden villa roofline hinting Swiss chalet style in far background right, dark forest green shadows in foreground, LEFT THIRD and BOTTOM QUARTER intentionally softer and darker with fewer details for website headline overlay, peaceful therapeutic atmosphere, editorial quality, shallow depth of field, no people, no text, no logos, composition safe for 16:9 and ultrawide crop
```

### Prompt — mobile (9:16) lub jeden prompt z safe zone

**Opcja A — osobny plik 9:16:**
```
Vertical mobile crop of calm pine forest at golden hour, tall pine trunks rising through soft mist, warm light in upper center-right, darker calm forest floor in lower half, LEFT side and BOTTOM 35% kept soft and dark for white/cream headline text overlay, therapeutic spa town mood, editorial photography, no people, no text, 9:16 aspect ratio
```

**Opcja B — jeden obraz 16:9 z kompozycją pod oba cropy:**
```
[ten sam klimat co desktop] — compose with main visual interest in center-right, keep left 40% and bottom 35% as calm darker negative space suitable for text overlay when cropped to 9:16 on mobile
```

**Negative (oba):** text, watermark, logo, cartoon, neon, crowded city, hospital clinical look, busy details in lower-left corner, bright hotspots behind text zone

---

## 2. Tekstura sekcji — beż + sosna

| Pole | Wartość |
|------|---------|
| Plik | `texture-pine-beige-tile.webp` |
| Wymiary | 1200×1200 (tileable) |

**Prompt:**
```
Seamless subtle texture combining warm sand beige paper grain with very faint vertical pine wood grain lines, minimal organic speckles, soft matte finish, luxury wellness brand background, extremely low contrast pattern suitable for website sections, no text, tileable
```

**Negative:** high contrast, busy pattern, visible seams, text, 3D render look

---

## 3. Proces opieki — diagnoza → terapia → wsparcie

| Pole | Wartość |
|------|---------|
| Plik | `process-care-3steps.svg` lub `process-care-3steps.webp` |
| Wymiary | 1600×600 |

**Prompt:**
```
Minimal elegant three-step horizontal infographic illustration without text: left seedling in soil (diagnosis/understanding), center two abstract figures in gentle conversation (therapy), right open path through soft pine trees toward light (ongoing support), flat design with subtle gradients, dark green #1a3a2f and warm beige #e8dcc8 palette, thin line icons, modern healthcare editorial style, plenty of whitespace
```

**Negative:** text, letters, numbers, clipart, busy details, medical syringes, brain cliché

---

## 4. Ikony usług (8 szt., spójny zestaw)

| Plik | Usługa |
|------|--------|
| `icon-therapy-individual.webp` | Terapia indywidualna |
| `icon-therapy-couples.webp` | Terapia par |
| `icon-diagnosis.webp` | Diagnoza |
| `icon-sensory-integration.webp` | Integracja sensoryczna |
| `icon-vr-therapy.webp` | Terapia VR |
| `icon-tus-workshops.webp` | Warsztaty TUS |
| `icon-respite-care.webp` | Opieka wytchnieniowa |
| `icon-child-psychologist.webp` | Psycholog dziecięcy |

**Wymiary:** 512×512 każda, przezroczyste tło

**Prompt (szablon — powtórz z opisem usługi):**
```
Single minimal line icon for [SERVICE], rounded strokes, dark forest green #1a3a2f on transparent background, warm human-centered psychology symbol, consistent 2px stroke weight with other wellness icons, no text, no shadow, flat vector style
```

**Przykłady opisów:**
- individual therapy: one person silhouette with gentle heart or speech bubble
- couples: two abstract figures facing each other with connecting arc
- diagnosis: magnifying glass over gentle mind map nodes (not brain organ)
- sensory integration: child figure with balanced sensory waves (touch, sound, movement)
- VR therapy: simple headset with soft protective circle
- TUS workshops: small group of three figures in circle
- respite care: parent resting while child plays safely nearby (abstract)
- child psychologist: child and adult sitting at same level, supportive posture

**Negative:** text, photorealistic, 3D, medical cross, syringe, scary imagery

---

## 5. Styl zdjęć zespołu — reference pack

| Pole | Wartość |
|------|---------|
| Plik | `team-photo-style-reference.webp` |
| Wymiary | 1200×800 |

**Prompt:**
```
Professional headshot style reference photo of a friendly Central European therapist in neutral beige studio background, soft window light from left, dark green subtle accent in clothing, warm approachable expression, shoulders up portrait, shallow depth of field, consistent style guide for healthcare team photos, no text, no logo
```

**Negative:** harsh flash, white clinical background, stock photo watermark, stiff corporate pose

*Uwaga: prawdziwe zdjęcia specjalistów — osobno; ten prompt to styl odniesienia dla retuszu/spójności.*

---

## 6. OG / social share

| Plik | Strona | Wymiary |
|------|--------|---------|
| `og-home.webp` | Strona główna | 1200×630 |
| `og-services.webp` | Usługi | 1200×630 |
| `og-team.webp` | Zespół | 1200×630 |

**Prompt og-home:**
```
Social share image composition: calm pine forest path leading to warm wooden building facade with Swiss chalet details, dark green and beige color grading, spacious layout with empty center area for later text overlay in HTML (keep center 40% relatively clean), professional mental health center branding mood, no text baked in, 1200x630
```

**Prompt og-services:**
```
Abstract arrangement of minimal wellness icons (therapy, diagnosis, child support) floating on soft beige gradient with pine branch corner accent, dark green accents, clean modern healthcare marketing layout, large empty space on left third for text overlay, no text in image
```

**Prompt og-team:**
```
Warm group portrait atmosphere without identifiable faces from front — soft silhouettes of diverse therapists in beige-toned space with plants and wood textures, inviting collaborative mood, dark green accents, space for title overlay, no text
```

---

## 7. Empty state / potwierdzenie rezerwacji

| Pole | Wartość |
|------|---------|
| Plik | `illustration-booking-success.webp` |
| Wymiary | 800×600 |

**Prompt:**
```
Calm welcoming illustration of an open calendar page with a single highlighted gentle green checkmark circle, small pine sprig decoration, warm beige background, soft rounded shapes, reassuring confirmation mood for therapy appointment booked, no text, no numbers on calendar
```

**Negative:** anxiety, urgency red colors, clocks screaming deadline, text

---

## 8. Lokalność Otwock — zaufanie lokalne

| Pole | Wartość |
|------|---------|
| Plik | `local-otwock-trust.webp` |
| Wymiary | 1400×900 |

**Prompt:**
```
Artistic aerial-oblique view of a green suburban Polish town surrounded by pine forests, railway and small river hint, warm afternoon light, painterly editorial photograph style, emphasis on nature and peaceful residential character, subtle Świdermajer wooden roofs, dark green forest and beige sunlight, no map labels, no text, no identifiable private homes in detail
```

**Negative:** satellite UI, street names, Google maps style, urban Warsaw skyline

---

## Checklist

- [ ] `pobrane/otwock/` — utworzyć i wrzucać tu wygenerowane pliki
- [ ] Po wrzuceniu: przenieść do `oowit/public/images/` z zachowaniem nazw
- [ ] WebP, kompresja; hero max ~200 KB po optymalizacji

*Ostatnia aktualizacja: 2026-07-09*
