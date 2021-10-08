import { Model } from 'sequelize';
import { commonDataTypes } from 'shared/constants/dataTypes';
import { modelAttributes } from 'shared/utils/modelAttributes';

class Profile extends Model {
  static associate({ User }) {
    this.belongsTo(User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

const ProfileModel = (sequelize, DataTypes) => {
  const { PRIMARYUUID, NOTNULLABLESTRING } = commonDataTypes(DataTypes);
  Profile.init(
    {
      id: PRIMARYUUID,
      first_name: { ...NOTNULLABLESTRING },
      last_name: { ...NOTNULLABLESTRING },
      image_url: { ...NOTNULLABLESTRING },
      user_id: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      ...modelAttributes,
    },
  );

  return Profile;
};

export default ProfileModel;
