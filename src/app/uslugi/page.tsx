import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { PageHero } from "@/components/ui/page-hero";
import { ServiceCard } from "@/components/services/service-card";
import { services } from "@/data/services";

export const metadata: Metadata = buildPageMetadata({
  title: "Usługi",
  description:
    "Diagnoza psychologiczna, terapia, integracja sensoryczna i warsztaty TUS w OOWiT Otwock. Sprawdź dostępność w języku polskim i angielskim.",
  path: "/uslugi",
  ogImage: "/images/og-services.jpg",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Usługi"
        title="Kompleksowa oferta diagnostyczna i terapeutyczna"
        description="Od pierwszej konsultacji po długofalowe wsparcie — każda usługa jest dopasowana do wieku i potrzeb pacjenta."
      />
      <section className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
        <div className="mt-12 rounded-[var(--radius-md)] border border-forest-border/15 bg-white p-6">
          <h2 className="text-lg font-semibold">Jak wygląda proces opieki?</h2>
          <p className="mt-3 max-w-prose opacity-85">
            Zaczynamy od diagnozy lub konsultacji wstępnej, ustalamy cele terapeutyczne i
            proponujemy plan spotkań. W razie potrzeby zapraszamy rodziców na konsultacje
            wspierające i współpracujemy ze szkołą.
          </p>
        </div>
      </section>
    </>
  );
}
