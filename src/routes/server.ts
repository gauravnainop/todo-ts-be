import { Router } from 'express';
import dbConnect from '../db/dbConnect.js';
const route = Router()


dbConnect()

const importRoutes = async ()=>({
    todoRoutes : await import("../routes/todoRoutes.js")
})

const setuptRoutes = async ()=>{
    const {todoRoutes} = await importRoutes()
    route.use('/todos', todoRoutes.default)
}

setuptRoutes()

export default route