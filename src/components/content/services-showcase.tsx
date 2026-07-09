"use client";

import Link from "next/link";
import { services, categoryLabels } from "@/data/services";
import { LanguageBadges } from "@/components/ui/language-badges";
import { ServiceIcon } from "@/components/services/service-icon";
import { FadeIn, StaggerChildren, StaggerItem, HoverLift } from "@/components/motion/fade-in";

const featuredSlugs = [
  "terapia-indywidualna",
  "terapia-par",
  "diagnoza",
  "integracja-sensoryczna",
  "terapia-vr",
  "warsztaty-tus",
] as const;

const featured = featuredSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

export function ServicesShowcase() {
  return (
    <section aria-labelledby="services-showcase-heading" className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
      <FadeIn>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 id="services-showcase-heading" className="text-[var(--text-heading)] font-semibold">
              Poznaj naszą ofertę
            </h2>
            <p className="mt-3 text-[var(--ink-soft)]">
              Każda z naszych usług powstała po to, by realnie odciążyć rodziców, wesprzeć dzieci i dać
              rodzinom przestrzeń, w której można poczuć się spokojniej:
            </p>
            <p className="mt-3 text-[var(--ink-soft)]">
              Pomagamy rodzicom, którzy potrzebują wsparcia w codziennych wyzwaniach, dzieci, które mierzą
              się z lękiem, trudnościami społecznymi lub wymagają większej uważności, pary, które chcą
              odbudować dialog i bliskość, osoby dorosłe, które chcą żyć spokojniej, bardziej świadomie, z
              większym zrozumieniem siebie.
            </p>
          </div>
          <Link href="/uslugi" className="text-sm font-semibold text-[var(--pine-700)] underline-offset-4 hover:underline">
            Wszystkie usługi →
          </Link>
        </div>
      </FadeIn>

      <StaggerChildren className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {featured.map((service) => (
          <StaggerItem key={service.slug} className="h-full">
            <HoverLift className="h-full">
              <article className="group relative flex h-full min-h-[20rem] flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--sand-200)] bg-white shadow-[0_1px_3px_rgba(30,58,43,0.06)] transition-shadow hover:shadow-[0_8px_28px_rgba(30,58,43,0.1)]">
                <div className="relative flex aspect-[16/9] shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--sand-50)] to-[var(--pine-700)]/5">
                  <div className="flex h-full min-h-[8rem] w-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                    <ServiceIcon slug={service.slug} className="h-16 w-16 opacity-80" />
                  </div>
                  {service.slug === "terapia-vr" ? (
                    <span className="absolute left-3 top-3 rounded-full bg-[var(--lilac-500)] px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
                      Nowość
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--lilac-500)]">
                    {categoryLabels[service.category]}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[var(--pine-900)]">{service.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                    {service.shortDescription}
                  </p>

                  <div className="mt-auto flex flex-col gap-3 pt-4">
                    <LanguageBadges languages={service.languages} />
                    <Link
                      href="/uslugi"
                      className="text-sm font-semibold text-[var(--pine-700)] underline-offset-4 hover:underline"
                    >
                      Czytaj dalej →
                    </Link>
                  </div>
                </div>
              </article>
            </HoverLift>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <FadeIn delay={0.12}>
        <div className="mt-10 rounded-[var(--radius-md)] border border-[var(--sand-200)] bg-[var(--pine-700)]/5 px-6 py-5 text-center sm:text-left">
          <p className="text-sm text-[var(--ink-soft)]">
            Każdy proces zaczyna się od rzetelnej diagnozy, która pozwala nie zgadywać, tylko precyzyjnie
            określić źródło trudności i zaplanować dalsze kroki terapeutyczne.
          </p>
          <Link href="/rezerwacja" className="btn-honey mt-4 inline-flex">
            Zarezerwuj konsultację
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
