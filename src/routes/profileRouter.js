import { Router } from "express";
import asyncWrapper from "express-async-handler";
import controller from "../controllers/index.js";

const { profileController } = controller;

const profileRouter = Router();

profileRouter.get("/:userId", asyncWrapper(profileController.listProfile));

profileRouter.put("/:userId", asyncWrapper(profileController.updateProfile));

export default profileRouter;
