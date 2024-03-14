import express from "express"
import cors from "cors"
import cookieParserf from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(express.cookieParserf())


//Routes imports

import userRouter from "./routes/user.routes.js";


//routes declaration
app.use("/api/v1/user", userRouter)



// https://localhost:8000/api/v1/users/registers

export {app}