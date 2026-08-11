# YUUKI — working checklist

The execution layer under `GTM.md`. Ordered by what unblocks what, not by
importance — a $10 ingredient that arrives five days late stalls a four-week
sequence, so it goes above things that matter more.

---

## Four rules that decide whether this works

**1. The audience is the critical path, not the product.** Sixteen weeks of
posting is a longer pole than twelve weeks of lab testing, and the two run in
parallel. The launch date is set by when you started posting, not by when the
formula freezes. Start this week.

**2. Never run a bench trial without a camera.** Every trial in the plan is also
a post. Done with the camera running, bench work and content are the same work
and the week does double duty. Done without, you do the work twice.

**3. One metric: list signups per week.** Follower count, likes and site visits
are diagnostics. The list is the only asset that converts to revenue, and it is
the only number worth reacting to.

**4. Batch every order.** One supplier order, everything at once, even the
things you are not sure you need.

---

## This week

### Order first — longest lead times in the plan

- [ ] **Bottles and fine-mist sprayers.** 2–4 weeks, the longest lead time
      anywhere here, so it goes before things you will actually use sooner.
      120 mL. Order samples of two or three sprayer types — the spray pattern is
      the single most likely unit failure and you cannot judge it from a photo.
      *~1 hr*
- [ ] **One raw-material order.** Flaxseed seed extract, konjac, sodium phytate,
      kombu/alginate, plus yuzu oil and caprylyl/capryl glucoside if scenting.
      Add supplied Oryza Sativa Ferment Filtrate if what you have is homemade.
      *~1 hr*
- [ ] **Record the fill size decision: 120 mL.** Unblocks the label art, which is
      currently drawn at 120 mL while the product page says 250 mL. *~5 min*

### Fix the collection problem

- [ ] **Move the waitlist off Formspree onto a real email platform.** Formspree
      stores submissions and notifies you; it does not send campaigns. Every
      address collected today is one you have no mechanism to email, and the
      whole launch plan is a segmented broadcast. MailerLite, Kit or Loops all
      do this on a free tier at your list size. *~45 min*
- [ ] **Map the quiz payload to subscriber tags.** `quiz.html` already sends
      curl pattern, climate, goals and recommended routine alongside the email.
      Land those as tags rather than form fields, or the segmentation exists in
      an inbox instead of in the tool that sends the mail. *~30 min*

### Pixels — 30 minutes, unrecoverable if skipped

- [ ] Real Meta pixel ID into `index.html`, both places (currently the literal
      string `YOUR_META_PIXEL_ID`)
- [ ] TikTok base code, copied fresh from Events Manager
- [ ] Copy GA4 and both pixels to `quiz.html`, `product-*.html`, `cart.html` —
      they are on the homepage only, so your highest-intent pages are invisible

Every visitor who arrives before this is done is unrecoverable for retargeting.
Retargeting a warm quiz-taker is the cheapest paid acquisition you will ever
have access to.

### Start the engine

- [ ] **Set up one permanent filming spot.** Window light, one surface, props
      matched to the site palette (`--rice #F3EEE2`, `--kraft #D9CDB4`,
      `--sumi #2A2521`, `--camellia #9C2B3B`). Leave it standing. A setup you
      have to rebuild is a setup you stop using by week three. *~2 hrs, once*
- [ ] **Rewrite the founder quote** on `index.html` — see `GTM.md`. It is the
      only copy on the site nobody else can write. *~1 hr*
- [ ] **Post one.** "I'm formulating a curl spray in public. Here's the first
      decision." You do not need the materials to have arrived to post this.

---

## Weeks 2–5 — the bench, filmed

Each line is a trial and a post. Camera before pipette.

- [ ] Konjac ladder — 0.05 / 0.10 / 0.15 / 0.20%, spray-tested through the
      production sprayer at 24 hrs and again at 2 weeks
- [ ] Trial A — flaxseed version, per `formulation/yuzu-curl-spray.md` §9
- [ ] Trial B — kombu/alginate version alongside it
- [ ] Hold test — both against a base-formula control, judged at hour 1, hour 6
      and next morning. Clump retention and frizz at the crown.
- [ ] **Freeze the formula.** Write the final percentages into §2 of the
      formulation doc and stop.
- [ ] Decide the front panel from the hold data, not from the label art

---

## Weeks 5–17 — two tracks in parallel

### Track 1 — lab. Gated on the frozen formula.

- [ ] Preservative challenge test, ISO 11930, final formula in final packaging
- [ ] Accelerated stability — 12 wks at 40 °C, RT control, 3 freeze/thaw cycles,
      pulls at 0/2/4/8/12
- [ ] Raw-material COAs and SDSs filed against `compliance/records/yuzu.md`
- [ ] Product liability COI

### Track 2 — audience. Never stops, never waits on track 1.

- [ ] Three posts a week, sixteen weeks
- [ ] Every post ends at the quiz, not at a product page
- [ ] Log list signups every Saturday

**Post bank** — each is one post, most are already done work:

1. Why cationic guar came out, and what "plant-derived" hides under ISO 16128
2. Flax versus kombu, side by side, with the hour-6 result
3. The konjac ladder — four strengths, one of them clogging on camera
4. Why a water-based leave-on must be preserved, and why "preservative-free" is
   a warning rather than a feature
5. Why steam-distilled yuzu and not cold-pressed
6. Why sea salt came out of a curl product
7. What each of the nine ingredients in the core line actually does
8. The challenge test — filmed going out, and again when the result lands
9. Why the bottle costs three times what goes in it
10. Hand-batching the founding run, start to finish

---

## Weeks 12–20 — seeding

Gated on a challenge-tested product. Seeding an untested water-based leave-on
carries the same exposure as selling it.

- [ ] Shortlist 30 creators spanning 2B–4C, drawn from people already engaging
      with the bench content
- [ ] Send to 8–12. Free product, no script, no approval rights.
- [ ] One ask: wash day, day two, day three.

---

## Month 5–6 — launch

- [ ] Stripe out of test mode
- [ ] Label proof against the MoCRA checklist in `COMPLIANCE.md` §4, including
      the adverse-event contact
- [ ] Regulatory review of the label proof before anything is printed
- [ ] Segmented launch email — 4B subscribers see 4B proof footage
- [ ] Batch size set by presales, not by hope

---

## Not yet — deliberately

Keeping these off the list is what makes the rest of it fit in a week.

- **Paid ads.** No proven creative, no pixel history, no retargeting pool.
- **Discounting the founding batch.** Anchors the price low permanently.
- **More formulation.** The trials above are the last bench work before freeze.
- **Printing anything.** Fill size and front panel are both still open.
- **A fifth product.** There is no version of this where a new SKU is the
  bottleneck.

---

## Weekly rhythm

A cadence you can keep beats a plan you admire.

| | |
|---|---|
| **Mon** | Bench or batch work — camera running |
| **Tue** | Edit and post |
| **Thu** | Post |
| **Sat** | Post, then log the week's list signups |

Two of the four are posting days with no new work behind them, which is
deliberate: the footage from Monday is three posts, not one.
