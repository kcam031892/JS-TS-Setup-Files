import { Router } from 'express';
import userController from 'controllers/User.controller';
import validate from 'middlewares/Validate';
import { userValidation } from 'validations/User.validation';
import authenticate from 'middlewares/Auth';
const { userSignupSchema, userSignInSchema } = userValidation;
const router = Router();

const { signUp, signIn, getUser } = userController();

router.get('/', getUser);
router.post('/signup', validate(userSignupSchema), signUp);
router.post('/signin', validate(userSignInSchema), signIn);

router.delete('/');
router.put('/');

export default router;
