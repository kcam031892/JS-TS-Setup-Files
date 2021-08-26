import { Model } from 'sequelize';

class User extends Model {
  static tableName = 'sd';
}
export default (sequelize, DataTypes) => {
  User.init(
    {
      first_name: DataTypes.STRING,
    },
    {
      tableName: 'user',
      sequelize,
    },
  );
  return User;
};
