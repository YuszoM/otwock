import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { HeroOrnament } from "@/components/ornaments/hero-ornament";
import { LaceGableSeparator } from "@/components/ornaments/lace-gable-separator";

const HERO_IMAGE = "/images/hero-otwock-forest-16x9.webp";
const HERO_IMAGE_ALT = "/images/hero-otwock-forest-alt.webp";

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden text-on-forest">
      <Image
        src={HERO_IMAGE_ALT}
        alt="Sosnowy las i willa w stylu świdermajerskim w Otwocku — mikroklimat uzdrowiska"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="absolute inset-0 object-cover object-[65%_28%] md:hidden"
      />
      <Image
        src={HERO_IMAGE}
        alt="Sosnowy las i willa w stylu świdermajerskim w Otwocku — mikroklimat uzdrowiska"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="absolute inset-0 hidden object-cover object-[center_35%] md:block"
      />

      <div className="hero-overlay absolute inset-0 z-[1]" aria-hidden />
      <HeroOrnament />

      <div className="hero-safe-zone relative z-10 mx-auto flex min-h-[100svh] max-w-[var(--container-max)] flex-col justify-center px-4 py-[max(4.5rem,11svh)] sm:py-20 lg:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--clay-400)]">
            Słuchamy i wspieramy.
          </p>
          <h1 className="mt-3 text-[clamp(1.65rem,4.8vw,2.65rem)] font-semibold leading-[1.14] tracking-tight text-balance">
            Miejsce, w którym psychologia, terapia i diagnoza działają jako jeden spójny proces
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-on-forest/90 sm:mt-5">
            W Otwocku stworzyliśmy przestrzeń, która nie przypomina klasycznej poradni — kompleksowe
            centrum wsparcia dla dzieci, młodzieży i dorosłych, w sosnowym mikroklimacie uzdrowiska.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href={siteConfig.bookingCta.href} className="btn-honey w-full justify-center sm:w-auto">
              {siteConfig.bookingCta.label}
            </Link>
            <Link
              href="/o-nas"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-[var(--radius-sm)] border border-forest-border bg-[var(--pine-900)]/40 px-5 text-sm font-semibold text-on-forest underline-offset-4 backdrop-blur-[2px] transition-colors hover:bg-[var(--pine-900)]/55 sm:w-auto"
            >
              Poznaj ośrodek
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2]" aria-hidden>
        <LaceGableSeparator className="opacity-90" />
        <div className="h-8 bg-gradient-to-t from-[var(--sand-50)] to-transparent sm:h-12" />
      </div>
    </section>
  );
}
