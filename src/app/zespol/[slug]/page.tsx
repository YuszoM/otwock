import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { getSpecialistBySlug, specialists } from "@/data/specialists";
import { getServiceBySlug } from "@/data/services";
import { LanguageBadges } from "@/components/ui/language-badges";
import { specialistBookingCta } from "@/lib/polish/specialist-phrases";
import {
  avatarColorForSlug,
  shouldShowInitialsAvatar,
  specialistInitials,
} from "@/lib/team/avatar";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return specialists.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const specialist = getSpecialistBySlug(slug);
  if (!specialist) return {};
  return buildPageMetadata({
    title: specialist.name,
    description: `${specialist.title} — ${specialist.specialties.join(", ")}. Umów wizytę w OOWiT, Otwock.`,
    path: `/zespol/${slug}`,
  });
}

export default async function SpecialistDetailPage({ params }: Props) {
  const { slug } = await params;
  const specialist = getSpecialistBySlug(slug);
  if (!specialist) notFound();

  const specialistServices = specialist.serviceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s) => s !== undefined);
  const showInitials = shouldShowInitialsAvatar(specialist.slug, specialist.photo);

  return (
    <article className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <Link href="/zespol" className="font-semibold text-[var(--color-forest)] underline-offset-4 hover:underline">
          ← Zespół
        </Link>
        <span className="mx-2 opacity-40" aria-hidden>
          /
        </span>
        <span className="opacity-85">{specialist.name}</span>
      </nav>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] bg-beige">
          {showInitials ? (
            <div
              className="flex h-full w-full items-center justify-center text-5xl font-semibold text-white"
              style={{ backgroundColor: avatarColorForSlug(specialist.slug) }}
              role="img"
              aria-label={`Inicjały — ${specialist.name}`}
            >
              {specialistInitials(specialist.name)}
            </div>
          ) : (
            <Image
              src={specialist.photo}
              alt={`Zdjęcie — ${specialist.name}`}
              fill
              className="object-cover"
              priority
              sizes="320px"
            />
          )}
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-pine-700)]">
            {specialist.title}
          </p>
          <h1 className="mt-1 flex flex-wrap items-center gap-2 text-[var(--text-display)] font-semibold">
            {specialist.name}
            {specialist.isDemo ? (
              <span className="rounded-full bg-[var(--lilac-300)]/50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[var(--pine-900)]">
                Demo dane
              </span>
            ) : null}
          </h1>
          <div className="mt-4">
            <LanguageBadges languages={specialist.languages} />
          </div>
          <p className="mt-6 max-w-prose opacity-85">{specialist.bio}</p>
          <h2 className="mt-8 text-lg font-semibold">Specjalizacje</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {specialist.specialties.map((s) => (
              <li key={s} className="rounded-full bg-beige px-3 py-1 text-sm">
                {s}
              </li>
            ))}
          </ul>
          {specialistServices.length > 0 ? (
            <>
              <h2 className="mt-8 text-lg font-semibold">Oferowane usługi</h2>
              <ul className="mt-3 space-y-2">
                {specialistServices.map((svc) => (
                  <li key={svc.slug}>
                    <Link
                      href="/uslugi"
                      className="font-medium text-[var(--color-forest)] underline-offset-4 hover:underline"
                    >
                      {svc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          <div className="mt-10">
            <Link
              href={`/rezerwacja?specjalista=${specialist.slug}`}
              className="btn-honey"
            >
              {specialistBookingCta(specialist.slug, specialist.name)}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
