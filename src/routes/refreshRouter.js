import { Router } from "express";
import asyncWrapper from "express-async-handler";
import controller from "../controllers/index.js";

const { authController } = controller;

const refreshRouter = Router();

refreshRouter.get("/", asyncWrapper(authController.refreshAccessToken));

export default refreshRouter;
