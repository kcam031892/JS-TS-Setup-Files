# Typescript / Javascript Setup Configuration

## Basic Typescript Setup

- tsc --init
- configure tsconfig.json
- tsc -w

---

## Basic JEST Setup with JS

- devDependecies
  - npm i --save-dev jest
- package.json
  - "test": "jest"

---

### [JEST SETUP WITH TYPESCRIPT](https://github.com/kcam031892/JS-TS-Setup-Files/tree/main/ts-with-jest)

# Typescript with Express

a startup files for express application with typescript.
eslint installed.

- dependencies
  - express
  - dotenv
- devDependencies

  - nodemon
  - @types/node
  - @types/express
  - eslint
  - @typescript-eslint/parser
  - @typescript-eslint/eslint-plugin
  - typescript
  - ts-node
  - tsconfig-paths

- .eslintignore

  ```
  node_modules
  dist
  ```

- .eslintrc

  ```json
  {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }
  }
  ```

  nodemon.json

  ```json
  {
    "watch": ["src"],
    "ext": ".ts,.js",
    "ignore": [],
    "exec": "ts-node -r tsconfig-paths/register ./src/index.ts"
  }
  ```

- package.json

  ```json
    "start": "nodemon",
    "clean": "rimraf dist",
    "dev": "nodemon --exec babel-node dist/index.js",
    "lint": "eslint . --ext .ts"
  ```

- tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "commonjs",
    "moduleResolution": "node",
    "lib": ["ES2017"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "baseUrl": "./src",
    "paths": {
      "@src/*": ["*"],
      "@controllers/*": ["controllers/*"],
      "@middlewares/*": ["middlewares/*"],
      "@models/*": ["models/*"],
      "@routes/*": ["routes/*"],
      "@validators/*": ["middlewares/validators/*"],
      "@utils/*": ["utils/*"],
      "@interfaces/*": ["interfaces/*"],
      "@constants/*": ["constants/*"],
      "@enums/*": ["enums/*"]
    },
    "typeRoots": ["./src/@types", "./node_modules/@types"],
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```
