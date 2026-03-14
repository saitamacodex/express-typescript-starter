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

  // create todo
  public async insertTodo(req: Request, res: Response) {
    try {
      const inValidated = req.body;
      const validationRes = await todoValidationSchema.parseAsync(inValidated);
      this._db.push(validationRes);

      return res.status(201).json({ todo: validationRes });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default TodoController;
