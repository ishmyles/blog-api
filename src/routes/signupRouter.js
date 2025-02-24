import { Router } from "express";
import controller from "../controllers/index.js";

const { signupController } = controller;

const signupRouter = Router();

signupRouter.post("/", signupController.signupUser);

export default signupRouter;
