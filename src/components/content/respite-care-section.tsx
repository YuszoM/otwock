import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";

export function RespiteCareSection() {
  return (
    <section
      aria-labelledby="respite-heading"
      className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6 lg:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-honey)]">
            Opieka wytchnieniowa
          </p>
          <h2 id="respite-heading" className="mt-2 text-[var(--text-heading)] font-semibold">
            Oddech dla rodzica — bezpieczna zabawa dla dziecka
          </h2>
          <p className="mt-4 opacity-85">
            Doskonale rozumiemy, że poradnia nie zawsze jest miejscem, do którego można wybrać się z
            dzieckiem. Zorganizowanie opieki bywa wyzwaniem — dlatego oferujemy opiekę wytchnieniową
            podczas wizyty rodzica w ośrodku.
          </p>
          <p className="mt-4 opacity-85">
            Koszt opieki wynosi <strong>40 zł</strong>. W jej ramach dzieci korzystają z aktywności
            rozwijających, w tym systemu FunFloor i innych form kreatywnej zabawy — nie jest to bierne
            czekanie, lecz czas wspierający rozwój najmłodszych i odciążający rodzica.
          </p>
          <Link href="/kontakt" className="btn-honey mt-6 inline-flex">
            Zapytaj o opiekę wytchnieniową
          </Link>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-[var(--radius-md)] border border-forest-border/15 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Co obejmuje opieka?</h3>
            <ul className="mt-4 space-y-3 text-sm opacity-85">
              <li className="flex gap-2">
                <span className="text-[var(--color-forest)]" aria-hidden>•</span>
                Bezpieczna opieka podczas konsultacji lub terapii rodzica
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-forest)]" aria-hidden>•</span>
                Zajęcia z FunFloor i kreatywną zabawą
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-forest)]" aria-hidden>•</span>
                Wsparcie dla rodziców i opiekunów dzieci z niepełnosprawnością
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-forest)]" aria-hidden>•</span>
                Możliwość zadbania o siebie bez poczucia winy
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
