import type { Metadata } from "next";
import { Suspense } from "react";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { BookingWizard } from "@/components/booking/booking-wizard";

export const metadata: Metadata = buildPageMetadata({
  title: "Rezerwacja wizyty",
  description: "Umów wizytę u specjalisty OOWiT w Otwocku — wybierz usługę i wolny termin online.",
  path: "/rezerwacja",
});

export default function BookingPage() {
  return (
    <Suspense fallback={<p className="p-8 text-center">Ładowanie…</p>}>
      <BookingWizard />
    </Suspense>
  );
}
