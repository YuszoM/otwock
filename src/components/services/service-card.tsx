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
        <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-[var(--radius-sm)]">
          <Image
            src={service.icon}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
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
