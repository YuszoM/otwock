import Image from "next/image";
import Link from "next/link";
import type { Specialist } from "@/data/specialists";
import { LanguageBadges } from "@/components/ui/language-badges";
import {
  avatarColorForSlug,
  shouldShowInitialsAvatar,
  specialistInitials,
} from "@/lib/team/avatar";

type SpecialistCardProps = {
  specialist: Specialist;
  /** When true, card is used inside a parent button — no nested links. */
  selectable?: boolean;
};

export function SpecialistCard({ specialist, selectable = false }: SpecialistCardProps) {
  const showInitials = shouldShowInitialsAvatar(specialist.slug, specialist.photo);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-forest-border/12 bg-white shadow-[0_1px_2px_rgba(21,46,38,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(21,46,38,0.08)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-beige">
        {showInitials ? (
          <div
            className="flex h-full w-full items-center justify-center text-4xl font-semibold text-white"
            style={{ backgroundColor: avatarColorForSlug(specialist.slug) }}
            aria-hidden
          >
            {specialistInitials(specialist.name)}
          </div>
        ) : (
          <Image
            src={specialist.photo}
            alt={`Zdjęcie — ${specialist.name}`}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(21,46,38,0.35)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-honey)]">
          {specialist.title}
        </p>
        <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-on-beige">
          {specialist.name}
        </h2>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {specialist.specialties.slice(0, 3).map((s) => (
            <li
              key={s}
              className="rounded-full border border-forest-border/10 bg-beige/80 px-2.5 py-0.5 text-xs text-on-beige/85"
            >
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <LanguageBadges languages={specialist.languages} />
        </div>
        {!selectable ? (
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <Link
              href={`/zespol/${specialist.slug}`}
              className="text-sm font-semibold text-[var(--color-forest)] underline-offset-4 hover:underline"
            >
              Profil specjalisty
            </Link>
            <Link
              href={`/rezerwacja?specjalista=${specialist.slug}`}
              className="btn-honey text-sm"
            >
              Umów wizytę
            </Link>
          </div>
        ) : (
          <p className="mt-auto pt-6 text-sm font-semibold text-[var(--color-forest)]">
            Wybierz →
          </p>
        )}
      </div>
    </article>
  );
}
