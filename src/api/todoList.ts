import type { Request, Response } from "express";
import { getTodoListController, postTodoListController } from "../controller/todoListController.js";

export const getTodoList = async (req: Request, res: Response) => {
  try {
    const todoList = await  getTodoListController(req, res);
    console.log(todoList);
    
   return res.status(200).json({success : true, todos : todoList})
  } catch (error) {
   return res.status(500).json({success : false, error : "Something Went Wrong"})
  }
}

export const setTodoList = async(req: Request, res : Response)=>{
  try {
    const result = await postTodoListController(req.body)
    return res.status(201).json({success : true, message : "Todo Added Successfully", data : result})
  } catch (error: any) {
    return res.status(500).json({success : false, error : `Todo Adding Failed : ${error.message}` })
  }
}
