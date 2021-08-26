import dotenv from 'dotenv';

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV;
export const PORT = process.env.PORT || 8080;

export const DB_CONFIG = {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_SYNC: process.env.DB_SYNC === 'true',
  DB_LOGGING: process.env.DB_LOGGING === 'true',
};
