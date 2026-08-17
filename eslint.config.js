import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { createNodeResolver, importX } from 'eslint-plugin-import-x';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tsEslint, { configs as tsEslintConfigs } from 'typescript-eslint';

export default tsEslint.config(
  { ignores: ['dist', 'dist-ssr'] },
  {
    extends: [
      js.configs.recommended,
      ...tsEslintConfigs.recommendedTypeChecked,
      ...tsEslintConfigs.stylisticTypeChecked,
      importX.flatConfigs.recommended,
      importX.flatConfigs.typescript,
      eslintConfigPrettier,
    ],
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefreshPlugin,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/prop-types': 'off',
      'no-nested-ternary': 'error',
      'import-x/no-unresolved': ['error', { ignore: ['^/'] }],
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
      '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import-x/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
      'import-x/resolver-next': [
        createTypeScriptImportResolver({ project: './tsconfig.eslint.json' }),
        createNodeResolver({ extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'] }),
      ],
    },
  },
);
