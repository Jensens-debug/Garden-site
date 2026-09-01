# The Real Food Gardens

A static marketing site for a fictional kitchen-garden design/build/coaching studio, blending the cream-and-sage editorial-shop feel of one reference site with the earthy, service-led tone of another. Built as an original design — original copy, an original brand name, and hand-drawn SVG illustrations instead of stock or borrowed photography.

## Structure

Plain HTML/CSS/JS, no build step or dependencies.

```
.
├── index.html      Home
├── services.html   Design / Installation / Coaching detail, pricing, FAQ
├── shop.html       Product grid with client-side category filters
├── learn.html      Growing-guide article index
├── about.html      Founder story, timeline, values, team
├── contact.html    Contact form (front-end only, no backend wired up)
├── css/styles.css  Shared design system (colors, type, components)
└── js/main.js      Mobile nav toggle, shop filters, form UX
```

## Running locally

No build tools needed — just serve the folder statically:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Before going live

A few things are placeholders and should be swapped out:

- Contact info in the footer and `contact.html` (`hello@therealfoodgardens.com`, `(555) 010-0142`) — fake numbers, replace with real ones.
- The newsletter and contact forms only simulate success in the browser (`js/main.js`) — wire them up to a real form backend (e.g. Formspree, Netlify Forms, or your own endpoint) before relying on them.
- Social links in the footer point to `#` — add real profile URLs.
- Product prices/names in `shop.html` and package pricing in `services.html` are illustrative — adjust to your actual offering.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings, enable **Pages** → deploy from the `main` branch, root folder.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.
