# Yuuki Hair Care — Compliance

This is the single source of truth for what Yuuki can and cannot say and formulate.
It is written to be read by whoever is writing copy, not by a lawyer.

**This document is not legal advice.** It reduces exposure; it does not remove it. Have a
cosmetics regulatory consultant or attorney review label proofs before the first production
run.

---

## 1. The category line

Everything Yuuki sells is a **cosmetic**. Cosmetics need no FDA approval and no licence
before going on sale. That freedom is conditional, and the condition is narrow.

A product becomes an **OTC drug** the moment it is *intended* to treat, prevent, cure or
mitigate a disease, or to affect the structure or function of the body. A drug needs a
monograph active, a Drug Facts panel, an NDC number and a registered drug establishment.
None of which Yuuki has, or should try to get.

There are **two independent triggers**, and either one alone is enough:

### Trigger 1 — claim language

What the product says about itself. This includes far more than the label:

- Product page copy, headlines, meta descriptions, OG tags, structured data
- Image `alt` text and image filenames
- Email and SMS
- Customer reviews displayed on our own product pages
- Anything a paid creator says on our behalf
- FAQ and blog content

"Reduces flakes" makes a shampoo a drug even if the formula is nothing but rice water.
Intent is read from the whole context, not from a single sentence.

### Trigger 2 — formula composition

What is actually in the bottle. Certain ingredients are OTC monograph actives. Putting
pyrithione zinc in a shampoo makes it an anti-dandruff drug **even with completely silent
packaging**, because the ingredient itself establishes the intent.

See `compliance/actives-blocklist.json`.

### The practical rule

Describe **what the product does to hair and how it feels**. Never describe **what it does
to a condition**.

> "Removes buildup and leaves the scalp feeling clean" — cosmetic.
> "Removes flakes and soothes an itchy scalp" — drug.

Same product. Same formula. One of them is legal to sell.

---

## 2. Per-SKU classification

| SKU | Positioning | Claim tier allowed | Monograph actives present | Status |
|---|---|---|---|---|
| KOMÉ — cleanser / shampoo | **Scalp** | Tier 3 hair + Tier 3 scalp | none | Highest risk. All guardrails apply. Scalp positioning is what invites the dandruff reading, so this SKU gets the strictest copy review. |
| TSUBAKI — conditioner | Hair only | Tier 3 hair only | none | Do not introduce scalp language. |
| YUZU — curl spray / leave-in | Hair only | Tier 3 hair only | none | Do not introduce scalp language. |

Extend this table as the line grows. Any new SKU starts at **hair-only** positioning unless
there is a reason it must address the scalp, because hair-only is materially safer.

**Monograph actives must read "none" for every row.** A non-empty cell in that column means
the SKU is no longer a cosmetic.

---

## 3. Term lists

`compliance/terms.json` is the machine-readable copy that the linter consumes. **Edit both
together** — the JSON is what actually blocks a commit.

### Tier 1 — DRUG TRIGGER (hard block, never ships)

Any of these converts the product to an unapproved new drug:

`dandruff` · `anti-dandruff` · `flake` · `flakes` · `flaking` · `flaky` · `itch` · `itchy` ·
`itching` · `itchiness` · `seborrheic` · `seborrhea` · `dermatitis` · `eczema` · `psoriasis` ·
`fungal` · `antifungal` · `malassezia` · `yeast` · `scalp condition` · `scalp disorder` ·
`inflammation` · `inflamed` · `anti-inflammatory` · `hair loss` · `thinning hair` ·
`shedding` · `alopecia` · `balding` · `regrow` · `regrowth` · `hair growth` · `DHT` ·
`stimulates follicles` · `follicle stimulation` · `treats` · `treatment for` · `cures` ·
`heals` · `healing` · `medicated` · `prevents [condition]` · `antibacterial` ·
`antimicrobial` · `disinfects` · `therapeutic`

On `prevents [condition]`: the linter matches "prevents" only when a condition word follows
within a few words. **"Prevents frizz" is fine.** "Prevents flaking" is not.

On `antimicrobial`: describing a preservative's function in internal formulation records is
fine. On consumer-facing copy it is a drug claim.

### Tier 2 — FTC SUBSTANTIATION RISK (blocked unless substantiated)

Not drug claims. These are the highest-litigation-risk marketing words in the category, and
the FTC requires competent and reliable evidence for each:

`clean` · `non-toxic` · `nontoxic` · `chemical-free` · `100% natural` · `all natural` ·
`safe` · `clinically proven` · `dermatologist proven` · `dermatologist tested` · `repairs` ·
`rebuilds` · `restores damage` · `reverses damage`

To use one, register the evidence in `compliance/substantiation.json` with the record,
date, approver and scope. The linter clears the term once a record exists. **Adding an entry
without a real record on file defeats the entire system.**

### Tier 3 — SAFE (approved language)

**Hair (all SKUs):** `cleanses` · `washes` · `removes buildup` · `clarifies` · `purifies` ·
`hydrates` · `moisturizes` · `conditions` · `softens` · `smooths` · `detangles` ·
`defines curls` · `reduces frizz` · `adds shine` · `adds volume` · `adds texture` ·
`leaves hair feeling…`

**Scalp (cleanser only):** `cleanses the scalp` · `removes buildup` ·
`leaves the scalp feeling clean / refreshed / balanced` · `lightweight` · `non-stripping`

Tier 3 phrases also act as an **allowlist**: "leaves the scalp feeling clean" is approved
even though it contains the Tier 2 word "clean".

---

## 4. MoCRA baseline — required on every SKU

Applies at every revenue level. Nothing below is waived by being small.

- [ ] **INCI ingredient declaration**, descending order of predominance down to 1%.
      Ingredients at or below 1% may follow in any order. Colour additives last.
- [ ] **Net quantity of contents** on the principal display panel, in both metric and US
      customary, in the bottom 30% of the panel.
- [ ] **Responsible person** — name and place of business.
- [ ] **US domestic address, phone number, or electronic contact for adverse event
      reports.** Mandatory since 29 December 2024. This is the one most often missed.
- [ ] **Required warnings** — "For external use only", eye-contact instruction, and any
      warning specific to the formula.

---

## 5. Records to retain, per SKU

Tracked in `compliance/records/`, one file per SKU.

| Record | Why |
|---|---|
| Preservative challenge test (ISO 11930 or USP <51>) | The core safety evidence for any water-containing product |
| Accelerated stability report | Supports the shelf-life or PAO statement |
| Micro testing | Finished-product microbial counts |
| Raw material COAs | Identity and purity of every input |
| Finished-product COA | What actually went in the bottle |
| Product liability COI | Insurance certificate |

**Anhydrous products** (a pure oil, for example) do not support microbial growth and do not
require a challenge test. Their safety substantiation is documentary — published ingredient
safety assessments, supplier COAs, formula and batch records. The evidence standard scales
with the risk of the format.

**Adverse event records:** retained **3 years** at the current revenue tier, **6 years** once
above $1M.

---

## 6. The $1M trigger

Yuuki is currently under **$1M average annual US gross sales of cosmetic products, measured
over the previous 3 years** (inflation-adjusted). That makes it a small business under
MoCRA, which waives:

- Facility registration (Form FDA 5066)
- Product listing (Form FDA 5067)
- GMP requirements

No form is filed to claim this. You simply do not register. Keep sales records that
demonstrate you are under the threshold, because the burden of showing it falls on us.

**Crossing the threshold activates all three**, and extends adverse-event record retention
from 3 years to 6.

The exemption is **lost regardless of revenue** for products that contact the mucous
membrane of the eye, are injected, are for internal use, or alter appearance for more than
24 hours where the consumer does not customarily remove them. None of Yuuki's current or
planned SKUs fall into those categories — but a permanent hair colour would.

---

## 7. California layer

California regulates beyond the federal baseline. Applies to anything sold to a California
address, which for a DTC brand means it applies.

- **CDPH Safe Cosmetics Act** — if any ingredient appears on the CDPH list of chemicals
  known to cause cancer or reproductive toxicity, the product must be reported to the
  California Safe Cosmetics Program. Check every new raw material against the current list
  before formulating it in.
- **AB 2762 (Toxic-Free Cosmetics Act)** — bans a specific list of intentionally added
  ingredients from cosmetics sold in California. Verify each new raw material against it.
- **Prop 65** — evaluate whether any listed chemical is present above its safe harbour
  level. If it is, a warning is required. Note that a Prop 65 warning on a "clean"-adjacent
  brand is a commercial problem as well as a legal one, so this is best resolved at
  formulation.

---

## 8. Formulation sign-offs

`compliance/actives-blocklist.json` marks salicylic acid as **REVIEW** rather than BLOCK: it
is a permitted cosmetic exfoliant below 1.8%, and an OTC monograph active at or above 1.8%.

Below 1.8% it remains a review item for Yuuki specifically, because combined with scalp
positioning it invites the drug reading even without a claim.

Using it requires a dated sign-off recorded here.

### Sign-off log

_None recorded._

<!-- Format:
- **2026-03-14 — KOMÉ — salicylic acid 0.5%** — approved by [name].
  Rationale: cosmetic exfoliation only; no scalp-condition language anywhere on the PDP;
  reviewed against monograph threshold.
-->

---

## 9. How the guardrail runs

```
npm run compliance           # scan; exit 1 on any Tier 1 or unsubstantiated Tier 2
npm run compliance:suggest   # same, with approved replacements printed inline
npm run compliance:json      # machine-readable
```

- **Pre-commit hook** — `.githooks/pre-commit`, installed by `npm run prepare`.
- **CI** — `.github/workflows/compliance.yml`, runs on every push and pull request.

The linter never edits copy. It reports and blocks; a human rewrites.

`git commit --no-verify` bypasses the hook. Doing so means the finding ships.
