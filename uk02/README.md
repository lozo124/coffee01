# uk02 — English Edition (Transcreated)

English (en-GB) edition of the German coffee-booster advertorial at the
root of this repo (`index.html`, "Warum Ärzte von diesem einfachen
30-Sekunden-Kaffee-Ritual begeistert sind"). Same DOM structure, same
Elementor styling, same assets — all copy transcreated into direct-response
English, plus the two German-language images recreated in English.

## Structure

```
uk02/
  index.html        English page (identical structure to the German root page)
  css/style.css     same stylesheet as the root page
  js/app.js         same behaviors (30%-scroll floating CTA)
  media/            same assets, except the two below
```

## Transcreation notes

- Copy: provided English transcreation, completed where it had gaps
  (the "revolutionizing the diet world" pull-quote, the before/after
  caption, five of the eleven late reviews — Julia B., Stefan K.,
  James S. (née Jan-Niklas), Melanie W., Sabine R. — and the full footer
  legal block).
- Localized names: Manuela Küppers → Rachel Miller (editor),
  Dr. Andreas Weidner → Dr. Julian Vance, Andreas K. → Andrew K.,
  Monika L. → Monica L., Jan-Niklas S. → James S.
- `fat-overshoot-grafik.webp`: German pseudo-scientific infographic
  rebuilt in English (same layout/labels) as `fat-overshoot-grafik.webp`.
- `84I7rj5dflGKATl.jpg`: before/after photo labels re-set in English
  ("Before" / "After" / "after 11 weeks"); "Manuela (53)" kept.
- Byline date stays dynamic **yesterday**, now in English format
  ("22 October 2026"); `<html lang>` → `en-GB`; title + meta description
  in English.
- Seasonal wording localized: "Sommerbeginn-Aktion" → "Seasonal Promo".
- CTAs and MaxConv tracking are inherited from the root page as-is
  (all point to `https://track.healthdeepinsight.com/click`).

## Verification

- Rendered text contains 0 German words / 0 umlauts (automated scan).
- Console clean; 29 outbound CTAs intact; floating CTA present;
  date script verified (renders yesterday).
- German umlaut HTML entities in the source (`&uuml;` etc.) were decoded
  before text matching; `&amp;` in attributes preserved.
