import { getDefaultDescription, getPublicSiteUrl, getSiteName } from "@/lib/seo/site-config";

export function JsonLdOrganization() {
  const url = getPublicSiteUrl();
  const name = getSiteName();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    description: getDefaultDescription(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/** Bez SearchAction — dopisz w projekcie osobno, jeśli masz realną stronę wyszukiwania (unikniesz błędnego URL). */
export function JsonLdWebSite() {
  const url = getPublicSiteUrl();
  const name = getSiteName();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description: getDefaultDescription(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
