"use client";

import { CardCorbelBorder } from "@/components/ornaments/card-corbel-border";
import { SectionPineAccent } from "@/components/ornaments/section-pine-accent";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion/fade-in";

const values = [
  {
    text: "Założenie jest proste: tworzymy bezpieczną przestrzeń, w której rodziny, pary i dzieci odzyskują spokój, lepiej rozumieją siebie i budują zdrowsze relacje. Pomagamy ludziom żyć lżej.",
  },
  {
    text: "W świecie, w którym każdy mówi Ci, jak masz żyć, my zaczynamy od słuchania. Nie oceniamy, nie przyspieszamy, nie dopasowujemy Cię do gotowych schematów. Tworzymy przestrzeń, w której możesz wreszcie być sobą — ze zmęczeniem, zagubieniem, złością, bezradnością i wszystkimi pytaniami, których nikt wcześniej nie potrafił wysłuchać.",
  },
];

export function ValuesSection() {
  return (
    <section
      aria-labelledby="values-heading"
      className="relative overflow-hidden border-y border-[var(--sand-200)] bg-[var(--sand-50)]"
    >
      <SectionPineAccent position="top-right" className="opacity-[0.08]" />
      <div className="relative z-[1] mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
        <FadeIn>
          <h2 id="values-heading" className="max-w-2xl text-[var(--text-heading)] font-semibold">
            Nasze wartości
          </h2>
        </FadeIn>

        <StaggerChildren className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {values.map((item, index) => (
            <StaggerItem key={index} className="h-full">
              <CardCorbelBorder className="h-full">
                <article className="flex h-full min-h-[16rem] flex-col rounded-[var(--radius-md)] border border-[var(--sand-200)] bg-[var(--sand-200)]/70 p-6 lg:p-8">
                  <span className="text-sm font-bold tabular-nums tracking-wide text-[var(--wood-700)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--pine-900)]">Nasze wartości</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">{item.text}</p>
                </article>
              </CardCorbelBorder>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
