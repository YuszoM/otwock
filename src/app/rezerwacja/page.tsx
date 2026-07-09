import type { Metadata } from "next";
import { Suspense } from "react";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { PageHero } from "@/components/ui/page-hero";
import { BookingWizard } from "@/components/booking/booking-wizard";

export const metadata: Metadata = buildPageMetadata({
  title: "Rezerwacja wizyty",
  description: "Umów konsultację w OOWiT Otwock — wybierz usługę i wolny termin online.",
  path: "/rezerwacja",
});

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Rezerwacja"
        title="Umów konsultację online"
        description="Wybierz specjalistę, usługę i dogodny termin. To wersja demonstracyjna — bez zapisu w systemie."
      />
      <Suspense fallback={<p className="p-8 text-center">Ładowanie formularza…</p>}>
        <BookingWizard />
      </Suspense>
    </>
  );
}
