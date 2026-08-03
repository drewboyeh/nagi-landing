const { chromium } = require('playwright');
const fs = require('fs');

const svg = fs.readFileSync('/home/user/nagi-landing/labels/kome-cleanser-promo-mono.svg', 'utf8')
  .replace(/<\?xml[^>]*\?>/, '');

const COLS = 3, ROWS = 5, LW = 2.5, LH = 1.75;
const marginX = (8.5 - COLS * LW) / 2;   // 0.5in
const marginY = (11  - ROWS * LH) / 2;   // 1.125in

let cells = '';
for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
    const x = marginX + c * LW, y = marginY + r * LH;
    cells += `<div class="cell" style="left:${x}in;top:${y}in">${svg}</div>\n`;
  }
}

// cut guides: hairlines running full bleed through the trim lines
let guides = '';
for (let c = 0; c <= COLS; c++) {
  const x = marginX + c * LW;
  guides += `<div class="v" style="left:${x}in"></div>`;
}
for (let r = 0; r <= ROWS; r++) {
  const y = marginY + r * LH;
  guides += `<div class="h" style="top:${y}in"></div>`;
}

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@page { size: 8.5in 11in; margin: 0; }
html,body { margin:0; padding:0; width:8.5in; height:11in; }
body { position:relative; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
.cell { position:absolute; width:${LW}in; height:${LH}in; overflow:hidden; }
.cell svg { width:${LW}in; height:${LH}in; display:block; }
.v { position:absolute; top:0; height:11in; width:0; border-left:0.4pt solid #bbb; }
.h { position:absolute; left:0; width:8.5in; height:0; border-top:0.4pt solid #bbb; }
.note { position:absolute; left:0.5in; top:10.55in; font:8pt Arial,sans-serif; color:#888; }
</style></head><body>
${guides}
${cells}
<div class="note">YUUKI &middot; KOM&Eacute; Rice Water Cleanse &middot; 2.5 &times; 1.75 in &middot; 15 up &middot; print at 100% / Actual Size &middot; cut on grey guides</div>
</body></html>`;

fs.writeFileSync('./kome-sheet.html', html);

(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage();
  await p.goto('file:///tmp/claude-0/-home-user-nagi-landing/49902f50-6fa6-58cc-99f9-03a1d9a03848/scratchpad/kome-sheet.html');
  await p.waitForTimeout(700);
  await p.pdf({ path: '/home/user/nagi-landing/labels/kome-cleanser-labels-letter.pdf',
                width: '8.5in', height: '11in', printBackground: true, pageRanges: '1' });
  await p.screenshot({ path: './kome-sheet.png', fullPage: true });
  await b.close();
  console.log('done');
})();
