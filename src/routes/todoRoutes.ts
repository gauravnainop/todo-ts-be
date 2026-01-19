import express from 'express';
import { getTodoList, setTodoList } from '../api/todoList.js';

const router = express.Router()

router.get("/", getTodoList)
router.post("/", setTodoList)


export default router