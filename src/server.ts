import express from 'express';
const app = express();

import { getTodoList } from './api/getTodoList.js';





app.get('/', (req, res) => {
    res.send('Server is up and running');
    });

app.get('/api/todos', getTodoList);

export default app 