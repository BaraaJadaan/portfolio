const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createAuthenticOgImage() {
  const assetsDir = path.resolve(__dirname, '../src/Assets');
  const publicDir = path.resolve(__dirname, '../public');

  // 1. Prepare base background from the real home-bg.jpg
  const bgPath = path.join(assetsDir, 'home-bg.jpg');
  const baseBg = await sharp(bgPath)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .toBuffer();

  // 2. Prepare real hero illustration (home-main.png)
  const heroPath = path.join(publicDir, 'home-main.png');
  const heroImg = await sharp(heroPath)
    .resize(480, 480, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // 3. Prepare trimmed logo
  const logoPath = path.join(publicDir, 'logo.png');
  const logoImg = await sharp(logoPath)
    .resize(72, 60, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // Colorize the logo to the exact signature purple #cd5ff8
  const { data: logoData, info: logoInfo } = await sharp(logoImg).raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < logoData.length; i += 4) {
    if (logoData[i + 3] > 20) {
      const a = logoData[i + 3];
      logoData[i] = 205;     // R
      logoData[i + 1] = 95;  // G
      logoData[i + 2] = 248; // B
      logoData[i + 3] = a;
    }
  }
  const purpleLogo = await sharp(logoData, { raw: logoInfo }).png().toBuffer();

  // 4. Create dark gradient and typography SVG overlay
  const overlaySvg = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="overlayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#140f23" stop-opacity="0.88" />
          <stop offset="60%" stop-color="#1b1429" stop-opacity="0.82" />
          <stop offset="100%" stop-color="#0a0416" stop-opacity="0.94" />
        </linearGradient>
      </defs>

      <!-- Atmospheric dark gradient overlay matching the website -->
      <rect width="1200" height="630" fill="url(#overlayGrad)" />

      <!-- Subtle star dots matching the particle canvas -->
      <circle cx="150" cy="90" r="1.5" fill="#ffffff" opacity="0.6" />
      <circle cx="340" cy="180" r="2" fill="#cd5ff8" opacity="0.8" />
      <circle cx="580" cy="80" r="1.5" fill="#ffffff" opacity="0.5" />
      <circle cx="820" cy="120" r="2" fill="#ffffff" opacity="0.7" />
      <circle cx="1100" cy="90" r="1.5" fill="#cd5ff8" opacity="0.6" />
      <circle cx="200" cy="550" r="1.5" fill="#ffffff" opacity="0.5" />
      <circle cx="500" cy="580" r="2" fill="#ffffff" opacity="0.7" />
      <circle cx="1050" cy="540" r="2" fill="#ffffff" opacity="0.6" />

      <!-- Left Content: Portfolio Hero Typography -->
      <text x="100" y="240" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="500" fill="#ffffff">Hi There! &#x1F44B;&#x1F3FB;</text>
      
      <text x="100" y="320" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="58" font-weight="800" fill="#ffffff">
        I'M <tspan fill="#cd5ff8">Baraa Jadaan</tspan>
      </text>

      <text x="100" y="390" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="26" font-weight="600" fill="#be6adf">
        Software Engineer &amp; AI Specialist
      </text>

      <text x="100" y="440" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="18" font-weight="400" fill="#a09cb0">
        React • TypeScript • Next.js • Flutter • PyTorch • RAG Systems
      </text>

      <!-- URL Badge -->
      <g transform="translate(100, 500)">
        <rect x="0" y="0" width="310" height="42" rx="21" fill="#231a38" stroke="#be6adf" stroke-width="1.5" stroke-opacity="0.5" />
        <text x="155" y="27" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="600" fill="#e0aaff" text-anchor="middle">
          baraajadaan.github.io/portfolio
        </text>
      </g>
    </svg>
  `);

  // 5. Composite all real assets together
  await sharp(baseBg)
    .composite([
      { input: overlaySvg, top: 0, left: 0 },
      { input: purpleLogo, top: 80, left: 100 },
      { input: heroImg, top: 75, left: 660 }
    ])
    .png({ quality: 95 })
    .toFile(path.join(publicDir, 'og-image.png'));

  console.log('Successfully created authentic portfolio OG image at public/og-image.png (1200x630)!');
}

createAuthenticOgImage().catch(console.error);
