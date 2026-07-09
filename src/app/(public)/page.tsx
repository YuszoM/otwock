"use client";

import Link from "next/link";
import { HomeHero } from "@/components/home/home-hero";
import { IntroSection } from "@/components/content/intro-section";
import { CareProcess } from "@/components/content/care-process";
import { TrustSection } from "@/components/content/trust-section";
import { ServicesShowcase } from "@/components/content/services-showcase";
import { StorySection } from "@/components/content/story-section";
import { ValuesSection } from "@/components/content/values-section";
import { TestimonialsSection } from "@/components/content/testimonials-section";
import { ModernApproachSection } from "@/components/content/modern-approach-section";
import { AudienceSection } from "@/components/content/audience-section";
import { CtaStrip } from "@/components/content/cta-strip";
import { SpecialistCard } from "@/components/team/specialist-card";
import { FadeIn, HoverLift, StaggerChildren, StaggerItem } from "@/components/motion/fade-in";
import { specialists } from "@/data/specialists";

export default function HomePage() {
  const featured = specialists.slice(0, 3);

  return (
    <>
      <HomeHero />
      <IntroSection />
      <CareProcess />
      <ServicesShowcase />
      <StorySection />
      <ValuesSection />
      <TrustSection />
      <TestimonialsSection />
      <ModernApproachSection />
      <AudienceSection />

      <section className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-[var(--text-heading)] font-semibold">Nasz zespół</h2>
              <p className="mt-2 max-w-prose text-[var(--ink-soft)]">
                Nie musisz wybierać w ciemno. W tym miejscu możesz czytać o naszym zespole jeszcze przed
                zarezerwowaniem konsultacji.
              </p>
            </div>
            <Link
              href="/zespol"
              className="text-sm font-semibold text-[var(--pine-700)] underline-offset-4 hover:underline"
            >
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

      <CtaStrip />
    </>
  );
}
