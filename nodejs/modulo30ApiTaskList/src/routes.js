import { Router } from "express";
import authMiddleware from "./app/middlewares/auth";

import SessionController from "./app/controllers/SessionController";
import UserController from "./app/controllers/UserController";
import TaskController from "./app/controllers/TaskController";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

// abaixo do use precisa do token para ter a requisicao feita
routes.use(authMiddleware);
routes.put("/users", UserController.update);

routes.post("/tasks", TaskController.store);
routes.get("/tasks", TaskController.index);
routes.put("/tasks/:task_id", TaskController.update);
routes.delete("/tasks/:task_id", TaskController.delete);

export default routes;
