import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = buildPageMetadata({
  title: "Polityka prywatności",
  description: "Polityka prywatności serwisu OOWiT — zasady przetwarzania danych i plików cookies.",
  path: "/polityka-prywatnosci",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Polityka prywatności" variant="beige" />
      <section className="mx-auto max-w-prose px-4 py-12 lg:px-6">
        <h2 className="text-lg font-semibold">1. Administrator</h2>
        <p className="mt-2 opacity-85">
          Administratorem danych jest OOWiT z siedzibą w Otwocku. Kontakt: kontakt@oowit.pl.
        </p>
        <h2 className="mt-8 text-lg font-semibold">2. Zakres danych</h2>
        <p className="mt-2 opacity-85">
          Zbieramy dane podane w formularzu kontaktowym, podczas rezerwacji wizyty oraz w trakcie
          korzystania z usług ośrodka — w zakresie niezbędnym do realizacji umowy i obowiązków prawnych.
        </p>
        <h2 className="mt-8 text-lg font-semibold">3. Pliki cookies</h2>
        <p className="mt-2 opacity-85">
          Serwis wykorzystuje pliki cookies niezbędne do działania oraz — za Twoją zgodą — analityczne.
          Preferencje możesz zmienić w banerze cookies lub panelu dostępności.
        </p>
      </section>
    </>
  );
}
