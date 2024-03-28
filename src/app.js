import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//Routes imports





//routes declaration
//app.use("/api/v1/users", userRouter)
app.post('/api/v1/users', (req, res, next)=>{
    res.send('hello')
    })

// https://localhost:8000/api/v1/users/registers

export {app}