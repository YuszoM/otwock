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
        title="Poznaj naszą ofertę"
        description="Każda z naszych usług powstała po to, by realnie odciążyć rodziców, wesprzeć dzieci i dać rodzinom przestrzeń, w której można poczuć się spokojniej."
      />
      <section className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6">
        <StaggerChildren immediate className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerChildren>
        <FadeIn>
          <div className="mt-12 rounded-[var(--radius-md)] border border-forest-border/15 bg-white p-6">
            <p className="max-w-prose opacity-85">
              Każdy proces zaczyna się od rzetelnej diagnozy, która pozwala nie zgadywać, tylko precyzyjnie
              określić źródło trudności i zaplanować dalsze kroki terapeutyczne.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
