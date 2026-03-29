---
name: Portfolio Performance Patterns
description: Approved animation and performance patterns for Tushar's portfolio (post professional rebrand)
type: project
---

**Custom Cursor:** REMOVED — standard browser cursor. cursor.tsx deleted in rebrand.

**Background:** Gradient orbs via CSS `hero-orb` class with `orb-drift` keyframe animation + blur(80px). No JS particles. 3D scene handles the background depth.

**Framer Motion config:**
- `whileInView` with `once: true` and `margin: "-80px"` (sections), `"-60px"` (cards)
- Entrance duration: 350-450ms
- Stagger: 50-80ms between children
- Ease: `[0.16, 1, 0.3, 1]` — must cast as `[number,number,number,number]` in TypeScript

**Project card tilt:** Pure JS mouse move handler. Max ±3 degrees (reduced from ±4). CSS perspective(800px). Resets with 0.4s ease transition.

**3D Scene Performance:**
- `dpr={[1, 1.5]}` — cap pixel ratio
- `gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}`
- Loaded with `dynamic(() => import("./scene3d"), { ssr: false })`

**Skill Cards:**
- Circular SVG progress rings triggered by `useInView`
- Staggered at `index * 60ms` delay
- `transition: stroke-dashoffset 0.9s cubic-bezier(0.16,1,0.3,1)`

**No Loading Screen:** Deleted in rebrand. Page renders immediately.

**Why:** Previous cursor and loading screen added friction. Clean immediate render is more professional. Keep animations under 500ms.

**How to apply:** Never re-add custom cursor or loading screen. Prefer CSS for static decorations, Framer Motion for scroll-triggered enters.
