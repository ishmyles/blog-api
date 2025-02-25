import { Router } from "express";
import asyncWrapper from "express-async-handler";
import controller from "../controllers/index.js";

const { loginController } = controller;

const loginRouter = Router();

loginRouter.post("/", loginController.loginUser);

export default loginRouter;
