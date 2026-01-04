# Copilot / AI Agent Instructions for floorInstall  ✅

Short summary
- Minimal Vite + Vue 3 single-page app. Use `npm` scripts listed in `package.json` for all dev/build workflows.

Architecture & big-picture (what AI agents should know)
- Type: Vite + Vue 3 SPA (entry: `src/main.ts`, root component: `src/App.vue`).
- Router: `src/router/index.ts` — routes are declared here (currently an empty array). Add route objects to this file when adding pages.
- Source layout: `src/` is the canonical app code; imports may use the alias `@` (maps to `./src` via `vite.config.ts`).
- Devtools: `vite-plugin-vue-devtools` is enabled (helpful for runtime inspection).

Build / dev / verification commands (exact commands to run)
- Install: `npm install`
- Dev (hot reload): `npm run dev`  → runs `vite`
- Production build: `npm run build`  → runs `vue-tsc --build` (type-check) and then `vite build` (see `package.json`)
  - You can run type-check separately: `npm run type-check`
  - Preview production build locally: `npm run preview`
- Lint/fix: `npm run lint` (runs `eslint . --fix --cache`)
- Format: `npm run format` (runs Prettier on `src/`)

TypeScript / tooling specifics
- Type checking is done with `vue-tsc --build` (not plain `tsc`) to support `.vue` SFC types; the app `tsconfig` extends `@vue/tsconfig/tsconfig.dom.json`.
- `env.d.ts` is included to declare project-level types.
- Path alias: `@/*` → `./src/*` (set in `tsconfig.app.json` and `vite.config.ts`)
- Node engine constraint: see `package.json` (`node ^20.19.0 || >=22.12.0`).

Linting / formatting conventions
- ESLint is configured in `eslint.config.ts` using `@vue/eslint-config-typescript` and `eslint-plugin-vue`.
- Prettier integration uses the Vue Prettier config; `skip-formatting` is enabled in ESLint rules (formatting is applied via `npm run format`).
- Always run `npm run lint` (or `eslint . --fix`) and `npm run format` before opening a PR.

Project-specific patterns & notes (concrete examples)
- Imports frequently use the alias. Example: `import Foo from '@/components/Foo.vue'`.
- Router is kept central in `src/router/index.ts`. Adding a new page typically means: add a component under `src/`, then add a route object to this file.
- The `build` script uses `run-p` (npm-run-all2) to run tasks; be careful if modifying build steps.

Tests and CI
- There are no test frameworks or CI workflows present in this repo. If you add tests, follow existing patterns (TypeScript + Vite) and document new npm scripts.

Integration points / external dependencies
- Runtime deps: `vue`, `vue-router`.
- Dev deps: `vite`, `vue-tsc`, `eslint`, `prettier`, `vite-plugin-vue-devtools`, `@vue/eslint-config-typescript`.
- No external runtime services or environment variables are present/configured in the repo currently.

How to be productive as an AI agent (actionable checklist)
- 1) Run `npm install` and `npm run dev` to see local behavior.
- 2) Run `npm run type-check` and `npm run lint` early; fixing type and lint issues first avoids churn.
- 3) Use `@` alias for imports and add route entries in `src/router/index.ts` for new pages.
- 4) If you change build behavior, update `package.json` scripts and ensure `npm run build` still runs `vue-tsc` as a separate (or concurrent) step.

When to ask the maintainers
- If you need CI policy, test framework preference, or branch/PR conventions — none are present, ask what they prefer.
- If you plan to introduce runtime environment variables or external services, ask where to put the configuration and how secrets are managed.

Questions for you / next steps
- Would you like me to add a brief CI job (GitHub Actions) that runs `type-check` + `lint` + `build` on push/PR? If yes, indicate preferred node-version and branch policy.

---

If anything important is missing or you have preferred conventions (tests, CI, PR checks), tell me and I'll update this file. 🔧