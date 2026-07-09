import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

async function acceptCookies(page: import("@playwright/test").Page) {
  const accept = page.getByRole("button", { name: "Akceptuję wszystkie" });
  if (await accept.isVisible().catch(() => false)) {
    await accept.click();
  }
}

const criticalRoutes = ["/", "/rezerwacja", "/kontakt"];

test.describe("A11Y shell contract", () => {
  for (const path of criticalRoutes) {
    test(`axe: no critical violations on ${path}`, async ({ page }) => {
      await page.goto(path);
      await acceptCookies(page);

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      const critical = results.violations.filter((v) => v.impact === "critical");
      expect(critical, JSON.stringify(critical, null, 2)).toHaveLength(0);
    });
  }

  test("keyboard: Tab reaches skip link, main, and footer on home", async ({ page }) => {
    await page.goto("/");
    await acceptCookies(page);

    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Przejdź do treści" });
    await expect(skip).toBeFocused();

    await page.keyboard.press("Enter");
    await expect(page.locator("#main-content")).toBeFocused();

    const footer = page.locator("footer");
    let reachedFooter = false;
    for (let i = 0; i < 40; i += 1) {
      await page.keyboard.press("Tab");
      if (await footer.evaluate((el) => el.contains(document.activeElement)).catch(() => false)) {
        reachedFooter = true;
        break;
      }
    }
    expect(reachedFooter).toBe(true);
  });

  test("focus ring remains visible on header link", async ({ page }) => {
    await page.goto("/");
    await acceptCookies(page);

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    const focused = page.locator(":focus-visible");
    await expect(focused.first()).toBeVisible();
  });
});
