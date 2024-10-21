import express from "express";

import routelibro from "./src/router/libroRouter.js";

const app = express()
app.use(express.json())
import cors from 'cors'


app.use(cors({
    //   origin: ['https://proyecto-final-de-reack.onrender.com'],
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use('/api', routelibro)



export default app