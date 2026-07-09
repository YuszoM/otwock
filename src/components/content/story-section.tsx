import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";

export function StorySection() {
  return (
    <section
      aria-labelledby="story-heading"
      className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6 lg:py-20"
    >
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--wood-700)]">
          Nasza historia
        </p>
        <h2 id="story-heading" className="mt-2 text-[var(--text-heading)] font-semibold">
          Dlaczego powstał ośrodek OOWiT w Otwocku?
        </h2>
        <p className="mt-4 max-w-prose text-[var(--ink-soft)]">
          Bo bardzo często wyglądało to podobnie. Pierwsza konsultacja w jednym miejscu, diagnoza w drugim,
          terapia w kolejnym, a między tym wszystkim brak spójności i jasnego planu działania. Właśnie ten
          chaos chcieliśmy uporządkować.
        </p>
        <p className="mt-4 max-w-prose text-[var(--ink-soft)]">
          Z tego powodu stworzyliśmy miejsce, w którym proces wsparcia jest prowadzony od początku do końca.
          Nie rozdzielamy działań. Wykorzystujemy diagnozę, terapię i dalsze wsparcie w ramach jednego
          systemu, co ma sens zarówno dla dziecka, jak i dorosłego.
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <figure className="mt-10 rounded-[var(--radius-md)] border border-[var(--sand-200)] bg-[var(--pine-700)]/5 px-6 py-6 lg:px-8 lg:py-8">
          <blockquote className="text-lg italic leading-relaxed opacity-90">
            „Przez lata obserwowałam, jak wiele osób próbuje radzić sobie samodzielnie: rodzice
            przeciążeni opieką nad dziećmi wymagającymi więcej uwagi, pary, które utknęły w ciszy lub
            nieporozumieniach, osoby, które czują, że coś jest nie tak, ale nie potrafią tego nazwać.
            To właśnie dla nich tworzymy przestrzeń, w której nikt nie musi udawać, że daje radę.”
          </blockquote>
          <figcaption className="mt-4 text-sm font-semibold not-italic">
            Patrycja Kacprzyk, założycielka OOWiT
          </figcaption>
        </figure>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/zespol" className="btn-honey">
            Poznaj zespół
          </Link>
          <Link href="/rezerwacja" className="btn-secondary">
            Umów konsultację
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
