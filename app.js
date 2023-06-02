import express from "express"
// import mongoose, { connect }  from "mongoose";
import { connectdb } from "./data/db.js";
import router from "./routes/user.js";
import Router from "./routes/task.js";
// import { users } from "./models/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
config({
    path:"./data/config.env"
})
console.log(process.env.port);
const app=express();
app.use(express.json())
app.use(cookieParser());
app.use(router)
app.use(Router)
app.use(cors({
    origin:[process.env.FRONTENED_URL],
    methods:["GET","PUT","POST","DELETE"],
    credentials:true
}))
connectdb();
app.get("/",(req,res)=>{
res.send("nice")
})
app.listen(process.env.port,()=>{
    console.log("server start")
})
