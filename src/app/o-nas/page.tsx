import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { PageHero } from "@/components/ui/page-hero";
import { CareProcess } from "@/components/content/care-process";
import { TrustSection } from "@/components/content/trust-section";
import { StorySection } from "@/components/content/story-section";
import { ModernApproachSection } from "@/components/content/modern-approach-section";
import { RespiteCareSection } from "@/components/content/respite-care-section";
import { AudienceSection } from "@/components/content/audience-section";
import { LegalSupportSection } from "@/components/content/legal-support-section";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = buildPageMetadata({
  title: "O nas",
  description:
    "OOWiT — Otwocki Ośrodek Wsparcia Rodziny, Diagnozy i Terapii. Kompleksowe centrum opieki psychologicznej w Otwocku.",
  path: "/o-nas",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O ośrodku"
        title="Nie klasyczna poradnia — kompleksowe centrum wsparcia"
        description="W Otwocku stworzyliśmy przestrzeń, w której diagnoza, terapia i dalsze wsparcie funkcjonują w ramach jednego, konsekwentnie prowadzonego procesu."
      />
      <StorySection />
      <CareProcess />
      <TrustSection />
      <ModernApproachSection />
      <RespiteCareSection />
      <AudienceSection />
      <LegalSupportSection />
      <section className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6">
        <FadeIn>
          <div className="relative aspect-[21/9] overflow-hidden rounded-[var(--radius-md)] border border-forest-border/10">
            <Image
              src="/images/hero-otwock-forest-16x9.webp"
              alt="Spokojne otoczenie OOWiT w Otwocku"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 72rem"
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/zespol" className="btn-honey">
              Poznaj zespół
            </Link>
            <Link
              href="/rezerwacja"
              className="inline-flex min-h-11 items-center rounded-[var(--radius-sm)] border border-forest-border/30 px-4 text-sm font-semibold underline-offset-4 hover:underline"
            >
              Umów konsultację
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
