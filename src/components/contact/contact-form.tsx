"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContactForm, null);

  return (
    <section
      aria-labelledby="contact-form-heading"
      className="rounded-[var(--radius-md)] border border-forest-border/15 bg-white p-6 shadow-sm"
    >
      <h2 id="contact-form-heading" className="text-lg font-semibold text-on-beige">
        Napisz do nas
      </h2>

      {state?.ok ? (
        <p className="mt-4 rounded-[var(--radius-sm)] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Dziękujemy — wiadomość została wysłana. Odezwiemy się, gdy tylko będzie to możliwe.
        </p>
      ) : (
        <form action={action} className="mt-6 space-y-4">
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
            <label htmlFor="contact-website">Strona www</label>
            <input tabIndex={-1} id="contact-website" name="website" type="text" autoComplete="off" />
          </div>

          <div>
            <label htmlFor="contact-name" className="mb-1 block text-sm font-medium">
              Imię i nazwisko
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              maxLength={120}
              className="w-full rounded-[var(--radius-sm)] border border-forest-border/25 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-[var(--radius-sm)] border border-forest-border/25 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium">
              Telefon <span className="font-normal opacity-70">(opcjonalnie)</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              className="w-full rounded-[var(--radius-sm)] border border-forest-border/25 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-1 block text-sm font-medium">
              Wiadomość
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              minLength={10}
              maxLength={8000}
              rows={6}
              className="w-full rounded-[var(--radius-sm)] border border-forest-border/25 px-3 py-2 text-sm"
            />
          </div>

          {state?.error ? <p className="text-sm text-red-600">{state.error}</p> : null}

          <button type="submit" disabled={pending} className="btn-honey disabled:opacity-60">
            {pending ? "Wysyłanie…" : "Wyślij wiadomość"}
          </button>
        </form>
      )}
    </section>
  );
}
