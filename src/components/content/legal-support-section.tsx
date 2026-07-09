import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";

export function LegalSupportSection() {
  return (
    <section
      aria-labelledby="legal-support-heading"
      className="border-t border-forest-border/10 bg-[var(--color-beige-muted)]/30"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
        <FadeIn>
          <div className="flex flex-col gap-6 rounded-[var(--radius-md)] border border-forest-border/15 bg-white p-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-prose">
              <h2 id="legal-support-heading" className="text-lg font-semibold">
                Wsparcie prawne
              </h2>
              <p className="mt-2 text-sm opacity-85">Wsparcie prawne dla klientów ośrodka.</p>
            </div>
            <Link href="/kontakt" className="btn-honey shrink-0">
              Kontakt do recepcji
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
