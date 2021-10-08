import * as yup from 'yup';
const userSignupSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().email().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  imageUrl: yup.string().required(),
});

const userSignInSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export const userValidation = {
  userSignupSchema,
  userSignInSchema,
};
