# Gundelli Abhilash — Portfolio Website

A production-ready personal portfolio designed in **Google Stitch** ("Vintage Editorial Portfolio") and built with **Next.js 16**, TypeScript, and Framer Motion.

**Design Theme:** The Modern Archivist — parchment paper, ink-black typography, aged gold accents, and mechanically kinetic animations.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + CSS custom properties |
| Animation | Framer Motion 11 |
| Fonts | next/font → Newsreader, Special Elite, Space Grotesk |
| Icons | Lucide React + inline SVGs |
| Forms | React Hook Form + Zod |
| Email | Resend API |
| Deployment | Vercel-ready |

---

## Quick Start

```bash
# 1. Clone / open the project
cd portfolio_website

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and add your RESEND_API_KEY

# 4. Run the dev server
npm run dev

# 5. Open http://localhost:3000
```

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes (for contact form) | Get from [resend.com](https://resend.com) |
| `NEXT_PUBLIC_SITE_URL` | Yes | Your deployed URL, e.g. `https://abhilashgundelli.vercel.app` |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics ID |

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — Hero + RotatingPhotoRing + Stats |
| `/about` | About — Editorial bio + Contact details |
| `/skills` | Skills — Technical Inventory grid |
| `/projects` | Projects — Retractable accordion cards |
| `/experience` | Experience — Timeline with dashed wire |
| `/certifications` | Certifications — Wax seal cards |
| `/education` | Education — Diploma layout + progress bar |
| `/contact` | Contact — Telegraph form (Resend email) |
| `/resume` | Resume — PDF download card |

---

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set env vars in Vercel dashboard:
# RESEND_API_KEY, NEXT_PUBLIC_SITE_URL
```

---

## Customization

- **Profile photo:** Replace `public/assets/photo.png` with your actual photo
- **Resume PDF:** Add your actual resume to `public/assets/resume.pdf`
- **Social links:** Update `lib/portfolio-data.ts` — `github` and `linkedin` fields
- **Design tokens:** All colors and fonts in `tokens/design-tokens.ts`
- **Content:** All page content lives in `lib/portfolio-data.ts`

## Design tokens

The token source lives in [tokens/design-tokens.ts](tokens/design-tokens.ts). Each token is mirrored as a CSS custom property in [app/globals.css](app/globals.css), so component styles can use `var(--...)` values directly.

To add a token:

1. Add the token name/value to `tokens/design-tokens.ts`.
2. Add the matching `--token-name` variable under `:root` in `app/globals.css`.
3. Use the CSS variable in components instead of hardcoded values.

---

## Design System (from Stitch)

The design tokens are auto-derived from the Stitch MCP project **"Vintage Editorial Portfolio"** (ID: `11341959592308919355`).

| Token | Value |
|---|---|
| Parchment | `#F6F6F6` |
| Ink Black | `#2D2F2F` |
| Aged Gold | `#9C3F00` |
| Vintage Green | `#0060A8` |
| Prussian Blue | `#0846ED` |
| Stamp Red | `#812FC1` |

---

*© 2026 Gundelli Abhilash — Kinetic Archive Ver. 1.0*
