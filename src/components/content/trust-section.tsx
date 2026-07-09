"use client";

import Link from "next/link";
import { Check } from "@phosphor-icons/react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion/fade-in";

const offerings = [
  "pomoc psychologa dziecięcego, wspierającego rozwój emocjonalny i społeczny dzieci",
  "wsparcie doświadczonego psychologa, prowadzącego konsultacje dla młodzieży i dorosłych",
  "usługi psychoterapeuty, realizującego procesy terapeutyczne długoterminowe",
  "psychoterapię obejmującą wsparcie indywidualne oraz dla par",
  "terapię dla par, skupioną na komunikacji, kryzysach i odbudowie relacji",
  "integrację sensoryczną, wspierającą dzieci z trudnościami przetwarzania bodźców",
];

export function TrustSection() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="border-y border-[var(--sand-200)] bg-[var(--sand-200)]/35"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-10 lg:px-6 lg:py-14">
        <FadeIn immediate>
          <h2 id="trust-heading" className="max-w-2xl text-[var(--text-heading)] font-semibold">
            Co oferujemy w naszym ośrodku?
          </h2>
          <p className="mt-4 max-w-2xl opacity-85">
            Nasze centrum zostało stworzone tak, aby zapewniać wsparcie w różnych obszarach w jednym
            miejscu. Sprawia to, że Pacjenci z Otwocka, Józefowa oraz okolicznych miejscowości nie muszą
            szukać kilku specjalistów osobno. W ramach pracy oferujemy:
          </p>
        </FadeIn>

        <StaggerChildren className="mt-8 grid gap-3 sm:grid-cols-2">
          {offerings.map((item) => (
            <StaggerItem key={item}>
              <div className="flex gap-3 rounded-[var(--radius-sm)] border border-[var(--sand-200)] bg-white/80 px-4 py-3 text-sm">
                <Check
                  size={18}
                  weight="bold"
                  className="mt-0.5 shrink-0 text-[var(--pine-700)]"
                  aria-hidden
                />
                <span>{item}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.15}>
          <p className="mt-8 max-w-prose text-sm opacity-85">
            Każdy proces zaczyna się od rzetelnej diagnozy, która pozwala nie zgadywać, tylko precyzyjnie
            określić źródło trudności i zaplanować dalsze kroki terapeutyczne.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/uslugi" className="btn-honey text-sm">
              Poznaj naszą ofertę
            </Link>
            <Link href="/rezerwacja" className="btn-secondary text-sm">
              Zarezerwuj konsultację
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
