import prisma from "./prismaClient.js";
import UserService from "../services/UserService.js";

try {
  await prisma.user.deleteMany({});
  await UserService.createNewUser("ishmyles", "ishmyles@email.com", "test");
  console.log("Seeding complete.");
} catch (error) {
  console.error(error);
}
