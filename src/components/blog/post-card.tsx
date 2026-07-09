import Link from "next/link";
import { categoryLabel } from "@/lib/blog/category-labels";
import { formatPostDate } from "@/lib/blog/format-date";
import { postPath } from "@/lib/blog/routes";
import type { BlogPostMeta } from "@/lib/blog/types";

export function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="rounded-[var(--radius-md)] border border-forest-border/15 bg-white p-5 shadow-sm transition hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-forest-light)]">
        {categoryLabel(post.category)}
      </p>
      <h2 className="mt-2 text-lg font-semibold">
        <Link href={postPath(post.slug)} className="underline-offset-4 hover:underline">
          {post.title}
        </Link>
      </h2>
      <time className="mt-1 block text-sm opacity-70" dateTime={post.date}>
        {formatPostDate(post.date)}
      </time>
      {post.excerpt ? <p className="mt-3 text-sm leading-relaxed opacity-85">{post.excerpt}</p> : null}
      <Link href={postPath(post.slug)} className="mt-4 inline-flex text-sm font-semibold underline-offset-4 hover:underline">
        Czytaj więcej
      </Link>
    </article>
  );
}
