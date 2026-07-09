import type { ServiceLanguage } from "@/data/services";

export type Specialist = {
  slug: string;
  name: string;
  title: string;
  photo: string;
  specialties: string[];
  languages: ServiceLanguage[];
  bio: string;
  serviceSlugs: string[];
};

export const specialists: Specialist[] = [
  {
    slug: "patrycja-kacprzyk",
    name: "Patrycja Kacprzyk",
    title: "Założycielka OOWiT, psycholog",
    photo: "/images/team-photo-style-reference.webp",
    specialties: ["Psychologia dziecięca", "Terapia rodzin", "Diagnoza"],
    languages: ["PL", "EN"],
    bio: "Założycielka OOWiT. Tworzy przestrzeń, w której rodziny, pary i dzieci czują się bezpiecznie, widziani i rozumiani — bez presji i gotowych schematów.",
    serviceSlugs: ["diagnoza", "terapia-indywidualna", "psycholog-dzieciecy"],
  },
  {
    slug: "anna-kowalska",
    name: "dr Anna Kowalska",
    title: "Psycholog dziecięcy",
    photo: "/images/team-photo-style-reference.webp",
    specialties: ["ADHD", "Trudności emocjonalne", "Wsparcie szkolne"],
    languages: ["PL", "EN"],
    bio: "Diagnoza i terapia dzieci w wieku przedszkolnym i szkolnym. Współpraca z rodzinami i placówkami edukacyjnymi w Otwocku.",
    serviceSlugs: ["diagnoza", "psycholog-dzieciecy", "terapia-indywidualna"],
  },
  {
    slug: "piotr-nowak",
    name: "mgr Piotr Nowak",
    title: "Psychoterapeuta",
    photo: "/images/team-photo-style-reference.webp",
    specialties: ["Terapia dorosłych", "Lęk i depresja", "Terapia par"],
    languages: ["PL"],
    bio: "Terapia indywidualna i par dla dorosłych i młodzieży. Jasne cele i tempo dostosowane do pacjenta.",
    serviceSlugs: ["terapia-indywidualna", "terapia-par"],
  },
  {
    slug: "magdalena-wisniewska",
    name: "mgr Magdalena Wiśniewska",
    title: "Terapeutka SI",
    photo: "/images/team-photo-style-reference.webp",
    specialties: ["Integracja sensoryczna", "Rozwój motoryczny", "Regulacja emocji"],
    languages: ["PL"],
    bio: "Diagnoza i terapia SI w wyposażonej sali integracji sensorycznej w OOWiT.",
    serviceSlugs: ["integracja-sensoryczna", "diagnoza"],
  },
  {
    slug: "tomasz-lewandowski",
    name: "mgr Tomasz Lewandowski",
    title: "Psycholog, trener TUS",
    photo: "/images/team-photo-style-reference.webp",
    specialties: ["Umiejętności społeczne", "Praca z młodzieżą", "TUS"],
    languages: ["PL", "EN"],
    bio: "Prowadzi grupy TUS i konsultacje dla rodziców. Wspiera młodzież w budowaniu relacji rówieśniczych.",
    serviceSlugs: ["warsztaty-tus", "terapia-indywidualna"],
  },
];

export function getSpecialistBySlug(slug: string): Specialist | undefined {
  return specialists.find((s) => s.slug === slug);
}
