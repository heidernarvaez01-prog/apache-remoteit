// Scroll-reveal animations for the "Conecta" WhatsApp/socials block.
// Ported from the Azurio template's .anim-uni-slide-down / .anim-uni-clip-in
// effects, reimplemented against the GSAP + ScrollTrigger build already
// loaded by this site (no dependency on Azurio's own app.js).
(function () {
	"use strict";

	document.addEventListener("DOMContentLoaded", function () {
		if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
		gsap.registerPlugin(ScrollTrigger);

		// Text lines that slide down into place as they enter the viewport.
		document.querySelectorAll(".anim-uni-slide-down").forEach(function (wrap) {
			var el = wrap.firstElementChild;
			if (!el) return;
			gsap.fromTo(el, { yPercent: -100 }, {
				yPercent: 0,
				ease: "none",
				scrollTrigger: {
					trigger: wrap,
					start: "top 90%",
					end: "bottom 70%",
					scrub: 1,
				},
			});
		});

		// Divider lines that "draw in" left-to-right as they enter the viewport.
		document.querySelectorAll(".anim-uni-clip-in").forEach(function (el) {
			gsap.fromTo(el, { clipPath: "inset(0% 100% 0% 0%)" }, {
				clipPath: "inset(0% 0% 0% 0%)",
				ease: "none",
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					end: "bottom 70%",
					scrub: 1,
				},
			});
		});
	});
})();
