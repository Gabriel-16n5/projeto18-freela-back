import { Router } from "express";
import autenticationRouter from "./autentication.routes.js";
import passagensRouter from "./passagens.routes.js";
import hospedagemRouter from "./hospedagem.routes.js";
import usersRouter from "./hospedagem.routes.js";

const router = Router()
router.use(autenticationRouter);
router.use(hospedagemRouter);
router.use(usersRouter);
router.use(passagensRouter);

export default router