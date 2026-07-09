import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "screenshots", "audit-2026-07-09");
const baseURL = (process.env.PLAYWRIGHT_BASE_URL ?? "https://otwock.duodev.pl").replace(/\/+$/, "");

const COOKIE_CONSENT_KEY = "mz_cookie_consent";

const pages = [
  { slug: "home", path: "/", fullPage: true },
  { slug: "uslugi", path: "/uslugi", fullPage: true },
  { slug: "zespol", path: "/zespol", fullPage: true },
  { slug: "rezerwacja", path: "/rezerwacja", fullPage: true },
  { slug: "o-nas", path: "/o-nas", fullPage: true },
  { slug: "cennik", path: "/cennik", fullPage: true },
];

const viewports = [
  { suffix: "desktop-1440", width: 1440, height: 900 },
  { suffix: "desktop-1920", width: 1920, height: 1080 },
  { suffix: "mobile-390", width: 390, height: 844 },
];

async function seedCookieConsent(page) {
  await page.addInitScript((key) => {
    localStorage.setItem(
      key,
      JSON.stringify({
        level: "all",
        analytics: true,
        personalization: true,
        savedAt: new Date().toISOString(),
      }),
    );
  }, COOKIE_CONSENT_KEY);
}

async function capture(page, slug, suffix, fullPage = true) {
  await page.waitForTimeout(800);
  const file = path.join(outDir, `${slug}-${suffix}.png`);
  await page.screenshot({ path: file, fullPage });
  console.log(`saved ${file}`);
}

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ ignoreHTTPSErrors: true });

for (const vp of viewports) {
  const page = await context.newPage();
  await seedCookieConsent(page);
  await page.setViewportSize({ width: vp.width, height: vp.height });

  for (const pageDef of pages) {
    await page.goto(`${baseURL}${pageDef.path}`, {
      waitUntil: "networkidle",
      timeout: 90_000,
    });
    await capture(page, pageDef.slug, vp.suffix, pageDef.fullPage);
  }

  await page.close();
}

await browser.close();
console.log(`done — ${outDir}`);
