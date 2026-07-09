export function formatPostDate(iso: string): string {
  const d = new Date(iso + (iso.includes("T") ? "" : "T12:00:00"));
  return d.toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
}
