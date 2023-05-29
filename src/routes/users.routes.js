import { Router } from "express";
import { getusers } from "../controllers/usersController.js";

const usersRouter = Router()

usersRouter.get("/", getusers);

export default usersRouter;