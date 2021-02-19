# JEST setup with Typescript

a test setup with typescript module resolution.

- devDependencies

  - typescript
  - jest
  - @types/node
  - @types/jest
  - ts-jest

- jest.config.js

  ```typescript
  const { pathsToModuleNameMapper } = require('ts-jest/utils');
  const { compilerOptions } = require('./tsconfig.json');
  const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src' });
  module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/test'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper,
    modulePaths: ['<rootDir>/src'],
  };
  ```

- tsconfig.json

  ```json
  {
    "compilerOptions": {
      "target": "ES6",
      "module": "CommonJS",
      "lib": ["ES2015"],
      "strict": true,
      "outDir": "./dist",
      "baseUrl": "./src",
      "paths": {
        "@src/*": ["*"],
        "@utils/*": ["utils/*"]
      },
      "esModuleInterop": true,
      "skipDefaultLibCheck": true,
      "forceConsistentCasingInFileNames": true
    },
    "include": ["src", "test"],
    "exclude": ["node_modules"]
  }
  ```

- package.json

  ```json
  "scripts": {
    "test": "jest --watchAll",
    "clean": "rimraf ./dist"
  },
  ```
