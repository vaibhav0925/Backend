//require('dotenv').config({path: './env'})
import dotenv from "dotenv"

//import mongoose, { trusted } from "mongoose";
//import {DB_NAME} from "constants";
import connectDB from "./db/index.js";

dotenv.config({
    path: `./env`
})


connectDB()



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