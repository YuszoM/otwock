"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/ui/page-hero";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const reduceMotion = useReducedMotion();
  const ref = searchParams.get("ref") ?? "";
  const specjalista = searchParams.get("specjalista") ?? "";
  const usluga = searchParams.get("usluga") ?? "";
  const termin = searchParams.get("termin") ?? "";
  const email = searchParams.get("email") ?? "";

  if (!ref) {
    return (
      <p className="mx-auto max-w-prose px-4 py-12 text-center opacity-85">
        Brak danych potwierdzenia.{" "}
        <Link href="/rezerwacja" className="font-semibold underline-offset-4 hover:underline">
          Wróć do rezerwacji
        </Link>
      </p>
    );
  }

  const content = (
    <section className="mx-auto max-w-prose px-4 py-12 lg:px-6">
      <motion.div
        initial={reduceMotion ? false : { scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="rounded-[var(--radius-md)] border border-emerald-200 bg-emerald-50 p-6"
      >
        <p className="text-lg font-semibold text-emerald-900">Dziękujemy — rezerwacja przyjęta!</p>
        <p className="mt-2 text-sm text-emerald-800">
          To wersja demonstracyjna. Na produkcji otrzymasz email z potwierdzeniem.
        </p>
      </motion.div>

      <dl className="mt-8 space-y-3 text-sm">
        <div>
          <dt className="font-semibold">Numer rezerwacji</dt>
          <dd className="font-mono">{ref}</dd>
        </div>
        {specjalista ? (
          <div>
            <dt className="font-semibold">Specjalista</dt>
            <dd>{specjalista}</dd>
          </div>
        ) : null}
        {usluga ? (
          <div>
            <dt className="font-semibold">Usługa</dt>
            <dd>{usluga}</dd>
          </div>
        ) : null}
        {termin ? (
          <div>
            <dt className="font-semibold">Termin</dt>
            <dd>{termin}</dd>
          </div>
        ) : null}
        {email ? (
          <div>
            <dt className="font-semibold">Potwierdzenie na</dt>
            <dd>{email}</dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="btn-honey">
          Strona główna
        </Link>
        <Link
          href="/rezerwacja"
          className="inline-flex min-h-11 items-center text-sm font-semibold underline-offset-4 hover:underline"
        >
          Nowa rezerwacja
        </Link>
      </div>
    </section>
  );

  return (
    <>
      <PageHero title="Rezerwacja potwierdzona" variant="beige" />
      {content}
    </>
  );
}

export default function BookingConfirmationPage() {
  return (
    <Suspense fallback={<p className="p-8 text-center">Ładowanie…</p>}>
      <ConfirmationContent />
    </Suspense>
  );
}
