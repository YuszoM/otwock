export type NavLink = { label: string; href: string };

export type SiteConfig = {
  siteName: string;
  copyrightYear: number;
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
    supportLinks?: NavLink[];
  };
};

/** NAV-01 — single source of truth for header, footer, and route integrity tests. */
export const siteConfig: SiteConfig = {
  siteName: "OOWiT",
  copyrightYear: 2026,
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
  bookingCta: { label: "Umów konsultację", href: "/rezerwacja" },
  footer: {
    tagline: "Otwocki Ośrodek Wsparcia Rodziny, Diagnozy i Terapii",
    email: "recepcja@oowit.pl",
    phone: "+48 600 008 775",
    addressLines: ["ul. Hugona Kołłątaja 1, 05-400 Otwock (wjazd i wejście od ul. Świderskiej)"],
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
