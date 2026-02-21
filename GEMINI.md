# Sunflower Lab Modernization & Mandates

This document tracks the foundational architectural decisions and technical requirements established during the 2026 modernization of the `sunflower-lab` workspace. These instructions take precedence over general agent defaults.

## 🛠 Environment Requirements

- **Node.js:** `v22.22.0` (LTS) or higher.
  - _Rationale:_ Required for `node:util` `styleText` compatibility used by ESLint 10 and Storybook 10.
- **Package Manager:** `pnpm` v10.x.
  - _Security:_ Transitive vulnerabilities are managed via `pnpm.overrides` in the root `package.json`.
    - _Note:_ `minimatch` is kept at v3 for compatibility with `@eslint/eslintrc`. Forcing v10+ crashes the linter due to export mismatches.
- **Module System:** Strict ESM (`"type": "module"` in `package.json`).

## 🏗 Core Architecture

### Svelte 5 (Runes Mode)

- All components have been migrated to **Svelte 5 Runes**.
- **Syntax Mandates:**
  - **Props:** Use `const { prop = default } = $props();`.
  - **Bindable Props:** Must be destructured directly inside `$props()`: `const { value = $bindable() } = $props();`.
  - **State:** Use `$state()` or `$state.raw()` (for large arrays/objects).
  - **Derived:** Use `$derived()` or `$derived.by()`.
  - **Events:** Use attribute handlers (e.g., `onclick`, `onswipe`) instead of `on:event`.
  - **Slots:** Replaced by snippets: `{@render children?.()}`.
- **Self-closing tags:** Non-void HTML elements (e.g., `<div></div>`, `<span></span>`) must NOT be self-closing.

### Tooling

- **ESLint 10:** Uses Flat Config (`eslint.config.js`).
  - Uses `FlatCompat` for `airbnb-base` and `cypress` plugins.
  - Prettier must always be the last element in the config array to handle conflicts.
- **Storybook 10:** Uses `@storybook/svelte-vite` (Vite-based).
  - Stories are migrated to TypeScript CSF format (`.stories.ts`).
  - Complex slot testing in stories uses wrapper components (e.g., `CardStandardStory.svelte`).
- **Testing:** Vitest + Svelte Testing Library (v5).
  - Tests are located alongside components: `src/**/*.test.ts`.
  - Configuration requires `browser` conditions in `vite.config.js` to ensure client-side Svelte build.
  - Slot testing uses `createRawSnippet` or wrapper components.

## 📦 Component Conventions

- **Gestures:** The Carousel uses `svelte-gestures` v5 with the `useSwipe` action and `onswipe` event handler.
- **Icons:** Standardized on `@mdi/js` icon path strings.

## 🚀 CI/CD & Publishing

- **GitHub Actions:** Configured for Node 22 and pnpm 10.
- **NPM Publishing:** Uses **Trusted Publishing (OIDC)** with `--provenance`.
  - Permissions for `id-token: write` and `contents: read` are mandatory.
  - **Critical:** Use `npm publish` (not pnpm) for the final publish step to ensure reliable OIDC handshake.
  - Always upgrade to the latest `npm` (`npm install -g npm@latest`) in the publish job.
  - Configure `registry-url: 'https://registry.npmjs.org'` in `setup-node` for the publish job.
- **Packaging:** Uses `@sveltejs/package`.
  - `package.json` must define `exports`, `main`, `types`, and include `dist` in `files`.
  - Publishing is done from the package root (e.g., `packages/greenhouse`), NOT the `dist` folder.
