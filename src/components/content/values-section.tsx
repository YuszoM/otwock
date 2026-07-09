"use client";

import { CardCorbelBorder } from "@/components/ornaments/card-corbel-border";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion/fade-in";

const values = [
  {
    title: "Bezpieczna przestrzeń",
    text: "Założenie jest proste: tworzymy bezpieczną przestrzeń, w której rodziny, pary i dzieci odzyskują spokój, lepiej rozumieją siebie i budują zdrowsze relacje. Pomagamy ludziom żyć lżej.",
  },
  {
    title: "Zaczynamy od słuchania",
    text: "W świecie, w którym każdy mówi Ci, jak masz żyć, my zaczynamy od słuchania. Nie oceniamy, nie przyspieszamy, nie dopasowujemy Cię do gotowych schematów. Tworzymy przestrzeń, w której możesz wreszcie być sobą — ze zmęczeniem, zagubieniem, złością, bezradnością i wszystkimi pytaniami, których nikt wcześniej nie potrafił wysłuchać.",
  },
];

export function ValuesSection() {
  return (
    <section
      aria-labelledby="values-heading"
      className="border-y border-[var(--sand-200)] bg-white"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
        <FadeIn>
          <h2 id="values-heading" className="max-w-2xl text-[var(--text-heading)] font-semibold">
            Nasze wartości
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--ink-soft)]">
            Wartości, które prowadzą każdą rozmowę i każdy plan terapeutyczny w OOWiT.
          </p>
        </FadeIn>

        <StaggerChildren className="mt-10 grid gap-6 lg:grid-cols-2">
          {values.map((item, index) => (
            <StaggerItem key={item.title}>
              <CardCorbelBorder>
                <article className="h-full rounded-[var(--radius-md)] border border-[var(--sand-200)] bg-[var(--sand-50)]/60 p-6 lg:p-8">
                  <span className="text-xs font-semibold tabular-nums text-[var(--lilac-500)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--pine-900)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{item.text}</p>
                </article>
              </CardCorbelBorder>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
