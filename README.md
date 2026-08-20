# EBBL — Église Baptiste

Static marketing site for EBBL — plain HTML, CSS, and vanilla JavaScript,
no build step. Deploys via GitHub Pages directly from the `main` branch.

## Development

Just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 5185
```

## Structure

- `index.html` — all page content
- `css/styles.css` — all styles (design tokens at the top)
- `js/main.js` — header scroll effect, mobile menu, newsletter form submit
- `assets/` — images and favicon

## Newsletter form

`js/main.js` submits the newsletter form to Formspree. Replace
`FORMSPREE_ENDPOINT` with your real form endpoint before going live —
sign up free at https://formspree.io.

## Deployment

Pages is configured to serve directly from `main` (no build step). Pushes
to `main` go live within a minute or two. `CNAME` points the custom
domain at `ebbl.ca` — once DNS is pointed at GitHub Pages, it'll serve
on the real domain.

## Content

Placeholder stock photos (engagement blocks, ministries grid) should be
swapped for real EBBL photos directly in `index.html` when available.
