---
name: Portfolio Design System
description: Sci-fi Web3 color palette, fonts, design tokens, and visual language used in Tushar's portfolio (post-overhaul)
type: project
---

Dark sci-fi cyberpunk Web3 portfolio for V. Tushar (Full Stack & Web3 Developer).

**Colors (POST SCI-FI OVERHAUL):**
- Background: `#030108` (deep space black with purple nebula tint)
- Primary accent (electric green): `#00ff88`
- Secondary accent (hot cyan): `#00d4ff`
- Tertiary accent (neon pink): `#ff0080`
- Text primary: `#e0ffe8` (slight green tint to white)
- Text secondary: `#6b8f78` (muted green)
- Text muted: `#3a5c48` (dark muted green)
- Borders: `rgba(0,255,136,0.08)` green-tinted
- Card bg: `rgba(0,255,136,0.02)` green-tinted glass

**Fonts:**
- Body: Inter (variable `--font-inter`)
- Mono / code: JetBrains Mono (variable `--font-jetbrains`)

**Design Patterns:**
- Glass cards: `glass` class (green-tinted rgba bg + backdrop-blur-16px)
- Hover glass: `glass-hover` with green glow box-shadow
- Gradient text: `.gradient-text-green` (green→cyan), `.gradient-text-pink` (pink→cyan), `.gradient-text-full` (green→cyan→pink)
- Section labels: `// SECTION_NAME` format, font-mono, uppercase, green color
- Scanline overlay: `.scanlines` class using CSS ::after with repeating-linear-gradient
- Glitch text: `.glitch-text` with `data-text` attribute — CSS ::before/::after animation
- Tag badges: `.tag` with `.tag-green/.tag-cyan/.tag-pink` modifiers
- Buttons: `.btn-primary` (green→cyan gradient, dark text), `.btn-outline` (green border)
- Pulsing dots: `.pulse-dot` (6px) and `.pulse-dot-sm` (5px) — animated green glow
- Holographic border: `.holo-border` — cycling green→cyan→pink gradient border animation
- Circuit bg: `.circuit-bg` — dual-scale grid pattern in green/cyan

**New Components:**
- `scene3d.tsx` + `scene3d-inner.tsx` — @react-three/fiber 3D background (wireframe shapes + sparkles + stars, ssr:false)
- `hud-overlay.tsx` — fixed sci-fi HUD with SYS.ONLINE, coordinates, block counter, clock
- Terminal boot sequence in hero — staggered GSAP-style text reveal

**Nav style:** Terminal command bar. Logo "TUSHAR.DEV_" with blinking underscore. Links styled as `> about` `> skills`.

**Why:** User requested full sci-fi cyberpunk Web3 overhaul — Tron Legacy meets Blade Runner meets blockchain explorer.

**How to apply:** Keep electric green as the dominant accent. Use cyan as secondary, pink sparingly for emphasis. All labels in terminal `//` or `>` format. Borders and glows use green palette throughout.
