import express from 'express';
const app = express();

import { getTodoList, setTodoList } from './api/todoList.js';
import dbConnect from './db/dbConnect.js';


dbConnect()


app.get('/', (req, res) => {
    res.send('Server is up and running');
});

app.get('/api/todos', getTodoList);
app.post("/api/todos", setTodoList)

export default app 