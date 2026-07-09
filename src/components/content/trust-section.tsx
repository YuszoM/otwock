import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";

const values = [
  {
    title: "Bezpieczna przestrzeń",
    text: "Założenie jest proste: tworzymy bezpieczną przestrzeń, w której rodziny, pary i dzieci odzyskują spokój, lepiej rozumieją siebie i budują zdrowsze relacje. Pomagamy ludziom żyć lżej.",
  },
  {
    title: "Słuchamy, nie oceniamy",
    text: "W świecie, w którym każdy mówi Ci, jak masz żyć, my zaczynamy od słuchania. Nie oceniamy, nie przyspieszamy, nie dopasowujemy Cię do gotowych schematów.",
  },
  {
    title: "Spójny proces opieki",
    text: "Diagnoza, terapia i wsparcie w jednym miejscu — bez chaosu między placówkami. Tworzymy przestrzeń, w której możesz wreszcie być sobą ze wszystkimi pytaniami, których nikt wcześniej nie potrafił wysłuchać.",
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
      className="border-y border-forest-border/10 bg-[var(--color-beige-muted)]/40"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-honey)]">
            O ośrodku
          </p>
          <h2 id="trust-heading" className="mt-2 max-w-2xl text-[var(--text-heading)] font-semibold">
            To Twoja bezpieczna przestrzeń w Otwocku
          </h2>
          <p className="mt-4 max-w-2xl opacity-85">
            Ośrodek powstał z głębokiej potrzeby: aby rodziny, pary i dzieci miały miejsce, w którym
            czują się bezpiecznie, widziani i rozumiani.
          </p>
        </FadeIn>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-[var(--radius-md)] border border-forest-border/10 bg-white/80 px-4 py-3 text-center"
            >
              <p className="text-2xl font-semibold text-[var(--color-forest)]">{stat.value}</p>
              <p className="mt-1 text-xs opacity-80">{stat.label}</p>
            </li>
          ))}
        </ul>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={0.08 + i * 0.06}>
              <li className="rounded-[var(--radius-md)] border border-forest-border/10 bg-white/70 p-5 backdrop-blur-sm">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-85">{v.text}</p>
              </li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-forest-border/10 pt-6">
            <p className="max-w-prose text-sm opacity-85">
              Terapia indywidualna, par, diagnoza, SI, TUS i więcej — w jednym miejscu w Otwocku.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/uslugi" className="btn-honey text-sm">
                Zobacz usługi
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex min-h-11 items-center rounded-[var(--radius-sm)] border border-forest-border/30 px-4 text-sm font-semibold underline-offset-4 hover:underline"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
