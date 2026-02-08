# Virtual Museum — Static Website

A simple static multi-page demo website for a Virtual Museum project. Pages are built with plain HTML, CSS and a small JavaScript file for UI interactions and form validation.

**Quick Start**
- To view locally, open `index.html` in your browser.
- Or serve the folder with a simple HTTP server (recommended) from the project root, for example:

```powershell
# from the project root (Windows)
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

**Project Structure**
- `index.html` — Home page
- `about.html`, `contact.html`, `events.html`, `exhibits.html`, `exhibit-detail.html`, `gallery.html`, `visit.html`, `tickets.html` — other site pages
- `css/style.css` — central stylesheet
- `javascript/script.js` — site JavaScript (menu toggle + simple form validation)
- `images/` — images (not all images are local; many placeholders use picsum)

Note: some pages reference `js/script.js` while the actual folder is `javascript/`; see "Known Issues" below.

What it includes
- Responsive layout using CSS Grid and media queries
- Mobile hamburger menu via `toggleMenu()` in `javascript/script.js`
- Basic client-side form validation for the tickets and contact forms
- Embedded maps and videos (external sources)

Known issues & suggestions
- Broken script paths: many pages include `<script src="js/script.js">` while the actual file is `javascript/script.js`. Standardize to `javascript/script.js` or move the file to `js/`.
- CSS path mismatch: `exhibit-detail.html` links `css/styles.css` (plural) which doesn't exist; use `css/style.css`.
- Consistent asset linking: ensure all pages use the same relative paths for `css/` and `javascript/` to avoid 404s.
- Accessibility: add descriptive `alt` text for all images and ensure color contrast meets WCAG for users with low vision.
- Progressive enhancement: avoid relying solely on JS for navigation (menu should be usable without JS).
- Form validation: improve email validation (use a regex or rely on `type="email"` plus pattern) and validate numeric inputs robustly.

Possible next steps
- Fix inconsistent paths across pages.
- Add a build or lint step (optional) and a lightweight README step-by-step contributor guide.
- Replace placeholder images with real assets and add `images/README` describing usage and licensing.

License & Credits
- This is a demo/static site template. Add your own license or attribution as needed.

Created: February 2026
