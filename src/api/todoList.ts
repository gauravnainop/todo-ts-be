import type { Request, Response } from "express";
import { get } from "mongoose";
import { getTodoListController } from "../controller/getTodoListController.js";

export const getTodoList = async (req: Request, res: Response) => {
  getTodoListController(req, res);
}