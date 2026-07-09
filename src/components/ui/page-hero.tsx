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
          ? "bg-forest text-on-forest"
          : "border-b border-forest-border/20 bg-beige text-on-beige"
      }
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-honey)]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 max-w-3xl text-[var(--text-display)] font-semibold leading-tight">
          {title}
        </h1>
        {description ? <p className="mt-4 max-w-2xl text-base opacity-90">{description}</p> : null}
      </div>
    </section>
  );
}
