import postController from 'controllers/Post.controller';
import { Router } from 'express';
import authenticate from 'middlewares/Auth';

const router = Router();

const { getPosts, createPost } = postController();

router.get('/', getPosts);
router.get('/:id');
router.post('/', createPost);
router.delete('/');

export default router;
