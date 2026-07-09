import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { TeamClient } from "./team-client";

export const metadata: Metadata = buildPageMetadata({
  title: "Zespół",
  description:
    "Poznaj psychologów i terapeutów OOWiT w Otwocku. Specjalizacje, języki konsultacji i rezerwacja wizyt online.",
  path: "/zespol",
  ogImage: "/images/og-team.webp",
});

export default function TeamPage() {
  return <TeamClient />;
}
