import type { Metadata } from "next";
import { getDefaultDescription, getDefaultOgImageUrl, getPublicSiteUrl, getSiteName } from "@/lib/seo/site-config";

export type PageMetaInput = {
  title: string;
  description?: string;
  /** Ścieżka bez domeny, np. `/katalog/produkt` */
  path?: string;
  /** Nadpisanie obrazu OG dla tej strony */
  ogImage?: string | URL | null;
  /** noindex dla landingów testowych */
  index?: boolean;
};

/**
 * Buduje Metadata dla podstron — używaj w `generateMetadata` lub `metadata` eksportowanym na stronie.
 */
export function buildPageMetadata(input: PageMetaInput): Metadata {
  const siteUrl = getPublicSiteUrl();
  const siteName = getSiteName();
  const description = input.description?.trim() || getDefaultDescription();
  const canonicalPath = input.path ?? "";
  const canonical =
    canonicalPath === ""
      ? siteUrl
      : `${siteUrl}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;

  let ogImageUrl = getDefaultOgImageUrl();
  if (input.ogImage !== undefined && input.ogImage !== null) {
    const v = input.ogImage;
    ogImageUrl =
      typeof v === "string" && (v.startsWith("http://") || v.startsWith("https://"))
        ? new URL(v)
        : new URL(typeof v === "string" ? v : v.toString(), siteUrl);
  }

  const index = input.index !== false;

  return {
    title: input.title,
    description,
    alternates: {
      canonical,
    },
    robots: index
      ? { index: true, follow: true, googleBot: { index: true, follow: true } }
      : { index: false, follow: false, googleBot: { index: false, follow: false } },
    openGraph: {
      title: input.title,
      description,
      url: canonical,
      siteName,
      locale: "pl_PL",
      type: "website",
      images: [
        {
          url: ogImageUrl.toString(),
          width: 1200,
          height: 630,
          alt: input.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description,
      images: [ogImageUrl.toString()],
    },
  };
}
