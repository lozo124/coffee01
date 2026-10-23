/* ratgeberheute v2-coffee — static page behaviors */

/* Bottom floating CTA: same style as the in-article green-gradient buttons.
   Hidden by default; fades in once the reader has scrolled through 30% of
   the page and fades back out above that point. */
(function () {
  "use strict";

  var SHOW_AT_PROGRESS = 0.3; // 30% of the scrollable distance
  var floatingCta = document.querySelector(".rg-floating-cta");

  if (!floatingCta) {
    return;
  }

  function update() {
    var doc = document.documentElement;
    var scrollable = doc.scrollHeight - window.innerHeight;
    var progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    floatingCta.classList.toggle("is-visible", progress >= SHOW_AT_PROGRESS);
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
