import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const HERO_IMAGE = "/images/hero-otwock-forest-16x9.webp";
const HERO_IMAGE_ALT = "/images/hero-otwock-forest-alt.webp";

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden text-on-forest">
      <Image
        src={HERO_IMAGE_ALT}
        alt="Spokojny las w okolicach Otwocka — wizualna tożsamość OOWiT"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="absolute inset-0 object-cover object-[65%_28%] md:hidden"
      />
      <Image
        src={HERO_IMAGE}
        alt="Spokojny las w okolicach Otwocka — wizualna tożsamość OOWiT"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="absolute inset-0 hidden object-cover object-[center_35%] md:block"
      />

      <div className="hero-overlay absolute inset-0 z-[1]" aria-hidden />

      <div className="hero-safe-zone relative z-10 mx-auto flex min-h-[100svh] max-w-[var(--container-max)] flex-col justify-center px-4 py-[max(4.5rem,11svh)] sm:py-20 lg:px-6">
        <div className="max-w-prose">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-honey)]">
            Słuchamy i wspieramy
          </p>
          <h1 className="mt-3 text-[clamp(1.75rem,5.5vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-balance">
            Miejsce, w którym psychologia, terapia i diagnoza działają jako jeden spójny proces
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-on-forest/90 sm:mt-5">
            {siteConfig.footer.tagline}. W Otwocku tworzymy centrum wsparcia, w którym nikt nie musi
            udawać, że daje radę sam.
          </p>
          <Link
            href="/rezerwacja"
            className="mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--color-honey)]/50 bg-[var(--color-forest-deep)]/55 px-3 py-2 text-xs font-semibold text-[var(--color-honey)] backdrop-blur-[2px] transition-colors hover:bg-[var(--color-forest-deep)]/70"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-honey)]" aria-hidden />
            <span className="text-pretty">
              Zostały ostatnie wolne terminy — sprawdź dostępność
            </span>
          </Link>
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href={siteConfig.bookingCta.href} className="btn-honey w-full justify-center sm:w-auto">
              {siteConfig.bookingCta.label}
            </Link>
            <Link
              href="/o-nas"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-[var(--radius-sm)] border border-forest-border bg-[var(--color-forest-deep)]/40 px-5 text-sm font-semibold text-on-forest underline-offset-4 backdrop-blur-[2px] transition-colors hover:bg-[var(--color-forest-deep)]/55 sm:w-auto"
            >
              Poznaj ośrodek
            </Link>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-16 bg-gradient-to-t from-beige to-transparent sm:h-20"
        aria-hidden
      />
    </section>
  );
}
