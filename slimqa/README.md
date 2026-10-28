# slimqa — Slimqa Rebrand of uk02

Slimqa-branded edition of `coffee/uk02` (English coffee-booster advertorial).
Same DOM structure, styling, behaviors, and assets as uk02 — with every
Wellaray brand element replaced by Slimqa.

## Structure

```
slimqa/
  index.html        same page, rebranded (Wellaray → Slimqa, 23 text spots)
  css/style.css     unchanged from uk02
  js/app.js         unchanged from uk02 (30%-scroll floating CTA)
  media/            same assets, except the four below
```

## Rebrand notes

- Text: `Wellaray` → `Slimqa` everywhere (title, headings, body copy,
  review section "Slimqa Stories"); 0 case-insensitive `wellaray`
  occurrences remain.
- `media/logo.webp`: rebuilt 686×686 (same geometry as original) with the
  Slimqa wordmark SVG harvested from slimqa.com header, brand green
  `#0E7C4A` on white. **Superseded** (see round 2 below) — the slot now
  shows the before/after avatar; logo.webp removed.
- Round 2 (same day): two more swaps, both to
  `media/slimqa-before-after.png` = the before/after 3D body-scan avatar
  (205.3→159.7 LB, teal/green) from
  `https://everyday-report.com/coffe-ca-v1/assets/image9.png` (1254×1254):
  - Right sidebar widget (`elementor-element-6d8a5e00`, sticky, the dark
    panel with stars/reviews/CTA): its only image slot (previously the
    logo, background-image technique) now shows the avatar at 231×231.
    Mobile: sidebar collapses 0×0, same as uk02.
  - `media/slimqa-reviews.png` (was the /l/gb testimonial collage):
    overwritten with the same avatar, attrs 1254×1254, renders 757×757
    in the article (page height 12854 → 13250 as a result).
- Three product images swapped for Slimqa assets from
  https://slimqa.com/l/gb and https://slimqa.com/offer3/gb
  (Cloudflare imagedelivery originals):
  - `media/slimqa-product.png` (was `KaPBWIMgcc5B0OU.png`) — 30-day supply
    pouch shot from offer3 ("30-day supply" widget), 618×618 (native max),
    replaces the 500×500 product box in the doctor-reveal section.
  - `media/slimqa-reviews.png` (was `84I7rj5dflGKATl.jpg`) — "proven
    results" testimonial collage from /l/gb (desktop variant), 1600×764,
    replaces the German before/after review collage.
  - `media/slimqa-lifestyle.png` (was `iDYbLXjtkNS8hi7.jpg`) — kitchen /
    coffee lifestyle shot from offer3 ("SOLUTION" image), 1080×560
    (native max; the srcset's 1600×1120 is only a request string —
    Cloudflare clamps to 1080 wide), replaces the woman-in-kitchen photo
    with the product box.
- Unbranded assets kept as-is: hero coffee close-up, Margaret before/after,
  infographic, all three videos, fonts.
- CTAs still point to `https://track.healthdeepinsight.com/click`
  (inherited from uk02, not rebranded).

## Verification

- `grep -ci wellaray index.html css/style.css js/app.js` → 0 everywhere
  (README documents the rebrand, so "Wellaray" appears here only).
- All `media/` references resolve to existing files (10 refs, 0 missing,
  logo.webp fully dereferenced and pruned); the swapped references point
  at the new PNGs, `<source type>` hints corrected to `image/png`,
  `width`/`height` attrs set to the real pixel dims.
- Rendered QA (Chrome, file://): desktop 1440 + mobile 390 — 0 broken
  images, title/byline/brand all Slimqa, floating CTA intact; sidebar
  avatar and article review-section avatar verified painting
  (`qa2-sidebar.png`, `qa2-reviews.png`); sidebar collapses on mobile
  exactly like uk02 (parity).
- Screenshots kept in `docs/design-references/slimqa/`
  (`qa-*.png`, `qa2-*.png`) along with the candidate pool from both
  slimqa.com pages (`lgb-*.png`, `offer3-*.png`), the harvested
  replacement (`image9.png`), and the wordmark generator
  (`logo-gen2.html`).
