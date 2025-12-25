# STΛR MODΞ agent guidelines

Guidelines for AI agents and contributors working on this codebase.

## Writing style

Always use sentence case for headings and labels.

## Brand

### Name

**STΛR MODΞ** — always use Greek letters Λ (Lambda) and Ξ (Xi).

### Taglines

See [`metadata.json`](/metadata.json) for the canonical tagline and description.

### Assets

- **Logo (wordmark):** [`/public/starmode-logo.svg`](/public/starmode-logo.svg)
- **Icon (star):** [`/public/starmode-icon.svg`](/public/starmode-icon.svg)
- **Share card (source):** [`/public/starmode-og.svg`](/public/starmode-og.svg)
- **Share card (png):** [`/public/starmode-og.png`](/public/starmode-og.png)

### Links

Update these when branding changes:

- **Website:** https://www.starmode.dev
- **GitHub:** https://github.com/starmode-base
- **Discord:** https://discord.gg/zqmZJmZAQ7
- **LinkedIn (company):** https://www.linkedin.com/company/starmode/
- **LinkedIn (Mikael):** https://www.linkedin.com/in/mikaellirbank/

## Design system

**Constraints create harmony.** Fewer variants = more cohesive design. Re-use existing patterns instead of inventing new ones.

### Colors

**Palette:** Slate & cerise

- **Background:** `bg-slate-50` / `bg-slate-100`
- **Text primary:** `text-slate-800` — headings, titles
- **Text secondary:** `text-slate-600` — body, descriptions
- **Accent:** `text-cerise` / `bg-cerise` — highlights, hover states
- **Borders:** `border-slate-200`

### Typography

Typography tokens are defined in [`src/styles/global.css`](/src/styles/global.css). Use only these — do not introduce ad-hoc combinations.

## Before adding new styles

1. Check if an existing token covers your use case
2. If not, ask: "Is this a new semantic category or am I over-designing?"
3. If it's truly new, add it to this document first
