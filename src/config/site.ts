export type NavLink = { label: string; href: string };

export type SiteConfig = {
  siteName: string;
  logoSrc?: string;
  nav: NavLink[];
  bookingCta: NavLink;
  footer: {
    tagline: string;
    email?: string;
    phone?: string;
    addressLines?: string[];
    social?: { label: string; href: string }[];
    legalLinks?: NavLink[];
  };
};

/** NAV-01 — single source of truth for header, footer, and route integrity tests. */
export const siteConfig: SiteConfig = {
  siteName: "OOWiT",
  nav: [
    { label: "Strona główna", href: "/" },
    { label: "O nas", href: "/o-nas" },
    { label: "Zespół", href: "/zespol" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Cennik", href: "/cennik" },
    { label: "Aktualności", href: "/aktualnosci" },
    { label: "Kontakt", href: "/kontakt" },
    { label: "Kariera", href: "/kariera" },
  ],
  bookingCta: { label: "Umów wizytę", href: "/rezerwacja" },
  footer: {
    tagline: "Otwocki Ośrodek Wsparcia Rodziny, Diagnozy i Terapii",
    email: "kontakt@oowit.pl",
    phone: "+48 22 123 45 67",
    addressLines: ["05-400 Otwock", "ul. Przykładowa 1"],
    legalLinks: [
      { label: "RODO", href: "/rodo" },
      { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
    ],
  },
};

/** All routable paths from IA config (nav + CTA + legal). */
export function getAllNavPaths(): string[] {
  const paths = new Set<string>();
  for (const item of siteConfig.nav) paths.add(item.href);
  paths.add(siteConfig.bookingCta.href);
  for (const item of siteConfig.footer.legalLinks ?? []) paths.add(item.href);
  return [...paths].sort();
}
