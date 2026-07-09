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
  /** When true, profile uses demo placeholder data until client provides roster. */
  isDemo?: boolean;
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
    slug: "specjalista-psycholog-demo-1",
    name: "Specjalista psycholog",
    title: "Psycholog dziecięcy (profil demo)",
    photo: "/images/team-photo-style-reference.webp",
    specialties: ["ADHD", "Trudności emocjonalne", "Wsparcie szkolne"],
    languages: ["PL", "EN"],
    bio: "Profil demonstracyjny — dane zostaną uzupełnione po potwierdzeniu składu zespołu przez klienta. Diagnoza i terapia dzieci w wieku przedszkolnym i szkolnym.",
    serviceSlugs: ["diagnoza", "psycholog-dzieciecy", "terapia-indywidualna"],
    isDemo: true,
  },
  {
    slug: "specjalista-psychoterapeuta-demo-2",
    name: "Specjalista psychoterapeuta",
    title: "Psychoterapeuta (profil demo)",
    photo: "/images/team-photo-style-reference.webp",
    specialties: ["Terapia dorosłych", "Lęk i depresja", "Terapia par"],
    languages: ["PL"],
    bio: "Profil demonstracyjny — dane zostaną uzupełnione po potwierdzeniu składu zespołu. Terapia indywidualna i par dla dorosłych i młodzieży.",
    serviceSlugs: ["terapia-indywidualna", "terapia-par"],
    isDemo: true,
  },
  {
    slug: "specjalista-si-demo-3",
    name: "Specjalista terapeuta SI",
    title: "Terapeuta SI (profil demo)",
    photo: "/images/team-photo-style-reference.webp",
    specialties: ["Integracja sensoryczna", "Rozwój motoryczny", "Regulacja emocji"],
    languages: ["PL"],
    bio: "Profil demonstracyjny — dane zostaną uzupełnione po potwierdzeniu składu zespołu. Diagnoza i terapia SI w wyposażonej sali integracji sensorycznej.",
    serviceSlugs: ["integracja-sensoryczna", "diagnoza"],
    isDemo: true,
  },
  {
    slug: "specjalista-tus-demo-4",
    name: "Specjalista psycholog",
    title: "Psycholog, trener TUS (profil demo)",
    photo: "/images/team-photo-style-reference.webp",
    specialties: ["Umiejętności społeczne", "Praca z młodzieżą", "TUS"],
    languages: ["PL", "EN"],
    bio: "Profil demonstracyjny — dane zostaną uzupełnione po potwierdzeniu składu zespołu. Grupy TUS i konsultacje dla rodziców.",
    serviceSlugs: ["warsztaty-tus", "terapia-indywidualna"],
    isDemo: true,
  },
];

export function getSpecialistBySlug(slug: string): Specialist | undefined {
  return specialists.find((s) => s.slug === slug);
}
