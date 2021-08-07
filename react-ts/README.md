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

  ```json
  {
  "extends": [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["react", "@typescript-eslint", "jest", "prettier"],
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": ["./tsconfig.json"]
  },
  "rules": {
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/ban-types": "off",
    "react/no-unescaped-entities": "off",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { "argsIgnorePattern": "^_" }
    ],
    "eslint/no-shadow": "off",
    "@typescript-eslint/no-shadow": "off",
    "react/require-default-props": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "typeLike",
        "format": ["PascalCase"],
        "leadingUnderscore": "allow"
      }
    ],
    "no-param-reassign": [
      "error",
      { "props": true, "ignorePropertyModificationsFor": ["state"] }
    ],
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  }
}

  ```

- .prettierrc

  ```.prettierrc
{
  "singleQuote": true,
  "trailingComma": "all",
  "jsxBracketSameLine": true,
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true
}
  ```

- package.json

  ```json
    "format": "prettier --write src/**/*.ts{,x}",
    "lint": "eslint src --cache --max-warnings=0"
  ```
