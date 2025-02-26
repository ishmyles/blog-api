import UserService from "../services/UserService.js";

const signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await UserService.createNewUser(username, email, password).catch(
    (e) => {
      console.error(e);
      res.status(400);
      throw new Error("There was an issue creating your account.");
    }
  );

  return res.json(user);
};

export default {
  signupUser,
};
