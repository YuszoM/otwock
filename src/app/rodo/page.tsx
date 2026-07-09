import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = buildPageMetadata({
  title: "RODO",
  description: "Informacje o przetwarzaniu danych osobowych w OOWiT zgodnie z RODO.",
  path: "/rodo",
});

export default function RodoPage() {
  return (
    <>
      <PageHero title="Informacja RODO" variant="beige" />
      <section className="mx-auto max-w-prose px-4 py-12 lg:px-6">
        <p className="opacity-85">
          Administratorem danych osobowych jest OOWiT — Otwocki Ośrodek Wsparcia Rodziny,
          Diagnozy i Terapii. Przetwarzamy dane w celu realizacji usług diagnostycznych i
          terapeutycznych, obsługi rezerwacji oraz kontaktu z pacjentami.
        </p>
        <p className="mt-4 opacity-85">
          Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia
          przetwarzania oraz wniesienia skargi do Prezesa UODO. Szczegółowa polityka
          prywatności znajduje się na stronie Polityka prywatności.
        </p>
      </section>
    </>
  );
}
