import type { Request, Response } from "express";
import TodoList from "../models/todoListModel.js";

export const getTodoList = async (req: Request, res: Response) => {
  try {
    const todos = await TodoList.find();
    return todos;
  } catch (error: any) {
    return error;
  }
};

export const postTodoList = async (data: any) => {
  try {
    const result = await TodoList.create(data);
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
