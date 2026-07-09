"use client";

import { A11Y_COPY } from "@/lib/a11y/copy";

export function SkipToMain() {
  return (
    <a
      href="#main-content"
      className="absolute left-[-9999px] top-4 z-[100] whitespace-nowrap rounded px-4 py-2 font-semibold text-on-honey underline outline-none focus:left-4 focus:inline-block focus:bg-honey focus:text-on-honey focus:ring-2 focus:ring-[var(--color-beige)]"
      onClick={(e) => {
        const main = document.getElementById("main-content");
        if (main) {
          e.preventDefault();
          main.focus();
          const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          main.scrollIntoView({
            behavior: reducedMotion ? "auto" : "smooth",
            block: "start",
          });
        }
      }}
    >
      {A11Y_COPY.skipToContent}
    </a>
  );
}
