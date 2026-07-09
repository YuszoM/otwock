"use client";

import Link from "next/link";
import { StaggerChildren, StaggerItem } from "@/components/motion/fade-in";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export function StorySection() {
  return (
    <section
      aria-labelledby="story-heading"
      className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6 lg:py-20"
    >
      <StaggerChildren className="space-y-4">
        <StaggerItem variant="drop">
          <SectionEyebrow>Nasza historia</SectionEyebrow>
          <h2 id="story-heading" className="mt-2 text-[var(--text-heading)] font-semibold">
            Dlaczego powstał ośrodek OOWiT?
          </h2>
        </StaggerItem>
        <StaggerItem variant="left">
          <p className="max-w-prose text-[var(--ink-soft)]">
            Bo bardzo często wyglądało to podobnie. Pierwsza konsultacja w jednym miejscu, diagnoza w drugim,
            terapia w kolejnym, a między tym wszystkim brak spójności i jasnego planu działania. Właśnie ten
            chaos chcieliśmy uporządkować.
          </p>
        </StaggerItem>
        <StaggerItem variant="right">
          <p className="max-w-prose text-[var(--ink-soft)]">
            Z tego powodu stworzyliśmy miejsce, w którym proces wsparcia jest prowadzony od początku do końca.
            Nie rozdzielamy działań. Zamiast tego wykorzystujemy diagnozę, terapię i dalsze wsparcie w ramach
            jednego systemu, co ma sens zarówno dla dziecka, jak i dorosłego.
          </p>
        </StaggerItem>
        <StaggerItem variant="left">
          <p className="max-w-prose text-[var(--ink-soft)]">
            W tradycyjnym modelu placówki często funkcjonują w sposób rozproszony. W naszej poradni
            psychologiczno–pedagogicznej w Otwocku działamy inaczej. Stawiamy na współpracę specjalistów,
            ciągłość procesu i prowadzenie Pacjenta krok po kroku. Eliminuje to konieczność zaczynania od
            nowa przy każdej wizycie.
          </p>
        </StaggerItem>
        <StaggerItem variant="tilt-left">
          <figure className="mt-6 rounded-[var(--radius-md)] border border-[var(--sand-200)] bg-[var(--pine-700)]/5 px-6 py-6 lg:px-8 lg:py-8">
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
        </StaggerItem>
        <StaggerItem variant="scale">
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/zespol" className="btn-honey">
              Poznaj zespół
            </Link>
            <Link href="/rezerwacja" className="btn-secondary">
              Umów konsultację
            </Link>
          </div>
        </StaggerItem>
      </StaggerChildren>
    </section>
  );
}
