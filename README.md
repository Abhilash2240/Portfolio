# Gundelli Abhilash — Portfolio Website

A professional personal portfolio built with **Next.js 16**, TypeScript, Tailwind CSS, and Framer Motion.

**Design theme:** Vintage editorial archive — parchment surfaces, ink-black typography, aged-gold accents, and restrained motion.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS custom properties |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Email | Resend API |
| Deployment | GitHub Pages / static export |

## Featured projects

- [AI Job Search Agent](https://github.com/Abhilash2240/AI_Job_Search_Agent) — FastAPI, ATS discovery, resume matching, Sentence-BERT, SQLite, and job deduplication.
- [Adaptive Stock Trading](https://github.com/Abhilash2240/Adaptive-Stock-Trading) — FastAPI and React paper-trading system with PostgreSQL and Clerk authentication.
- [ReceiptFlow](https://github.com/Abhilash2240/ReceiptFlow) — Expo/React Native expenses application using Gemini, Clerk, Supabase, and push notifications.
- [AI Agent Automation Framework](https://github.com/Abhilash2240/ai-agent) — Python browser automation and LangGraph deep-research workflows.

No live demo is listed unless a working deployment has been verified. The stock-trading project is explicitly presented as a paper-trading system; it does not claim real-money trading.

## Profile links

- GitHub: https://github.com/Abhilash2240/
- LinkedIn: https://www.linkedin.com/in/abhilashgundelli/
- LeetCode: https://leetcode.com/u/Abhigundelli/

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | For contact email | Resend API key |
| `NEXT_PUBLIC_SITE_URL` | For sitemap and metadata | Verified public deployment URL |

## Pages

| Route | Page |
|---|---|
| `/` | Home and engineering overview |
| `/about` | Professional profile and education |
| `/skills` | Organized technical inventory |
| `/projects` | Featured and secondary projects |
| `/experience` | Project-experience summary |
| `/certifications` | Verification-only credential page |
| `/education` | Academic record |
| `/contact` | Contact form |
| `/resume` | Resume preview and download |

## Verification status

The latest `main` commit triggered and passed the GitHub Pages build/deploy workflow. Repository destinations and the resume file are present in the repository. Lighthouse testing, live browser screenshots, and cross-device layout review remain manual checks.

The existing PDF at `RR_Resume (1).pdf` contains older profile claims and should be reviewed or replaced with a resume that matches the verified portfolio content.

## Design tokens

The token source lives in `tokens/design-tokens.ts` and mirrors CSS custom properties in `app/globals.css`.
