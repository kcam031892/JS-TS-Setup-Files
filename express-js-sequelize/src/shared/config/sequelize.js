import { DB_CONFIG, CONFIG } from './';

export const sequelizeConfig = {
  development: {
    username: DB_CONFIG.DB_USER,
    password: DB_CONFIG.DB_PASSWORD,
    database: `${DB_CONFIG.DB_DATABASE}_${CONFIG.NODE_ENV}`,
    port: DB_CONFIG.DB_PORT,
    host: DB_CONFIG.DB_HOST,
    dialect: 'mysql',
    operatorAliases: false,
    logging: DB_CONFIG.DB_LOGGING,
    sync: { force: DB_CONFIG.DB_SYNC },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    username: DB_CONFIG.DB_USER,
    password: DB_CONFIG.DB_PASSWORD,
    database: DB_CONFIG.DB_DATABASE,
    port: DB_CONFIG.DB_PORT,
    host: DB_CONFIG.DB_HOST,
    dialect: 'mysql',
    operatorAliases: false,
    logging: DB_CONFIG.DB_LOGGING,
    sync: { force: DB_CONFIG.DB_SYNC },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
