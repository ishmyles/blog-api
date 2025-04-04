import { Router } from "express";
import asyncWrapper from "express-async-handler";
import controller from "../controllers/index.js";

const { authController } = controller;

const loginRouter = Router();

loginRouter.post("/", asyncWrapper(authController.loginUser));

export default loginRouter;
