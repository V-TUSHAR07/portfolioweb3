---
name: Portfolio Performance Patterns
description: Approved animation and performance patterns for Tushar's portfolio
type: project
---

**Custom Cursor:** RAF-based with raw DOM `transform: translate3d()`. Dot is instant (direct position). Ring uses lerp factor 0.18 per frame. `will-change: transform` on both. Hidden on touch devices. Zero Framer Motion.

**Particles:** Pure CSS `@keyframes float-particle` with CSS custom properties for per-particle randomization. Max 20 particles. Zero JS overhead.

**Geometric shapes:** Pure CSS `@keyframes float-shape` for background decoration. No JS.

**Framer Motion config:**
- `whileInView` with `once: true` and `margin: "-80px"` (sections), `"-60px"` (cards)
- Entrance duration: 350-400ms
- Stagger: 50-80ms between children
- No 3D transforms (no perspective/rotateX in Framer Motion)

**Project card tilt:** Pure JS mouse move handler calculating rotateX/rotateY from cursor position relative to card center. Max ±4 degrees. CSS perspective(800px) on the card element.

**Why:** Previous build was laggy. User explicitly requested: RAF cursor, CSS-only particles, 300-400ms animations, no React Three Fiber.

**How to apply:** Never add Framer Motion to the cursor. Never add JS-driven particle loops. Keep animation durations under 400ms.
