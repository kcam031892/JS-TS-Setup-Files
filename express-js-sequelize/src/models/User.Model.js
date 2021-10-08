import { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
import { commonDataTypes } from 'shared/constants/dataTypes';
import { modelAttributes } from 'shared/utils/modelAttributes';
import { jwtToken } from 'shared/config/jwtToken';

class User extends Model {
  static associate({ Profile, Post }) {
    this.hasOne(Profile, {
      foreignKey: 'user_id',
      as: 'profile',
    });

    this.hasMany(Post, {
      foreignKey: 'user_id',
      as: 'posts',
    });
  }
  getFullName() {
    return [this.username, this.password].join(' ');
  }
  comparePassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
  generateJwtToken() {
    return jwtToken(this);
  }
  toJSON() {
    return { ...this.get(), password: undefined };
  }
}
const UserModel = (sequelize, DataTypes) => {
  const { PRIMARYUUID, NOTNULLABLESTRING } = commonDataTypes(DataTypes);
  User.init(
    {
      id: PRIMARYUUID,
      username: {
        ...NOTNULLABLESTRING,
        unique: true,
      },
      password: NOTNULLABLESTRING,
      email: {
        ...NOTNULLABLESTRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    },
    {
      sequelize,
      ...modelAttributes,
    },
  );

  User.beforeCreate((user) => {
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    user.password = hashedPassword;
  });

  return User;
};

export default UserModel;
