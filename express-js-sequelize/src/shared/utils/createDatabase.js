import mysql from 'mysql2/promise';
import { CONFIG } from 'shared/config';
import { sequelizeConfig } from 'shared/config/sequelize';

export const createDatabase = async () => {
  const env = CONFIG.NODE_ENV || 'development';
  const config = sequelizeConfig[env];
  const connection = await mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.username,
    password: config.password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${config.database}\`;`);
};
