import Image from "next/image";
import type { Service } from "@/data/services";
import { categoryLabels } from "@/data/services";
import { LanguageBadges } from "@/components/ui/language-badges";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex flex-col rounded-[var(--radius-md)] border border-forest-border/15 bg-white p-5 shadow-sm">
      {service.icon ? (
        <div className="relative mb-4 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-beige-muted)] p-4">
          <Image
            src={service.icon}
            alt=""
            width={160}
            height={160}
            className="h-auto max-h-full w-auto max-w-full object-contain"
          />
        </div>
      ) : null}
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-forest-light)]">
        {categoryLabels[service.category]}
      </p>
      <h2 className="mt-1 text-lg font-semibold text-on-beige">{service.name}</h2>
      <p className="mt-2 flex-1 text-sm opacity-85">{service.shortDescription}</p>
      <div className="mt-4">
        <LanguageBadges languages={service.languages} />
      </div>
    </article>
  );
}
