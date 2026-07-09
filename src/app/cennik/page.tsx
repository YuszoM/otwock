import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Cennik",
  description: "Cennik usług Otwockiego Ośrodka Wsparcia Rodziny, Diagnozy i Terapii",
  path: "/cennik",
});

const servicePricing = [
  { service: "Konsultacja diagnostyczna", price: "330.00 zł" },
  { service: "Terapia indywidualna", price: "250.00 zł" },
  { service: "Terapia par", price: "300.00 zł" },
  { service: "Psycholog dziecięcy", price: "250.00 zł" },
  { service: "Integracja sensoryczna", price: "200.00 zł" },
  { service: "Wsparcie prawne", price: "300.00 zł" },
  { service: "Opieka wytchnieniowa", price: "100.00 zł" },
  { service: "Wsparcie terapeutyczne dla rodzin", price: "400.00 zł" },
  { service: "Wsparcie psychologiczne + dziecko", price: "290.00 zł" },
  { service: "Wsparcie coachingowe w żałobie, chorobie", price: "320.00 zł" },
];

const testPricing = [
  { service: "Pakiet diagnostyczny SCID-5-PD + MMPI-2", price: "1250 zł" },
  { service: "SCID-5-PD", price: "500 zł" },
  { service: "CDI 2", price: "310 zł" },
  { service: "DIVA-5", price: "600 zł" },
  { service: "ADOS-2", price: "800 zł" },
  { service: "ADI-R", price: "560 zł" },
  { service: "Stanford-Binet 5", price: "550 zł" },
  { service: "Conners 3", price: "350 zł" },
  { service: "ASRS", price: "350 zł" },
  { service: "KPD", price: "300 zł" },
  { service: "ACIA", price: "700 zł" },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Cennik"
        title="Cennik"
        description="Cennik usług Otwockiego Ośrodka Wsparcia Rodziny, Diagnozy i Terapii"
        variant="beige"
      />
      <section className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
        <p className="max-w-prose text-sm opacity-85">
          Możliwość płatności przez przelew, blik oraz gotówka.
        </p>

        <h2 className="mt-10 text-lg font-semibold">Cennik oferowanych usług</h2>
        <div className="mt-4 overflow-x-auto rounded-[var(--radius-md)] border border-forest-border/15 bg-white">
          <table className="w-full min-w-[320px] text-left text-sm">
            <caption className="sr-only">Cennik oferowanych usług OOWiT</caption>
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
              {servicePricing.map((row) => (
                <tr key={row.service} className="border-b border-forest-border/10 last:border-0">
                  <td className="px-5 py-4 text-on-beige/90">{row.service}</td>
                  <td className="px-5 py-4 font-semibold text-[var(--color-forest)]">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 text-lg font-semibold">Cennik testów diagnostycznych</h2>
        <div className="mt-4 overflow-x-auto rounded-[var(--radius-md)] border border-forest-border/15 bg-white">
          <table className="w-full min-w-[320px] text-left text-sm">
            <caption className="sr-only">Cennik testów diagnostycznych OOWiT</caption>
            <thead>
              <tr className="border-b border-forest-border/15 bg-beige/50">
                <th scope="col" className="px-5 py-4 font-semibold text-on-beige">
                  Test
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-on-beige">
                  Cena
                </th>
              </tr>
            </thead>
            <tbody>
              {testPricing.map((row) => (
                <tr key={row.service} className="border-b border-forest-border/10 last:border-0">
                  <td className="px-5 py-4 text-on-beige/90">{row.service}</td>
                  <td className="px-5 py-4 font-semibold text-[var(--color-forest)]">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/rezerwacja" className="btn-honey">
            Umów konsultację
          </Link>
          <a
            href={`tel:${siteConfig.footer.phone}`}
            className="inline-flex min-h-11 items-center rounded-[var(--radius-sm)] border border-forest-border/30 px-4 text-sm font-semibold underline-offset-4 hover:underline"
          >
            {siteConfig.footer.phone}
          </a>
        </div>
      </section>
    </>
  );
}
