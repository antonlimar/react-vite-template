# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

`AGENTS.md` (imported above) holds the rules shared with other agents: commands,
directory map, code style, BEM and styling conventions, dependency and git
policy. The notes below cover details that come from reading several config
files together.

## Verification

- There is no test runner, so no single-test command. Verification means the
  same checks CI runs (`.github/workflows/`, Node 24): `npm run lint`,
  `npm run stylelint`, `npm run build`. `npm run format:check` also exists but
  is not in CI.
- `npm run lint:fix` applies ESLint autofixes, mainly import order and type-import style.
- The Husky pre-commit hook runs `lint-staged` (config in `package.json`):
  `eslint --fix` + Prettier on JS/TS, and `stylelint` + Prettier on SCSS.

## Build Pipeline

- Vite runs `@vitejs/plugin-react` together with `@rolldown/plugin-babel` using
  `reactCompilerPreset()`, so the **React Compiler** is on. Manual
  `useMemo`/`useCallback`/`memo` is usually unnecessary.
- `npm run build` is `tsc -b && vite build`. `tsconfig.json` only holds project
  references: `tsconfig.app.json` covers `src/` and `tsconfig.node.json` covers
  `vite.config.ts`.

## ESLint Specifics

- Linting is type-aware (`recommendedTypeChecked` + `stylisticTypeChecked`)
  and uses `tsconfig.eslint.json`. A new root-level JS/TS config file has to be
  added to that file's `include`, or ESLint will fail to parse it.
- `import-x/order` is strict: alphabetized, no blank lines between groups,
  `react` after other externals, then `@/**`, and the component's own `./*.scss`
  import last. Type imports must be separate `import type` statements.
- Assets imported from `public/` by absolute path (for example `'/vite.svg'`)
  are not resolvable by the import plugin and need
  `// eslint-disable-next-line import-x/no-unresolved`. `src/App.tsx` shows this.
- `no-nested-ternary`, `import-x/no-cycle`, and `@typescript-eslint/no-deprecated` are errors.

## BEM ↔ SCSS Coupling

The class prefix is defined twice and the two must stay in sync:

- JS: `src/shared/bem.ts` → `setup({ ns: 'app-', ... })`
- SCSS: `src/styles/_variables.scss` → `$prefix: 'app'`

Component SCSS uses the `@` alias through Sass `@use` and builds selectors from
the prefix (see `src/components/SuperDiv/`):

```scss
@use '@/styles/variables';

.#{variables.$prefix}-super-div { ... }
```

`src/App.scss` still uses plain global classes left over from the Vite starter.
Do not copy that pattern into new components.
