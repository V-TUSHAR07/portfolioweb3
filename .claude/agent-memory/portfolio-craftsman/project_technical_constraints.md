---
name: Portfolio Technical Constraints
description: Key technical facts about this Next.js 16 + lucide-react v1 project
type: project
---

**Stack:** Next.js 16.2.1, React 19, Tailwind CSS 4, Framer Motion 12, lucide-react 1.7, clsx 2
**3D:** @react-three/fiber, @react-three/drei, three, @types/three (installed and working)
**Animation:** GSAP installed (not yet used for timeline, used manually with setTimeout for terminal boot)

**Critical: lucide-react v1.7 does NOT include:**
- `Github` (was removed/renamed)
- `Twitter` (was removed/renamed)
- `Linkedin` (was removed/renamed)

**Fix:** These are implemented as inline SVG in `src/components/social-icons.tsx` — always import from there.

**Framer Motion Variants typing:** When using `ease: [number, number, number, number]` inside a `const variants = {}` object, must cast as `[number, number, number, number]` to satisfy TypeScript. Inline `transition={}` JSX props do not need the cast.

**Tailwind CSS 4:** Uses `@import "tailwindcss"` (not `@tailwind base/components/utilities`). Theme tokens go in `@theme inline {}` block. No `tailwind.config.js` needed.

**3D Scene pattern:** scene3d.tsx (shell with dynamic import ssr:false) + scene3d-inner.tsx (actual Canvas/R3F code). This two-file pattern prevents SSR issues. Use `dpr={[1, 1.5]}` and `powerPreference: "low-power"` for performance.

**Style prop duplicate key bug:** Never pass the same CSS property twice in a style object (e.g., `opacity` twice). TypeScript catches this as a compile error.

**Why:** Discovered during build — these icons were silently renamed, style duplicates fail TS, SSR breaks R3F Canvas.

**How to apply:** Always check icon names against social-icons.tsx. Split 3D scenes into shell+inner pattern. Avoid duplicate style keys.
