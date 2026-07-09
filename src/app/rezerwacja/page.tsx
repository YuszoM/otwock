import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { buildPageMetadata } from "@/lib/seo/build-metadata";

const BookingWizard = dynamic(
  () => import("@/components/booking/booking-wizard").then((m) => m.BookingWizard),
  {
    loading: () => <p className="p-8 text-center">Ładowanie formularza…</p>,
  },
);

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
