import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { PageHero } from "@/components/ui/page-hero";
import { PostCard } from "@/components/blog/post-card";
import { categoryLabel } from "@/lib/blog/category-labels";
import { getCategoryCounts, getPostsByCategory } from "@/lib/blog/load-posts";
import { BLOG_LIST_PATH } from "@/lib/blog/routes";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = buildPageMetadata({
  title: "Aktualności",
  description: "Aktualności i komunikaty OOWiT — Otwocki Ośrodek Wsparcia Rodziny, Diagnozy i Terapii.",
  path: "/aktualnosci",
});

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ kategoria?: string }>;
}) {
  const { kategoria } = await searchParams;
  const posts = getPostsByCategory(kategoria);
  const counts = getCategoryCounts();

  return (
    <>
      <PageHero
        eyebrow="Aktualności"
        title="Komunikaty i wpisy z OOWiT"
        description="Bądź na bieżąco z wydarzeniami, terminami zajęć i informacjami dla pacjentów."
        variant="beige"
      />
      <section className="mx-auto max-w-3xl px-4 py-12 lg:px-6">
        <nav aria-label="Filtr kategorii" className="mb-8 flex flex-wrap gap-2">
          <FilterChip href={BLOG_LIST_PATH} active={!kategoria} label="Wszystkie" />
          {counts.map(({ slug, count }) => (
            <FilterChip
              key={slug}
              href={`${BLOG_LIST_PATH}?kategoria=${encodeURIComponent(slug)}`}
              active={kategoria === slug}
              label={`${categoryLabel(slug)} (${count})`}
            />
          ))}
        </nav>

        {posts.length === 0 ? (
          <p className="rounded-[var(--radius-md)] border border-dashed border-forest-border/30 p-6 opacity-75">
            Brak wpisów{kategoria ? ` w kategorii „${categoryLabel(kategoria)}”.` : "."}
          </p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post, i) => (
              <li key={post.slug}>
                <FadeIn delay={i * 0.05}>
                  <PostCard post={post} />
                </FadeIn>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

function FilterChip({ href, active, label }: { href: string; active: boolean; label: string }) {
  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
        active
          ? "bg-forest text-on-forest"
          : "border border-forest-border/25 bg-white hover:border-[var(--color-forest)]/40"
      }`}
      aria-current={active ? "true" : undefined}
    >
      {label}
    </Link>
  );
}
