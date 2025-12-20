# Agent Instructions

Guidelines for AI agents and contributors working on this codebase.

## Design Philosophy

**Constraints create harmony.** Fewer variants = more cohesive design. Re-use existing patterns instead of inventing new ones.

## Typography System

Typography classes are defined in `src/styles/global.css` under `@layer components`. Use only those classes — do not introduce ad-hoc typography combinations.

Before adding a new text style, ask: "Is this truly a new semantic category, or can I use an existing one?"

## Color Palette

Stick to the established palette:

- **Primary text:** `text-slate-800`
- **Secondary text:** `text-slate-600`
- **Accent:** `text-cerise` / `bg-cerise`
- **Backgrounds:** `bg-slate-50`, `bg-slate-100`
- **Borders:** `border-slate-200`

## Spacing

Use Tailwind's default scale. Prefer consistent spacing within sections:

- Section gaps: `gap-6`, `gap-10`, `gap-16`, `gap-28`
- Element gaps: `gap-1`, `gap-3`, `gap-4`

## Before Adding New Styles

1. Check if an existing token covers your use case
2. If not, ask: "Is this a new semantic category or am I over-designing?"
3. If it's truly new, add it to this document first
