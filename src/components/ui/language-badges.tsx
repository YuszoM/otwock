import type { ServiceLanguage } from "@/data/services";

const labels: Record<ServiceLanguage, string> = {
  PL: "Polski",
  EN: "Angielski",
};

export function LanguageBadges({ languages }: { languages: ServiceLanguage[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Dostępne języki">
      {languages.map((lang) => (
        <li
          key={lang}
          className="rounded-full border border-forest-border/30 bg-beige/60 px-2.5 py-0.5 text-xs font-medium text-on-beige"
        >
          {labels[lang]}
        </li>
      ))}
    </ul>
  );
}
