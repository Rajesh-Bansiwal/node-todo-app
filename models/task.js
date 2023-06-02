import mongoose from "mongoose";
const taskSchema=new mongoose.Schema({
    titel:{
        type:String,
        required:true
    },
    description:
    {
        type:String,
required:true
    },
    complete:{
        type:Boolean,
        default:false,
    },
    user:{
type:mongoose.Schema.Types.ObjectId,
ref:"users"
    },
    date:{
type:Date,
default:Date.now
    }
})
export const task=mongoose.model("task",taskSchema)
