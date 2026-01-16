import type { Request, Response } from "express";
import TodoList from "../models/todoListModel.js";

export const getTodoListController = async (req: Request, res: Response) => {
  try {
    const todos = await TodoList.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todo list', error });
  }
}
