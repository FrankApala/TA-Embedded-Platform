# TA_EMBEDDED Platform

> Learn embedded. Build real firmware.

A terminal-themed educational platform for embedded systems engineering. Built with Next.js, featuring a phosphor-cyan aesthetic, bilingual support (EN/FR), and a full course catalogue.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: CSS custom properties — no Tailwind
- **Fonts**: Geist Mono (terminal aesthetic)
- **i18n**: Custom React context — English & French
- **Theme**: Dark/Light toggle with `[data-theme]`

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, featured services |
| `/courses` | Course catalogue with levels |
| `/services` | Consulting & training services |
| `/about` | Team and mission |
| `/blog` | Articles and tutorials |
| `/case-studies` | Real-world project breakdowns |
| `/contact` | Contact form |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/           # Next.js pages (App Router)
components/    # Navbar, Footer, GoToTop, AnimateIn
lib/i18n/      # Translation context + EN/FR strings
public/        # Static assets
```

## Roadmap

- [ ] Supabase auth (student accounts)
- [ ] Course enrollment + payment via Stripe
- [ ] Video delivery via Mux (protected content)
- [ ] Student dashboard with progress tracking
- [ ] Email notifications via Resend
