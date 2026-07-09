"use client";

import { CaretDown } from "@phosphor-icons/react";

export function HeroScrollCue() {
  function scrollDown() {
    const target = document.getElementById("intro-heading");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target?.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
  }

  return (
    <button
      type="button"
      onClick={scrollDown}
      aria-label="Przewiń w dół"
      className="motion-scroll-hint pointer-events-auto mx-auto flex flex-col items-center gap-1 pb-3 text-[var(--sand-50)]/80 transition-colors hover:text-[var(--sand-50)]"
    >
      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]">Scroll</span>
      <CaretDown size={18} weight="bold" aria-hidden />
    </button>
  );
}
