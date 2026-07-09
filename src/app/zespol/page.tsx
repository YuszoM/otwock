import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { PageHero } from "@/components/ui/page-hero";
import { SpecialistCard } from "@/components/team/specialist-card";
import { specialists } from "@/data/specialists";

export const metadata: Metadata = buildPageMetadata({
  title: "Zespół",
  description:
    "Poznaj psychologów i terapeutów OOWiT w Otwocku. Specjalizacje, języki konsultacji i rezerwacja wizyt online.",
  path: "/zespol",
  ogImage: "/images/og-team.jpg",
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Zespół"
        title="Specjaliści, którzy towarzyszą na każdym etapie opieki"
        description="Każdy członek zespołu ma określone kompetencje — łatwo znajdziesz osobę dopasowaną do Twoich potrzeb."
      />
      <section className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6">
        <ul className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {specialists.map((s) => (
            <li key={s.slug}>
              <SpecialistCard specialist={s} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
