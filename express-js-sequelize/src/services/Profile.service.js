import db from 'models';

const profileService = () => {
  const { Profile } = db;
  const createProfile = async (profile) => {
    const createdProfile = await Profile.create(profile);
    return createdProfile;
  };

  return {
    createProfile,
  };
};
export default profileService;
