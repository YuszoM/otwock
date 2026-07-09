"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";

export function CtaStrip() {
  return (
    <section aria-labelledby="cta-strip-heading" className="bg-[var(--pine-900)] text-[var(--sand-50)]">
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-14">
        <FadeIn>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 id="cta-strip-heading" className="text-[clamp(1.25rem,3vw,1.75rem)] font-semibold leading-tight">
                Zapisz się na konsultację
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--sand-50)]/85">
                Poradnia zdrowia psychicznego w naszym podejściu to złożony proces: diagnoza, terapia i
                dalsze wsparcie w sposób spójny i uporządkowany. Zacznij od pierwszej rozmowy.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/rezerwacja" className="btn-honey w-full justify-center sm:w-auto">
                Umów wizytę
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-[var(--radius-sm)] border border-[var(--sand-50)]/30 px-5 text-sm font-semibold transition-colors hover:bg-white/10 sm:w-auto"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
