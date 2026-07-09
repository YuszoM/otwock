/** Locative phrases after „u” for specialist booking CTAs (Polish grammar). */
const specialistLocative: Record<string, { short: string; full: string }> = {
  "patrycja-kacprzyk": { short: "Patrycji Kacprzyk", full: "Patrycji Kacprzyk" },
  "anna-kowalska": { short: "dr Kowalskiej", full: "Anny Kowalskiej" },
  "piotr-nowak": { short: "mgr Nowaka", full: "Piotra Nowaka" },
  "magdalena-wisniewska": { short: "mgr Wiśniewskiej", full: "Magdaleny Wiśniewskiej" },
  "tomasz-lewandowski": { short: "mgr Lewandowskiego", full: "Tomasza Lewandowskiego" },
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
