"use client";

import { StaggerChildren, StaggerItem } from "@/components/motion/fade-in";

export function ModernApproachSection() {
  return (
    <section
      aria-labelledby="modern-approach-heading"
      className="border-y border-forest-border/10 bg-forest text-on-forest"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6 lg:py-20">
        <StaggerChildren className="space-y-4">
          <StaggerItem variant="drop">
            <h2 id="modern-approach-heading" className="max-w-2xl text-[var(--text-heading)] font-semibold">
              Nowoczesne podejście do terapii
            </h2>
          </StaggerItem>
          <StaggerItem variant="rise">
            <p className="max-w-2xl opacity-90">
              W OOWiT nie bazujemy wyłącznie na jednym nurcie pracy. Wykorzystujemy klasyczną psychologię
              oraz nowoczesne narzędzia, które wspierają proces terapeutyczny i pomagają szybciej dotrzeć
              do efektów. W centrum dostępna jest profesjonalnie wyposażona sala integracji sensorycznej, a
              także terapia wspierana technologią VR, wykorzystywana w pracy z dziećmi i młodzieżą. Takie
              podejście pozwala bezpiecznie doświadczać emocji, reakcji i sytuacji, jakie później można
              przenosić do codziennego życia.
            </p>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}
