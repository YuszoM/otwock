"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { specialists } from "@/data/specialists";
import { services } from "@/data/services";
import {
  createMockBooking,
  generateMockSlots,
  getUniqueDates,
  type TimeSlot,
} from "@/lib/booking/mock";
import { PageHero } from "@/components/ui/page-hero";
import { SpecialistCard } from "@/components/team/specialist-card";
import { ServiceCard } from "@/components/services/service-card";
import { FadeIn } from "@/components/motion/fade-in";
import { specialistServiceHeading } from "@/lib/polish/specialist-phrases";

const STEPS = ["Specjalista", "Usługa", "Termin", "Dane"] as const;

export function BookingWizard() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const initialSpecialist = searchParams.get("specjalista") ?? "";

  const [step, setStep] = useState(initialSpecialist ? 1 : 0);
  const [specialistSlug, setSpecialistSlug] = useState(
    initialSpecialist || specialists[0]?.slug || "",
  );
  const [serviceSlug, setServiceSlug] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const specialist = specialists.find((s) => s.slug === specialistSlug);
  const availableServices = services.filter((s) => specialist?.serviceSlugs.includes(s.slug));
  const allSlots = useMemo(
    () => (specialistSlug ? generateMockSlots(specialistSlug) : []),
    [specialistSlug],
  );
  const dates = useMemo(() => getUniqueDates(allSlots), [allSlots]);
  const slotsForDate = useMemo(
    () =>
      selectedDate
        ? allSlots.filter((s) => s.startsAt.startsWith(selectedDate))
        : [],
    [allSlots, selectedDate],
  );

  const slide = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: 16 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -16 },
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
      };

  function pickSpecialist(slug: string) {
    setSpecialistSlug(slug);
    setServiceSlug("");
    setSelectedDate("");
    setSelectedSlot(null);
    setStep(1);
  }

  function pickService(slug: string) {
    setServiceSlug(slug);
    setSelectedDate(dates[0] ?? "");
    setSelectedSlot(null);
    setStep(2);
  }

  function pickSlot(slot: TimeSlot) {
    setSelectedSlot(slot);
    setStep(3);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!specialist || !serviceSlug || !selectedSlot) return;
    const svc = services.find((s) => s.slug === serviceSlug);
    if (!svc) return;

    setSubmitting(true);
    setError(null);

    // Simulate network delay for demo realism
    setTimeout(() => {
      const confirmation = createMockBooking({
        specialistName: specialist.name,
        serviceName: svc.name,
        startsAt: selectedSlot.startsAt,
        patientName: patientName.trim(),
        patientEmail: patientEmail.trim(),
      });
      const params = new URLSearchParams({
        ref: confirmation.referenceCode,
        specjalista: specialist.name,
        usluga: svc.name,
        termin: selectedSlot.label,
        email: confirmation.patientEmail,
      });
      router.push(`/rezerwacja/potwierdzenie?${params.toString()}`);
    }, 600);
  }

  return (
    <>
      <PageHero
        eyebrow="Rezerwacja"
        title="Umów konsultację online"
        description="Wybierz specjalistę, usługę i dogodny termin. To wersja demonstracyjna — bez zapisu w systemie."
      />

      <section className="mx-auto max-w-3xl px-4 py-8 sm:max-w-3xl lg:px-6">
        <nav aria-label="Kroki rezerwacji" className="mb-8">
          <p className="mb-3 text-sm font-semibold sm:hidden" aria-live="polite">
            Krok {step + 1} z {STEPS.length}: {STEPS[step]}
          </p>
          <ol className="flex flex-wrap gap-2">
            {STEPS.map((label, i) => (
              <li
                key={label}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  i === step
                    ? "bg-forest text-on-forest"
                    : i < step
                      ? "bg-[var(--color-forest)]/15 text-[var(--color-forest)]"
                      : "border border-forest-border/25 bg-white text-on-beige/70"
                }`}
              >
                <span className="hidden sm:inline">{i + 1}. </span>
                {label}
              </li>
            ))}
          </ol>
        </nav>

        <p className="mb-6 rounded-[var(--radius-sm)] border border-amber-200/80 bg-amber-50 px-4 py-2 text-xs text-amber-900">
          Wersja demo — terminy są symulowane. Po podpisaniu umowy podłączymy prawdziwy kalendarz.
        </p>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="step-0" {...slide}>
              <h2 className="text-lg font-semibold">Wybierz specjalistę</h2>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2">
                {specialists.map((s, i) => (
                  <li key={s.slug}>
                    <FadeIn delay={i * 0.05}>
                      <button
                        type="button"
                        onClick={() => pickSpecialist(s.slug)}
                        className="w-full text-left"
                      >
                        <SpecialistCard specialist={s} selectable />
                      </button>
                    </FadeIn>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {step === 1 && specialist && (
            <motion.div key="step-1" {...slide}>
              <button
                type="button"
                onClick={() => setStep(0)}
                className="mb-4 text-sm font-semibold underline-offset-4 hover:underline"
              >
                ← Zmień specjalistę
              </button>
              <h2 className="text-lg font-semibold">
                {specialistServiceHeading(specialist.slug, specialist.name)}
              </h2>
              <ul className="mt-6 grid gap-4">
                {availableServices.map((svc) => (
                  <li key={svc.slug}>
                    <button type="button" onClick={() => pickService(svc.slug)} className="w-full text-left">
                      <ServiceCard service={svc} />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step-2" {...slide}>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="mb-4 text-sm font-semibold underline-offset-4 hover:underline"
              >
                ← Zmień usługę
              </button>
              <h2 className="text-lg font-semibold">Wybierz dzień i godzinę</h2>
              <p className="mt-2 text-xs text-on-beige/70 md:hidden">
                Przesuń palcem w poziomie, aby zobaczyć więcej dni →
              </p>

              <div className="mt-4 flex gap-2 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
                {dates.slice(0, 14).map((d) => {
                  const day = new Date(d + "T12:00:00");
                  const isSelected = selectedDate === d;
                  return (
                    <button
                      key={d}
                      type="button"
                      onClick={() => {
                        setSelectedDate(d);
                        setSelectedSlot(null);
                      }}
                      className={`slot-picker-day ${isSelected ? "" : ""}`}
                      aria-pressed={isSelected}
                    >
                      <span className="text-xs uppercase opacity-70">
                        {day.toLocaleDateString("pl-PL", { weekday: "short" })}
                      </span>
                      <span className="text-lg">{day.getDate()}</span>
                      <span className="text-xs opacity-70">
                        {day.toLocaleDateString("pl-PL", { month: "short" })}
                      </span>
                    </button>
                  );
                })}
              </div>

              {selectedDate ? (
                <fieldset className="mt-6">
                  <legend className="mb-3 text-sm font-medium">Godziny</legend>
                  <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {slotsForDate.map((slot) => (
                      <li key={slot.startsAt}>
                        <button
                          type="button"
                          onClick={() => pickSlot(slot)}
                          className="slot-picker-time"
                        >
                          {slot.timeLabel}
                        </button>
                      </li>
                    ))}
                  </ul>
                </fieldset>
              ) : null}
            </motion.div>
          )}

          {step === 3 && selectedSlot && specialist && (
            <motion.div key="step-3" {...slide}>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="mb-4 text-sm font-semibold underline-offset-4 hover:underline"
              >
                ← Zmień termin
              </button>
              <div className="mb-6 rounded-[var(--radius-md)] border border-forest-border/15 bg-white p-4 text-sm">
                <p>
                  <span className="font-semibold">Specjalista:</span> {specialist.name}
                </p>
                <p className="mt-1">
                  <span className="font-semibold">Termin:</span> {selectedSlot.label}
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="patient-name" className="form-label">
                    Imię i nazwisko
                  </label>
                  <input
                    id="patient-name"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="form-input"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="patient-email" className="form-label">
                    Email
                  </label>
                  <input
                    id="patient-email"
                    type="email"
                    required
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    className="form-input"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="patient-phone" className="form-label">
                    Telefon <span className="font-normal opacity-70">(opcjonalnie)</span>
                  </label>
                  <input
                    id="patient-phone"
                    type="tel"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="form-input"
                    autoComplete="tel"
                  />
                </div>
                {error ? (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                ) : null}
                <button type="submit" disabled={submitting} className="btn-honey disabled:opacity-60">
                  {submitting ? "Rezerwowanie…" : "Potwierdź rezerwację"}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
