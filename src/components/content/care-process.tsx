"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { LaceGableSeparator } from "@/components/ornaments/lace-gable-separator";

export function CareProcess() {
  return (
    <section
      aria-labelledby="care-process-heading"
      className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16"
    >
      <LaceGableSeparator className="mb-10 opacity-70" />
      <FadeIn>
        <h2 id="care-process-heading" className="text-[var(--text-heading)] font-semibold">
          Jak rozumiemy poradnię zdrowia psychicznego?
        </h2>
        <div className="mt-4 max-w-prose space-y-4 opacity-85">
          <p>
            Poradnia zdrowia psychicznego w naszym podejściu nie ogranicza się wyłącznie do pojedynczej
            wizyty. To złożony proces, który obejmuje diagnozę, terapię i dalsze wsparcie w sposób spójny,
            a także uporządkowany. Nie chodzi bowiem o szybkie rozpoznanie, tylko o pełne zrozumienie
            sytuacji oraz dobranie działań, które mają sens w codziennym funkcjonowaniu.
          </p>
          <p>
            W codziennej pracy dużą wagę przykładamy też do komfortu osób korzystających ze wsparcia.
            Ważne jest nie tylko to, co dzieje się w gabinecie, ale również całe otoczenie procesu
            terapeutycznego, m.in. poczucie bezpieczeństwa, jasna komunikacja i brak presji czasu. Dzięki
            temu terapia jest bardziej naturalnym doświadczeniem, a nie wyłącznie formalnym obowiązkiem.
            Takie podejście sprawia, że łatwiej budować relację i utrzymać regularność spotkań, co
            bezpośrednio przekłada się na skuteczność całego procesu.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
