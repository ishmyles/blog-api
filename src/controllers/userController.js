import UserService from "../services/UserService.js";

const listUserData = async (req, res) => {
  const { userId } = req.params;
  const user = await UserService.getUserData(userId).catch((e) => {
    console.error(e);
    res.status(400);
    throw new Error("There was an issue retrieving your info.");
  });

  return res.json(user);
};

const updateUsername = async (req, res) => {
  const { userId } = req.params;
  const { newUsername } = req.body;

  const user = await UserService.updateUsername(userId, newUsername).catch(
    (e) => {
      console.error(e);
      res.status(400);
      throw new Error("There was an issue updating your username.");
    }
  );

  return res.json(user);
};

const updateUserEmail = async (req, res) => {
  const { userId } = req.params;
  const { newEmail } = req.body;

  const user = await UserService.updateEmail(userId, newEmail).catch((e) => {
    console.error(e);
    res.status(400);
    throw new Error("There was an issue updating your email.");
  });

  return res.json(user);
};

const updateUserPassword = async (req, res) => {
  const { userId } = req.params;
  const { currentPassword, newPassword } = req.body;

  const user = await UserService.updatePassword(
    userId,
    currentPassword,
    newPassword
  ).catch((e) => {
    if (e === "Mismatch") {
      res.status(400);
      throw new Error("Incorrect Password: Please confirm current password.");
    } else {
      console.error(e);
      res.status(400);
      throw new Error("There was an issue updating your password.");
    }
  });

  return res.json(user);
};

const deleteUserAccount = async (req, res) => {
  const { userId } = req.params;
  const user = await UserService.deleteUser(userId).catch((e) => {
    console.error(e);
    res.status(400);
    throw new Error("There was an issue deleting your account.");
  });

  return res.json(user);
};

export default {
  listUserData,
  updateUsername,
  updateUserEmail,
  updateUserPassword,
  deleteUserAccount,
};
