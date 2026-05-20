# React Vite Template

![React](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Vite](https://img.shields.io/badge/Vite-6-purple) ![SASS](https://img.shields.io/badge/SASS-CSS-pink) ![ESLint](https://img.shields.io/badge/ESLint-lint-yellow) ![ESLint](https://img.shields.io/badge/Stylelint-lint-green) ![Prettier](https://img.shields.io/badge/Prettier-format-orange)

This template is designed for quickly creating React applications with Vite, TypeScript, SCSS, and the BEM methodology. It includes ESLint, Stylelint, and Prettier to help maintain high code quality.

## 🚀 Features

- **React 19** – a modern library for building user interfaces.
- **TypeScript** – strict typing for more reliable code.
- **Vite** – fast builds and HMR support.
- **SCSS** – a powerful style preprocessor.
- **BEM methodology** – a structured approach to writing CSS.
- **ESLint + Stylelint + Prettier** – automatic code formatting and checks.

## 📦 Installation

```sh
git clone git@github.com:antonlimar/react-vite-template.git
cd react-vite-template
npm install
```

## 🔧 Development

```sh
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

## 🛠 Project Build

```sh
npm run build
```

## 📏 Linting and Code Formatting

```sh
npm run lint        # Check code
npm run stylelint   # Check styles
npm run format      # Format code
```

## 📁 Project Structure

```
react-vite-template/
│── .github/           # Files related to GitHub Actions
│── .husky/            # Files for managing Git hooks
│── public/            # Static files
│── src/
│   ├── assets/        # Images and fonts
│   ├── components/    # UI components
│   ├── shared/        # Shared utilities for the entire application
│   ├── styles/        # Global styles (SCSS, BEM)
│   ├── App.tsx        # Main component
│   ├── main.tsx       # Entry point
│── .editorconfig      # Formatting configuration for text editors and IDEs
│── .prettierrc        # Prettier configuration
│── .stylelintrc.json  # Stylelint configuration
│── eslint.config.js   # ESLint configuration
│── package.json       # Dependencies and scripts
│── tsconfig.json      # TypeScript configuration
│── vite.config.ts     # Vite configuration
```

## 📜 License

This template is distributed under the MIT license. Feel free to build projects based on it!
