import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-honey)]">404</p>
      <h1 className="mt-2 text-[var(--text-display)] font-semibold">Nie znaleziono strony</h1>
      <p className="mt-3 max-w-prose opacity-85">
        Ten adres nie istnieje lub został przeniesiony. Sprawdź wpisany adres albo wróć na stronę
        główną.
      </p>
      <Link href="/" className="btn-honey mt-8">
        Strona główna
      </Link>
    </div>
  );
}
