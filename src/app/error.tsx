"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[error.tsx]", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-[var(--text-display)] font-semibold">Coś poszło nie tak</h1>
      <p className="mt-3 max-w-prose opacity-85">
        Wystąpił nieoczekiwany błąd. Odśwież stronę lub wróć na stronę główną.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-[var(--radius-sm)] border border-[var(--color-beige-muted)] bg-beige px-6 py-3 text-sm font-semibold text-on-beige hover:opacity-90"
        >
          Odśwież stronę
        </button>
        <Link href="/" className="btn-honey">
          Strona główna
        </Link>
      </div>
    </div>
  );
}
