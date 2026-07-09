"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { CareProcessIllustration } from "@/components/ornaments/care-process-illustration";
import { LaceGableSeparator } from "@/components/ornaments/lace-gable-separator";
import { ProcessStepIcon } from "@/components/ornaments/process-step-icon";

const steps = [
  {
    title: "Diagnoza",
    description:
      "Poznajemy potrzeby pacjenta i rodziny — wywiad, obserwacja i narzędzia diagnostyczne dają pełniejszy obraz sytuacji.",
  },
  {
    title: "Terapia",
    description:
      "Ustalamy cele i plan pracy. Spotkania są regularne, dostosowane do wieku i możliwości pacjenta.",
  },
  {
    title: "Wsparcie",
    description:
      "Towarzyszymy w codziennym funkcjonowaniu — konsultacje dla rodziców, współpraca ze szkołą i monitorowanie postępów.",
  },
] as const;

export function CareProcess() {
  return (
    <section aria-labelledby="care-process-heading" className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
      <LaceGableSeparator className="mb-10 opacity-70" />
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
        <FadeIn className="order-1 lg:order-2">
          <h2 id="care-process-heading" className="text-[var(--text-heading)] font-semibold">
            Zintegrowana opieka w trzech krokach
          </h2>
          <p className="mt-4 opacity-85">
            W OOWiT łączymy diagnozę, terapię i długofalowe wsparcie — tak, aby pacjent i rodzina
            mieli jasny plan działania w jednym miejscu w Otwocku, w otoczeniu sosnowego lasu.
          </p>
          <ol className="mt-8 space-y-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <ProcessStepIcon step={(i + 1) as 1 | 2 | 3} />
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm opacity-85">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </FadeIn>
        <FadeIn delay={0.1} className="order-2 lg:order-1">
          <CareProcessIllustration />
        </FadeIn>
      </div>
    </section>
  );
}
