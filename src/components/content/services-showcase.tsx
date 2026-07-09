"use client";

import Link from "next/link";
import Image from "next/image";
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

const serviceImages: Partial<Record<string, string>> = {
  "terapia-indywidualna": "/images/icon-therapy-individual.webp",
  "integracja-sensoryczna": "/images/icon-sensory-integration.webp",
  "warsztaty-tus": "/images/icon-tus-workshops.webp",
  "psycholog-dzieciecy": "/images/icon-child-psychologist.webp",
};

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
              rodzinom przestrzeń, w której można poczuć się spokojniej. Pomagamy rodzicom, dzieciom, parom
              i osobom dorosłym — w jednym miejscu w Otwocku.
            </p>
          </div>
          <Link href="/uslugi" className="text-sm font-semibold text-[var(--pine-700)] underline-offset-4 hover:underline">
            Wszystkie usługi →
          </Link>
        </div>
      </FadeIn>

      <StaggerChildren className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
        {featured.map((service, index) => {
          const isHero = index === 0;
          const imageSrc = serviceImages[service.slug];

          return (
            <StaggerItem
              key={service.slug}
              className={isHero ? "sm:col-span-2 lg:col-span-7" : "lg:col-span-5"}
            >
              <HoverLift>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--sand-200)] bg-white shadow-[0_1px_3px_rgba(30,58,43,0.06)] transition-shadow hover:shadow-[0_8px_28px_rgba(30,58,43,0.1)] ${
                    isHero ? "lg:flex-row" : ""
                  }`}
                >
                  <div
                    className={`relative shrink-0 overflow-hidden bg-[var(--sand-200)]/40 ${
                      isHero ? "aspect-[16/10] lg:aspect-auto lg:w-[42%]" : "aspect-[16/9]"
                    }`}
                  >
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        sizes={isHero ? "(max-width: 1024px) 100vw, 28rem" : "(max-width: 1024px) 50vw, 20rem"}
                      />
                    ) : (
                      <div className="flex h-full min-h-[8rem] items-center justify-center">
                        <ServiceIcon slug={service.slug} className="h-16 w-16 opacity-80" />
                      </div>
                    )}
                    {service.slug === "terapia-vr" ? (
                      <span className="absolute left-3 top-3 rounded-full bg-[var(--lilac-500)] px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
                        Nowość
                      </span>
                    ) : null}
                  </div>

                  <div className={`flex flex-1 flex-col p-5 ${isHero ? "lg:p-7" : ""}`}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--wood-700)]">
                      {categoryLabels[service.category]}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--pine-900)]">{service.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">
                      {service.shortDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
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
          );
        })}
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
