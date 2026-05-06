# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (Vite)
npm run build     # production build
npm run lint      # ESLint (typescript-eslint)
npm run preview   # preview production build locally
```

There is no test suite.

## Architecture

Single-page portfolio for Pavel Kovalchuk (`pavelcode.dev`). One page, one route.

**Entry point flow:** `src/main.tsx` → `src/App.tsx` → `src/pages/HomePage.tsx`

`HomePage` renders `<Header>` and `<Hero>` eagerly; all other sections and `<Footer>` are `React.lazy`-loaded inside `<Suspense>`:

```
Header (eager)
Hero (eager)
  └─ WaveBackground (lazy — Three.js particle wave)
About / Projects / Services / Process / Skills / Contact / Footer (all lazy)
```

**Sections** live in `src/sections/<Name>/`, each with a `.tsx` implementation file, an `index.tsx` re-export, and a `<Name>.module.css`.

**Components** live in `src/components/<Name>/`, same pattern.

**Scroll-reveal animations** use `src/hooks/useInView.ts` — a one-shot IntersectionObserver that sets a `visible` boolean. Sections toggle a `.visible` CSS class to trigger CSS transitions.

## Styling

- CSS Modules (`.module.css`) — scoped per component/section.
- Global design tokens in `src/styles/variables.css` — use these CSS custom properties for colors, spacing, border-radii, font sizes, and gradients. Do not hardcode values that already exist as variables.
- Dark theme: `--bg-dark-solid: #0A0E1A`, accent colors `--accent-blue: #2d7cf6` / `--accent-cyan: #38bdf8`.

## Internationalisation

All UI strings live in `src/utils/i18n.ts` (inline `resources` object — no separate JSON files). Three languages: `en`, `pl`, `ru`. Language is auto-detected from `navigator.language` with post-USSR locales mapped to `ru`; choice is persisted to `localStorage`.

When adding or changing any user-visible text, update all three language keys. Use `useTranslation()` hook and `t('key.path')` in components — never hardcode strings.

## Images

Project images are imported with vite-imagetools query params:

```ts
import img from '../../assets/projects/foo.jpg?format=webp&quality=80';
```

`vite-imagetools` and `vite-plugin-image-optimizer` handle conversion and compression at build time.

## 3D Background

`src/sections/Hero/WaveBackground.tsx` renders an animated particle grid using `@react-three/fiber` + `three`. It is lazy-loaded and wrapped in `<Suspense fallback={null}>` to avoid blocking the hero render.

## Contact Form

Uses `@formspree/react` — form submissions go directly to Formspree; no backend in this repo.

## Key ESLint rule

`@typescript-eslint/no-unused-vars` is set to error, but variables matching `/^[A-Z_]/` are exempt (used for constant-like names).
