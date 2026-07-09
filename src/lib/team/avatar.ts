export const TEAM_PLACEHOLDER_PHOTO = "/images/team-photo-style-reference.webp";

const AVATAR_COLORS = [
  "#2c5240",
  "#4a6b54",
  "#6b4a2e",
  "#9078b8",
  "#1e3a2b",
] as const;

export function shouldShowInitialsAvatar(_slug: string, photo: string): boolean {
  return photo === TEAM_PLACEHOLDER_PHOTO;
}

export function specialistInitials(name: string): string {
  const cleaned = name.replace(/^(dr|mgr)\s+/i, "").trim();
  return cleaned
    .split(/\s+/)
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function avatarColorForSlug(slug: string): string {
  const sum = slug.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return AVATAR_COLORS[sum % AVATAR_COLORS.length] ?? AVATAR_COLORS[0];
}
