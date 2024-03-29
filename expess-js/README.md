# NodeJS Express with Sequelize Setup
A NodeJS Express boilerplate with Sequelize

## Features:
* Transpiler: Babel
* Eslint with Google config.
* Formatter: prettier
* ESModule imports/exports
* Path alias: Module Resolver
* Loggin: Morgan
* Headers Security:  Helmet
* Setup MySQL Database with Sequelize ORM.
* nodemon.

## Requirements:
* NodeJS
* Yarn

## How to use:
1. Install Packages
```terminal
  $ yarn
```
2. Create env
  * NODE_ENV: string
  * PORT: number
  * DB_HOST: string
  * DB_USER: string
  * DB_PASSWORD: string
  * DB_DATABASE: string
  * DB_PORT: number
  * DB_LOGGING: boolean
  * DB_SYNC: boolean

2. Run in development mode
```terminal
  $ yarn dev
```
3. Run in production
```terminal
  $ yarn start
```


