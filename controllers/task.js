import { task } from "../models/task.js";

export const newtask=async(req,res,next)=>{
    const{titel,description}=req.body;
    await task.create({titel,description,user:req.user})
    res.status(201).json({message:"task added"})
}
export const getmytask=async(req,res,next)=>{
const userid=req.user._id;
console.log("req.user._id",userid)
const tasks=await task.find({user:userid})
res.status(201).json({sucess:"true",tasks})
}
export const updatetask=async(req,res,next)=>{
    const tasks=await task.findById(req.params.id)
    tasks.complete=!task.complete
    await tasks.save();
    res.status(201).json({sucess:"true"})
    }
    export const deletetask=async(req,res,next)=>{
        const tasks=await task.findById(req.params.id)
       await tasks.deleteOne()
        res.status(201).json({sucess:"true"})
        }