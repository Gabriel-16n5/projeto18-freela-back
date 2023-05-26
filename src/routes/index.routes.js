import { Router } from "express";
import autenticationRouter from "./autentication.routes.js";
import passagensRouter from "./passagens.routes.js";
import urlsRouter from "./urls.routes.js";
import usersRouter from "./urls.routes.js";

const router = Router()
router.use(autenticationRouter);
router.use(urlsRouter);
router.use(usersRouter);
router.use(passagensRouter);

export default router