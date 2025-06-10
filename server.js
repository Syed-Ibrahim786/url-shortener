import express from "express"
import dotenv from "dotenv"
import { nanoid } from 'nanoid';
import URLRoutes from './routes/URLRoutes.js'
import cors from "cors"
import helmet from "helmet";
import rateLimit from "express-rate-limit";


import connect from "./config/db.js"

dotenv.config()
connect()
const port = process.env.PORT 
const app = express()

app.set('trust proxy', true);

app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));



app.use(cors())
app.use(express.json())

app.use('/', URLRoutes)






app.listen(port, () =>{
    console.log(`server listening on port ${port}`)
})