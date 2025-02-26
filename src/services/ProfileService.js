import prisma from "../prisma/prismaClient.js";

const getProfileData = async (userId) =>
  await prisma.profile.findUnique({
    where: {
      userId,
    },
  });

const updateProfileData = async (userId, desc) =>
  await prisma.profile.update({
    where: {
      userId,
    },
    data: {
      desc,
    },
  });

export default {
  getProfileData,
  updateProfileData,
};
