import { Router } from "express";
import controller from "../controllers/index.js";

const { authController } = controller;

const logoutRouter = Router();

logoutRouter.post("/", authController.logoutUser);

export default logoutRouter;
