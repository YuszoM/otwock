import { FadeIn } from "@/components/motion/fade-in";

const features = [
  {
    title: "Sala integracji sensorycznej",
    text: "Profesjonalnie wyposażona przestrzeń SI — bezpieczne ćwiczenia przetwarzania bodźców dla dzieci z trudnościami sensorycznymi.",
  },
  {
    title: "Terapia VR",
    text: "Wirtualna rzeczywistość wspiera pracę z dziećmi i młodzieżą — bezpieczne doświadczanie emocji i sytuacji przenoszonych potem do codzienności.",
  },
  {
    title: "Spójny proces opieki",
    text: "Klasyczna psychologia połączona z nowoczesnymi narzędziami — diagnoza, terapia i wsparcie w jednym, konsekwentnie prowadzonym planie.",
  },
];

export function ModernApproachSection() {
  return (
    <section
      aria-labelledby="modern-approach-heading"
      className="border-y border-forest-border/10 bg-forest text-on-forest"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6 lg:py-20">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-honey)]">
            Nowoczesne podejście
          </p>
          <h2 id="modern-approach-heading" className="mt-2 max-w-2xl text-[var(--text-heading)] font-semibold">
            Technologia i sprawdzone metody w służbie terapii
          </h2>
          <p className="mt-4 max-w-2xl opacity-90">
            W OOWiT nie bazujemy wyłącznie na jednym nurcie pracy. Wykorzystujemy klasyczną psychologię
            oraz nowoczesne narzędzia, które wspierają proces terapeutyczny i pomagają szybciej dotrzeć
            do efektów.
          </p>
        </FadeIn>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={0.08 + i * 0.06}>
              <li className="rounded-[var(--radius-md)] border border-forest-border bg-white/5 p-5 backdrop-blur-sm">
                <h3 className="font-semibold text-[var(--color-honey)]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-90">{f.text}</p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
