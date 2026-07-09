import type { Page } from "@playwright/test";

const COOKIE_CONSENT_KEY = "mz_cookie_consent";

/** Pre-seed cookie consent so overlay does not block navigation in e2e. */
export async function seedCookieConsent(page: Page) {
  await page.addInitScript((key) => {
    const state = {
      level: "all",
      analytics: true,
      personalization: true,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(key, JSON.stringify(state));
  }, COOKIE_CONSENT_KEY);
}

export async function acceptCookies(page: Page) {
  const accept = page.getByRole("button", { name: "Akceptuję wszystkie" });
  if (await accept.isVisible({ timeout: 1500 }).catch(() => false)) {
    await accept.click();
  }
}
