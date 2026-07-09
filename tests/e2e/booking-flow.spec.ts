import { test, expect } from "@playwright/test";
import { seedCookieConsent } from "./helpers/cookies";

test.describe("Booking flow (demo)", () => {
  test.beforeEach(async ({ page }) => {
    await seedCookieConsent(page);
  });

  test("booking wizard starts at specialist selection", async ({ page }) => {
    await page.goto("/rezerwacja");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("konsultację");
    await expect(page.getByRole("heading", { name: "Wybierz specjalistę" })).toBeVisible();
  });

  test("can complete demo booking from deep link", async ({ page }) => {
    await page.goto("/rezerwacja?specjalista=specjalista-psycholog-demo-1");
    await expect(page.getByRole("heading", { name: "Poznaj naszą ofertę" })).toBeVisible();
    await page.getByRole("button").filter({ hasText: "Terapia" }).first().click();
    await page.getByRole("button", { name: /\d+/ }).first().click();
    await page.getByRole("button", { name: /^\d{2}:\d{2}$/ }).first().click();
    await page.getByLabel("Imię i nazwisko").fill("Jan Testowy");
    await page.getByLabel("Email").fill("jan@test.example");
    await page.getByRole("button", { name: "Potwierdź rezerwację" }).click();
    await expect(page).toHaveURL(/\/rezerwacja\/potwierdzenie/);
    await expect(page.getByText(/Numer rezerwacji/)).toBeVisible();
    await expect(page.getByText(/OOW-/)).toBeVisible();
  });
});
