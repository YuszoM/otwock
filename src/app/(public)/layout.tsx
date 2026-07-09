import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/build-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "OOWiT — Otwocki Ośrodek Wsparcia Rodziny, Diagnozy i Terapii",
  description:
    "Psychologia, terapia i diagnoza w sosnowym mikroklimacie Otwocka. Świdermajerska tradycja, spójny proces opieki — umów wizytę online.",
  path: "/",
  ogImage: "/images/og-home.webp",
});

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return children;
}
