import { Router } from "express";
import asyncWrapper from "express-async-handler";
import controller from "../controllers/index.js";

const { signupController } = controller;

const signupRouter = Router();

signupRouter.post("/", asyncWrapper(signupController.signupUser));

export default signupRouter;
