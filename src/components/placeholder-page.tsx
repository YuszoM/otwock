type PlaceholderPageProps = {
  title: string;
};

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="mx-auto max-w-prose px-4 py-12 lg:px-6">
      <h1 className="text-[var(--text-display)] font-semibold">{title}</h1>
      <p className="mt-4 opacity-85">
        Treść tej sekcji pojawi się w kolejnej fazie projektu.
      </p>
    </div>
  );
}
