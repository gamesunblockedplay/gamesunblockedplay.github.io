import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const svgPath = path.join(publicDir, 'favicon.svg');

async function createPwaIcons() {
  const svgBuffer = fs.readFileSync(svgPath);

  // Background color matching the site theme
  const bgColor = { r: 11, g: 15, b: 25, alpha: 1 }; // #0b0f19

  // Function to create an icon with dark background and centered logo
  async function generateIcon(size, paddingRatio, outputPath) {
    const innerSize = Math.round(size * (1 - paddingRatio * 2));
    const resizedLogo = await sharp(svgBuffer)
      .resize(innerSize, innerSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    const left = Math.round((size - innerSize) / 2);
    const top = Math.round((size - innerSize) / 2);

    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: bgColor,
      },
    })
      .composite([{ input: resizedLogo, left, top }])
      .png()
      .toFile(outputPath);

    console.log(`Generated: ${outputPath} (${size}x${size})`);
  }

  // Generate for public/
  await generateIcon(192, 0.15, path.join(publicDir, 'icon-192.png'));
  await generateIcon(512, 0.15, path.join(publicDir, 'icon-512.png'));
  await generateIcon(512, 0.22, path.join(publicDir, 'icon-512-maskable.png'));
  await generateIcon(180, 0.15, path.join(publicDir, 'apple-touch-icon.png'));

  // Also copy to root for direct access if root served
  fs.copyFileSync(path.join(publicDir, 'icon-192.png'), path.join(root, 'icon-192.png'));
  fs.copyFileSync(path.join(publicDir, 'icon-512.png'), path.join(root, 'icon-512.png'));
  fs.copyFileSync(path.join(publicDir, 'icon-512-maskable.png'), path.join(root, 'icon-512-maskable.png'));
  fs.copyFileSync(path.join(publicDir, 'apple-touch-icon.png'), path.join(root, 'apple-touch-icon.png'));

  console.log('All PWA icons generated successfully.');
}

createPwaIcons().catch(err => {
  console.error('Error generating PWA icons:', err);
  process.exit(1);
});
