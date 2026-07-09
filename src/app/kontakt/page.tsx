import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { PageHero } from "@/components/ui/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { LocationMap } from "@/components/contact/location-map";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Kontakt",
  description:
    "Kontakt z OOWiT w Otwocku — telefon, email i adres ośrodka.",
  path: "/kontakt",
});

export default function ContactPage() {
  const { footer } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Nie znalazłeś/aś odpowiedzi na swoje pytania? Zadaj nam je!"
        description="Zawsze chętnie odpowiadamy na wszelkie pytania. Nie krępuj się – napisz do nas, a my odpowiemy w ciągu 24 godzin."
      />
      <section className="mx-auto max-w-[var(--container-max)] px-4 py-16 pb-24 sm:pb-16 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold">Numer telefonu</h2>
            {footer.phone ? (
              <p className="mt-2">
                <a href={`tel:${footer.phone}`} className="font-semibold underline-offset-4 hover:underline">
                  {footer.phone}
                </a>
              </p>
            ) : null}

            <h2 className="mt-8 text-lg font-semibold">Adres e-mail</h2>
            {footer.email ? (
              <p className="mt-2">
                <a href={`mailto:${footer.email}`} className="font-semibold underline-offset-4 hover:underline">
                  {footer.email}
                </a>
              </p>
            ) : null}

            <h2 className="mt-8 text-lg font-semibold">Adres ośrodka</h2>
            <address className="mt-2 not-italic opacity-85">
              {footer.addressLines?.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
          </div>
          <ContactForm />
        </div>
        <LocationMap />
      </section>
    </>
  );
}
