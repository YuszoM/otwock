import { FadeIn } from "@/components/motion/fade-in";

const values = [
  {
    title: "Słuchamy, nie oceniamy",
    text: "Zaczynamy od wysłuchania — bez presji czasu i gotowych schematów. Tworzymy przestrzeń, w której możesz być sobą.",
  },
  {
    title: "Spójny proces opieki",
    text: "Diagnoza, terapia i wsparcie w jednym miejscu — bez chaosu między placówkami i bez zaczynania od nowa przy każdej wizycie.",
  },
  {
    title: "Nowoczesne podejście",
    text: "Sala integracji sensorycznej, terapia VR i sprawdzone metody — z troską o komfort i bezpieczeństwo pacjenta.",
  },
];

export function TrustSection() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="border-y border-forest-border/10 bg-[var(--color-beige-muted)]/40"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6 lg:py-20">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-honey)]">
            Zaufanie
          </p>
          <h2 id="trust-heading" className="mt-2 max-w-2xl text-[var(--text-heading)] font-semibold">
            To Twoja bezpieczna przestrzeń w Otwocku
          </h2>
          <p className="mt-4 max-w-2xl opacity-85">
            Ośrodek powstał z głębokiej potrzeby: aby rodziny, pary i dzieci miały miejsce, w którym
            czują się bezpiecznie, widziani i rozumiani.
          </p>
        </FadeIn>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={0.08 + i * 0.06}>
              <li className="rounded-[var(--radius-md)] border border-forest-border/10 bg-white/70 p-6 backdrop-blur-sm">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-85">{v.text}</p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
