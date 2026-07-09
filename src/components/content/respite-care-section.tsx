import { FadeIn } from "@/components/motion/fade-in";

export function RespiteCareSection() {
  return (
    <section
      aria-labelledby="respite-heading"
      className="mx-auto max-w-[var(--container-max)] px-4 py-16 lg:px-6 lg:py-20"
    >
      <FadeIn>
        <h2 id="respite-heading" className="text-[var(--text-heading)] font-semibold">
          Opieka w trakcie terapii
        </h2>
        <p className="mt-4 max-w-prose opacity-85">
          Doskonale rozumiemy, że poradnia pedagogiczno–psychologiczna nie jest miejscem, do którego
          zawsze można wybrać się z dzieckiem. Z drugiej strony zorganizowanie opieki dla najmłodszego
          nierzadko bywa wyzwaniem. Właśnie dlatego w naszej poradni zdrowia psychicznego oferujemy
          opiekę wytchnieniową, jaka pozwala w tym czasie zapewnić dziecku bezpieczne i wartościowe
          zajęcie.
        </p>
        <p className="mt-4 max-w-prose opacity-85">
          Koszt opieki wynosi 40 zł, a w jej ramach dzieci korzystają z aktywności rozwijających, w tym
          systemu FunFloor oraz innych form kreatywnej zabawy. Nie chcemy bowiem, aby było to bierne
          czekanie. Organizujemy czas, który wspiera rozwój najmłodszych, a zarazem odciąża rodzica.
        </p>
      </FadeIn>
    </section>
  );
}
