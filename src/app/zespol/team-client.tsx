"use client";

import { PageHero } from "@/components/ui/page-hero";
import { SpecialistCard } from "@/components/team/specialist-card";
import { specialists } from "@/data/specialists";
import { StaggerChildren, StaggerItem } from "@/components/motion/fade-in";

export function TeamClient() {
  return (
    <>
      <PageHero
        eyebrow="Zespół"
        title="Specjaliści, którzy towarzyszą na każdym etapie opieki"
        description="Każdy członek zespołu ma określone kompetencje — łatwo znajdziesz osobę dopasowaną do Twoich potrzeb."
      />
      <section className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6">
        <p className="mb-8 max-w-prose rounded-[var(--radius-md)] border border-[var(--lilac-300)] bg-[var(--lilac-300)]/20 px-4 py-3 text-sm text-[var(--ink-soft)]">
          Profile oznaczone „Demo dane” to placeholdery — prawdziwe zdjęcia i dane specjalistów
          uzupełnimy po potwierdzeniu składu zespołu przez klienta.
        </p>
        <StaggerChildren immediate className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {specialists.map((s) => (
            <StaggerItem key={s.slug}>
              <SpecialistCard specialist={s} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>
    </>
  );
}
