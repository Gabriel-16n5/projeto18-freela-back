import { Router } from "express";
import { getHospedagem, getHospedagemId } from "../controllers/hospedagemController.js";

const hospedagemRouter = Router()

hospedagemRouter.get("/hospedagem", getHospedagem);
hospedagemRouter.get("/hospedagem/:id", getHospedagemId);

export default hospedagemRouter;