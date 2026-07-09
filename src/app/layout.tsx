import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { SkipToMain } from "@/components/a11y/skip-to-main";
import { CookieConsentLazy } from "@/components/cookie-consent-lazy";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/motion/motion-provider";
import { JsonLdOrganization, JsonLdWebSite } from "@/components/seo/seo-root";
import { rootMetadata } from "@/lib/seo/root-metadata";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  variable: "--font-source-sans",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
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
        <MotionProvider>
          <main id="main-content" tabIndex={-1} className="min-h-[60vh] outline-none">
            {children}
          </main>
        </MotionProvider>
        <SiteFooter />
        <CookieConsentLazy />
        <JsonLdOrganization />
        <JsonLdWebSite />
      </body>
    </html>
  );
}
