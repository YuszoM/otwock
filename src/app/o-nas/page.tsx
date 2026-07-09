import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { PageHero } from "@/components/ui/page-hero";
import { CareProcess } from "@/components/content/care-process";
import { TrustSection } from "@/components/content/trust-section";
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
      <CareProcess />
      <TrustSection />
      <section className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6">
        <FadeIn>
          <div className="max-w-prose">
            <h2 className="text-[var(--text-heading)] font-semibold">Dlaczego powstał OOWiT?</h2>
            <p className="mt-4 opacity-85">
              Przez lata obserwowaliśmy ten sam schemat: pierwsza konsultacja w jednym miejscu, diagnoza
              w drugim, terapia w kolejnym — bez spójności i jasnego planu. Właśnie ten chaos chcieliśmy
              uporządkować.
            </p>
            <figure className="mt-8 rounded-[var(--radius-md)] bg-forest/5 px-6 py-5">
              <blockquote className="italic opacity-90">
                „Tworzymy przestrzeń, w której nikt nie musi udawać, że daje radę.”
              </blockquote>
              <figcaption className="mt-2 text-sm font-semibold not-italic">
                — Patrycja Kacprzyk, założycielka
              </figcaption>
            </figure>
            <div className="mt-10 flex flex-wrap gap-4">
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
          </div>
        </FadeIn>
      </section>
    </>
  );
}
