export type ServiceLanguage = "PL" | "EN";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  languages: ServiceLanguage[];
  category: "diagnoza" | "terapia" | "wsparcie" | "warsztaty" | "specjalistyczne";
  icon?: string;
};

export const services: Service[] = [
  {
    slug: "terapia-indywidualna",
    name: "Terapia indywidualna",
    shortDescription: "Regularne spotkania 1:1 — poprawa jakości życia (PL/EN).",
    description:
      "Proces poznawania siebie poprzez regularne spotkania indywidualne. Dla młodzieży i dorosłych.",
    languages: ["PL", "EN"],
    category: "terapia",
    icon: "/images/icon-therapy-individual.jpg",
  },
  {
    slug: "terapia-par",
    name: "Terapia par",
    shortDescription: "Wsparcie dla par w kryzysie lub chcących poprawić komunikację.",
    description:
      "Praca nad dialogiem, zaufaniem i rozwiązywaniem konfliktów w relacji partnerskiej.",
    languages: ["PL"],
    category: "terapia",
  },
  {
    slug: "diagnoza",
    name: "Diagnoza psychologiczna",
    shortDescription: "Rzetelna ocena funkcjonowania — podstawa planu terapii.",
    description:
      "Proces poszukiwania odpowiedzi na pytania o sposób funkcjonowania umysłu i emocji.",
    languages: ["PL"],
    category: "diagnoza",
    icon: "/images/icon-child-psychologist.jpg",
  },
  {
    slug: "integracja-sensoryczna",
    name: "Integracja sensoryczna",
    shortDescription: "Terapia SI w profesjonalnie wyposażonej sali.",
    description:
      "Wsparcie dzieci z trudnościami przetwarzania bodźców sensorycznych.",
    languages: ["PL"],
    category: "specjalistyczne",
    icon: "/images/icon-sensory-integration.jpg",
  },
  {
    slug: "warsztaty-tus",
    name: "Warsztaty TUS",
    shortDescription: "Trening umiejętności społecznych w małych grupach.",
    description:
      "Grupowa forma pracy nad relacjami rówieśniczymi i komunikacją.",
    languages: ["PL"],
    category: "warsztaty",
    icon: "/images/icon-tus-workshops.jpg",
  },
  {
    slug: "psycholog-dzieciecy",
    name: "Psycholog dziecięcy (od 3 r.ż.)",
    shortDescription: "Wsparcie emocjonalne i rozwojowe dla dzieci i młodzieży.",
    description:
      "Pomoc w pokonywaniu trudności na różnych etapach dorastania.",
    languages: ["PL"],
    category: "terapia",
  },
  {
    slug: "terapia-vr",
    name: "Terapia VR",
    shortDescription: "Nowoczesna terapia z wykorzystaniem wirtualnej rzeczywistości (PL/EN).",
    description:
      "Połączenie tradycyjnej wiedzy psychologicznej z technologią VR — bezpieczne ćwiczenie reakcji emocjonalnych.",
    languages: ["PL", "EN"],
    category: "specjalistyczne",
  },
  {
    slug: "opieka-wytchnieniowa",
    name: "Opieka wytchnieniowa",
    shortDescription: "Opieka nad dzieckiem podczas wizyty rodzica w ośrodku.",
    description:
      "Bezpieczne zajęcia dla dziecka (m.in. FunFloor) — odciążenie rodzica podczas terapii.",
    languages: ["PL"],
    category: "wsparcie",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const categoryLabels: Record<Service["category"], string> = {
  diagnoza: "Diagnoza",
  terapia: "Terapia",
  wsparcie: "Wsparcie",
  warsztaty: "Warsztaty",
  specjalistyczne: "Specjalistyczne",
};
