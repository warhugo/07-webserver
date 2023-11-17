
import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDatasourceImpl } from "../../infrastructure/datasource/todo.datasource.impl";
import { TodoRepositoryImpl } from "../../infrastructure/repositories/todo.repository.impl";


export class TodoRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new TodoDatasourceImpl();
    const todoRepository = new TodoRepositoryImpl(datasource);
    const todoController = new TodosController(todoRepository);

    router
      .get('/', todoController.getTodos)
      .get('/:id', todoController.getTodoById)

      .post('/', todoController.createTodo)
      .put('/:id', todoController.updateTodo)
      
      .delete('/:id', todoController.deleteTodo);    

    return router;
  }
}