import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Cennik",
  description: "Orientacyjny cennik konsultacji i terapii w OOWiT Otwock. Szczegóły ustalamy indywidualnie.",
  path: "/cennik",
});

const pricingRows = [
  { service: "Konsultacja wstępna (50 min)", price: "od 200 zł" },
  { service: "Diagnoza psychologiczna (pakiet)", price: "od 800 zł" },
  { service: "Sesja terapeutyczna (50 min)", price: "od 220 zł" },
  { service: "Integracja sensoryczna (45 min)", price: "od 200 zł" },
  { service: "Zajęcia TUS (grupowe, 60 min)", price: "od 150 zł" },
  { service: "Opieka wytchnieniowa (podczas wizyty)", price: "40 zł" },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Cennik"
        title="Przejrzyste informacje o kosztach"
        description="Poniższe kwoty są orientacyjne. Dokładną wycenę ustalamy po pierwszej konsultacji."
        variant="beige"
      />
      <section className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
        <div className="overflow-x-auto rounded-[var(--radius-md)] border border-forest-border/15 bg-white">
          <table className="w-full min-w-[320px] text-left text-sm">
            <caption className="sr-only">Orientacyjny cennik usług OOWiT</caption>
            <thead>
              <tr className="border-b border-forest-border/15 bg-beige/50">
                <th scope="col" className="px-5 py-4 font-semibold text-on-beige">
                  Usługa
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-on-beige">
                  Cena
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row) => (
                <tr key={row.service} className="border-b border-forest-border/10 last:border-0">
                  <td className="px-5 py-4 text-on-beige/90">{row.service}</td>
                  <td className="px-5 py-4 font-semibold text-[var(--color-forest)]">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-prose text-sm opacity-85">
          Pytania dotyczące rozliczeń? Zadzwoń pod{" "}
          <a href={`tel:${siteConfig.footer.phone}`} className="font-semibold underline-offset-4 hover:underline">
            {siteConfig.footer.phone}
          </a>{" "}
          lub{" "}
          <Link href="/kontakt" className="font-semibold underline-offset-4 hover:underline">
            napisz do nas
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/rezerwacja" className="btn-honey">
            Umów konsultację
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex min-h-11 items-center rounded-[var(--radius-sm)] border border-forest-border/30 px-4 text-sm font-semibold underline-offset-4 hover:underline"
          >
            Zapytaj o wycenę
          </Link>
        </div>
      </section>
    </>
  );
}
