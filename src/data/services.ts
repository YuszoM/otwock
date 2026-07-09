export type ServiceLanguage = "PL" | "EN";

export type ServiceSlug =
  | "terapia-indywidualna"
  | "terapia-par"
  | "diagnoza"
  | "integracja-sensoryczna"
  | "warsztaty-tus"
  | "psycholog-dzieciecy"
  | "terapia-vr"
  | "opieka-wytchnieniowa";

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortDescription: string;
  description: string;
  languages: ServiceLanguage[];
  category: "diagnoza" | "terapia" | "wsparcie" | "warsztaty" | "specjalistyczne";
  /** Display price when relevant (e.g. cennik-aligned demo pricing). */
  price?: string;
};

export const services: Service[] = [
  {
    slug: "terapia-indywidualna",
    name: "Terapia indywidualna",
    shortDescription:
      "to proces poznawania siebie, którego celem jest ogólna poprawa jakości życia przez regularne spotkania 1:1.",
    description:
      "to proces poznawania siebie, którego celem jest ogólna poprawa jakości życia. To regularne spotkania jeden na jeden ze specjalistą, tworzące bezpieczną przestrzeń do otwartej rozmowy o tym, co trudne, bolesne, ale też o tym, co ważne i niosące nadzieję.",
    languages: ["PL", "EN"],
    category: "terapia",
  },
  {
    slug: "terapia-par",
    name: "Terapia par",
    shortDescription:
      "to forma pomocy, stworzona z myślą o partnerach przeżywających kryzys, trudności w komunikacji lub poczucie oddalenia się od siebie.",
    description:
      "to forma pomocy, stworzona z myślą o partnerach przeżywających kryzys, trudności w komunikacji lub poczucie oddalenia się od siebie.",
    languages: ["PL"],
    category: "terapia",
  },
  {
    slug: "diagnoza",
    name: "Diagnoza",
    shortDescription:
      "to proces poszukiwania odpowiedzi na pytania dotyczące sposobu funkcjonowania ludzkiego umysłu i emocji.",
    description:
      "to proces poszukiwania odpowiedzi na pytania dotyczące sposobu funkcjonowania ludzkiego umysłu i emocji.",
    languages: ["PL"],
    category: "diagnoza",
  },
  {
    slug: "integracja-sensoryczna",
    name: "Integracja sensoryczna",
    shortDescription:
      "to proces, w którym nasz układ nerwowy odbiera informacje ze wszystkich zmysłów, porządkuje je i interpretuje tak, abyśmy mogli reagować na bodźce płynące z otoczenia.",
    description:
      "to proces, w którym nasz układ nerwowy odbiera informacje ze wszystkich zmysłów, porządkuje je i interpretuje tak, abyśmy mogli reagować na bodźce płynące z otoczenia.",
    languages: ["PL"],
    category: "specjalistyczne",
  },
  {
    slug: "warsztaty-tus",
    name: "Warsztaty – TUS",
    shortDescription:
      "Trening Umiejętności Społecznych to forma pracy grupowej, skierowana do osób, które chcą poprawić jakość swoich relacji z innymi.",
    description:
      "Trening Umiejętności Społecznych to forma pracy grupowej, skierowana do osób, które chcą poprawić jakość swoich relacji z innymi.",
    languages: ["PL"],
    category: "warsztaty",
  },
  {
    slug: "psycholog-dzieciecy",
    name: "Psycholog dziecięcy – od 3 r.ż.",
    shortDescription:
      "Pomoc psychologiczna dla dzieci i młodzieży to proces wspierania młodego człowieka w pokonywaniu trudności, które pojawiają się na różnych etapach jego dorastania.",
    description:
      "Pomoc psychologiczna dla dzieci i młodzieży to proces wspierania młodego człowieka w pokonywaniu trudności, które pojawiają się na różnych etapach jego dorastania.",
    languages: ["PL"],
    category: "terapia",
  },
  {
    slug: "terapia-vr",
    name: "Terapia VR",
    shortDescription:
      "Terapia z wykorzystaniem Wirtualnej Rzeczywistości to przełomowe połączenie tradycyjnej wiedzy psychologicznej z najnowocześniejszą technologią cyfrową.",
    description:
      "Terapia z wykorzystaniem Wirtualnej Rzeczywistości to przełomowe połączenie tradycyjnej wiedzy psychologicznej z najnowocześniejszą technologią cyfrową.",
    languages: ["PL", "EN"],
    category: "specjalistyczne",
  },
  {
    slug: "opieka-wytchnieniowa",
    name: "Opieka wytchnieniowa",
    shortDescription:
      "Opieka wytchnieniowa to wsparcie dla rodziców i opiekunów dzieci z niepełnosprawnością, stworzona po to, by mogli na chwilę odetchnąć, zadbać o siebie i swoje potrzeby, bez poczucia winy.",
    description:
      "Opieka wytchnieniowa to wsparcie dla rodziców i opiekunów dzieci z niepełnosprawnością, stworzona po to, by mogli na chwilę odetchnąć, zadbać o siebie i swoje potrzeby, bez poczucia winy.",
    languages: ["PL"],
    category: "wsparcie",
    price: "999 zł",
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
