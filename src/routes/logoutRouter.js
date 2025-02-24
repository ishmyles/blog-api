import { Router } from "express";
import controller from "../controllers/index.js";

const { logoutController } = controller;

const logoutRouter = Router();

logoutRouter.post("/", logoutController.logoutUser);

export default logoutRouter;
