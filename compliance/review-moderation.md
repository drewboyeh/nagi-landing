# Review and UGC Moderation Policy

Not legal advice. See `COMPLIANCE.md` for the category rules this implements.

## Why this exists

A customer review displayed on our own product page is treated as **our claim**. If a
reviewer writes "this cleared up my dandruff" and we publish it on the KOMÉ page, we have
made a drug claim as surely as if we had written it into the product description ourselves.

The FTC's position is that a brand cannot use customer voice to say what it is not permitted
to say directly. Publishing is the act that makes it ours.

## Rules

### 1. Tier 1 terms are withheld from display

Any review containing a Tier 1 term from `compliance/terms.json` is **withheld** from the
product page. This applies to every SKU and is strictest on the cleanser PDP, where scalp
positioning already carries the most drug-claim risk.

### 2. Reviews are never edited — only withheld

We do not rewrite a customer's words. Two reasons:

- Editing a review to *strengthen* a claim is a separate and worse violation, and the line
  between "trimming" and "strengthening" is not one we want to be defending.
- An edited review presented as authentic is deceptive regardless of the direction of the
  edit.

The only permitted actions are **display** and **withhold**. There is no third option.

### 3. Moderation happens at ingestion

The check runs when a review arrives, not at render time. Same `terms.json` the linter uses,
so there is one vocabulary and no drift between what copy may say and what a review may say.

### 4. Withheld reviews are logged

Every withheld review is recorded in the audit file with:

- Review ID and date received
- The matched term and its tier
- The full unedited review text
- Date of the withhold decision

Retain for the same period as adverse event records — **3 years** at the current revenue
tier, **6 years** above $1M.

The log matters because a pattern of withheld reviews all describing the same condition is
itself information. If twenty people independently report the same effect, that is a
formulation and positioning signal worth acting on, even though none of it can be published.

### 5. Withholding is not deletion

A withheld review stays in the record. We are declining to publish it, not pretending it
never arrived. If a reviewer asks why their review is not visible, the honest answer is that
we cannot publish claims about medical conditions, and it is not a reflection on their
experience.

## Adverse events are a separate obligation

Moderation and adverse-event reporting are different systems and must not be conflated.

If a review describes a **reaction to the product** — irritation, burning, hair loss,
rash — it must be captured as an adverse event record regardless of whether it is published.
Withholding it from the page does **not** discharge the reporting obligation.

Serious adverse events must be reported to FDA within 15 business days.

## What is not affected

Reviews describing cosmetic outcomes are fine and should be published:

> "my curls hold definition all day" · "scalp feels clean without that stripped feeling" ·
> "less frizz in humidity" · "leaves my hair soft"

The policy targets disease language, not enthusiasm.
