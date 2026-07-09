import type { Service } from "@/data/services";
import { categoryLabels } from "@/data/services";
import { LanguageBadges } from "@/components/ui/language-badges";
import { ServiceIcon } from "@/components/services/service-icon";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-md)] border border-forest-border/15 bg-white p-5 shadow-sm">
      <div className="mb-4 flex aspect-[16/9] items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-beige-muted)]/50">
        <ServiceIcon slug={service.slug} className="h-14 w-14" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-forest)]">
        {categoryLabels[service.category]}
      </p>
      <h2 className="mt-1 text-lg font-semibold text-on-beige">{service.name}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed opacity-85">{service.shortDescription}</p>
      <p className="mt-2 text-sm leading-relaxed opacity-75">{service.description}</p>
      <div className="mt-4">
        <LanguageBadges languages={service.languages} />
      </div>
    </article>
  );
}
