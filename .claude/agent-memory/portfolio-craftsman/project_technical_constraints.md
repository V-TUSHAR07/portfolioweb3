---
name: Portfolio Technical Constraints
description: Key technical facts about this Next.js 16 + lucide-react v1 project
type: project
---

**Stack:** Next.js 16.2.1, React 19, Tailwind CSS 4, Framer Motion 12, lucide-react 1.7, clsx 2

**Critical: lucide-react v1.7 does NOT include:**
- `Github` (was removed/renamed)
- `Twitter` (was removed/renamed)
- `Linkedin` (was removed/renamed)

**Fix:** These are implemented as inline SVG in `src/components/social-icons.tsx` — always import from there.

**Framer Motion Variants typing:** When using `ease: [number, number, number, number]` inside a `const variants = {}` object, must cast as `[number, number, number, number]` to satisfy TypeScript. Inline `transition={}` JSX props do not need the cast.

**Tailwind CSS 4:** Uses `@import "tailwindcss"` (not `@tailwind base/components/utilities`). Theme tokens go in `@theme inline {}` block. No `tailwind.config.js` needed.

**Why:** Discovered during build — these icons were silently renamed in this version of lucide-react.

**How to apply:** Always check icon names against the installed version before using them. Use `node -e "require('./node_modules/lucide-react')[iconName]"` to verify.
