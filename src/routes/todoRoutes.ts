import express from "express";
import { deleteTodoList, getTodoList, setTodoList } from "../api/todoList.js";
import route from "./server.js";

const router = express.Router();

router.get("/", getTodoList);
router.post("/", setTodoList);
router.delete("/delete/:_id", deleteTodoList);

export default router;
