"use client";

import Link from "next/link";
import { SpecialistCard } from "@/components/team/specialist-card";
import { FadeIn, HoverTilt, StaggerChildren, StaggerItem } from "@/components/motion/fade-in";
import type { Specialist } from "@/data/specialists";

type HomeTeamSectionProps = {
  featured: Specialist[];
};

export function HomeTeamSection({ featured }: HomeTeamSectionProps) {
  return (
    <section className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
      <FadeIn variant="left">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-[var(--text-heading)] font-semibold">Nasz zespół</h2>
            <p className="mt-2 max-w-prose text-[var(--ink-soft)]">
              Nie musisz wybierać w ciemno. W tym miejscu możesz czytać o naszym zespole jeszcze przed
              zarezerwowaniem konsultacji.
            </p>
          </div>
          <Link
            href="/zespol"
            className="text-sm font-semibold text-[var(--pine-700)] underline-offset-4 hover:underline"
          >
            Cały zespół →
          </Link>
        </div>
      </FadeIn>
      <StaggerChildren className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((s, index) => (
          <StaggerItem key={s.slug} variant={index % 3 === 0 ? "scale" : index % 3 === 1 ? "tilt-left" : "tilt-right"}>
            <HoverTilt>
              <SpecialistCard specialist={s} />
            </HoverTilt>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
}
