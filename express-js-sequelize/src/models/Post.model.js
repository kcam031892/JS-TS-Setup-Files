import { Model } from 'sequelize';
import { commonDataTypes } from 'shared/constants/dataTypes';
import { modelAttributes } from 'shared/utils/modelAttributes';
class Post extends Model {
  static associate({ User }) {
    this.belongsTo(User, {
      foreignKey: 'user_id',
      as: 'post',
    });
  }
}

const PostModel = (sequelize, DataTypes) => {
  const { PRIMARYUUID, NOTNULLABLESTRING } = commonDataTypes(DataTypes);
  Post.init(
    {
      id: PRIMARYUUID,
      title: { ...NOTNULLABLESTRING },
      description: { ...NOTNULLABLESTRING },
      image_url: { ...NOTNULLABLESTRING },
      user_id: DataTypes.UUID,
    },
    {
      tableName: Post.tableName,
      sequelize,
      ...modelAttributes,
    },
  );
  return Post;
};

export default PostModel;
