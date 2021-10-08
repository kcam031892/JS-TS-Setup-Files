import userService from 'services/User.service';
import { HTTP_RESPONSES } from 'shared/constants/httpResponse';
import { asyncHandler } from 'shared/utils/asyncHandler';
import { transformPagination } from 'shared/utils/transform/pagination';

const { getUser: getUserService, signUp: signUpService, signIn: signInService } = userService();
const userController = () => {
  const getUser = asyncHandler(async (req, res) => {
    const request = req.query;
    const headers = req.headers;
    const pagination = transformPagination(headers);
    const results = await getUserService(request, pagination);
    const response = {
      results,
      ...HTTP_RESPONSES['SUCCESS'],
    };
    res.status(response.statusCode).json(response);
  });

  const signUp = asyncHandler(async (req, res) => {
    const request = req.body;
    const user = await signUpService(request);
    const response = {
      results: user,
      ...HTTP_RESPONSES['CREATED'],
    };
    res.status(response.statusCode).json(response);
  });

  const signIn = asyncHandler(async (req, res) => {
    const request = req.body;
    const user = await signInService(request);
    const response = {
      results: user,
      ...HTTP_RESPONSES['SUCCESS'],
    };
    res.status(response.statusCode).json(response);
  });

  return {
    getUser,
    signUp,
    signIn,
  };
};

export default userController;
