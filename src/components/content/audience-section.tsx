import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";

const audiences = [
  "Rodzice dzieci w wieku przedszkolnym i szkolnym",
  "Młodzież z trudnościami emocjonalnymi i szkolnymi",
  "Osoby dorosłe szukające wsparcia specjalisty",
  "Pary w kryzysie lub chcące poprawić relację",
  "Mieszkańcy Otwocka i Józefowa szukający lokalnego wsparcia bez dojazdów do Warszawy",
  "Osoby potrzebujące diagnozy i jasnego planu dalszego działania",
];

export function AudienceSection() {
  return (
    <section
      aria-labelledby="audience-heading"
      className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6 lg:py-20"
    >
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-honey)]">
          Dla kogo
        </p>
        <h2 id="audience-heading" className="mt-2 max-w-2xl text-[var(--text-heading)] font-semibold">
          Dla kogo jest to miejsce?
        </h2>
        <p className="mt-4 max-w-2xl opacity-85">
          Ze wsparcia OOWiT korzystają rodziny, pary i osoby dorosłe — każda z własną historią i
          potrzebą bezpiecznej przestrzeni.
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {audiences.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-[var(--radius-sm)] border border-forest-border/15 bg-white/80 px-4 py-3 text-sm"
            >
              <span className="mt-0.5 shrink-0 text-[var(--color-forest)]" aria-hidden>
                ✓
              </span>
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
