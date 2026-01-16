import type { Request, Response } from "express";
import { get } from "mongoose";
import { getTodoListController } from "../controller/todoListController.js";

export const getTodoList = async (req: Request, res: Response) => {
  try {
    const todoList = await  getTodoListController(req, res);
   return res.status(200).json({success : true, todos : todoList})
  } catch (error) {
   return res.status(500).json({success : false, error : "Something Went Wrong"})
  }
}
