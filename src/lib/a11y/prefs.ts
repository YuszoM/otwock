export const STORAGE_FONT_STEP = "eu_a11y_font_step";
export const STORAGE_HIGH_CONTRAST = "eu_a11y_high_contrast";
export const STORAGE_UNDERLINE_LINKS = "eu_a11y_underline_links";

/** Kroki: 0 = najmniejszy … 4 = największy (środek 2 = 100%). */
export type FontStep = 0 | 1 | 2 | 3 | 4;

export function clampFontStep(n: number): FontStep {
  const x = Math.round(n);
  if (x < 0) return 0;
  if (x > 4) return 4;
  return x as FontStep;
}

export function readFontStep(): FontStep {
  if (typeof window === "undefined") return 2;
  const raw = window.localStorage.getItem(STORAGE_FONT_STEP);
  const n = raw === null ? 2 : Number.parseInt(raw, 10);
  if (Number.isNaN(n)) return 2;
  return clampFontStep(n);
}

export function readHighContrast(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_HIGH_CONTRAST) === "1";
}

export function readUnderlineLinks(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_UNDERLINE_LINKS) === "1";
}

export function applyPrefsToDocument(root: HTMLElement, prefs: {
  fontStep: FontStep;
  highContrast: boolean;
  underlineLinks: boolean;
}) {
  root.dataset.a11yFontStep = String(prefs.fontStep);
  root.classList.toggle("a11y-high-contrast", prefs.highContrast);
  root.classList.toggle("a11y-underline-links", prefs.underlineLinks);
}
