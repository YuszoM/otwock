const labels: Record<string, string> = {
  komunikaty: "Komunikaty",
  blog: "Blog",
  wydarzenia: "Wydarzenia",
};

export function categoryLabel(slug: string): string {
  return labels[slug] ?? slug;
}
