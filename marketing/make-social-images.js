// Regenerates the 1080x1080 social PNGs from their SVG source via headless
// Chromium. Re-run this after editing either SVG.
//
// The chromium executablePath below is specific to the sandbox this was
// authored in (see /opt/pw-browsers) - point it at a local Chromium/Chrome
// install to run this outside that environment.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const SIZE = 1080;

const IMAGES = [
  { svg: 'kome-cleanser-social.svg', png: 'kome-cleanser-social.png' },
  { svg: 'yuzu-curl-spray-social.svg', png: 'yuzu-curl-spray-social.png' }
];

async function render(browser, svgPath, pngPath) {
  const svg = fs.readFileSync(svgPath, 'utf8');
  const html = `<!doctype html><html><body style="margin:0">${svg}</body></html>`;
  const tmp = path.join(DIR, '._tmp-social.html');
  fs.writeFileSync(tmp, html);

  const page = await browser.newPage({ viewport: { width: SIZE, height: SIZE }, deviceScaleFactor: 1 });
  await page.goto('file://' + tmp);
  await page.waitForTimeout(300);
  await page.screenshot({ path: pngPath });
  await page.close();
  fs.unlinkSync(tmp);
}

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  for (const { svg, png } of IMAGES) {
    await render(browser, path.join(DIR, svg), path.join(DIR, png));
    console.log('rendered', png);
  }
  await browser.close();
})();
