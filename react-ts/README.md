# React App with Typescript, Eslint & Prettier Setup

- a start up files for react with typescript, eslint & prettier.

- devDependecies

  - @typescript-eslint/eslint-plugin"
  - @typescript-eslint/parser"
  - eslint-config-airbnb-typescript"
  - eslint-config-prettier"
  - eslint-config-react"
  - eslint-config-react-app"
  - eslint-plugin-jest"
  - eslint-plugin-prettier"
  - prettier"

- .eslintrc.js

  ```js
  module.exports = {
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'jest', 'prettier'],
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      project: ['./tsconfig.json'],
    },
    rules: {
      'linebreak-style': 'off',
      'import/prefer-default-export': 'off',
      'no-unused-vars': 'error',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  };
  ```

- .prettierrc

  ```.prettierrc
  {
  "singleQuote": true,
  "trailingComma": "all",
  "jsxBracketSameLine": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true
  }
  ```

- package.json

  ```json
    "format": "prettier --write src/**/*.ts{,x}",
    "lint": "tsc --noEmit && eslint src/**/*.ts{,x}"
  ```
