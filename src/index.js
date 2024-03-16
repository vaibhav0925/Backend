//require('dotenv').config({path: './env'})
import dotenv from "dotenv"


import express from "express";


//import mongoose, { trusted } from "mongoose";
//import {DB_NAME} from "constants";
import connectDB from "./db/index.js";

dotenv.config({
    path: `./.env`
})

const app = express()


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGOO DB connection failed  !!!!:", err)
})


/*
import express from "express"  
import { error } from "console";
const app = express()


;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connected to MongoDB");
        app.on("ERROR:", (error) => {
            console.log("ERROR:", error);
            throw error
        })
        
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR connecting to MongooDB:",error);
        throw error
    }
})()
*/