import { HomeHero } from "@/components/home/home-hero";
import { HomeTeamSection } from "@/components/home/home-team-section";
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
      <HomeTeamSection featured={featured} />
      <CtaStrip />
    </>
  );
}
