import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/build-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "OOWiT — Otwocki Ośrodek Wsparcia Rodziny, Diagnozy i Terapii",
  description:
    "Miejsce, w którym psychologia, terapia i diagnoza działają jako jeden spójny proces — OOWiT Otwock.",
  path: "/",
  ogImage: "/images/og-home.webp",
});

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return children;
}
