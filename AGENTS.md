# AGENTS.md

Guidance for coding agents working in this repository.

## Project

This repository is a React + Vite application template using TypeScript, SCSS,
ESLint, Stylelint, Prettier, and BEM conventions.

Keep this file focused on long-lived repository rules. If instructions conflict,
prefer this order:

1. Explicit user instruction in the current conversation.
2. `AGENTS.md`.
3. Existing project configuration and code style.
4. `README.md`.

## Documentation Lookup

Use the `ctx7` CLI to fetch current documentation whenever the user asks about a
library, framework, SDK, API, CLI tool, or cloud service. This includes React,
Vite, TypeScript, ESLint, Stylelint, Sass, and related setup or migration
questions.

Workflow:

1. Resolve the library first:
   `npx ctx7@latest library <name> "<user's full question>"`
2. Pick the best `/org/project` match by exact name, relevance, source
   reputation, snippet count, and benchmark score.
3. Fetch docs:
   `npx ctx7@latest docs <libraryId> "<user's full question>"`
4. If the answer is not sufficient, re-run docs with `--research`.

Do not use Context7 for routine refactoring, business-logic debugging, code
review, or general programming concepts. Do not include secrets in queries. Do
not run more than three Context7 commands for one question.

## Directory Map

| Path                        | Purpose                                      |
| --------------------------- | -------------------------------------------- |
| `src/main.tsx`              | React entry point.                           |
| `src/App.tsx`               | Root application component.                  |
| `src/components/`           | Reusable UI components.                      |
| `src/components/*/index.ts` | Public component re-export files.            |
| `src/shared/`               | Shared helpers, including the BEM setup.     |
| `src/styles/`               | Shared SCSS variables and global style data. |
| `src/assets/`               | Source assets imported by the app.           |
| `public/`                   | Static assets served directly by Vite.       |
| `vite.config.ts`            | Vite config and `@` alias definition.        |
| `eslint.config.js`          | Flat ESLint configuration.                   |
| `tsconfig*.json`            | TypeScript project configuration.            |

Do not edit generated output such as `dist/` manually.

## Main Commands

| Command             | Purpose                                        |
| ------------------- | ---------------------------------------------- |
| `npm install`       | Install dependencies from `package-lock.json`. |
| `npm run dev`       | Start Vite dev server.                         |
| `npm run build`     | Run TypeScript build check and Vite build.     |
| `npm run lint`      | Run ESLint on the repository.                  |
| `npm run stylelint` | Run Stylelint on `src/**/*.scss`.              |
| `npm run format`    | Format files with Prettier.                    |
| `npm run preview`   | Preview the production build locally.          |

There is currently no dedicated test script. For functional changes, run at
least `npm run build`, `npm run lint`, and `npm run stylelint` when practical.

## Code Style

- Use TypeScript and React function components.
- Prefer the `@` alias for imports from `src` instead of long relative paths.
- Keep exports explicit. Components should usually have an `index.ts` re-export.
- Preserve strict TypeScript settings; do not work around errors with broad
  casts or disabled rules unless the reason is documented in code.
- Keep changes focused on the requested behavior. Avoid unrelated cleanup or
  large refactors in this template repository.

## Components And BEM

The project uses `bem-cn` through `src/shared/bem.ts`:

```ts
import { bem } from '@/shared';

const classBEM = bem('component-name');
```

The configured class naming is:

- namespace: `app-`
- modifier separator: `--`
- modifier value separator: `-`

For new components, prefer this shape:

```text
src/components/ComponentName/
  ComponentName.tsx
  ComponentName.scss
  index.ts
```

Import the component SCSS from the component file. Use BEM-derived classes for
component-local styling instead of ad hoc global class names.

## Styling

- Use SCSS for styles.
- Reuse shared values from `src/styles/_variables.scss` where appropriate.
- Keep global styles in `src/index.scss` and app-level styles in `src/App.scss`.
- Component-specific styles belong next to the component.
- Run `npm run stylelint` after non-trivial SCSS changes.

## Dependencies

- This is a template, so avoid adding dependencies unless they clearly improve
  the reusable baseline.
- Keep dependency changes deliberate and reflected in `package-lock.json`.
- If changing React, Vite, TypeScript, ESLint, Stylelint, Sass, or Prettier
  configuration, use Context7 docs first.

## Git Hygiene

- Preserve user changes. Do not revert unrelated edits.
- Do not commit, push, or create pull requests unless the user asks.
- Before finishing code changes, check `git status --short` and summarize the
  touched files.
