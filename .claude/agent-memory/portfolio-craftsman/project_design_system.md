---
name: Portfolio Design System
description: Professional blue/purple/amber palette, fonts, design tokens, and visual language for V. Tushar's portfolio
type: project
---

## Theme: Professional Web Developer & Blockchain Builder
Linear.app meets Vercel meets a premium blockchain startup. Clean, modern, professional. NOT a hacker terminal.

## Color Palette
- Background: `#0c0c0e` (nearly black, no tint)
- Surface/cards: `#141416`
- Primary accent: `#3b82f6` (electric blue — trustworthy, professional)
- Secondary accent: `#8b5cf6` (vibrant purple — blockchain/web3)
- Tertiary: `#f59e0b` (warm amber — highlights/badges)
- Text primary: `#fafafa`
- Text secondary: `#a1a1aa` (zinc-400)
- Text muted: `#52525b` (zinc-600)
- Borders: `rgba(255,255,255,0.06)`
- Border hover: `rgba(59,130,246,0.4)` (blue glow)
- Success/online: `#22c55e` (standard green, NOT neon)

## Typography
- Body/headings: Space Grotesk (`--font-space`)
- Code/mono: Fira Code (`--font-fira`)
- Section eyebrows: `.section-eyebrow` — 0.75rem, 600 weight, 0.08em spacing, blue color, uppercase
- Section titles: `.section-title` — clamp(2rem,5vw,3rem), 800 weight, -0.02em tracking
- NO terminal prefixes (// ABOUT, // SKILLS, etc.)
- NO UPPERCASE_SNAKE_CASE in UI text

## CSS Class System
- `.glass-card` — clean glass panel with blue hover glow
- `.btn-primary` — filled blue button, hover lifts + glows
- `.btn-outline` — transparent, subtle border, hover fills
- `.btn-ghost` — text-only with hover background
- `.nav-link` — underline-on-hover nav item, blue underline
- `.skill-card` — circular SVG progress card, clean border
- `.tag`, `.tag-blue`, `.tag-purple`, `.tag-amber`, `.tag-green` — clean badges
- `.form-input` — subtle bg, blue focus ring
- `.gradient-text` — blue→purple gradient text
- `.status-dot` — green dot (#22c55e) for "available/online"
- `.hero-orb` — blurred radial gradient orb background element
- `.section-gradient-blue/purple/center` — radial bg for sections
- `.timeline-line` — blue gradient vertical line for timeline

## Removed Permanently
- NO green (#00ff88) anywhere
- NO terminal UI (boot sequences, scanlines, circuit patterns)
- NO custom cursor (cursor.tsx deleted)
- NO HUD overlay (hud-overlay.tsx deleted)
- NO loading screen (loading-screen.tsx deleted)
- NO pulse-dot animations (replaced with static .status-dot)
- NO glitch-text, gradient-text-hero, holo-border, scanlines, grid-bg

## Component Patterns
- Cards: 12px border-radius, rgba(255,255,255,0.03) bg, border rgba(255,255,255,0.06)
- Hover: blue border glow, not green
- Section structure: eyebrow label → large title → description → content
- Stats cards: colored accent bg/border per category (blue/purple/amber)
- Timeline: left line + colored dots, no pulse animation
- Skills section title: "Tech Stack", eyebrow: "Skills"
- Projects section title: "What I've Built", eyebrow: "Projects"

## 3D Scene (scene3d-inner.tsx)
- Blockchain nodes: blue (#3b82f6) and purple (#8b5cf6)
- Ethereum diamond: purple (#8b5cf6)
- Chain rings: blue/purple
- Sparkles: blue + purple
- Floating blocks: blue (#3b82f6)
- Connection lines: blue opacity 0.07

**Why:** Complete rebrand from sci-fi/hacker green terminal to professional portfolio. Previous green theme was described as "hacking the Pentagon" — needed to look like a Vercel-caliber developer.

**How to apply:** Always use blue/purple/amber palette. Never reintroduce green (#00ff88), terminal UI, custom cursor, or loading screen.
