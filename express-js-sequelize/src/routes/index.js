import express from 'express';
import userRoutes from './User.routes';
import postRoutes from './Post.routes';
import { Routes } from 'shared/constants/routes';
const router = express.Router();

router.use(Routes.USER, userRoutes);
router.use(Routes.POST, postRoutes);

export default router;
