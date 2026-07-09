/** Jedna konfiguracja SEO dla całego serwisu — wartości z env. */

export function getPublicSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return raw.replace(/\/+$/, "");
}

export function getSiteName(): string {
  return process.env.NEXT_PUBLIC_SITE_NAME?.trim() || "Serwis";
}

export function getDefaultDescription(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION?.trim() ||
    "Opis serwisu — uzupełnij NEXT_PUBLIC_SITE_DESCRIPTION."
  );
}

/** Domyślny obraz OG — ścieżka względem public/ lub pełny URL. */
export function getDefaultOgImageUrl(): URL {
  const base = getPublicSiteUrl();
  const configured = process.env.NEXT_PUBLIC_OG_IMAGE?.trim();
  const pathOrUrl = configured || "/og-default.png";
  try {
    if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
      return new URL(pathOrUrl);
    }
    return new URL(pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`, base);
  } catch {
    return new URL("/og-default.png", base);
  }
}
