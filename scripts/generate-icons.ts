/**
 * Icon generator for social platforms
 *
 * Generates platform-specific icons from the base star SVG with appropriate
 * backgrounds, padding, and sizing for each platform's requirements.
 *
 * Usage: bun run scripts/generate-icons.ts
 */

import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Colors from the design system (RGB format for Sharp)
const colors = {
  slate50: { r: 248, g: 250, b: 252 },
  slate100: { r: 241, g: 245, b: 249 },
  slate800: { r: 30, g: 41, b: 59 },
};

// Platform icon variants
interface IconVariant {
  /** Output filename (without extension) */
  name: string;
  /** Output size in pixels */
  size: number;
  /** Padding around the star (pixels) */
  padding: number;
  /** Background color (null for transparent) */
  background: { r: number; g: number; b: number } | null;
  /** Description for logging */
  description: string;
}

const variants: IconVariant[] = [
  {
    name: "apple-touch-icon",
    size: 180,
    padding: 28, // 15.5%
    background: colors.slate50,
    description: "Apple touch icon (iOS home screen)",
  },
  {
    name: "starmode-icon-discord",
    size: 512,
    padding: 80, // 15.6%
    background: colors.slate50,
    description: "Discord server icon (light bg for dark mode visibility)",
  },
  {
    name: "starmode-icon-netlify",
    size: 512,
    padding: 80, // 15.6%
    background: colors.slate50,
    description: "Netlify dashboard site icon",
  },
];

async function generateIcon(
  sourcePath: string,
  outputPath: string,
  variant: IconVariant,
): Promise<void> {
  const { size, padding, background } = variant;
  const starSize = size - padding * 2;

  // Render the star SVG at the target size
  const star = await sharp(sourcePath)
    .resize(starSize, starSize, { fit: "contain" })
    .toBuffer();

  if (background) {
    // Create background and composite star on top
    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { ...background, alpha: 1 },
      },
    })
      .composite([{ input: star, gravity: "center" }])
      .png()
      .toFile(outputPath);
  } else {
    // Transparent background: extend the star with padding
    await sharp(star)
      .extend({
        top: padding,
        bottom: padding,
        left: padding,
        right: padding,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toFile(outputPath);
  }
}

async function main() {
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const projectRoot = join(scriptDir, "..");
  const publicDir = join(projectRoot, "public");
  const sourceSvg = join(publicDir, "starmode-icon.svg");

  console.log("🌟 Generating platform icons...\n");

  for (const variant of variants) {
    const outputPath = join(publicDir, `${variant.name}.png`);

    try {
      await generateIcon(sourceSvg, outputPath, variant);
      console.log(`✓ ${variant.name}.png  (${variant.size}px)`);
      console.log(`  ${variant.description}\n`);
    } catch (error) {
      console.error(`✗ Failed to generate ${variant.name}.png`);
      throw error;
    }
  }

  console.log("Done! 🎉");
}

main();
