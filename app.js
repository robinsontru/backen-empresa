import express from "express";

import routelibro from "./src/router/libroRouter.js";

const app = express()
app.use(express.json())
import cors from 'cors'


app.use(cors({
    origin: ['http://ruta de el frontend'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use('/api', routelibro)



export default app