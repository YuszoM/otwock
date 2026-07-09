import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = buildPageMetadata({
  title: "Kariera",
  description: "Dołącz do zespołu OOWiT w Otwocku. Aktualne oferty pracy dla psychologów i terapeutów.",
  path: "/kariera",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Kariera"
        title="Pracuj z nami"
        description="Szukamy specjalistów, którzy chcą rozwijać się w przyjaznym, interdyscyplinarnym zespole."
        variant="beige"
      />
      <section className="mx-auto max-w-prose px-4 py-12 lg:px-6">
        <p className="opacity-85">
          Aktualnie nie prowadzimy otwartej rekrutacji. Jeśli chcesz przesłać swoje CV na przyszłość,
          napisz na{" "}
          <a href="mailto:kontakt@oowit.pl" className="font-semibold underline-offset-4 hover:underline">
            kontakt@oowit.pl
          </a>
          .
        </p>
        <Link href="/kontakt" className="btn-honey mt-8 inline-flex">
          Formularz kontaktowy
        </Link>
      </section>
    </>
  );
}
