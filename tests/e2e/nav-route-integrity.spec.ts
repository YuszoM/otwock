import { expect, test } from "@playwright/test";
import { getAllNavPaths, siteConfig } from "../../src/config/site";

async function acceptCookies(page: import("@playwright/test").Page) {
  const accept = page.getByRole("button", { name: "Akceptuję wszystkie" });
  if (await accept.isVisible().catch(() => false)) {
    await accept.click();
  }
}

test.describe("NAV-01 route integrity", () => {
  for (const path of getAllNavPaths()) {
    test(`route ${path} returns 200`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await acceptCookies(page);
      await expect(page.locator("main#main-content")).toBeVisible();
    });
  }

  test("home links to conversion paths", async ({ page }) => {
    await page.goto("/");
    await acceptCookies(page);

    for (const href of ["/zespol", "/uslugi", "/rezerwacja", "/kontakt"]) {
      await expect(page.locator(`main a[href="${href}"]`).first()).toBeVisible();
    }
  });

  test("site config paths stay in sync with NAV-01", () => {
    const expected = [
      "/",
      "/aktualnosci",
      "/cennik",
      "/kariera",
      "/kontakt",
      "/o-nas",
      "/polityka-prywatnosci",
      "/rezerwacja",
      "/rodo",
      "/uslugi",
      "/zespol",
    ];
    expect(getAllNavPaths().sort()).toEqual(expected);
    expect(siteConfig.footer.legalLinks?.map((l) => l.href)).toEqual([
      "/rodo",
      "/polityka-prywatnosci",
    ]);
  });
});
