import express from "express";
import TarefaController from "../controllers/tarefaController.js";

const routes = express.Router();

routes.get("/tarefas", TarefaController.listarTarefas);
routes.get("/tarefas/:id", TarefaController.listarTarefaPorId);
routes.post("/tarefas", TarefaController.cadastrarTarefa);
routes.put("/tarefas/:id", TarefaController.atualizarTarefa);
routes.patch("/completar-tarefa/:id", TarefaController.completarTarefa);
routes.delete("/tarefas/:id", TarefaController.excluirTarefa);

export default routes;