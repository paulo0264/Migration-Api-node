import { Router } from "express";
import { LicitacaoController } from "./controllers/LicitacaoController";

const router = Router();


const createLicitacao = new LicitacaoController();


router.get("/licitacao", createLicitacao.migrationApi);


export { router };
