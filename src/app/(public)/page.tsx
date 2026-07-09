"use client";

import Link from "next/link";
import { HomeHero } from "@/components/home/home-hero";
import { CareProcess } from "@/components/content/care-process";
import { TrustSection } from "@/components/content/trust-section";
import { ModernApproachSection } from "@/components/content/modern-approach-section";
import { AudienceSection } from "@/components/content/audience-section";
import { LegalSupportSection } from "@/components/content/legal-support-section";
import { SpecialistCard } from "@/components/team/specialist-card";
import { FadeIn, HoverLift, StaggerChildren, StaggerItem } from "@/components/motion/fade-in";
import { specialists } from "@/data/specialists";

export default function HomePage() {
  const featured = specialists.slice(0, 3);

  return (
    <>
      <HomeHero />

      <TrustSection />
      <CareProcess />
      <ModernApproachSection />
      <AudienceSection />
      <LegalSupportSection />

      <section className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-honey)]">
                Zespół
              </p>
              <h2 className="mt-2 text-[var(--text-heading)] font-semibold">Nasi specjaliści</h2>
              <p className="mt-2 max-w-prose opacity-85">
                Wybierz osobę dopasowaną do Twoich potrzeb — specjalizacje, języki i jasna ścieżka do
                rezerwacji.
              </p>
            </div>
            <Link href="/zespol" className="text-sm font-semibold underline-offset-4 hover:underline">
              Cały zespół →
            </Link>
          </div>
        </FadeIn>
        <StaggerChildren className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <StaggerItem key={s.slug}>
              <HoverLift>
                <SpecialistCard specialist={s} />
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>
    </>
  );
}
