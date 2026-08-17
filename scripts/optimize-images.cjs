const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimize() {
  const assetsDir = path.resolve(__dirname, '../src/Assets');
  const publicDir = path.resolve(__dirname, '../public');

  // 1. home-main
  const pngPath = path.join(publicDir, 'home-main.png');
  if (fs.existsSync(pngPath)) {
    await sharp(pngPath)
      .resize({ width: 650, height: 650, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 78, effort: 6 })
      .toFile(path.join(publicDir, 'home-main.webp'));
    console.log('Created public/home-main.webp:', fs.statSync(path.join(publicDir, 'home-main.webp')).size, 'bytes');

    await sharp(pngPath)
      .resize({ width: 380, height: 380, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 75, effort: 6 })
      .toFile(path.join(publicDir, 'home-main-mobile.webp'));
    console.log('Created public/home-main-mobile.webp:', fs.statSync(path.join(publicDir, 'home-main-mobile.webp')).size, 'bytes');

    await sharp(pngPath)
      .resize({ width: 650, height: 650, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(path.join(publicDir, 'home-main.png.opt'));
    fs.renameSync(path.join(publicDir, 'home-main.png.opt'), path.join(publicDir, 'home-main.png'));
    console.log('Optimized public/home-main.png:', fs.statSync(path.join(publicDir, 'home-main.png')).size, 'bytes');
  }

  // 2. logo
  const logoPath = path.join(assetsDir, 'logo.png');
  if (fs.existsSync(logoPath)) {
    await sharp(logoPath)
      .resize({ width: 320, height: 240, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(path.join(publicDir, 'logo.png'));
    await sharp(logoPath)
      .resize({ width: 320, height: 240, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 90, effort: 6 })
      .toFile(path.join(publicDir, 'logo.webp'));
    fs.copyFileSync(path.join(publicDir, 'logo.png'), path.join(assetsDir, 'logo.png'));
    console.log('Created public/logo.png:', fs.statSync(path.join(publicDir, 'logo.png')).size, 'bytes');
    console.log('Created public/logo.webp:', fs.statSync(path.join(publicDir, 'logo.webp')).size, 'bytes');
  }

  // 3. home-bg
  const bgPath = path.join(assetsDir, 'home-bg.jpg');
  if (fs.existsSync(bgPath)) {
    await sharp(bgPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(publicDir, 'home-bg.webp'));
    console.log('Created public/home-bg.webp:', fs.statSync(path.join(publicDir, 'home-bg.webp')).size, 'bytes');
  }
}

optimize().catch(console.error);
