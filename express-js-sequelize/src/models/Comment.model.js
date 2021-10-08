import { Model } from 'sequelize';
import { commonDataTypes } from 'shared/constants/dataTypes';
import { modelAttributes } from 'shared/utils/modelAttributes';
class Comment extends Model {
  static associate({ User }) {
    this.belongsTo(User, {
      foreignKey: 'user_id',
      as: 'comment',
    });
  }
}

const CommentModel = (sequelize, DataTypes) => {
  const { PRIMARYUUID, NOTNULLABLESTRING } = commonDataTypes(DataTypes);
  Comment.init(
    {
      id: PRIMARYUUID,
      title: NOTNULLABLESTRING,
      user_id: DataTypes.UUID,
    },
    {
      sequelize,
      ...modelAttributes,
    },
  );
  return Comment;
};

export default CommentModel;
