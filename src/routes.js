import { Router } from "express";
import controllersTarefa from "./controllers/controllers.tarefa.js";

const routes = Router();

//CRIANDO ROTAS
//criada uma rota para cada método (verbo) de requisição

routes.get("/tarefas", controllersTarefa.Listar);

routes.post("/tarefas", controllersTarefa.Inserir);

routes.put("/tarefas/:id_tarefa", controllersTarefa.Editar);

routes.delete("/tarefas/:id_tarefa", controllersTarefa.Excluir);

export default routes;