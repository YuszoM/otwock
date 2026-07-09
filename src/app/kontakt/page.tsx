import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { PageHero } from "@/components/ui/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { LocationMap } from "@/components/contact/location-map";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Kontakt",
  description:
    "Skontaktuj się z OOWiT w Otwocku. Formularz kontaktowy, telefon, email i adres ośrodka.",
  path: "/kontakt",
});

export default function ContactPage() {
  const { footer } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Jesteśmy do Twojej dyspozycji"
        description="Napisz, zadzwoń lub umów wizytę online — odpowiadamy w dni robocze."
      />
      <section className="mx-auto max-w-[var(--container-max)] px-4 py-16 pb-24 sm:pb-16 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold">Dane kontaktowe</h2>
            <address className="mt-4 space-y-3 not-italic opacity-85">
              {footer.addressLines?.map((line) => (
                <p key={line}>{line}</p>
              ))}
              {footer.phone ? (
                <p>
                  Tel.:{" "}
                  <a href={`tel:${footer.phone}`} className="font-semibold underline-offset-4 hover:underline">
                    {footer.phone}
                  </a>
                </p>
              ) : null}
              {footer.email ? (
                <p>
                  Email:{" "}
                  <a href={`mailto:${footer.email}`} className="font-semibold underline-offset-4 hover:underline">
                    {footer.email}
                  </a>
                </p>
              ) : null}
            </address>
            <p className="mt-6 text-sm opacity-75">
              Godziny recepcji: pon.–pt. 9:00–18:00. W pilnych sprawach prosimy o kontakt telefoniczny.
            </p>
          </div>
          <ContactForm />
        </div>
        <LocationMap />
      </section>
    </>
  );
}
