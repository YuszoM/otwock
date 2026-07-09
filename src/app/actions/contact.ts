"use server";

export type ContactSubmitResult = { ok: true } | { ok: false; error: string };

/** Demo mode — validates input, no backend persistence. */
export async function submitContactForm(
  _prev: ContactSubmitResult | null,
  formData: FormData,
): Promise<ContactSubmitResult> {
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot.length > 0) {
    return { ok: true };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const message = String(formData.get("message") ?? "").trim();

  if (name.length < 2 || name.length > 120) {
    return { ok: false, error: "Podaj prawidłowe imię lub nazwę." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Podaj poprawny adres email." };
  }
  if (message.length < 10 || message.length > 8000) {
    return { ok: false, error: "Wiadomość: od 10 do 8000 znaków." };
  }

  return { ok: true };
}
