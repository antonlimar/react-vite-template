# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

`AGENTS.md` (imported above) holds the rules shared with other agents: commands,
directory map, code style, BEM and styling conventions, CI and pre-commit
behavior, dependency and git policy. The notes below only cover details that
come from reading several config files together and are not repeated there.

## Verification

- `npm run format:check` exists but is not part of CI.
- `npm run lint:fix` mainly fixes import order and type-import style.

## Build Pipeline

- Vite runs `@vitejs/plugin-react` together with `@rolldown/plugin-babel` using
  `reactCompilerPreset()` (see `vite.config.ts`).
- `npm run build` is `tsc -b && vite build`. `tsconfig.json` only holds project
  references: `tsconfig.app.json` covers `src/` and `tsconfig.node.json` covers
  `vite.config.ts`.

## ESLint Specifics

- Rulesets are `recommendedTypeChecked` + `stylisticTypeChecked`.
- Assets imported from `public/` by absolute path (for example `'/vite.svg'`)
  are not resolvable by the import plugin and need
  `// eslint-disable-next-line import-x/no-unresolved`. `src/App.tsx` shows this.
- `no-nested-ternary`, `import-x/no-cycle`, and `@typescript-eslint/no-deprecated` are errors.

## BEM ↔ SCSS Coupling

See `src/components/SuperDiv/` for the reference component pairing `bem` in TSX
with the `variables.$prefix` selector in SCSS.

`src/App.scss` still uses plain global classes left over from the Vite starter.
Do not copy that pattern into new components.
