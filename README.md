# Chintamani Hospital & Dental Clinic

Professional, trilingual Astro site for Chintamani Hospital & Dental Clinic in
Chikhali, Pimpri-Chinchwad. The site presents surgical care, GI endoscopy, and
dental care led by Dr. Tushar Khachane and Dr. Babita Khachane.

The build is intentionally calm and static: no scroll reveals, marquees,
parallax, tilt effects, or decorative animation loops. The interface prioritizes
phone-first trust, readable doctor proof, direct booking, and Marathi/Hindi/English
localization.

## Commands

```bash
npm install          # install dependencies
npm run dev          # local dev server at http://localhost:4321
npm run build        # production build to ./dist
npm run build:github-pages  # build for GitHub Pages project URL
npm run preview      # preview the production build
```

## Editing content

Translatable copy lives in **`src/content/i18n.ts`**.
Language-neutral facts, contact details, schedules, ratings, and form config live
in **`src/content/site.ts`**.

Local generated design references can live in **`design-inspiration/`**, which is
ignored by Git. Production image assets live under **`src/assets/`**.

## What the client still needs to provide

Search across `src/content/site.ts` for `TODO(client)` before launch and confirm
schedule, ratings, and any remaining client-owned facts.

## Appointment form

The appointment section uses phone and WhatsApp as the primary fallback while no
Web3Forms key is configured. Add a Web3Forms access key to
`site.appointment.web3formsKey` in `src/content/site.ts` to enable form
submissions.

## Deploy

The repository deploys to GitHub Pages via GitHub Actions from `develop`.

- Repository: `chiragkhachane/chintamanicare`
- Pages URL: `https://chiragkhachane.github.io/chintamanicare/`
- Workflow: `.github/workflows/deploy-pages.yml`

The workflow sets `GITHUB_PAGES=true`, which switches Astro to the GitHub Pages
project base path. Normal local/production builds keep `https://chintamanihospital.in`
as the canonical site URL.

## Accessibility

- Semantic headings and localized page metadata across English, Marathi, and Hindi.
- Keyboard-visible focus states.
- Direct phone, WhatsApp, directions, and review links.
- No decorative animation layer, so content is visible immediately.
