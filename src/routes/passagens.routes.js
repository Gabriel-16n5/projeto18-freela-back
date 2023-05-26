import { Router } from "express";
import { getPassagensCity, getPassagens, getCidade } from "../controllers/passagensController.js";

const passagensRouter = Router()

passagensRouter.get("/cidades", getCidade);
passagensRouter.get("/passagens", getPassagens);
passagensRouter.get("/passagens/:id", getPassagensCity);

export default passagensRouter;