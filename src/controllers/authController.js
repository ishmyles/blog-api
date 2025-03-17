import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import prisma from "../prisma/prismaClient.js";

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  const match = await bcrypt.compare(password, user.password).catch((e) => {
    throw new Error(e);
  });

  if (match) {
    const token = jwt.sign(
      { username: user.username, email: user.email, role: user.role },
      process.env.TOKEN_SECRET,
      { expiresIn: 60 }
    );

    const refresh_token = jwt.sign(
      { username: user.username, email: user.email, role: user.role },
      process.env.RTOKEN_SECRET,
      { expiresIn: 120 }
    );

    return res.json({ success: true, token, refresh_token });
  } else {
    throw new Error("Incorrect password.");
  }
};

const refreshAccessToken = async (req, res) => {
  try {
    const refresh_token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(refresh_token, process.env.RTOKEN_SECRET);

    const { username, email, role } = decoded;

    const newToken = jwt.sign(
      { username, email, role },
      process.env.TOKEN_SECRET,
      {
        expiresIn: 60,
      }
    );

    return res.json({ token: newToken });
  } catch (e) {
    throw new Error(e);
  }
};

const logoutUser = (req, res) => {
  return res.send("TODO: Logout user via JWT");
};

export default { loginUser, refreshAccessToken, logoutUser };
