import postServices from 'services/Post.services';
import { HTTP_RESPONSES } from 'shared/constants/httpResponse';
import { asyncHandler } from 'shared/utils/asyncHandler';

const { getPosts: getPostsServices, createPost: createPostService } = postServices();
const postController = () => {
  const getPosts = asyncHandler(async (req, res) => {
    const results = await getPostsServices();
    const response = {
      results,
      ...HTTP_RESPONSES['SUCCESS'],
    };

    res.status(response.statusCode).json(response);
  });

  const createPost = asyncHandler(async (req, res) => {
    const request = req.body;
    const results = await createPostService(request);
    const response = {
      results,
      ...HTTP_RESPONSES['CREATED'],
    };

    res.status(response.statusCode).json(response);
  });

  return {
    getPosts,
    createPost,
  };
};

export default postController;
