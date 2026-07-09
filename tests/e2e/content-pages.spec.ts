import { test, expect } from "@playwright/test";
import { acceptCookies, seedCookieConsent } from "./helpers/cookies";

test.describe("Phase 2 content pages", () => {
  test.beforeEach(async ({ page }) => {
    await seedCookieConsent(page);
  });
  test("team page shows specialist cards with booking CTA", async ({ page }) => {
    await page.goto("/zespol");
    await acceptCookies(page);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Specjaliści");
    await expect(page.getByRole("link", { name: /Umów wizytę/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Profil specjalisty/i }).first()).toBeVisible();
  });

  test("specialist detail page loads", async ({ page }) => {
    await page.goto("/zespol/anna-kowalska");
    await acceptCookies(page);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Anna Kowalska");
    await expect(page.locator("main").getByRole("link", { name: /Umów wizytę u Kowalska/i })).toBeVisible();
  });

  test("services page shows catalog with language badges", async ({ page }) => {
    await page.goto("/uslugi");
    await acceptCookies(page);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("oferta");
    await expect(page.getByLabel("Dostępne języki").first()).toBeVisible();
  });

  test("contact page has form and contact details", async ({ page }) => {
    await page.goto("/kontakt");
    await acceptCookies(page);
    await expect(page.getByRole("heading", { name: "Napisz do nas" })).toBeVisible();
    await expect(page.getByLabel("Imię i nazwisko")).toBeVisible();
    await expect(page.locator("main").getByRole("link", { name: /kontakt@oowit\.pl/i })).toBeVisible();
  });

  test("footer legal links work (NAV-03)", async ({ page }) => {
    await page.goto("/rodo");
    await acceptCookies(page);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("RODO");
    await page.goto("/polityka-prywatnosci");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Polityka prywatności");
  });

  test("conversion paths reachable in two clicks from home (NAV-02)", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await acceptCookies(page);
    for (const [label, path] of [
      ["Zespół", "/zespol"],
      ["Usługi", "/uslugi"],
      ["Kontakt", "/kontakt"],
    ] as const) {
      await page.getByRole("navigation", { name: "Główne" }).getByRole("link", { name: label, exact: true }).click();
      await expect(page).toHaveURL(path);
      await page.goto("/");
      await acceptCookies(page);
    }
    await page.getByRole("link", { name: "Umów wizytę" }).first().click();
    await expect(page).toHaveURL("/rezerwacja");
  });
});
