import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/lib/blog/types";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function includeDrafts(): boolean {
  return process.env.NODE_ENV !== "production";
}

function parseFile(fileName: string): BlogPost | null {
  const slug = fileName.replace(/\.md$/i, "");
  if (!slug || slug.startsWith("_")) return null;

  const full = path.join(CONTENT_DIR, fileName);
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);

  const title = typeof data.title === "string" ? data.title : "";
  const date = typeof data.date === "string" ? data.date : "";
  const category = typeof data.category === "string" ? data.category.trim() : "blog";
  const excerpt = typeof data.excerpt === "string" ? data.excerpt : "";
  const draft = Boolean(data.draft);

  if (!title || !date) return null;

  return { slug, title, date, category, excerpt, draft, content: content.trim() };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  const posts: BlogPost[] = [];

  for (const file of files) {
    const post = parseFile(file);
    if (!post) continue;
    if (post.draft && !includeDrafts()) continue;
    posts.push(post);
  }

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const file = `${slug}.md`;
  const full = path.join(CONTENT_DIR, file);
  if (!fs.existsSync(full)) return null;
  const post = parseFile(file);
  if (!post) return null;
  if (post.draft && !includeDrafts()) return null;
  return post;
}

export function getPostsByCategory(categorySlug: string | undefined): BlogPost[] {
  const all = getAllPosts();
  if (!categorySlug) return all;
  return all.filter((p) => p.category === categorySlug);
}

export function getCategoryCounts(): { slug: string; count: number }[] {
  const map = new Map<string, number>();
  for (const p of getAllPosts()) {
    map.set(p.category, (map.get(p.category) ?? 0) + 1);
  }
  return Array.from(map.entries())
    .map(([slug, count]) => ({ slug, count }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
