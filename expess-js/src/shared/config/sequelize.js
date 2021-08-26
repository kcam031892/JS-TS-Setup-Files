import { DB_CONFIG } from './';

module.exports = {
  development: {
    username: DB_CONFIG.DB_USER,
    password: DB_CONFIG.DB_PASSWORD,
    database: DB_CONFIG.DB_DATABASE,
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
