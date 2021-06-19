# NodeJS Express app with typescript setup.

a startup files for express application with typescript.
eslint installed.

- dependencies
  - express
  - dotenv
- devDependencies

  - @babel/cli
  - @babel/core
  - @babel/node
  - @babel/preset-env
  - @types/express
  - @types/node
  - @typescript-eslint/eslint-plugin
  - @typescript-eslint/parser
  - babel-plugin-module-resolver
  - concurrently
  - eslint
  - nodemon
  - ts-node
  - tsconfig-paths
  - typescript

- .eslintignore

  ```json
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
    "start": "nodemon server/dist/index",
    "clean": "rimraf dist",
    "dev:server": "concurrently \"tsc -w\" \"nodemon --exec babel-node dist/index.js\"",
    "build:server": "babel server/src --out-dir server/dist --copy-files",
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

- .babelrc

  ```json
  {
    "presets": ["@babel/preset-env"],
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "@": "./dist",
            "@models": "./dist/models",
            "@controllers": "./dist/controllers",
            "@routes": "./dist/routes",
            "@middlewares": "./dist/middlewares",
            "@models/*": "./dist/models/*",
            "@routes/*": "./dist/routes/*",
            "@validators/*": "./dist/middlewares/validators/*",
            "@utils/*": "./dist/utils/*",
            "@constants/*": "./dist/constants/*"
          }
        }
      ]
    ]
  }
  ```

```

```
