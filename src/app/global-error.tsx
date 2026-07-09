"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pl">
      <body className="flex min-h-screen flex-col items-center justify-center bg-beige px-4 text-on-beige antialiased">
        <h1 className="text-2xl font-semibold">Coś poszło nie tak</h1>
        <p className="mt-3 max-w-prose text-center opacity-85">
          Wystąpił nieoczekiwany błąd. Odśwież stronę lub wróć na stronę główną.
        </p>
        <button type="button" onClick={() => reset()} className="btn-honey mt-8">
          Odśwież stronę
        </button>
      </body>
    </html>
  );
}
