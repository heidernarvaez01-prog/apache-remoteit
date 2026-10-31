# Project rules
- Keep the website as a static Vite multi-page site rooted in `HTML/`; this preserves existing page URLs and the theme.
- Keep plan definitions and selection helpers in `HTML/plan-data.js`, with page-specific module scripts and CSS; this gives pricing, contact context and tests one consistent source.
- Use the existing global CSS color tokens for plan UI so it stays consistent with the site's theme.