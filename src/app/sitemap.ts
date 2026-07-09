import type { MetadataRoute } from "next";
import { getAllNavPaths } from "@/config/site";
import { getExtraSitemapEntries } from "@/lib/seo/sitemap-extra";
import { getPublicSiteUrl } from "@/lib/seo/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getPublicSiteUrl();
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = getAllNavPaths().map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const extra = await getExtraSitemapEntries();
  return [...staticEntries, ...extra];
}
