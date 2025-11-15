## Repo Orientation — Sheeter-Alo

This file helps AI coding agents become productive quickly in this Vite + React project.

- **Project type:** Vite React app with TailwindCSS + DaisyUI. Uses React Router v7 and JS/JSX files (not TypeScript runtime).
- **Dev commands:** `npm run dev` (start Vite), `npm run build`, `npm run preview`, `npm run lint` (uses `eslint.config.js`). See `package.json`.

**Key files / entrypoints**
- `index.html` — app shell; mounts `#root` and loads `src/main.jsx`.
- `src/main.jsx` — app entry: uses `RouterProvider` and the exported router. Example:

```jsx
// src/main.jsx
import { RouterProvider } from 'react-router/dom'
import Router from './routes/Router'
createRoot(...).render(<RouterProvider router={Router} />)
```

- `src/routes/Router.jsx` — single place for route definitions. Current shape uses `createBrowserRouter([...])`. Update this file to add routes/layouts or to reference loader/action code.
- `src/index.css` — imports Tailwind and DaisyUI (`@import "tailwindcss"` and `@plugin "daisyui"`). Styling flows from here.

**Architecture & conventions (discoverable patterns)**
- Routing: React Router v7 pattern — router object is exported from `src/routes/Router.jsx` and passed into `RouterProvider` in `src/main.jsx`. Use `createBrowserRouter` and keep route trees here.
- Components layout: `src/components/` is split into `cards/`, `layout-components/`, and `shared-components/`. Place presentational UI cards under `cards/`, layout wrappers/components under `layout-components/`, and small reusable bits under `shared-components/`.
- Page/layout usage: There is a top-level `src/layout/` and `src/pages/` directories — prefer placing route-level screens in `pages/` and composition/layout in `layout/`.
- Styling: Tailwind utility classes + DaisyUI themes. Keep global styles and Tailwind imports in `src/index.css`; prefer component-level classes rather than separate CSS files.

**Build / Dev / Lint specifics**
- Run dev server: `npm run dev` (Vite). Default port is Vite's port (e.g., `5173`) unless env overrides.
- Build: `npm run build` → `vite build`.
- Preview build: `npm run preview` → `vite preview`.
- Lint: `npm run lint` runs ESLint configured in `eslint.config.js`. Note rule: `no-unused-vars` is configured to ignore names matching `/^[A-Z_]/`.

**Tooling & plugins**
- `vite.config.js` loads `@vitejs/plugin-react` and `@tailwindcss/vite` — modify `vite.config.js` if adding new Vite plugins or changing dev/build behavior.
- Tailwind + DaisyUI are installed; confirm `tailwind.config.js` presence if you add custom themes. (None enforced by this file; check repo root for `tailwind.config.js`.)

**Small examples from the codebase**
- Router export (current minimal example):

```jsx
// src/routes/Router.jsx
import { createBrowserRouter } from 'react-router'
export default createBrowserRouter([{ path: '/', element: <div>Home</div> }])
```

- ESLint config highlights: `eslint.config.js` sets JS/JSX parsing, enables `react-hooks` and `react-refresh` plugin configs.

**Integration points & external dependencies**
- React Router v7 (`react-router` + `react-router/dom`) — route loaders/actions (if added) will live adjacent to the route definitions.
- Vite dev server — used for HMR; avoid heavy startup tasks inside module initialization.
- Tailwind/DaisyUI — design is utility-first; prefer small components composed with classes.

**Agent editing guidelines (practical, repo-specific)**
- To add a new route, edit `src/routes/Router.jsx` and add entries to the `createBrowserRouter` tree; add pages in `src/pages/` and import them in the router.
- Prefer adding new visual components under the appropriate `src/components/*` subfolder — follow the existing subfolder responsibilities.
- When changing styles, update `src/index.css` only for global rules and leave utility classes in-component.
- If you change build steps or plugin needs, update `vite.config.js` and `package.json` scripts together.
- Respect ESLint config. New files should follow the JS/JSX patterns in `eslint.config.js` and use the same naming conventions (components capitalized, pages often PascalCase or kebab as existing files).

**Notes / Caveats (what I couldn't infer automatically)**
- There is no `tailwind.config.js` or explicit `postcss` config visible — if you add Tailwind customizations, create `tailwind.config.js` at repo root.
- The project installs some `@types/*` packages but currently uses JS/JSX — be cautious converting files to TypeScript without updating build config.

If anything here looks incomplete or you want more examples (route loaders, sample page scaffold, or a small PR implementing a sample route + page), tell me which part and I'll iterate.
