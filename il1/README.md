# il1 — Hebrew (Israel) Edition, RTL

Hebrew RTL edition of the coffee advertorial, built on the uk02 structure
(same DOM/CSS/JS) with the provided Hebrew transcreation and full RTL
treatment.

## RTL implementation

- `<html lang="he" dir="rtl">` — flexbox/block flow mirror automatically.
- `css/rtl.css` — small override sheet (direction locks, arrow mirroring
  via `transform: scaleX(-1)`, bidi isolation belt-and-braces).
- 50 `<bdi>` wraps around numeric/latin runs (`4.9`, `2,864`, `75%`,
  `16:8`, `Fat-Overshoot Effect`, years, ages) per bidi-isolation spec.
- Hebrew months + "D בMonth YYYY" format in the dynamic date script
  (renders yesterday, e.g. "24 באוקטובר 2026").

## Localization

- Copy: provided Hebrew transcreation (184 string replacements; 0
  English words left in rendered text outside brand names).
- Names: Michal (53), Sarah M., Michael T., Lihi S., Andrei K.,
  Ronen M., Yael B., David K., Yonatan S., Shira V., Ronit R., Monica L.;
  editor Rachel Miller → רחל מילר.
- Regulatory: Ministry of Health (משרד הבריאות) replaces
  EFSA/TGA/MHRA/GP wording; no EU/US geo clauses anywhere in the footer
  (the uk02 legacy legal block is not present here).
- Units: kilograms mentioned (קילוגרמים), no lbs/inches; prices only as
  % discount (no £/$ symbols), no currency symbol needed.
- `fat-overshoot-grafik.webp`: infographic rebuilt with Hebrew labels
  (RTL shaping via Chrome render of an RTL-wrapped SVG).
- `84I7rj5dflGKATl.jpg`: before/after labels rebuilt in Hebrew
  (לפני / אחרי / אחרי 11 שבועות) via HTML compositing render.
- Footer links: אודות ותקנון | מדיניות פרטיות | מדיניות החזרות (same
  policy URLs as uk02).

## Inherited unchanged

- 29 outbound CTAs → `track.healthdeepinsight.com/click`; MaxConv in
  `<head>`; bottom floating CTA (30% scroll) with track link.

## Verification

Console clean (only the harmless server-root favicon 404 seen on the
test server); 0 broken images; 8,326 Hebrew chars vs 0 leftover English
content words; byline = yesterday; RTL confirmed (dir=rtl, text renders
right-to-left, product card on the right, arrows mirrored).
