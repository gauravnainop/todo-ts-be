import type { Request, Response } from "express";
import {
  getTodoList,
  postTodoList,
  deleteTodoList,
} from "../service/todoService.js";
export const handleGetTodoListController = async (
  req: Request,
  res: Response,
) => {
  try {
    const todos = await getTodoList(req, res);
    return todos;
  } catch (error: any) {
    return error;
  }
};

export const handleAddTodoListController = async (data: any) => {
  try {
    const result = await postTodoList(data.body);
    const dataArray = Array.isArray(result) ? result : [result];
    return {
      length: dataArray.length,
      message: "Data Added Successfully",
      data: result,
      success: true,
    };
  } catch (error: any) {
    console.error("Mongoose Error : ", error);
    throw error;
  }
};

export const handleDeleteTodoListController = async (id: string) => {
  try {
    const result = await deleteTodoList(id);
    return {
      message: "Todo Deleted Successfully",
      data: result,
      success: true,
    };
  } catch (error) {
    console.error("Mongoose Error : ", error);
  }
};
