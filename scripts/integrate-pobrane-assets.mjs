#!/usr/bin/env node
/**
 * Integrate audited PASS images from Pobrane/otwock into public/images.
 * Run: node scripts/integrate-pobrane-assets.mjs
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";

const SRC = "/home/itmaster/Pobrane/otwock";
const OUT = path.resolve("public/images");

const sources = {
  heroMaster: path.join(SRC, "Generated Image July 09, 2026 - 3_37PM.jpg"),
  heroMobile: path.join(SRC, "Generated Image July 09, 2026 - 3_36PM.jpg"),
  process: path.join(SRC, "Generated Image July 09, 2026 - 3_40PM.jpg"),
};

async function writeWebp(input, output, width, height, { quality = 82, position = "centre" } = {}) {
  await sharp(input)
    .resize(width, height, { fit: "cover", position })
    .webp({ quality, effort: 6, smartSubsample: true })
    .toFile(output);
  const { size } = fs.statSync(output);
  console.log(`✓ ${path.basename(output)} → ${width}×${height}, ${Math.round(size / 1024)} KB`);
}

async function copyAlias(from, alias) {
  await fs.promises.copyFile(from, alias);
  console.log(`  alias ${path.basename(alias)}`);
}

async function buildOgHome() {
  const w = 1200;
  const h = 630;
  const leftW = Math.round(w * 0.55);
  const rightW = w - leftW;

  const gradientSvg = `<svg width="${leftW}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F5F0E6"/>
        <stop offset="100%" stop-color="#E3D8C4"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
  </svg>`;

  const [leftBuf, rightBuf] = await Promise.all([
    sharp(Buffer.from(gradientSvg)).png().toBuffer(),
    sharp(sources.heroMaster)
      .resize(rightW, h, { fit: "cover", position: "right" })
      .toBuffer(),
  ]);

  const out = path.join(OUT, "og-home.webp");
  await sharp({ create: { width: w, height: h, channels: 3, background: "#F5F0E6" } })
    .composite([
      { input: leftBuf, left: 0, top: 0 },
      { input: rightBuf, left: leftW, top: 0 },
    ])
    .webp({ quality: 85, effort: 6 })
    .toFile(out);

  const { size } = fs.statSync(out);
  console.log(`✓ og-home.webp → ${w}×${h}, ${Math.round(size / 1024)} KB`);
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });

  const heroDesktop = path.join(OUT, "hero-otwock-fullscreen-desktop.webp");
  await writeWebp(sources.heroMaster, heroDesktop, 2560, 1440, {
    quality: 72,
    position: "right",
  });
  await copyAlias(heroDesktop, path.join(OUT, "hero-otwock-forest-16x9.webp"));

  const heroMobile = path.join(OUT, "hero-otwock-fullscreen-mobile.webp");
  await writeWebp(sources.heroMobile, heroMobile, 1080, 1920, {
    quality: 82,
    position: "right",
  });
  await copyAlias(heroMobile, path.join(OUT, "hero-otwock-forest-alt.webp"));

  await writeWebp(sources.process, path.join(OUT, "process-care-3steps.webp"), 1600, 1200, {
    quality: 85,
    position: "centre",
  });

  await writeWebp(sources.heroMobile, path.join(OUT, "local-otwock-trust.webp"), 1600, 1000, {
    quality: 84,
    position: "centre",
  });

  await buildOgHome();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
