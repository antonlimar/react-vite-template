import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsEslint from 'typescript-eslint';
import { createNodeResolver, importX } from 'eslint-plugin-import-x';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tsEslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tsEslint.configs.recommendedTypeChecked,
      ...tsEslint.configs.stylisticTypeChecked,
      importX.flatConfigs.recommended,
      importX.flatConfigs.typescript,
      eslintConfigPrettier,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'import-x/no-unresolved': ['error', { ignore: ['^@/', '^/'] }],
      'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'index', 'sibling', 'object', 'unknown'],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'after' },
            { pattern: '@/**', group: 'internal', position: 'after' },
            { pattern: './*.scss', group: 'unknown', position: 'after' },
            { pattern: '../*.scss', group: 'unknown', position: 'after' },
          ],
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true },
          warnOnUnassignedImports: true,
        },
      ],
      'import-x/no-cycle': 'error',
      'import-x/no-duplicates': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import-x/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
      'import-x/resolver-next': [createNodeResolver({ extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'] })],
    },
  },
);
