import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { CONFIG } from 'shared/config';
import { sequelizeConfig } from 'shared/config/sequelize';
const basename = path.basename(__filename);
const env = CONFIG.NODE_ENV || 'development';
const config = sequelizeConfig[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

export default db;
