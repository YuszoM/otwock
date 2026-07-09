import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest text-on-forest">
        <div className="mx-auto grid max-w-[var(--container-max)] gap-8 px-4 py-12 lg:grid-cols-2 lg:items-center lg:px-6 lg:py-16">
          <div className="max-w-prose">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-honey)]">
              Otwocki Ośrodek Wsparcia
            </p>
            <h1 className="mt-2 text-[var(--text-display)] font-semibold leading-tight">
              {siteConfig.siteName}
            </h1>
            <p className="mt-4 text-base opacity-90">{siteConfig.footer.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={siteConfig.bookingCta.href} className="btn-honey">
                {siteConfig.bookingCta.label}
              </Link>
              <Link
                href="/zespol"
                className="inline-flex min-h-11 items-center rounded-[var(--radius-sm)] border border-forest-border px-4 text-sm font-semibold text-on-forest underline-offset-4 hover:underline"
              >
                Poznaj zespół
              </Link>
            </div>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-md)]">
            <Image
              src="/images/hero-otwock-forest-16x9.jpg"
              alt="Spokojny las w okolicach Otwocka — tło wizualne strony głównej OOWiT"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]">
            <Image
              src="/images/process-care-3steps.jpg"
              alt="Ilustracja procesu opieki w trzech krokach"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="max-w-prose">
            <h2 className="text-[var(--text-heading)] font-semibold">Jak możemy pomóc</h2>
            <p className="mt-4 opacity-85">
              Treść tej sekcji pojawi się w kolejnej fazie projektu. Tymczasem skorzystaj z menu
              nawigacji, aby przejść do zespołu, usług lub rezerwacji wizyty.
            </p>
            <ul className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
              <li>
                <Link href="/zespol" className="underline-offset-4 hover:underline">
                  Zespół
                </Link>
              </li>
              <li>
                <Link href="/uslugi" className="underline-offset-4 hover:underline">
                  Usługi
                </Link>
              </li>
              <li>
                <Link href="/rezerwacja" className="underline-offset-4 hover:underline">
                  Rezerwacja
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="underline-offset-4 hover:underline">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
