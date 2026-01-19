import type { Request, Response } from "express";
import TodoList from "../models/todoListModel.js";
import type {TodoListType } from "../types/todoList.js";

export const  getTodoList = async (req: Request, res : Response) => {
  try {
    const todos = await TodoList.find()    
    return todos
  } catch (error:any) {
   return error
  }
}

export const postTodoList = async (data: TodoListType[])=>{
  try {
    const result = await TodoList.insertMany(data, {ordered: false})
    return {
      result : result,
      success : true
    }
  } catch (error: any) {
    return {
      error : error.message,
      success : false
    }
  }
}