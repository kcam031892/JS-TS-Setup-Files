import dotenv from 'dotenv';

dotenv.config();
export const CONFIG = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 8080,
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
};

export const DB_CONFIG = {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PORT: process.env.DB_PORT,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_SYNC: process.env.DB_SYNC === 'true',
  DB_LOGGING: process.env.DB_LOGGING === 'true',
};
