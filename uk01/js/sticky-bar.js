/* ─────────────────────────────────────────────────────────────────────────
   Bottom sticky CTA bar

   Ported from the original inline script: injected on DOMContentLoaded,
   shown once the visitor scrolls past 50% of the page.
   ───────────────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var stickyBarHTML = ''
        + '<div id="sticky-bar" style="display: none;">'
        + '<a href="https://track.healthdeepinsight.com/click" class="sticky-btn">CHECK AVAILABILITY</a>'
        + '</div>';

    document.body.insertAdjacentHTML('beforeend', stickyBarHTML);

    function handleScroll() {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var scrollPercent = scrollTop / docHeight;

        if (scrollPercent >= 0.5) {
            var bar = document.getElementById('sticky-bar');
            if (bar && bar.style.display === 'none') {
                bar.style.display = 'flex';
            }
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
});
