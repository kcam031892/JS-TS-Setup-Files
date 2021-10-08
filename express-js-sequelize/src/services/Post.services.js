import db from 'models';

const postServices = () => {
  const { Post } = db;
  const getPosts = async (payload) => {
    const posts = await Post.findAll({ where: payload });

    return posts;
  };
  const createPost = async (payload) => {
    const post = await Post.create(payload);
    return post;
  };
  return {
    getPosts,
    createPost,
  };
};

export default postServices;
