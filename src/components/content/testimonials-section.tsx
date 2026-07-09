"use client";

import { CardCorbelBorder } from "@/components/ornaments/card-corbel-border";
import { SectionSeparator } from "@/components/ornaments/section-separator";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion/fade-in";

const testimonials = [
  {
    quote:
      "Spokojna atmosfera, jasny plan działania i specjalista, który naprawdę słucha. Czułam się zaopiekowana od pierwszej wizyty.",
    author: "Opinia pacjentki",
    context: "Terapia indywidualna · Otwock",
    demo: true,
  },
  {
    quote:
      "Syn w końcu ma diagnozę i konkretne wsparcie w szkole. Wreszcie wiemy, co robić krok po kroku — bez przerzucania między placówkami.",
    author: "Opinia rodzica",
    context: "Diagnoza i terapia dziecka · Otwock",
    demo: true,
  },
  {
    quote:
      "Profesjonalne podejście, ciepłe przyjęcie i sala SI, w której dziecko czuje się bezpiecznie. Polecam rodzicom z okolicy.",
    author: "Opinia rodzica",
    context: "Integracja sensoryczna · Otwock",
    demo: true,
  },
  {
    quote:
      "Umówienie wizyty online zajęło minutę. Recepcja odpowiada szybko i konkretnie — to ułatwia życie przy napiętym grafiku.",
    author: "Opinia pacjenta",
    context: "Rezerwacja online · Otwock",
    demo: true,
  },
];

export function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative bg-[color-mix(in_srgb,var(--lilac-300)_15%,var(--sand-50))]"
    >
      <SectionSeparator />
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
        <FadeIn immediate>
          <SectionEyebrow>Opinie</SectionEyebrow>
          <h2 id="testimonials-heading" className="mt-2 text-[var(--text-heading)] font-semibold">
            Opinie
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--ink-soft)]">
            Poniższe cytaty mają charakter demonstracyjny (wzorowane na stylu opinii z platform
            medycznych). Prawdziwe referencje dodamy po zgodzie pacjentów — lub wprowadzimy moduł
            opinii (np. integracja z ZnanyLekarz / własny moduł ocen).
          </p>
        </FadeIn>

        <StaggerChildren className="mt-10 grid gap-6 sm:grid-cols-2">
          {testimonials.map((item) => (
            <StaggerItem key={item.author + item.context}>
              <CardCorbelBorder>
                <blockquote className="h-full rounded-[var(--radius-md)] border border-[var(--sand-200)] bg-white/90 p-6">
                  <p className="text-sm leading-relaxed opacity-90">&ldquo;{item.quote}&rdquo;</p>
                  <footer className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    <cite className="font-semibold not-italic text-[var(--pine-700)]">
                      {item.author}
                    </cite>
                    <span className="text-[var(--ink-soft)]">· {item.context}</span>
                    {item.demo ? (
                      <span className="rounded-full border border-[var(--sand-200)] bg-[var(--sand-100)] px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-[var(--pine-900)]">
                        Demo
                      </span>
                    ) : null}
                  </footer>
                </blockquote>
              </CardCorbelBorder>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
