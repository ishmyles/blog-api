import bcrypt from "bcryptjs";
import prisma from "../prisma/prismaClient.js";

const _SALT = process.env.SALT;

const createNewUser = async (username, email, password) => {
  bcrypt.hash(password, Number(_SALT), async (err, hash) => {
    if (err) throw Error("Something went wrong signing you up.");

    await prisma.profile.create({
      data: {
        user: {
          create: {
            username,
            email,
            password: hash,
          },
        },
      },
    });
  });

  return { username, email };
};

const getUserData = async (username) => {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      username: true,
      email: true,
    },
  });

  return user;
};

const updateUsername = async (username, updatedUsername) => {
  const user = await prisma.user.update({
    where: {
      username,
    },
    data: {
      username: updatedUsername,
    },
  });

  return { username: user.username };
};

const updateEmail = async (username, email) => {
  const user = await prisma.user.update({
    where: {
      username,
    },
    data: {
      email,
    },
  });

  return { email: user.email };
};

const updatePassword = async (username, currentPassword, newPassword) => {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      password: true,
    },
  });

  const isCorrectPassword = await bcrypt.compare(
    currentPassword,
    user.password
  );

  if (isCorrectPassword) {
    bcrypt.hash(newPassword, Number(_SALT), async (err, hash) => {
      if (err) throw Error("Something went wrong signing you up.");

      await prisma.user.update({
        where: {
          username,
        },
        data: {
          password: hash,
        },
      });
    });

    return { msg: "Password changed successfully" };
  } else {
    return Promise.reject("Mismatch");
  }
};

const deleteUser = async (username) => {
  const user = await prisma.user.delete({
    where: {
      username,
    },
  });

  return { username: user.username, email: user.email };
};

export default {
  createNewUser,
  getUserData,
  updateUsername,
  updateEmail,
  updatePassword,
  deleteUser,
};
