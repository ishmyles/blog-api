import { Router } from "express";
import controller from "../controllers/index.js";

const { profileController } = controller;

const profileRouter = Router();

profileRouter.get("/:userId", profileController.listProfile);

export default profileRouter;
