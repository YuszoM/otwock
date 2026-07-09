import type { MetadataRoute } from "next";

/**
 * Tu importuj dynamiczne ścieżki (blog, katalog).
 * Przykład:
 * const posts = await loadAllPosts(); return posts.map(p => ({ url: ..., lastModified: ... }));
 */
export async function getExtraSitemapEntries(): Promise<MetadataRoute.Sitemap> {
  return [];
}
