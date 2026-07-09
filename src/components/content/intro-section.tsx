"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionSeparator } from "@/components/ornaments/section-separator";

export function IntroSection() {
  return (
    <section aria-labelledby="intro-heading" className="relative bg-[var(--sand-50)]">
      <SectionSeparator />
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-14">
          <FadeIn immediate>
            <h2 id="intro-heading" className="text-[clamp(1.5rem,4vw,2rem)] font-semibold leading-tight tracking-tight text-[var(--pine-900)]">
              To Twoja bezpieczna przestrzeń.
            </h2>
          </FadeIn>
          <FadeIn immediate delay={0.08}>
            <div className="space-y-4 text-base leading-relaxed text-[var(--ink-soft)]">
              <p>
                Ośrodek powstał z bardzo głębokiej potrzeby: aby rodziny, pary i dzieci miały w Otwocku
                miejsce, w którym naprawdę czują się bezpiecznie, widziani i rozumiani.
              </p>
              <p>
                Przez lata obserwowaliśmy, jak wiele osób próbuje radzić sobie samodzielnie: rodzice
                przeciążeni opieką nad dziećmi wymagającymi więcej uwagi, pary, które utknęły w ciszy lub
                nieporozumieniach, osoby, które czują, że „coś jest nie tak”, ale nie potrafią tego nazwać.
                To właśnie dla nich stworzyliśmy przestrzeń, w której nikt nie musi udawać, że daje radę.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/rezerwacja" className="btn-honey">
                Umów konsultację
              </Link>
              <Link href="/aktualnosci" className="btn-secondary">
                Aktualne zapisy
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
