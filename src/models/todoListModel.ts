import mongoose from "mongoose";
import dbConnect from "../db/dbConnect.js";

const todoListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const TodoList = mongoose.model("TodoList", todoListSchema);

export default TodoList;
