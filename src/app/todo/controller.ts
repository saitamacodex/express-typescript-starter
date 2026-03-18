import type { Request, Response } from "express";
import {
  todoValidationSchema,
  type Todo,
} from "../../validation/todo.schema.js";

class TodoController {
  private _db: Todo[];

  constructor() {
    this._db = [];
  }

  // get todo
  public getAllTodos(req: Request, res: Response) {
    const todos = this._db;
    return res.json({ todos });
  }

  public getTodoById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const findItem = this._db.find((item) => item.id === id);
    if (!findItem) {
      return res.status(404).json({ message: "Todo Item not found" });
    }
    res.json(findItem);
  }

  // create todo
  public async insertTodo(req: Request, res: Response) {
    try {
      const inValidated = req.body;
      const validationRes = await todoValidationSchema.parseAsync(inValidated);

      // genereate ID from server
      const newTodo = {
        id: this._db.length + 1,
        ...validationRes,
      };

      this._db.push(newTodo);

      return res.status(201).json({ todo: newTodo });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  // delete todo
  public deleteTodo(req: Request, res: Response) {
    const id = Number(req.params.id);
    const todoIdIndex = this._db.findIndex((todo_id) => todo_id.id === id);

    if (todoIdIndex === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }
    const deleteTodo = this._db.splice(todoIdIndex, 1);
    return res.json({ deletedTodo: deleteTodo[0] });
  }
}

export default TodoController;
