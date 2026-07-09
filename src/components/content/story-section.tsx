import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";

export function StorySection() {
  return (
    <section
      aria-labelledby="story-heading"
      className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6 lg:py-20"
    >
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-honey)]">
          Nasza historia
        </p>
        <h2 id="story-heading" className="mt-2 text-[var(--text-heading)] font-semibold">
          Dlaczego powstał ośrodek OOWiT?
        </h2>
        <p className="mt-4 max-w-prose opacity-85">
          Bo bardzo często wyglądało to podobnie: pierwsza konsultacja w jednym miejscu, diagnoza w
          drugim, terapia w kolejnym — a między tym wszystkim brak spójności i jasnego planu działania.
          Właśnie ten chaos chcieliśmy uporządkować.
        </p>
        <p className="mt-4 max-w-prose opacity-85">
          W tradycyjnym modelu placówki często funkcjonują w sposób rozproszony. W naszej poradni
          psychologiczno-pedagogicznej w Otwocku działamy inaczej — stawiamy na współpracę specjalistów,
          ciągłość procesu i prowadzenie pacjenta krok po kroku.
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <figure className="mt-10 rounded-[var(--radius-md)] border border-forest-border/15 bg-forest/5 px-6 py-6 lg:px-8 lg:py-8">
          <blockquote className="text-lg italic leading-relaxed opacity-90">
            „Przez lata obserwowałam, jak wiele osób próbuje radzić sobie samodzielnie: rodzice
            przeciążeni opieką nad dziećmi wymagającymi więcej uwagi, pary, które utknęły w ciszy lub
            nieporozumieniach, osoby, które czują, że coś jest nie tak, ale nie potrafią tego nazwać. To
            właśnie dla nich tworzymy przestrzeń, w której nikt nie musi udawać, że daje radę.”
          </blockquote>
          <figcaption className="mt-4 text-sm font-semibold not-italic">
            — Patrycja Kacprzyk, założycielka OOWiT
          </figcaption>
        </figure>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/zespol" className="btn-honey">
            Poznaj zespół
          </Link>
          <Link
            href="/rezerwacja"
            className="inline-flex min-h-11 items-center rounded-[var(--radius-sm)] border border-forest-border/30 px-4 text-sm font-semibold underline-offset-4 hover:underline"
          >
            Umów konsultację
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
