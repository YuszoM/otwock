"use client";

import Link from "next/link";
import { Check } from "@phosphor-icons/react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionPineAccent } from "@/components/ornaments/section-pine-accent";

const audiences = [
  "rodzice dzieci w wieku przedszkolnym i szkolnym",
  "młodzież z trudnościami emocjonalnymi i szkolnymi",
  "osoby dorosłe szukające wsparcia specjalisty",
  "pary w kryzysie lub chcące poprawić relację",
  "mieszkańcy Otwocka i Józefowa, którzy szukają lokalnego wsparcia psychologa lub psychoterapeuty bez konieczności dojazdów do Warszawy",
  "osoby potrzebujące diagnozy i jasnego planu dalszego działania",
];

export function AudienceSection() {
  return (
    <section
      aria-labelledby="audience-heading"
      className="relative mx-auto max-w-[var(--container-max)] overflow-hidden px-4 py-16 lg:px-6 lg:py-20"
    >
      <SectionPineAccent position="bottom-right" />
      <FadeIn>
        <h2 id="audience-heading" className="max-w-2xl text-[var(--text-heading)] font-semibold">
          Dla kogo jest to miejsce?
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--ink-soft)]">
          Ze wsparcia poradni zdrowia psychicznego OOWiT korzystają najczęściej:
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {audiences.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-[var(--radius-sm)] border border-forest-border/15 bg-white/80 px-4 py-3 text-sm leading-relaxed text-[var(--ink)]"
            >
              <Check
                size={18}
                weight="bold"
                className="mt-0.5 shrink-0 text-[var(--pine-700)]"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="mt-8">
          <Link href="/rezerwacja" className="btn-honey">
            Umów konsultację
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
