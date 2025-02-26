import { Router } from "express";
import asyncWrapper from "express-async-handler";
import controller from "../controllers/index.js";

const { userController } = controller;

const userRouter = Router();

userRouter.get("/:userId", asyncWrapper(userController.listUserData));

userRouter.put(
  "/:userId/username/update",
  asyncWrapper(userController.updateUsername)
);

userRouter.put(
  "/:userId/email/update",
  asyncWrapper(userController.updateUserEmail)
);

userRouter.put(
  "/:userId/password/update",
  asyncWrapper(userController.updateUserPassword)
);

userRouter.delete(
  "/:userId/delete",
  asyncWrapper(userController.deleteUserAccount)
);

export default userRouter;
