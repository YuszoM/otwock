"use client";

import Link from "next/link";
import { CardCorbelBorder } from "@/components/ornaments/card-corbel-border";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion/fade-in";

const values = [
  {
    title: "Mikroklimat sosnowego lasu",
    text: "Otwock to uzdrowisko otoczone sosnami — lekkie, wilgotne powietrze i spokojne tempo miasta w lesie. Pracujemy w tym otoczeniu, bo naturalnie wspiera regenerację i koncentrację.",
  },
  {
    title: "Świdermajerska tożsamość miejsca",
    text: "Drewniane wille z ażurowymi gzymsami to nie tylko architektura — to lokalna tradycja ciepła, otwartych przestrzeni. OOWiT wpisuje się w ten charakter Otwocka.",
  },
  {
    title: "Spójny proces opieki",
    text: "Diagnoza, terapia i wsparcie w jednym miejscu — bez chaosu między placówkami. Od pierwszej rozmowy po długofalową opiekę prowadzimy pacjenta krok po kroku.",
  },
];

const stats = [
  { value: "15+", label: "lat doświadczenia zespołu" },
  { value: "8", label: "ścieżek terapeutycznych" },
  { value: "5", label: "specjalistów w OOWiT" },
];

export function TrustSection() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="border-y border-[var(--sand-200)] bg-[var(--sand-200)]/35"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-10 lg:px-6 lg:py-14">
        <FadeIn immediate>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--wood-700)]">
            O ośrodku
          </p>
          <h2 id="trust-heading" className="mt-2 max-w-2xl text-[var(--text-heading)] font-semibold">
            Otwock — miasto w lesie, uzdrowisko z tradycją
          </h2>
          <p className="mt-4 max-w-2xl opacity-85">
            OOWiT powstał w sercu Mazowsza, tam gdzie sosnowy mikroklimat spotyka się ze świdermajerską
            architekturą willi. To miejsce, w którym terapia ma kontekst — spokojny, lokalny, autentyczny.
          </p>
        </FadeIn>

        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-[var(--radius-md)] border border-[var(--sand-200)] bg-white/80 px-4 py-3 text-center"
            >
              <p className="text-2xl font-semibold text-[var(--pine-700)]">{stat.value}</p>
              <p className="mt-1 text-xs text-[var(--ink-soft)]">{stat.label}</p>
            </li>
          ))}
        </ul>

        <StaggerChildren className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <CardCorbelBorder>
                <article className="h-full rounded-[var(--radius-md)] border border-[var(--sand-200)] bg-white/70 p-5 backdrop-blur-sm">
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-85">{v.text}</p>
                </article>
              </CardCorbelBorder>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[var(--sand-200)] pt-6">
            <p className="max-w-prose text-sm opacity-85">
              Terapia indywidualna, par, diagnoza, SI, TUS i więcej — w jednym miejscu w Otwocku.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/uslugi" className="btn-honey text-sm">
                Zobacz usługi
              </Link>
              <Link href="/kontakt" className="btn-secondary text-sm">
                Kontakt
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
