import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { ServicesClient } from "./services-client";

export const metadata: Metadata = buildPageMetadata({
  title: "Usługi",
  description:
    "Diagnoza psychologiczna, terapia, integracja sensoryczna i warsztaty TUS w OOWiT Otwock. Sprawdź dostępność w języku polskim i angielskim.",
  path: "/uslugi",
  ogImage: "/images/og-services.webp",
});

export default function ServicesPage() {
  return <ServicesClient />;
}
