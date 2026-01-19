import type { Request, Response } from "express";
import TodoList from "../models/todoListModel.js";

export const getTodoList = async (req: Request, res: Response) => {
  try {
    const todos = await TodoList.find().sort({ _id: -1 });
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

export const deleteTodoList = async (_id: string) => {
  try {
    const result = await TodoList.findByIdAndDelete(_id);
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
