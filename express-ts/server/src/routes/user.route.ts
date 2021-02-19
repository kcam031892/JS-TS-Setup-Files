import { getUser } from '@controllers/user.controller';
import Express from 'express';
const router = Express.Router();

router.get('/', getUser);

export default router;
