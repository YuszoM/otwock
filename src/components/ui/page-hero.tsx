import { PageHeroOrnament } from "@/components/ornaments/page-hero-ornament";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  variant?: "forest" | "beige";
};

export function PageHero({ eyebrow, title, description, variant = "forest" }: PageHeroProps) {
  const isForest = variant === "forest";

  return (
    <section
      className={
        isForest
          ? "relative overflow-hidden bg-forest text-on-forest"
          : "border-b border-forest-border/20 bg-beige text-on-beige"
      }
    >
      {isForest ? (
        <PageHeroOrnament className="pointer-events-none absolute right-6 top-1/2 hidden h-[80%] max-h-72 -translate-y-1/2 opacity-45 md:block md:opacity-60" />
      ) : null}
      <div className="relative mx-auto max-w-[var(--container-max)] px-4 py-10 lg:px-6 lg:py-14">
        <div className="min-w-0 max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--lilac-500)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-2 max-w-3xl text-[var(--text-display)] font-semibold leading-tight">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-base opacity-90">{description}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
