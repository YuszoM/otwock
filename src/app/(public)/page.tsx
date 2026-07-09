"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CareProcess } from "@/components/content/care-process";
import { TrustSection } from "@/components/content/trust-section";
import { SpecialistCard } from "@/components/team/specialist-card";
import { FadeIn, HoverLift, StaggerChildren, StaggerItem } from "@/components/motion/fade-in";
import { specialists } from "@/data/specialists";

export default function HomePage() {
  const featured = specialists.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-forest text-on-forest">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "url(/images/texture-pine-beige-tile.jpg)",
            backgroundSize: "400px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-[var(--container-max)] gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center lg:px-6 lg:py-20">
          <FadeIn y={20}>
            <div className="max-w-prose">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-honey)]">
                Słuchamy i wspieramy
              </p>
              <h1 className="mt-3 text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-tight">
                Miejsce, w którym psychologia, terapia i diagnoza działają jako jeden spójny proces
              </h1>
              <p className="mt-5 text-base leading-relaxed opacity-90">
                {siteConfig.footer.tagline}. W Otwocku tworzymy centrum wsparcia, w którym nikt nie musi
                udawać, że daje radę sam.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href={siteConfig.bookingCta.href} className="btn-honey">
                  {siteConfig.bookingCta.label}
                </Link>
                <Link
                  href="/o-nas"
                  className="inline-flex min-h-11 items-center rounded-[var(--radius-sm)] border border-forest-border px-5 text-sm font-semibold text-on-forest underline-offset-4 transition-colors hover:bg-white/5"
                >
                  Poznaj ośrodek
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.12} y={24}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-md)] shadow-[0_24px_48px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/hero-otwock-forest-16x9.jpg"
                alt="Spokojny las w okolicach Otwocka — wizualna tożsamość OOWiT"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <TrustSection />

      <CareProcess />

      <section className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6 lg:py-20">
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
        <StaggerChildren className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
