"use client";

import { StaggerChildren, StaggerItem } from "@/components/motion/fade-in";
import { AnimatedSectionSeparator } from "@/components/ornaments/animated-section-separator";

export function CareProcess() {
  return (
    <section
      aria-labelledby="care-process-heading"
      className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16"
    >
      <AnimatedSectionSeparator className="mb-4" motion="fade" />
      <StaggerChildren className="space-y-4">
        <StaggerItem variant="drop">
          <h2 id="care-process-heading" className="text-[var(--text-heading)] font-semibold">
            Jak rozumiemy poradnię zdrowia psychicznego?
          </h2>
        </StaggerItem>
        <StaggerItem variant="left">
          <p className="max-w-prose opacity-85">
            Poradnia zdrowia psychicznego w naszym podejściu nie ogranicza się wyłącznie do pojedynczej
            wizyty. To złożony proces, który obejmuje diagnozę, terapię i dalsze wsparcie w sposób spójny,
            a także uporządkowany. Nie chodzi bowiem o szybkie rozpoznanie, tylko o pełne zrozumienie
            sytuacji oraz dobranie działań, które mają sens w codziennym funkcjonowaniu.
          </p>
        </StaggerItem>
        <StaggerItem variant="right">
          <p className="max-w-prose opacity-85">
            W codziennej pracy dużą wagę przykładamy też do komfortu osób korzystających ze wsparcia.
            Ważne jest nie tylko to, co dzieje się w gabinecie, ale również całe otoczenie procesu
            terapeutycznego, m.in. poczucie bezpieczeństwa, jasna komunikacja i brak presji czasu. Dzięki
            temu terapia jest bardziej naturalnym doświadczeniem, a nie wyłącznie formalnym obowiązkiem.
            Takie podejście sprawia, że łatwiej budować relację i utrzymać regularność spotkań, co
            bezpośrednio przekłada się na skuteczność całego procesu.
          </p>
        </StaggerItem>
      </StaggerChildren>
    </section>
  );
}
