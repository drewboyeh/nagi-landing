# YUUKI — Go to market

Companion to `POSITIONING.md`, which covers what the brand says. This covers
what gets built, in what order, and why.

Written from a standing start: no audience, no list, no posting cadence.

---

## The premise

**The formula is not the constraint. Distribution is.**

There are three SKUs specified, a fourth at the bench, a quiz that segments
better than most funded brands manage, and a compliance system that is genuinely
ahead of where a pre-revenue brand needs to be. What there isn't is a single
person who wants to buy it.

Everything below follows from that. The temptation from here is to keep
formulating, because formulating is legible and satisfying and produces
artefacts. It is also, right now, the lowest-value work available.

---

## Decision: curl-first

The line is a curl line. The quiz asks people to place themselves on a 2A–4C
scale. `POSITIONING.md` names the curly-hair community as the audience and the
reason this brand can win. The site, until now, sold a scalp detox.

Curl-first, for three reasons:

1. **Curl is a community; scalp is a category.** Curly-hair audiences share wash
   day results with each other unprompted, and trust micro-creators more than
   they trust brands. Scalp care has no equivalent behaviour, and the shelf is
   already held by Kérastase and Act+Acre.
2. **It retires the worst compliance exposure.** `COMPLIANCE.md` §2 names KOMÉ's
   scalp positioning as the highest-risk thing in the line — the one that invites
   the drug reading. Curl positioning is materially lower risk and gives up
   nothing commercially.
3. **It resolves the brand into one story.** The homepage said detox and reset.
   `POSITIONING.md` says care, not correction. Those are opposite instincts and
   both were live.

The Japanese ritual origin stays. It moves from being the pitch to being the
reason the pitch is credible.

---

## The reframe: the Curl Spray is the audience, not the revenue

The obvious read is that the spray is SKU four and waits its turn. That is the
wrong read at zero audience.

**A product being visibly unfinished is the best content premise available to a
brand nobody has heard of.** The bench work in `formulation/yuzu-curl-spray.md`
is already a content calendar:

- why cationic guar came out, and what "plant-derived" hides under ISO 16128
- flax versus kombu, filmed side by side, with the hold test at hour 6
- the konjac ladder — four strengths, four spray patterns, one of them clogging
  on camera
- why a water-based leave-on has to be preserved, and why "preservative-free" is
  a warning rather than a feature
- why steam-distilled yuzu and not cold-pressed
- the challenge test, filmed as it is sent, and the result when it lands

`POSITIONING.md` already identified that the formulation decisions are the
marketing, and that most small brands white-label and therefore cannot do this.
The missing piece was a reason to publish them on a schedule. An unfinished
product is that reason: each decision is a post because each decision is
genuinely still open.

The spray's commercial job comes later, and it is a good one — see
[Why the spray matters after launch](#why-the-spray-matters-after-launch).

---

## Sequence

### Phase 0 — fix the funnel (weeks 1–2, no cost)

The site currently sends curly-haired visitors to a scalp detox pitch, and hides
its best asset in the nav.

- [x] Rewrite the homepage curl-first
- [x] Make the quiz the primary homepage call to action, not the email box
- [ ] Rewrite the founder quote in the founder's own voice — see
      [The founder quote](#the-founder-quote)
- [ ] Paste the real Meta pixel ID into `index.html` (currently the literal
      string `YOUR_META_PIXEL_ID`) and add the TikTok base code
- [ ] Add the pixels and GA to `quiz.html`, `product-*.html` and `cart.html`.
      They are on the homepage only, so the highest-intent pages in the funnel
      are invisible

The pixel work matters more than it looks. Every visitor arriving before it is
fixed is unrecoverable for retargeting later, and retargeting a warm quiz-taker
is the cheapest paid acquisition that will ever be available here.

### Phase 1 — build in public (months 1–4)

Founder-led, unpaid, the only phase that actually creates the audience.

The format is the bench, not the brand. Hands, scale, beaker, a spray pattern
that fails. `POSITIONING.md` calls the visual grammar *repetition rather than
transformation* — process footage is exactly that, and it is cheap to shoot well
in the way glossy footage is not.

Cadence over polish: three posts a week for sixteen weeks beats a launch film.
The realistic outcome is the one already modelled in `POSITIONING.md` —
500–1,500 followers, of whom 5–10% join the list.

Every post ends at the quiz, not at a product page. The quiz gives something
before it asks, and it segments the list by curl pattern on the way through,
which is what makes Phase 3 work.

### Phase 2 — seed (months 3–5)

Gated on finished, challenge-tested product. Seeding an untested water-based
leave-on is not a shortcut, it is the same exposure as selling it.

8–12 people spanning 2B to 4C. Free product, no script, no approval rights, one
ask: wash day, day two, day three. Micro-accounts in the 2k–20k range, because
trust density in this community runs inversely to follower count.

Recruit from the people already engaging with the Phase 1 content. A creator who
has watched the konjac ladder fail on camera needs no pitch.

**Curl-type range is the entire point.** Founder content, however good, shows one
curl pattern. Somebody with 4A hair will not buy on 3A results — curl type is a
filter, not a preference. This is the gap seeding exists to fill, which is why
both channels are needed rather than either.

### Phase 3 — pre-sell the founding batch (months 5–6)

Payment before production: no inventory risk, known batch size, raw materials
funded by revenue that already exists.

Lead with the Ritual Set at $94, per the contribution maths in `POSITIONING.md`.
Hold full price. The founding-batch incentive is the spray — first access, or
included — never a discount.

Segment the launch email by the curl pattern the quiz already collected. A 4B
subscriber should open a mail whose proof footage is 4B hair.

---

## Why the spray matters after launch

Its real value is not attach revenue. It is **cadence**.

| | Used | Empties in |
|---|---|---|
| KOMÉ / TSUBAKI / YUZU cream | wash day, 1–2× a week | 2–3 months |
| Curl Spray | daily, between washes | 4–6 weeks |

It is the only SKU in the line with a monthly rhythm, which makes it the
subscription anchor and the largest single lever on lifetime value. A set
customer who also refills a spray is worth several times a set customer who does
not.

That argues for two things at launch: sell it bundled (Set + Refresh at ~$118)
rather than standalone, and put a refill option on it before anything else in the
line gets one.

---

## What not to do yet

- **No paid acquisition.** No creative that has proven it converts, no pixel
  data, no retargeting pool. Paid at this stage buys a lesson at retail price.
- **No discounting the founding batch.** Discounting to the people who want you
  most anchors the price low permanently, and scarcity and discount contradict
  each other.
- **No further formulation.** The base formula is specified and the trials are
  designed. Additional bench work past the §9 trials is procrastination wearing a
  lab coat.
- **Nothing printed.** Fill size is still unresolved between the label art and
  the product page, and the front panel depends on how the hold trial reads.

---

## The founder quote

The homepage founder quote is a first-person story about buildup and waxy film —
a scalp story, written for the old positioning. It needs to become a curl story,
and it has to be written by the founder, because it is the one piece of copy on
the site that is a claim about a real person's life.

What it needs to do, in about the same length:

- name the specific frustration, concretely, the way the current one does
  ("the film that never quite rinsed out" is a good sentence — it is just about
  the wrong problem)
- land on why *fewer* ingredients rather than more, since that is the whole
  position
- avoid promising a transformation, because the brand's argument is that
  transformation is what the alternative sells

Left in place until then rather than invented — a fabricated origin story is the
one thing here that cannot be fixed later.
