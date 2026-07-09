import type { Metadata } from "next";
import { getDefaultDescription, getDefaultOgImageUrl, getPublicSiteUrl, getSiteName } from "@/lib/seo/site-config";

/** Eksportuj w root `layout.tsx` jako `export const metadata = rootMetadata`. */
export const rootMetadata: Metadata = {
  metadataBase: new URL(getPublicSiteUrl()),
  title: {
    default: getSiteName(),
    template: `%s | ${getSiteName()}`,
  },
  description: getDefaultDescription(),
  applicationName: getSiteName(),
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: getPublicSiteUrl(),
    siteName: getSiteName(),
    title: getSiteName(),
    description: getDefaultDescription(),
    images: [
      {
        url: getDefaultOgImageUrl().toString(),
        width: 1200,
        height: 630,
        alt: getSiteName(),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: getSiteName(),
    description: getDefaultDescription(),
    images: [getDefaultOgImageUrl().toString()],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};
