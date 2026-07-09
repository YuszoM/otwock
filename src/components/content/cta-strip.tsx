"use client";

import Link from "next/link";
import { StaggerChildren, StaggerItem } from "@/components/motion/fade-in";
import { SosnaPine } from "@/components/ornaments/sosna-pine";

export function CtaStrip() {
  return (
    <section aria-labelledby="cta-strip-heading" className="relative overflow-hidden bg-[var(--pine-900)] text-[var(--sand-50)]">
      <div className="pointer-events-none absolute bottom-0 right-4 flex items-end gap-2 opacity-[0.08] sm:right-8" aria-hidden>
        <SosnaPine className="motion-calm-float h-20 w-12 text-[var(--sand-50)]" />
        <SosnaPine className="motion-calm-float-delayed mb-3 h-24 w-14 text-[var(--sand-50)]" />
      </div>
      <div className="relative z-[1] mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-14">
        <StaggerChildren className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <StaggerItem variant="left" className="max-w-xl">
            <h2 id="cta-strip-heading" className="text-[clamp(1.25rem,3vw,1.75rem)] font-semibold leading-tight">
              Zapisz się na konsultację
            </h2>
            <p className="mt-2 text-base leading-relaxed text-[var(--sand-50)]/90">
              Poradnia zdrowia psychicznego w naszym podejściu nie ogranicza się wyłącznie do pojedynczej
              wizyty. To złożony proces, który obejmuje diagnozę, terapię i dalsze wsparcie w sposób spójny,
              a także uporządkowany.
            </p>
          </StaggerItem>
          <StaggerItem variant="right" className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link href="/rezerwacja" className="btn-honey w-full justify-center sm:w-auto">
              Umów konsultację
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-[var(--radius-sm)] border border-[var(--sand-50)]/30 px-5 text-sm font-semibold transition-colors hover:bg-white/10 sm:w-auto"
            >
              Kontakt
            </Link>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}
