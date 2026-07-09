import Image from "next/image";

const steps = [
  {
    title: "Diagnoza",
    description:
      "Poznajemy potrzeby pacjenta i rodziny — wywiad, obserwacja i narzędzia diagnostyczne dają pełniejszy obraz sytuacji.",
  },
  {
    title: "Terapia",
    description:
      "Ustalamy cele i plan pracy. Spotkania są regularne, dostosowane do wieku i możliwości pacjenta.",
  },
  {
    title: "Wsparcie",
    description:
      "Towarzyszymy w codziennym funkcjonowaniu — konsultacje dla rodziców, współpraca ze szkołą i monitorowanie postępów.",
  },
];

export function CareProcess() {
  return (
    <section aria-labelledby="care-process-heading" className="mx-auto max-w-[var(--container-max)] px-4 py-12 lg:px-6 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="order-1 lg:order-2">
          <h2 id="care-process-heading" className="text-[var(--text-heading)] font-semibold">
            Zintegrowana opieka w trzech krokach
          </h2>
          <p className="mt-4 opacity-85">
            W OOWiT łączymy diagnozę, terapię i długofalowe wsparcie — tak, aby pacjent i rodzina
            mieli jasny plan działania w jednym miejscu w Otwocku.
          </p>
          <ol className="mt-8 space-y-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-semibold text-on-forest"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm opacity-85">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] border border-forest-border/10 lg:order-1">
          <Image
            src="/images/process-care-3steps.jpg"
            alt="Ilustracja procesu opieki: diagnoza, terapia, wsparcie"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
