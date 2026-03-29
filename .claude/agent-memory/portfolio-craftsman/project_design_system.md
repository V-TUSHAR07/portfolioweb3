---
name: Portfolio Design System
description: Color palette, fonts, design tokens, and visual language used in Tushar's portfolio
type: project
---

Dark-first portfolio for V. Tushar (Full Stack & Web3 Developer).

**Colors:**
- Background: `#0a0a1a` (deep navy black)
- Accent 1 (cyan): `#06b6d4`
- Accent 2 (violet): `#8b5cf6`
- Accent 3 (fuchsia): `#d946ef`
- Text primary: `#f1f5f9`
- Text secondary: `#94a3b8`
- Text muted: `#64748b`
- Borders: `rgba(255,255,255,0.08)`

**Fonts:**
- Body: Inter (variable `--font-inter`)
- Mono / code: JetBrains Mono (variable `--font-jetbrains`)

**Patterns:**
- Glassmorphism cards: `glass` class (rgba white bg + backdrop-blur)
- Gradient text: `.gradient-text-cyan`, `.gradient-text-violet`, `.gradient-text-full`
- Section labels: font-mono, uppercase, 0.2em letter-spacing, cyan color
- Tag badges: `.tag` with `.tag-cyan/violet/fuchsia` modifiers
- Buttons: `.btn-primary` (cyan→violet gradient), `.btn-outline` (cyan border)

**Why:** User explicitly wanted dark navy/cyan/violet/fuchsia palette, glassmorphism cards, JetBrains Mono for code elements.

**How to apply:** Keep these exact tokens when adding new sections or components. Do not introduce new colors without checking the palette first.
