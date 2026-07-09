import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { PostBody } from "@/components/blog/post-body";
import { categoryLabel } from "@/lib/blog/category-labels";
import { formatPostDate } from "@/lib/blog/format-date";
import { getAllSlugs, getPostBySlug } from "@/lib/blog/load-posts";
import { BLOG_LIST_PATH } from "@/lib/blog/routes";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildPageMetadata({
    title: post.title,
    description: post.excerpt || post.title,
    path: `/aktualnosci/${slug}`,
  });
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-prose px-4 py-12 lg:px-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-forest-light)]">
        {categoryLabel(post.category)}
      </p>
      <h1 className="mt-2 text-[var(--text-display)] font-semibold">{post.title}</h1>
      <time className="mt-2 block text-sm opacity-70" dateTime={post.date}>
        {formatPostDate(post.date)}
      </time>
      <div className="mt-8">
        <PostBody content={post.content} />
      </div>
      <Link href={BLOG_LIST_PATH} className="mt-10 inline-flex text-sm font-semibold underline-offset-4 hover:underline">
        ← Wszystkie aktualności
      </Link>
    </article>
  );
}
