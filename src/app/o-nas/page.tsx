import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { OtwockTownSection } from "@/components/content/otwock-town-section";
import { PageHero } from "@/components/ui/page-hero";
import { CareProcess } from "@/components/content/care-process";
import { TrustSection } from "@/components/content/trust-section";
import { TestimonialsSection } from "@/components/content/testimonials-section";
import { StorySection } from "@/components/content/story-section";
import { ModernApproachSection } from "@/components/content/modern-approach-section";
import { RespiteCareSection } from "@/components/content/respite-care-section";
import { AudienceSection } from "@/components/content/audience-section";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = buildPageMetadata({
  title: "O nas",
  description:
    "OOWiT — Otwocki Ośrodek Wsparcia Rodziny, Diagnozy i Terapii.",
  path: "/o-nas",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O ośrodku"
        title="Miejsce, w którym psychologia, terapia i diagnoza działają jako jeden spójny proces"
        description="W Otwocku stworzyliśmy przestrzeń, która nie przypomina klasycznej poradni, lecz kompleksowe centrum wsparcia dla dzieci, młodzieży i dorosłych."
      />
      <StorySection />
      <OtwockTownSection />
      <CareProcess />
      <TrustSection />
      <TestimonialsSection />
      <ModernApproachSection />
      <RespiteCareSection />
      <AudienceSection />
      <section className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6">
        <FadeIn>
          <div className="relative aspect-[21/9] overflow-hidden rounded-[var(--radius-md)] border border-[var(--sand-200)]">
            <Image
              src="/images/hero-otwock-forest-16x9.webp"
              alt="Ośrodek OOWiT w Otwocku"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 72rem"
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/zespol" className="btn-honey">
              Poznaj zespół
            </Link>
            <Link href="/rezerwacja" className="btn-secondary">
              Umów konsultację
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
