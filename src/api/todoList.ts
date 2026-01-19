import type { Request, Response } from "express";
import {
  handleAddTodoListController,
  handleGetTodoListController,
  handleDeleteTodoListController,
} from "../controller/todoListController.js";

export const getTodoList = async (req: Request, res: Response) => {
  try {
    const todoList = await handleGetTodoListController(req, res);

    return res.status(200).json({ success: true, todos: todoList });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Something Went Wrong" });
  }
};

export const setTodoList = async (req: Request, res: Response) => {
  try {
    const result = await handleAddTodoListController(req);
    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: `Todo Adding Failed : ${error.message}`,
    });
  }
};

export const deleteTodoList = async (req: Request, res: Response) => {
  try {
    const result = await handleDeleteTodoListController(
      req.params._id as string,
    );
    return res.status(200).json({
      success: true,
      message: "Todo Deleted Successfully",
      result: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: `Todo Deletion Failed : ${error.message}`,
    });
  }
};
