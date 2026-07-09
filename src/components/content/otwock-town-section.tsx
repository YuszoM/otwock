import { FadeIn } from "@/components/motion/fade-in";
import { SosnaPine } from "@/components/ornaments/sosna-pine";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { VillaSilhouette } from "@/components/ornaments/villa-silhouette";

export function OtwockTownSection() {
  return (
    <section
      aria-labelledby="otwock-town-heading"
      className="border-y border-[var(--sand-200)] bg-[color-mix(in_srgb,var(--lilac-300)_8%,var(--sand-50))]"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,280px)] lg:items-end lg:gap-12">
          <FadeIn>
            <SectionEyebrow>Otwock</SectionEyebrow>
            <h2 id="otwock-town-heading" className="mt-2 max-w-2xl text-[var(--text-heading)] font-semibold">
              Miasto w lesie
            </h2>
            <p className="mt-4 max-w-prose text-[var(--ink-soft)]">
              Otwock od ponad wieku kojarzy się z sosnowymi lasami, spokojem i architekturą willową
              świdermajerską. Właśnie w tym klimacie — blisko natury, a jednocześnie w zasięgu Warszawy —
              powstał nasz ośrodek: miejsce, w którym profesjonalna opieka psychologiczna spotyka się z
              atmosferą uzdrowiska w lesie.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="flex flex-col items-center gap-6 lg:items-end">
              <SosnaPine className="h-40 w-auto opacity-70" />
              <VillaSilhouette className="w-full max-w-[240px] opacity-30 lg:opacity-35" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
