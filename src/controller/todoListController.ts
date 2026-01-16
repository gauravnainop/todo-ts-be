import type { Request, Response } from "express";
import TodoList from "../models/todoListModel.js";

export const  getTodoListController = async (req: Request, res: Response) => {
  try {
    const todos = await TodoList.find()
    console.log(todos);
    
    return res.send(todos)
  } catch (error:any) {
   return res.status(500).json({ message: 'Error fetching todo list', error : error.message });
  }
}

// export const postTodoListController = async (req: Request, res: Response)=>{
//   try {
//     const 
//   } catch (error) {
    
//   }
// }