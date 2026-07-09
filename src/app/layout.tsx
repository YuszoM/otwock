import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { SkipToMain } from "@/components/a11y/skip-to-main";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLdOrganization, JsonLdWebSite } from "@/components/seo/seo-root";
import { rootMetadata } from "@/lib/seo/root-metadata";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={sourceSans.variable}>
      <body className="bg-beige text-on-beige antialiased">
        <SkipToMain />
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="min-h-[60vh] outline-none">
          {children}
        </main>
        <SiteFooter />
        <CookieConsentBanner />
        <JsonLdOrganization />
        <JsonLdWebSite />
      </body>
    </html>
  );
}
