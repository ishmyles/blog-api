import { Router } from "express";
import controller from "../controllers/index.js";

const { loginController } = controller;

const loginRouter = Router();

loginRouter.post("/", loginController.loginUser);

export default loginRouter;
