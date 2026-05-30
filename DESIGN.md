# Design

## Theme

"Trusted medical institution." Light, pure-white reading surface punctuated by committed brand-blue anchor bands (stats, why-choose, call-to-action, footer, and the per-doctor hero accents). The blue is the brand and carries roughly a third of the surface; it is never a thin accent. Confident grotesque headlines (Bricolage Grotesque) over a clean humanist body. Light mode only, by intent: an anxious patient on a daytime phone wants bright, clean, and certain.

The palette is sampled from the real logo (green leaf + blue swoosh + navy wordmark + red cross). The brand started on a custom green, then committed to **blue** at the client's direction; the system is hue-swappable (only the `--brand*` / `--mint*` / `--vital` tokens change). Reference points: the composure of a respected teaching hospital, the typographic authority of an institution, the practical warmth a Pune family expects. Explicitly not: generic teal/blue medical-SaaS, spa pastels, off-white "AI paper", hospital-chain sterility.

## Color

Pure white canvas. Brand blue committed. OKLCH-defined (anchored to hue ~252-260), hex for reference.

| Role | OKLCH | ~Hex | Use |
|---|---|---|---|
| Canvas | `#ffffff` | #FFFFFF | page background, reading surface |
| Brand (blue) | `oklch(0.55 0.135 252)` | ~#1F6FD0 | icons, fills, large accents |
| Brand-strong | `oklch(0.45 0.145 256)` | ~#1857B0 | links / text-weight blue (~5.6:1), primary buttons |
| Brand-deep | `oklch(0.34 0.105 258)` | ~#16356B | band base, footer |
| Brand-deeper | `oklch(0.26 0.085 260)` | ~#102650 | band gradient end |
| Vital (sky) | `oklch(0.80 0.13 238)` | ~#69B7F0 | live dots, highlights on bands, hover accents |
| Ink (navy) | `oklch(0.30 0.058 258)` | ~#1B2D55 | headings on white (~10:1) |
| Body | `oklch(0.40 0.035 256)` | ~#3A4A6B | body text on white (~7.5:1) |
| Muted | `oklch(0.525 0.03 256)` | ~#5C6A88 | secondary text (>=4.5:1) |
| Line | `oklch(0.92 0.013 250)` | ~#E6EAF2 | hairline borders |
| Mint (wash) | `oklch(0.975 0.014 250)` | ~#F3F6FC | pale blue section wash, icon tiles |
| Star | `oklch(0.80 0.135 80)` | ~#E8A93D | rating stars only (the lone warm note) |

Contrast is verified, not assumed. No light-gray body on white. On blue bands, text flips to white / a light-blue muted; the accent becomes `--vital`.

## Typography

Two families. A contemporary grotesque display + a humanist sans body, paired on a contrast axis. No mono.

- **Display (h1-h3, all scripts):** `Bricolage Grotesque Variable` (weights ~600-700 for headings). Latin headings carry the brand voice; Devanagari headings fall through to `Mukta` 700 by unicode-range, so /mr and /hi stay on brand without a third family. Hero clamp max <= 4.4rem; letter-spacing -0.025em (0 for Devanagari).
- **Body + UI (all scripts):** `Mukta` (Indian Type Foundry; Latin + Devanagari in one family, weights 300-700), so English / Marathi / Hindi read as one brand.

Devanagari gets extra leading (body 1.8, headings 1.22-1.4). Hierarchy via scale + weight contrast (ratio >= 1.25), not color. `text-wrap: balance` on headings, `pretty` on prose.

## Layout & pages

Multi-page, kept simple: a home page plus a dedicated page per doctor (`/doctors/tushar/`, `/doctors/babita/`), each mirrored under `/mr/` and `/hi/`. Doctor pages are specialty-customized (surgical vs dental services, bio, focus, shared journey + reviews + booking).

8px base. Fluid section padding via `clamp()`, varied for rhythm. Container `max-w-6xl`, prose <= 65ch. Asymmetric split heroes. Blue full-bleed bands break the white for pacing. Cards only where they are the right affordance; radius 14-16px, one hairline border OR one soft shadow (never both), never side-stripe borders, never >16px radius. Semantic z-scale (sticky 40, nav 50, overlay 60, modal 70, toast 80).

## Components

- **Nav:** fixed, transparent over the light hero, solid white + blur on scroll. Real logo lockup (transparent PNG, ~56px). Page links with active underline, a language switcher (EN / मराठी / हिंदी, page-aware), phone, and a pill "Book appointment". Mobile: hamburger panel.
- **Buttons:** primary = brand-strong fill, white label, pill. On blue bands, primary = white fill with blue label. Ghost = 1px line. WhatsApp surfaced as a first-class action.
- **Doctor hero (per-doctor pages):** big serif name, role, tagline, credential/experience/rating chips, action buttons, a portrait frame with a floating data card ("20+ years / Senior specialist") and a live status badge.
- **Cards:** lift on hover (translateY + shadow + brand-tinted border); icon tiles fill with brand on hover. Doctor cards zoom the photo subtly.
- **Live status:** computed in Asia/Kolkata from the OPD schedule. Open -> "Open now" (pulsing vital dot); closed -> "Opens at 5:00 PM" / "Opens Monday at 9:00 AM" (never a bare "Closed", which reads as shut-down).
- **Testimonials:** REAL Google reviews (real avatar, name, words) + a Google rating badge (4.7) + "Read all reviews on Google".
- **Inputs:** white, 1px line, 12px radius, blue focus ring.
- **Footer:** blue band, link columns, page-aware language pills, and a giant ghost wordmark anchored to the bottom edge.

## Motion

Subtle and purposeful. Lenis smooth scroll (GSAP ticker). Scroll-reveal enhances an already-visible default (never gates visibility), staggered within lists. Card hovers, icon-tile fills, photo zooms, magnetic CTAs, animated counters, a gently floating hero data card, a pulsing live dot. ease-out-expo/quart, 200-700ms, no bounce. Full `prefers-reduced-motion` fallback to static. No particles, no 3D.

## Imagery

Real photography only (`src/assets/`, organised `brand/`, `doctors/`, `clinic/`): Dr. Tushar (surgeon), Dr. Babita (dentist), the dental operatory; the real logo lockup. Real Google reviewer avatars (hotlinked from googleusercontent, `referrerpolicy=no-referrer`). No stock faces, no placeholder blocks. Astro `<Image>` for responsive webp; remote avatars as plain lazy `<img>`.
