import Image from "next/image";
import { HomeHeroIntro } from "@/components/home/home-hero-intro";
import { HeroScrollCue } from "@/components/home/hero-scroll-cue";
import { HeroOrnament } from "@/components/ornaments/hero-ornament";
import { SectionSeparator } from "@/components/ornaments/section-separator";

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
          quality={72}
          sizes="100vw"
          className="motion-hero-drift object-cover object-[65%_28%]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        <Image
          src={HERO_IMAGE}
          alt="Ośrodek OOWiT w Otwocku"
          fill
          quality={72}
          sizes="(min-width: 768px) 100vw, 0px"
          loading="lazy"
          className="motion-hero-drift object-cover object-[center_35%]"
        />
      </div>

      <div className="hero-overlay pointer-events-none absolute inset-0 z-[1]" aria-hidden />
      <HeroOrnament />

      <div className="hero-safe-zone relative z-10 mx-auto flex min-h-[100svh] max-w-[var(--container-max)] flex-col justify-center px-4 py-[max(4.5rem,11svh)] sm:py-20 lg:px-6">
        <HomeHeroIntro />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[2] flex flex-col items-center">
        <SectionSeparator variant="on-forest" className="w-full py-2 opacity-90" />
        <HeroScrollCue />
        <div
          className="pointer-events-none h-8 w-full bg-gradient-to-t from-[var(--sand-50)] to-transparent sm:h-12"
          aria-hidden
        />
      </div>
    </section>
  );
}
