# Chintamani Hospital — website

A premium, single-page marketing site for Chintamani Hospital (Chinchwad, Pune),
led by Dr. Tushar Khachane (surgery) and Dr. Babita Khachane (dental).

Built with **Astro + Tailwind v4 + GSAP (ScrollTrigger / SplitText) + Lenis**, with a
WebGL hero particle field (Three.js). Designed to the `taste-skill` ruleset:
one locked teal accent, sans-first type (Bricolage Grotesque + Geist), motivated
motion only, and a mandatory `prefers-reduced-motion` fallback throughout.

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Editing content

All copy lives in one file: **`src/content/site.ts`**. Change text, doctors,
services, stats, testimonials, and contact details there.

## What the client still needs to provide

Search across `src/content/site.ts` for `DRAFT` and replace each one:

- **Dr. Babita Khachane**: exact name spelling, qualifications (BDS / MDS and
  specialisation), focus areas, and years of experience.
- **Dental services**: the real treatment menu.
- **Photography**: real, consented clinic and doctor photos (currently picsum
  placeholders; doctor cards show branded initials, not stock faces).
- **Testimonials**: real, consented patient quotes (replace the samples).
- **Logo**: drop a real logo if one exists (currently a generated monogram in
  `src/icons/logo.svg` and `public/favicon.svg`).
- **Stats**: confirm or extend the numbers in `site.stats`.
- **Social profiles**: add verified links to `site.social`.

## Appointment form

The form (`src/components/Appointment.astro`) runs in **safe demo mode** until you
add a free [Web3Forms](https://web3forms.com) access key to
`site.appointment.web3formsKey` in `src/content/site.ts`. Once set, submissions are
emailed to the address configured in your Web3Forms account.

## Deploy

Static output. Deploy `npm run build` output to Vercel or Netlify (both auto-detect
Astro). Set the production domain in `astro.config.mjs` (`site:`) for correct
canonical URLs and sitemap, and export a 1200x630 PNG version of `public/og.svg`
for richer social-share previews.

## Accessibility & motion

- Honors `prefers-reduced-motion`: parallax, scroll reveals, the marquee, and the
  3D field all collapse to static.
- The WebGL field only loads on capable desktops (skips on mobile, low-core
  devices, save-data, and reduced-motion). A CSS aurora is the always-on fallback.
- Light and dark themes, with a toggle in the header and `prefers-color-scheme`
  as the default.
