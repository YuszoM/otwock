"use client";

import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { A11Y_COPY } from "@/lib/a11y/copy";
import {
  applyPrefsToDocument,
  clampFontStep,
  readFontStep,
  readHighContrast,
  readUnderlineLinks,
  STORAGE_FONT_STEP,
  STORAGE_HIGH_CONTRAST,
  STORAGE_UNDERLINE_LINKS,
  type FontStep,
} from "@/lib/a11y/prefs";

function announce(ref: React.RefObject<HTMLDivElement | null>, message: string) {
  const el = ref.current;
  if (el) {
    el.textContent = message;
  }
}

export function AccessibilityToolbar() {
  const panelId = useId();
  const liveRef = useRef<HTMLDivElement>(null);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [open, setOpen] = useState(false);
  const [fontStep, setFontStep] = useState<FontStep>(() => readFontStep());
  const [highContrast, setHighContrast] = useState(() => readHighContrast());
  const [underlineLinks, setUnderlineLinks] = useState(() => readUnderlineLinks());

  const syncDom = useCallback(
    (next: { fontStep: FontStep; highContrast: boolean; underlineLinks: boolean }) => {
      applyPrefsToDocument(document.documentElement, next);
    },
    [],
  );

  useEffect(() => {
    syncDom({ fontStep, highContrast, underlineLinks });
  }, [fontStep, highContrast, underlineLinks, syncDom]);

  const persistAndApply = useCallback(
    (next: { fontStep: FontStep; highContrast: boolean; underlineLinks: boolean }) => {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_FONT_STEP, String(next.fontStep));
        window.localStorage.setItem(STORAGE_HIGH_CONTRAST, next.highContrast ? "1" : "0");
        window.localStorage.setItem(STORAGE_UNDERLINE_LINKS, next.underlineLinks ? "1" : "0");
      }
      syncDom(next);
    },
    [syncDom],
  );

  const setFont = (step: FontStep) => {
    setFontStep(step);
    persistAndApply({ fontStep: step, highContrast, underlineLinks });
    announce(
      liveRef,
      `${A11Y_COPY.fontScale}: ${step === 2 ? "domyślny" : `poziom ${step + 1} z 5`}`,
    );
  };

  const bumpFont = (delta: -1 | 1) => {
    const next = clampFontStep(fontStep + delta);
    setFont(next);
  };

  const toggleContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    persistAndApply({ fontStep, highContrast: next, underlineLinks });
    announce(liveRef, next ? A11Y_COPY.contrastHigh : A11Y_COPY.contrastNormal);
  };

  const toggleUnderline = () => {
    const next = !underlineLinks;
    setUnderlineLinks(next);
    persistAndApply({ fontStep, highContrast, underlineLinks: next });
    announce(liveRef, next ? "Włączono podkreślenie linków" : "Wyłączono podkreślenie linków");
  };

  if (!mounted) return null;

  return (
    <>
      <div
        ref={liveRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      <div
        className="on-forest fixed bottom-4 left-4 z-40 flex max-w-[min(100vw-2rem,22rem)] flex-col gap-2 max-sm:bottom-auto max-sm:left-3 max-sm:top-20"
        role="region"
        aria-label={A11Y_COPY.toolbarRegion}
      >
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="min-h-11 min-w-11 rounded-lg border border-forest-border bg-forest px-4 py-2.5 text-left text-sm font-semibold text-on-forest shadow-lg outline-none hover:opacity-95 focus-visible:ring-2 focus-visible:ring-[var(--color-honey)]"
        >
          {open ? A11Y_COPY.toggleClose : A11Y_COPY.toggleOpen}
        </button>

        {open ? (
          <div
            id={panelId}
            className="rounded-xl border border-forest-border bg-forest p-4 text-on-forest shadow-2xl"
          >
            <fieldset className="space-y-2 border-0 p-0">
              <legend className="mb-2 text-sm font-semibold">{A11Y_COPY.contrast}</legend>
              <button
                type="button"
                aria-pressed={highContrast}
                onClick={toggleContrast}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-left text-sm hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {highContrast ? A11Y_COPY.contrastHigh : A11Y_COPY.contrastNormal}
              </button>
            </fieldset>

            <fieldset className="mt-4 space-y-2 border-0 p-0">
              <legend className="mb-2 text-sm font-semibold">{A11Y_COPY.fontScale}</legend>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => bumpFont(-1)}
                  disabled={fontStep <= 0}
                  aria-label={A11Y_COPY.fontSmaller}
                  className="min-w-[2.5rem] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold disabled:opacity-40"
                >
                  A−
                </button>
                <button
                  type="button"
                  onClick={() => setFont(2)}
                  aria-label={A11Y_COPY.fontReset}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                >
                  {A11Y_COPY.fontReset}
                </button>
                <button
                  type="button"
                  onClick={() => bumpFont(1)}
                  disabled={fontStep >= 4}
                  aria-label={A11Y_COPY.fontLarger}
                  className="min-w-[2.5rem] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold disabled:opacity-40"
                >
                  A+
                </button>
              </div>
            </fieldset>

            <fieldset className="mt-4 space-y-2 border-0 p-0">
              <legend className="sr-only">{A11Y_COPY.underlineLinks}</legend>
              <button
                type="button"
                aria-pressed={underlineLinks}
                onClick={toggleUnderline}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-left text-sm hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {underlineLinks ? `${A11Y_COPY.underlineLinks}: włączone` : `${A11Y_COPY.underlineLinks}: wyłączone`}
              </button>
            </fieldset>
          </div>
        ) : null}
      </div>
    </>
  );
}
