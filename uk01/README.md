# uk01 — Static Clone

Static mirror of
`https://smartwellnessreport.com/morning-coffee-ritual/`
(UK coffee-booster advertorial — "Doctors and nutritionists are stunned…").

## Structure

```
uk01/
  index.html          the page (verbatim DOM, cleaned head)
  css/
    product.css       product/offer block styles (from the origin)
    theme.css         shared theme build (Bootstrap-like + Tailwind-ish utilities)
    main.css          page main styles
    fonts.css         Open Sans @font-face (see note below)
    cb.css            cookie-banner styles
    extras.css        sticky bottom bar + attention box (from inline <style> blocks)
  js/
    sticky-bar.js     bottom CTA bar (injected, shows at 50% scroll)
  media/              16 images + favicon
```

## Deliberate changes vs. the original

- Origin trackers removed (BPixelJS click tracker + its runtime pixel,
  Taboola pixel, a chrome-extension `<style>` block that had been
  copy-pasted into the source with the page).
- All outbound CTAs (`read.smartwellnessreport.com/click?lp=1` — 3 in the
  page + 1 in the sticky bar) → `https://track.healthdeepinsight.com/click`.
  Policy links (`legal.wellaray.com` terms / privacy / shipping) unchanged.
- MaxConv tracking added in `<head>`.
- Byline date (inline `document.write` under the H1): the original prints
  **today**; changed to **yesterday** (en-GB "22 October 2026"). Kept
  inline at its original position because `document.write` must run at
  parse time.
- Bottom floating CTA: the page already ships one (shows once after 50%
  scroll, then stays); ported as-is, no new button needed.
- `ingredients_en.avif` / `product_shot1.avif` converted to WebP
  (AVIF is not decodable on some older devices).

## Known source quirks kept as-is

- `fonts.css` references 16 Open Sans woff2 files that **404 on the
  origin** — the page never uses Open Sans (Montserrat is referenced via
  font-family with a local/sans-serif fallback and has no @font-face),
  so browsers never fetch those files. The css is shipped verbatim
  without the font files; behaviour is identical.
- A dead `printDate()` helper ships on the source with no call site;
  ported verbatim.

## QA results (vs. live source, 2026-10-23)

- Desktop 1440: body height 10822 px = source exactly; rect-multiset
  diff 0, element paths identical.
- Mobile 390: body height 9356 px = source exactly; rect-multiset
  diff 0. Console clean; sticky bar verified at 50% threshold.
