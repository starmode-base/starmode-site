# STΛR MODΞ Landing Page Spec

## Overview

- **Site**: starmode.dev
- **Brand**: STΛR MODΞ (always use Greek letters Λ and Ξ)
- **Tagline**: Privacy-first software for developers and vibe coders.
- **What is it**: A software collective building privacy-first libraries and apps — designed to be as easy for AI to use as they are for developers.
- **Inspiration**: [TanStack.com](https://tanstack.com)

## Brand

### Logo & Name

- Logo: `/public/starmode-logo.svg` (wordmark with star)
- Icon: `/public/starmode-icon.svg` (star only)

### Colors

- **Accent**: Hollywood cerise (`#F400A1`) and/or Cerise (`#DE3163`)

### Design Tokens

Define named styles upfront, reuse throughout:

- **Typography**: A small set of named text styles (e.g., heading, subheading, body, caption)
- **Colors**: Named color tokens (e.g., accent, background, text-primary, text-muted)
- **Spacing**: Consistent spacing scale

### Inclusion

- Progress Pride flag colors as **centered notch at top** of page
- Vertical bars of rainbow colors
- Subtle but clearly visible

## Page Structure

Single page with these sections:

### 1. Hero

- Rainbow notch at very top
- STΛR MODΞ logo (large)
- Tagline: "Privacy-first software for developers and vibe coders."
- Subtext: "Libraries and apps designed for AI-assisted development."

### 2. Projects

Card format: Name, description, status, links (GitHub, npm, docs)

**Libraries:**

- `@starmode/auth` — The LLM-friendly auth library. Passkeys + OTP. (alpha)
  - GitHub: github.com/starmode-base/auth
  - npm: npmjs.com/package/@starmode/auth

- `neon-testing` — Vitest utility for integration tests with Neon Postgres (stable)
  - GitHub: github.com/starmode-base/neon-testing
  - npm: npmjs.com/package/neon-testing

- `pimdb` — Lightweight persisted in-memory database (alpha)
  - GitHub: github.com/lirbank/pimdb
  - npm: npmjs.com/package/pimdb

- `google-calendar-url` — Generate shareable URLs for Google Calendar events (stable)
  - GitHub: github.com/lirbank/google-calendar-url
  - npm: npmjs.com/package/google-calendar-url

**Apps:**

- Touch — A nano CRM for independent consultants and founders who value fewer, stronger relationships (pre-alpha)
  - GitHub: github.com/starmode-base/touch
  - Site: touch.starmode.dev

- Heartbeats — The first humanless bookkeeper. AI-first accounting without humans behind the scenes. (pre-alpha)
  - GitHub: github.com/starmode-base/heartbeats
  - Site: heartbeats.co

**Templates:**

- `template-tanstack-start` — TanStack Start app template with Neon, Drizzle, Vercel
  - GitHub: github.com/starmode-base/template-tanstack-start
  - Demo: template-tanstack-start.vercel.app

### 3. Footer

- Links: GitHub, Bluesky, X, Discord
- Rainbow element (echoes top notch)
- Copyright

## Links

- **GitHub**: github.com/starmode-base
- **Bluesky**: bsky.app/profile/lirbank.com
- **X**: x.com/MikaelLirbank
- **Discord**: discord.gg/pspADbEW

## Technical

- **Framework**: Astro
- **Styling**: Tailwind CSS v4
- **Hosting**: Netlify
- **Theme**: One theme only, dark or light TBD during design
- **Responsive**: Mobile-first
- **Accessible**: WCAG AA

## Checklist

- [ ] Rainbow notch at top (inclusion)
- [ ] Hero with logo, tagline
- [ ] Project cards
- [ ] Footer with social links
- [ ] Design tokens (typography, colors, spacing)
- [ ] Mobile responsive
- [ ] Accessible
- [ ] High-res open graph image (share card)
