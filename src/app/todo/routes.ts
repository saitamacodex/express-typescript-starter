import { Router } from "express";
import TodoController from "./controller.js";

const router = Router();
const controller = new TodoController();

router.get("/", controller.getAllTodos.bind(controller));
// router.get("/:id");

router.post("/", controller.insertTodo.bind(controller));

// router.put("/:id");
router.delete("/:id", controller.deleteTodo.bind(controller));

export default router;
