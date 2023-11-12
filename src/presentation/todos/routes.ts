
import { Router } from "express";
import { TodosController } from "./controller";


export class TodoRoutes {

  static get routes(): Router {

    const router = Router();

    const todoController = new TodosController();

    router
      .get('/', todoController.getTodos)
      .get('/:id', todoController.getTodoById)

      .post('/', todoController.createTodo)
      .put('/:id', todoController.updateTodo)
      
      .delete('/:id', todoController.deleteTodo);    

    return router;
  }
}