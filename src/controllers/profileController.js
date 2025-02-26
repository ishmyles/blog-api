import ProfileService from "../services/ProfileService.js";

const listProfile = async (req, res) => {
  const { userId } = req.params;
  const profile = await ProfileService.getProfileData(userId).catch((e) => {
    console.error(e);
    res.status(400);
    throw new Error("There was an issue retrieving the requested profile.");
  });

  return res.json(profile);
};

const updateProfile = async (req, res) => {
  const { userId } = req.params;
  const { desc } = req.body;
  const updatedProfile = await ProfileService.updateProfileData(
    userId,
    desc
  ).catch((e) => {
    console.error(e);
    res.status(400);
    throw new Error("There was an issue updating your profile.");
  });

  return res.json(updatedProfile);
};

export default {
  listProfile,
  updateProfile,
};
