# YUZU Curl Spray — bench formulation

Working formulation record for the fourth SKU, currently shown as *Coming Soon*
on `product-yuzu.html`. Percentages are `% w/w`. This is the internal build
sheet, not consumer copy.

**Not legal advice.** Evidence gates in §6 are not optional — see `COMPLIANCE.md`
and `compliance/records/yuzu.md`.

---

## 1. Format constraints

The format decides the formula before any ingredient does.

| Constraint | Consequence |
|---|---|
| Fine-mist sprayer, ~0.12 mL/stroke | Viscosity must stay near water. Anything above roughly 100 cps stops atomising and starts spitting. |
| Leave-on, water-based | Highest microbial exposure format in the line. Preservation evidence matters more here than anywhere else. |
| Applied to damp hair, not rinsed | Everything left behind stays on the hair. Surfactant load has to be low or the spray goes tacky by hour six. |
| Hair-only positioning | No scalp language anywhere, per the per-SKU table in `COMPLIANCE.md` §2. |

---

## 2. The formula

Batch shown at 5.00 kg, which fills 38–40 × 120 mL bottles after transfer loss.

| Phase | INCI | % w/w | 5 kg | Function |
|---|---|---:|---:|---|
| A1 | Water (Aqua) | 90.95 | 4547.5 g | Carrier. Distilled or deionised only. |
| A1 | Konjac (Amorphophallus Konjac) Root Extract | 0.10 | 5.0 g | Slip and a light film. Ladder this — see §2.1. |
| A1 | Sodium Phytate | 0.10 | 5.0 g | Chelator. Ties up trace metal ions that would otherwise oxidise the citrus terpenes. |
| A2 | Rice (Oryza Sativa) Ferment Filtrate | 5.00 | 250.0 g | The rice-water story, and a mild humectant. Also the largest nutrient load in the bottle. |
| A2 | Hydrolyzed Rice Protein | 2.00 | 100.0 g | Body and hold. The workhorse for definition in this formula. |
| B | Caprylyl/Capryl Glucoside | 0.60 | 30.0 g | Plant-derived solubiliser for the essential oil. |
| B | Yuzu (Citrus Junos) Peel Oil | 0.10 | 5.0 g | Scent. **Steam-distilled only** — see §2.2. |
| C | Benzyl Alcohol (and) Dehydroacetic Acid | 1.00 | 50.0 g | Preservation system, supplied as a blend. |
| C | Citric Acid (50% solution) | 0.15 q.s. | 7.5 g | pH to 4.8–5.2. |
| | **Total** | **100.00** | **5000.0 g** | |

The declaration already printed on `labels/yuzu-curl-spray-120ml.svg` is valid at
these levels: water, ferment filtrate and protein are the only inputs above 1%
and they appear in descending order; everything below 1% may follow in any order.
Changing the protein or ferment levels relative to each other means re-checking
that order.

### 2.1 Konjac is the variable that breaks the sprayer

Konjac glucomannan is one of the most viscous gums available — considerably more
so than xanthan at equal weight. At 0.10% it contributes slip without leaving
the sprayable range; by roughly 0.2–0.3% expect the mist to break up into
droplets and the dip tube to clog.

Run a ladder before committing: 0.05 / 0.10 / 0.15 / 0.20%, spray-test each
through the actual production sprayer at 24 hours and again at two weeks
(glucomannan keeps hydrating). Take the highest level that still atomises
cleanly, then step back one.

### 2.2 Steam-distilled yuzu, not cold-pressed

Cold-pressed citrus peel oil carries furanocoumarins, which are phototoxic on a
leave-on product. Steam distillation leaves them behind. Specify the process on
the purchase order and confirm it on the COA — "yuzu peel oil" alone does not
tell you which you received.

At 0.10% in a leave-on, limonene and citral will each exceed the 0.001% EU
fragrance-allergen declaration threshold. A US-only launch is unaffected. Selling
into the EU or UK means adding those names to the label.

### 2.3 Solubiliser ratio

6:1 solubiliser to oil is the starting point. Alkyl polyglucosides are weaker
against citrus terpenes than polysorbate, so if the batch hazes at 24 hours,
step the glucoside up 0.1% at a time to a ceiling of 1.0%. Above that, the
residue starts to be perceptible on dry hair and the reason for using a spray
disappears.

### 2.4 Why pH 4.8–5.2

Two reasons that happen to agree. Benzyl alcohol / dehydroacetic acid only works
below pH 6 and wants ≤5.5 — dehydroacetic acid needs to stay in its undissociated
form. Separately, mildly acidic is where the hair cuticle lies flattest. Above
pH 6 this formula is both under-preserved and worse on hair.

---

## 3. What this formula does not have

Nothing in the current ten-ingredient list holds a curl. Protein at 2% plus
konjac at 0.1% gives slip, a little body, and a film you can feel while damp —
that is a **refresher**, not a definer. The front panel currently reads "Defines
curl. Blocks frizz. No crunch." Two of those three are earned; the first is not.

The curly-hair audience is, by the brand's own positioning document, the most
ingredient-literate in beauty. They will work this out from the INCI list before
they buy, and from the mirror if they do.

### 3.1 The standing constraint

**No synthetically modified ingredients, and nothing carrying a listed carcinogen
concern — including at the reagent and residual level, not only in the finished
material.** This is a brand rule, upstream of anything the law requires, and it
follows from the position in `marketing/POSITIONING.md`: food-grade traditional
inputs, harsh things deliberately rejected.

It rules out the obvious answer, so it is recorded here rather than
re-litigated each time someone reaches for a performance polymer.

### 3.2 Ruled out: cationic guar

Guar Hydroxypropyltrimonium Chloride is the standard fix and the one most curl
sprays use. Guar bean backbone, quaternized with CHPTAC
(3-chloro-2-hydroxypropyltrimethylammonium chloride) to graft on a positive
charge; hair carries a negative charge, the polymer binds to it, and that
substantivity is what makes curls clump.

Two reasons it does not go in:

- **It is a synthetically modified material.** Suppliers quote a high natural
  origin index under ISO 16128, but that standard scores carbon origin, not
  processing. It is not accepted under COSMOS/Ecocert.
- **CHPTAC is manufactured from epichlorohydrin**, which is IARC Group 2A and
  Prop 65 listed. The finished polymer is not itself a listed carcinogen and has
  been through CIR review, but clearing it would mean holding a supplier spec on
  residual epichlorohydrin and related chloropropanols for every lot.
  `COMPLIANCE.md` §7 says resolve Prop 65 at formulation rather than at the
  warning label. This is that case.

Same reasoning excludes the cationic protein fallback (Cocodimonium Hydroxypropyl
Hydrolyzed Rice Protein) and any other quaternized polysaccharide, including
Cassia and Guar Hydroxypropyltrimonium variants.

Worth noting the constraint is already being met elsewhere: caprylyl/capryl
glucoside is non-ethoxylated, so it avoids the 1,4-dioxane and ethylene oxide
residuals that polysorbate 20 would bring. Both are Prop 65 listed. Keep the
glucoside.

### 3.3 The remaining paths

**Option A — ship as-is, reposition the copy.** Sell it as a reviver: re-wets
day-two and day-three curls, reshapes, adds scent. Change the front panel to
match. Zero new inputs, zero new compatibility work, and it is defensible.
Cheapest path, smallest product.

**Option B — build definition from unmodified plant polymers. Recommended.**
No single ingredient replaces cationic guar, so this is a stack rather than a
swap:

| Addition | Level | Doing what |
|---|---|---|
| Hydrolyzed Rice Protein — raise from 2.0% | 3.0% | Primary definer. Above ~3% repeated use starts to feel stiff, so this is the ceiling, not a dial. |
| Linum Usitatissimum (Linseed) Seed Extract | 2–5% | The film former. Flaxseed mucilage is the strongest definition available without modification. **Supplied and preserved, never home-brewed.** |
| Konjac Root Extract | 0.05–0.10% | Slip, per the §2.1 ladder |
| Glycerin | 1.0% | Humectant, and the gum wetting agent |

On-brand alternative to the flaxseed, worth trialling in parallel: **Laminaria
Japonica Extract** or sodium alginate at 0.1–0.3%. Kombu fits the Japanese
ingredient story better than flax does, and alginate films well. It is more
sensitive to hard water, which is what the sodium phytate in the base is already
there for.

**Set expectations honestly:** an unmodified plant stack gives softer, more
touchable definition that gives up ground to a cationic polymer in high humidity.
That is the trade being made deliberately. It also means the front panel still
needs the Option A treatment — this stack earns "defines" in the sense of
encouraging clumps, not in the sense of locking a cast.

**Option C — a synthetic film former** (VP/VA copolymer and similar). Best
humidity performance of anything here, and out of bounds under §3.1. Recorded
only so the reason is on paper.

---

## 4. Procedure — 5 kg cold-process batch

Cold process throughout except the konjac hydration step. Total hands-on time is
about 90 minutes, plus cooling.

**Sanitation first.** Every contact surface, vessel, spatula, bottle and sprayer
gets 70% isopropyl alcohol and full air-drying. Water is distilled or deionised.
No tap water at any step, including rinses.

1. **Hydrate the konjac.** Weigh 2700 g of the water into the main vessel and
   heat to 70–75 °C. With an overhead stirrer or immersion blender running to
   maintain a vortex, sprinkle in the konjac and the sodium phytate slowly —
   dumping produces lumps that never disperse. Hold 20 minutes at temperature
   with stirring. Remove from heat.
2. **Cool.** Add the remaining water cold to bring the batch down faster. Do not
   proceed until the batch is below 40 °C.
3. **Phase A2, below 40 °C.** Add the rice ferment filtrate, then the hydrolysed
   rice protein. Stir gently and keep the blade submerged — protein plus
   surfactant foams readily, and folded-in air is both a fill problem and an
   oxidation problem.
4. **Phase B premix, separately.** Combine the caprylyl/capryl glucoside and the
   yuzu oil in a small beaker and stir until uniform and translucent. Add this
   premix to the main batch in a thin stream under stirring. The batch should
   stay clear to very slightly opalescent.
5. **Phase C.** Add the benzyl alcohol / dehydroacetic acid blend. Stir 5 minutes.
6. **pH.** Measure with a calibrated meter. Adjust into 4.8–5.2 with the 50%
   citric acid solution, added dropwise with a full 2 minutes of stirring between
   additions — overshooting down is far more work than creeping up on it. Record
   the final reading in the batch record.
7. **Make weight.** Top up with water to 5000.0 g to compensate for evaporation.
   Stir 5 minutes. Take a 30 mL retain before filling.
8. **Fill.** Weigh-fill 120 g ± 2 g into sanitised bottles. Fit sprayers, prime
   each one with three strokes over a waste beaker, and confirm the mist pattern
   on every unit — a clogged sprayer is the most likely single-unit failure of
   this product. Batch code and best-by on every bottle.

---

## 5. In-process QC

Per batch, recorded and retained:

| Check | Specification |
|---|---|
| Appearance | Clear to slightly hazy, pale straw. No separation, no sediment. |
| Odour | Citrus, no rancid or solvent note. |
| pH | 4.8–5.2 |
| Fill weight | 120 g ± 2 g |
| Spray pattern | Fine even mist, 5 consecutive strokes, no spitting |
| Retain | One filled unit + 30 mL bulk, held at room temperature for the life of the batch |

Hold the batch if pH lands outside range and cannot be brought in, if haze
appears within 24 hours of filling, or if the mist pattern fails on more than a
couple of units.

---

## 6. Evidence gates before this can be sold

A water-based leave-on is the format that most needs this, and the SKU record at
`compliance/records/yuzu.md` currently reads **MISSING** on every line.

1. **Preservative challenge test** (ISO 11930 or USP <51>) on the final formula
   in the final packaging. Not on a close relative of it — the sprayer and the
   bottle are part of what is being tested. Roughly $400–700.
2. **Accelerated stability** — 12 weeks at 40 °C, plus a room-temperature control
   and three freeze/thaw cycles. Pull at 0/2/4/8/12 weeks for appearance, odour
   and pH. This is what supports the best-by date.
3. **Finished-product micro** on the first production batch.
4. **Raw material COAs and SDSs** for all ten inputs, filed against the batch.
5. **Label proof** against the MoCRA checklist in `COMPLIANCE.md` §4, including
   the adverse-event contact.
6. **Product liability insurance** extended to cover the SKU.

Gates 1 and 2 run in parallel and are the long pole: budget 12 weeks and roughly
$1,000–2,000 total before the first bottle can ship.

---

## 7. Cost per unit

At 5 kg batch scale, 120 mL fill. Raw-material prices are small-quantity
estimates and should be replaced with real quotes.

| Input | Per bottle |
|---|---:|
| Rice ferment filtrate | ~$0.15 |
| Hydrolysed rice protein | ~$0.10 |
| Yuzu peel oil (steam-distilled) | ~$0.07–0.14 |
| Preservation blend | ~$0.05 |
| Glucoside, konjac, phytate, citric | ~$0.04 |
| **Formula subtotal** | **~$0.45** |
| Bottle + fine-mist sprayer | ~$1.10–1.60 |
| Label | ~$0.25 |
| **COGS** | **~$1.80–2.30** |

The bottle costs three times what goes in it. That is normal for this format and
it means sprayer sourcing, not ingredient sourcing, is where the margin work is.

---

## 8. The build decision

**Worth building — as the fourth SKU, after the ritual set ships, and with
Option B in it.**

The case for: it is the cheapest unit in the line to produce, it is already
announced with a waitlist attached, it is the natural add-on to a set that
currently ends at a leave-in cream, and `marketing/POSITIONING.md` already uses
early access to it as the non-discount incentive for the founding batch. Adding
about $25 of contribution to an existing order costs nothing in fulfilment
labour.

The case against, and it is real: roughly $1,000–2,000 of testing and 12 weeks
of calendar sit in front of the first sale, on a SKU whose launch-math volume is
double-digit units. It pays back somewhere around 60–80 bottles. That is
reachable as an attachment to the set and is not reachable as a standalone
launch.

What would change the answer: shipping it without the challenge test (never — it
is the highest micro-risk format in the line, on a product that goes on damp hair
and stays there), or shipping Option A while keeping the "defines curl" front
panel. A refresher sold as a definer, to this audience, buys one return and one
review that costs more than the SKU earns.

Sequence it: run the Option B compatibility trial and the konjac ladder now, since
both are bench work with no lab spend. Start the challenge test the week the
ritual set goes to fulfilment.

---

## 9. First trial batch — 500 g

Small enough to throw away, large enough to fill four bottles and live with for
a month. This is the §3.3 Option B stack — the unmodified plant-polymer route —
sized for the bench. Percentages total 100.00.

| INCI | % | 500 g | Note |
|---|---:|---:|---|
| Water (Aqua) | 85.65 | 428.25 g | Distilled |
| Rice (Oryza Sativa) Ferment Filtrate | 5.00 | 25.0 g | Supplied, preserved, with a COA — see below |
| Linum Usitatissimum (Linseed) Seed Extract | 3.00 | 15.0 g | The film former. Supplied, not home-brewed. |
| Hydrolyzed Rice Protein | 3.00 | 15.0 g | Primary definer, at its ceiling |
| Glycerin | 1.00 | 5.0 g | Humectant, and the gum wetting agent |
| Sodium Phytate | 0.10 | 0.5 g | |
| Konjac (Amorphophallus Konjac) Root Extract | 0.10 | 0.5 g | Slip. Ladder per §2.1. |
| Caprylyl/Capryl Glucoside | 0.60 | 3.0 g | Omit with the oil for an unscented trial |
| Yuzu (Citrus Junos) Peel Oil | 0.10 | 0.5 g | Steam-distilled |
| Benzyl Alcohol (and) Dehydroacetic Acid | 1.00 | 5.0 g | Confirm the blend's own pH ceiling |
| Citric Acid (50% solution) | 0.45 q.s. | 2.25 g | More acid needed here than in §2 — the flax extract carries pH up |

**Procedure.** Cold process except the konjac hydration, which still needs heat.

1. Slurry the konjac powder into the glycerin until there are no dry lumps. This
   is what the glycerin is for — sprinkled straight into water it makes fisheyes
   that never disperse.
2. Heat 270 g of the water to 70–75 °C. Stir in the konjac/glycerin slurry and
   the sodium phytate, hold 20 minutes with stirring.
3. Add the remaining water cold. Do not proceed below 40 °C.
4. Add the flaxseed extract, then the rice ferment filtrate, then the protein.
   Stir gently with the blade submerged — this batch foams readily.
5. Premix the glucoside and yuzu oil separately, add in a thin stream.
6. Add the preservation blend, stir 5 minutes.
7. pH into 4.8–5.2 with the citric solution, dropwise. Expect to use noticeably
   more than the base formula. Make weight, fill.

**Two things to watch.** Sprayability is the first — flax mucilage plus konjac
plus 3% protein is the most viscous version of this product, so mist-test at
24 hours and again at two weeks before deciding the levels are right. Drop the
konjac to 0.05% before touching the flax if it spits. The second is preservation:
flaxseed extract and ferment filtrate together are a heavy nutrient load, so this
is the version that most needs the challenge test in §6 run on the final formula
rather than on a relative of it.

**Hold performance** is the point of the trial. Wash, apply to soaking-wet hair,
scrunch, air dry, and judge at hour 1, hour 6 and next morning — clump retention
and frizz at the crown. Compare against a control of the §2 base formula. If the
flax version is not obviously better, the honest conclusion is Option A and the
front panel changes.

### On the rice water

If the rice ferment filtrate is homemade rather than supplied, it does not go in
this formula. Home-fermented rice water is an unpreserved nutrient broth with an
unknown starting bioburden and no COA, going into the highest microbial-exposure
format in the line, as a leave-on. Buy Oryza Sativa Ferment Filtrate from a
cosmetic raw-material supplier: it arrives preserved, standardised and
documented, and the COA is one of the records the SKU file requires anyway.

---

## 10. Open items

- **Fill size conflict.** `labels/yuzu-curl-spray-120ml.svg` is drawn for
  120 mL / 4 fl oz; the bottle art in `product-yuzu.html` reads 250 mL / 8.5 fl oz.
  One of them has to change before anything is printed. 120 mL is the better
  choice for a leave-on with a 12-month best-by — a 250 mL bottle of daily-use
  spray outlives its own preservation window for most users.
- **`products.js` has no `yuzuSpray` entry.** Correct while the SKU is
  Coming Soon; it needs one before the tab can sell anything, and the ingredient
  list currently lives hardcoded in `product-yuzu.html`.
- Front-panel copy depends on the Option A/B decision in §3.
- Supplier and grade for the konjac extract are unspecified; glucomannan
  viscosity varies enough between grades that the §2.1 ladder must be re-run if
  the supplier changes.
