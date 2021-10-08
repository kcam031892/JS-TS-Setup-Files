import { Model } from 'sequelize';
import { commonDataTypes } from 'shared/constants/dataTypes';
import { modelAttributes } from 'shared/utils/modelAttributes';

class PostComment extends Model {}

const PostCommentModel = (sequelize, DataTypes) => {
  const { PRIMARYUUID } = commonDataTypes(DataTypes);
  PostComment.init(
    {
      id: PRIMARYUUID,
      post_id: DataTypes.UUID,
      comment_id: DataTypes.UUID,
    },
    { sequelize, ...modelAttributes },
  );
  return PostComment;
};

export default PostCommentModel;
