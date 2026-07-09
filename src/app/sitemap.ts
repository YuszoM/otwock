import type { MetadataRoute } from "next";
import { getAllNavPaths } from "@/config/site";
import { specialists } from "@/data/specialists";
import { getAllPosts } from "@/lib/blog/load-posts";
import { postPath } from "@/lib/blog/routes";
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

  const specialistEntries: MetadataRoute.Sitemap = specialists.map((s) => ({
    url: `${base}/zespol/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const extra = await getExtraSitemapEntries();
  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${base}${postPath(p.slug)}`,
    lastModified: new Date(p.date + "T12:00:00"),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...specialistEntries, ...blogEntries, ...extra];
}
