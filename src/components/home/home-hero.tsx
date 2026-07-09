import Image from "next/image";
import { HomeHeroIntro } from "@/components/home/home-hero-intro";
import { AnimatedSectionSeparator } from "@/components/ornaments/animated-section-separator";
import { HeroOrnament } from "@/components/ornaments/hero-ornament";

const HERO_IMAGE = "/images/hero-otwock-forest-16x9.webp";
const HERO_IMAGE_ALT = "/images/hero-otwock-forest-alt.webp";

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden text-on-forest">
      <div className="pointer-events-none absolute inset-0 overflow-hidden md:hidden">
        <Image
          src={HERO_IMAGE_ALT}
          alt="Ośrodek OOWiT w Otwocku"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="motion-hero-drift object-cover object-[65%_28%]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        <Image
          src={HERO_IMAGE}
          alt="Ośrodek OOWiT w Otwocku"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="motion-hero-drift object-cover object-[center_35%]"
        />
      </div>

      <div className="hero-overlay pointer-events-none absolute inset-0 z-[1]" aria-hidden />
      <HeroOrnament />

      <div className="hero-safe-zone relative z-10 mx-auto flex min-h-[100svh] max-w-[var(--container-max)] flex-col justify-center px-4 py-[max(4.5rem,11svh)] sm:py-20 lg:px-6">
        <HomeHeroIntro />
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2]" aria-hidden>
        <AnimatedSectionSeparator variant="on-forest" className="py-2 opacity-90" />
        <div className="h-8 bg-gradient-to-t from-[var(--sand-50)] to-transparent sm:h-12" />
      </div>
    </section>
  );
}
