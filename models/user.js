import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:
    {
        type:String,
        unique:true,
required:true
    },
    password:{
        type:String,
        select:false,
required:true
    },
    date:{
type:Date,
default:Date.now
    }
})
export const users=mongoose.model("users",userSchema)
