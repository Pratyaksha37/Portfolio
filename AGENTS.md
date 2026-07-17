<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:progress-summary -->
## Objective
- Terminal-style personal portfolio for Pratyaksha Shastri, two-panel layout: left (40%) = 3D Lanyard card (React Bits), right (60%) = Linux-style terminal
- Tech: Next.js App Router, Tailwind CSS, React Three Fiber, @react-three/rapier, shadcn/ui, Framer Motion

## Layout
- Left aside: Particles background (20 green floating dots) + transparent Lanyard Canvas so particles show through
- Right main: Terminal with TypeWriter, command suggestions, history/autocomplete, theme switching
- Header: name + "Available for Hire" badge; Footer: prompt + LiveClock
- All client components defer to mount-only rendering to avoid hydration errors

## Lanyard Card (Left Panel)
- Installed via `npx shadcn@4.12.0 add @react-bits/Lanyard-JS-CSS`
- JS+CSS variant (no TypeScript) — pure JSX, located at `src/components/Lanyard/Lanyard.jsx`
- Assets served from `public/` as URL strings (`'/card.glb'`, `'/lanyard.png'`) to work around Turbopack direct-file-import limitation
- frontImage set to `/images/photo.png` with grayscale filter applied via `ctx.filter = "grayscale(100%)"` in compositing code
- `transparent={true}` allows Particles dots to show through behind the card
- Card scale: 3.2, with proportionate collider adjustments
- console.warn overridden in page.tsx useEffect to suppress THREE.Clock/rapier deprecation noise
- Dead files deleted: ProfileCard.tsx, ProfileCard.css, Particles.tsx (replaced by new Particles), ui/button.tsx
- Dead CSS removed from globals.css

## Terminal (Right Panel)
- 12+ commands: welcome, help, about, projects, skills, experience, education, contact, certifications, social, ascii, theme, resume, sudo
- Commands registry at `lib/commands.tsx` — maps command names to handler components
- Content data at `lib/content.ts` — all portfolio data
- TypeWriter component: 20ms/char default, supports instant-output via `instant` prop
- 5 themes defined in `lib/themes.ts` with `applyTheme()` function
- Theme names: hacker (default), matrix, neon, retro, light

## Components
- `src/components/Terminal.tsx` — main terminal with input, output, suggestions bar, history, autocomplete
- `src/components/TypeWriter.tsx` — character-by-character text animation
- `src/components/Particles.tsx` — 20 green floating dot particles with CSS keyframe animation
- `src/components/Header.tsx` — name + availability badge
- `src/components/Footer.tsx` — prompt string + LiveClock
- `src/components/commands/*.tsx` — 12 content components, one per command
- `src/components/Lanyard/Lanyard.jsx` + `Lanyard.css` — official React Bits Lanyard (JS variant)

## Files
- `src/app/page.tsx` — main layout: aside (Particles + Lanyard) + main (Terminal), console.warn suppression
- `src/app/globals.css` — global styles, CSS variables, keyframe animations
- `src/lib/content.ts` — all portfolio data (about, projects, skills, experience, education, certifications, social, contact, ascii)
- `src/lib/commands.tsx` — command registry
- `src/lib/themes.ts` — 5 themes + applyTheme()
- `public/card.glb` — 3D card model
- `public/lanyard.png` — lanyard band texture
- `public/images/photo.png` — card front photo

## State
- Build passing with no TS errors
- No push to GitHub yet
- `photo.png` in public/images/ is a placeholder copied from existing avatar JPG
<!-- END:progress-summary -->
