import db from 'models';
import { HTTP_RESPONSES } from 'shared/constants/httpResponse';
import { ErrorResponse } from 'shared/utils/errorResponse';
import profileService from './Profile.service';
const { createProfile: createProfileService } = profileService();
const userService = () => {
  const { User } = db;
  const getUser = async (payload, pagination) => {
    const queries = {
      where: payload,
      order: [['created_at', 'DESC']],
      limit: pagination.limit,
      offset: pagination.page,
      include: 'profile',
    };
    const user = await User.findAll(queries);

    return {
      user,
    };
  };

  const signUp = async (payload) => {
    const { username, password, email, firstName, lastName, imageUrl } = payload;
    const user = await User.create({
      username,
      password,
      email,
    });
    const profile = await createProfileService({
      first_name: firstName,
      last_name: lastName,
      image_url: imageUrl,
      user_id: user.id,
    });

    const token = user.generateJwtToken();
    return {
      user,
      profile,
      token,
    };
  };

  const signIn = async ({ username, password }) => {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw new ErrorResponse('User not found.', HTTP_RESPONSES['NOT_FOUND']);
    }
    const isPasswordValid = user.comparePassword(password);
    if (!isPasswordValid) {
      throw new ErrorResponse('Invalid Password.', HTTP_RESPONSES['NOT_FOUND']);
    }

    const token = user.generateJwtToken();
    return {
      user,
      token,
    };
  };

  return {
    getUser,
    signUp,
    signIn,
  };
};

export default userService;
