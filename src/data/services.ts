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
};

export const services: Service[] = [
  {
    slug: "terapia-indywidualna",
    name: "Terapia indywidualna",
    shortDescription:
      "Regularne spotkania 1:1 — proces poznawania siebie i poprawa jakości życia (PL/EN).",
    description:
      "To proces poznawania siebie, którego celem jest ogólna poprawa jakości życia przez regularne spotkania indywidualne. Pracujemy z młodzieżą i dorosłymi — w bezpiecznej przestrzeni, w tempie dopasowanym do Twoich potrzeb. Sesje odbywają się w gabinecie w Otwocku, w języku polskim lub angielskim.",
    languages: ["PL", "EN"],
    category: "terapia",
  },
  {
    slug: "terapia-par",
    name: "Terapia par",
    shortDescription:
      "Wsparcie dla partnerów w kryzysie, z trudnościami w komunikacji lub poczuciem oddalenia.",
    description:
      "Forma pomocy stworzona z myślą o parach przeżywających kryzys, trudności w komunikacji lub poczucie oddalenia się od siebie. Wspólnie szukamy sposobów na odbudowę dialogu, zaufania i bliskości — bez oceniania i bez gotowych schematów.",
    languages: ["PL"],
    category: "terapia",
  },
  {
    slug: "diagnoza",
    name: "Diagnoza psychologiczna",
    shortDescription:
      "Rzetelna ocena funkcjonowania — podstawa spójnego planu terapii, nie zgadywania.",
    description:
      "Proces poszukiwania odpowiedzi na pytania dotyczące sposobu funkcjonowania umysłu i emocji. Diagnoza pozwala precyzyjnie określić źródło trudności i zaplanować kolejne kroki terapeutyczne — zarówno dla dzieci, jak i dorosłych.",
    languages: ["PL"],
    category: "diagnoza",
  },
  {
    slug: "integracja-sensoryczna",
    name: "Integracja sensoryczna",
    shortDescription:
      "Terapia SI w profesjonalnie wyposażonej sali — wsparcie przetwarzania bodźców.",
    description:
      "Proces, w którym układ nerwowy odbiera informacje ze zmysłów, porządkuje je i interpretuje. Wspieramy dzieci z trudnościami przetwarzania bodźców sensorycznych w dedykowanej, profesjonalnie wyposażonej sali integracji sensorycznej.",
    languages: ["PL"],
    category: "specjalistyczne",
  },
  {
    slug: "warsztaty-tus",
    name: "Warsztaty TUS",
    shortDescription:
      "Trening umiejętności społecznych w małych grupach — lepsze relacje z innymi.",
    description:
      "Trening Umiejętności Społecznych to forma pracy grupowej skierowana do osób, które chcą poprawić jakość relacji z innymi. Ćwiczymy komunikację, asertywność i współpracę w bezpiecznej, wspierającej atmosferze.",
    languages: ["PL"],
    category: "warsztaty",
  },
  {
    slug: "psycholog-dzieciecy",
    name: "Psycholog dziecięcy (od 3 r.ż.)",
    shortDescription:
      "Wsparcie emocjonalne i rozwojowe dla dzieci i młodzieży od 3. roku życia.",
    description:
      "Pomoc psychologiczna dla dzieci i młodzieży to proces wspierania młodego człowieka w pokonywaniu trudności pojawiających się na różnych etapach dorastania — od lęków i trudności społecznych po wyzwania szkolne i emocjonalne.",
    languages: ["PL"],
    category: "terapia",
  },
  {
    slug: "terapia-vr",
    name: "Terapia VR",
    shortDescription:
      "Nowoczesna terapia z wykorzystaniem wirtualnej rzeczywistości (PL/EN).",
    description:
      "Przełomowe połączenie tradycyjnej wiedzy psychologicznej z najnowocześniejszą technologią cyfrową. Terapia VR pozwala bezpiecznie doświadczać emocji, reakcji i sytuacji, które później można przenosić do codziennego życia — szczególnie skuteczna w pracy z dziećmi i młodzieżą.",
    languages: ["PL", "EN"],
    category: "specjalistyczne",
  },
  {
    slug: "opieka-wytchnieniowa",
    name: "Opieka wytchnieniowa",
    shortDescription:
      "Opieka nad dzieckiem (40 zł) podczas wizyty rodzica — FunFloor i kreatywne zajęcia.",
    description:
      "Wsparcie dla rodziców i opiekunów dzieci z niepełnosprawnością — stworzone po to, by mogli na chwilę odetchnąć i zadbać o siebie bez poczucia winy. Dzieci korzystają z aktywności rozwijających, w tym systemu FunFloor.",
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
