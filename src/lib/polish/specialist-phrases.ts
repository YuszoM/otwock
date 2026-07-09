/** Locative phrases after „u” for specialist booking CTAs (Polish grammar). */
const specialistLocative: Record<string, { short: string; full: string }> = {
  "patrycja-kacprzyk": { short: "Patrycji Kacprzyk", full: "Patrycji Kacprzyk" },
  "specjalista-psycholog-demo-1": { short: "specjalisty (demo)", full: "specjalisty (demo)" },
  "specjalista-psychoterapeuta-demo-2": { short: "specjalisty (demo)", full: "specjalisty (demo)" },
  "specjalista-si-demo-3": { short: "specjalisty (demo)", full: "specjalisty (demo)" },
  "specjalista-tus-demo-4": { short: "specjalisty (demo)", full: "specjalisty (demo)" },
};

export function specialistBookingCta(slug: string, fallbackName: string): string {
  const phrase = specialistLocative[slug]?.short;
  if (phrase) return `Umów wizytę u ${phrase}`;
  const last = fallbackName.split(" ").pop() ?? fallbackName;
  return `Umów wizytę u ${last}`;
}

export function specialistServiceHeading(slug: string, fallbackName: string): string {
  const phrase = specialistLocative[slug]?.full;
  if (phrase) return `Usługa u ${phrase}`;
  return `Usługa u ${fallbackName}`;
}
