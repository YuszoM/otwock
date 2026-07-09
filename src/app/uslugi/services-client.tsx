"use client";

import { PageHero } from "@/components/ui/page-hero";
import { ServiceCard } from "@/components/services/service-card";
import { services } from "@/data/services";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion/fade-in";

export function ServicesClient() {
  return (
    <>
      <PageHero
        eyebrow="Usługi"
        title="Kompleksowa oferta diagnostyczna i terapeutyczna"
        description="Od pierwszej konsultacji po długofalowe wsparcie — każda usługa jest dopasowana do wieku i potrzeb pacjenta."
      />
      <section className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6">
        <StaggerChildren className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerChildren>
        <FadeIn>
          <div className="mt-12 rounded-[var(--radius-md)] border border-forest-border/15 bg-white p-6">
            <h2 className="text-lg font-semibold">Jak wygląda proces opieki?</h2>
            <p className="mt-3 max-w-prose opacity-85">
              Zaczynamy od diagnozy lub konsultacji wstępnej, ustalamy cele terapeutyczne i proponujemy
              plan spotkań. W razie potrzeby zapraszamy rodziców na konsultacje wspierające i
              współpracujemy ze szkołą. Każdy proces zaczyna się od rzetelnej diagnozy — nie zgadujemy,
              tylko precyzyjnie określamy źródło trudności.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
