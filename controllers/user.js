import { users } from "../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { cokrie } from "../utils/feauters.js";
export const register=async(req,res)=>{
    const {name,email,password}=req.body;
let user=await  users.findOne({email})
if(user){
    return res.status(401).json({sucess:"fslse",message:"user already exist"})
}
const haspass=await bcrypt.hash(password,10);

user=await users.create({name,email,password:haspass});
cokrie(user,res,"Register sucessfully")
}
// ===================================================================================
export const login=async(req,res)=>{
    const {email,password}=req.body;
let user=await  users.findOne({email}).select("+password")
if(!user){
    return res.status(404).json({sucess:"fslse",message:"Invalid Email or Pssword"})
}
const match=await bcrypt.compare(password,user.password)
if(!match){
    return res.status(404).json({sucess:"fslse",message:"Invalid Email or Pssword"})
}
cokrie(user,res,`Welcome back ,${user.name}`)
}
// ========================================================
export const getdata=(req,res)=>{
    
    res.status(200).json({sucess:"true",user:req.user})
}
// ====================================================================
export const logout=(req,res)=>{
    
    res.status(200).cookie("token","",{
        expires:new Date(Date.now()),
        sameSite:process.env.cook==="development"?"lax":"none",
    secure:process.env.cook==="development"?false:true
    }).json({sucess:"true",message:"logout sucessfully"})
}

































// export const getall=async(req,res)=>{
//         const user=await users.find({})
//         console.log(req.query)
//     res.json({success:true,
//         users:user})
// }
// export const getid=async(req,res)=>{
//     const {id}=req.body; 
//     const userid=await users.findById(id);
//     console.log(id)
//     console.log(req.params)
//     res.status(201).json({sucess:"true",userid:userid})
// }
// export const add=async(req,res)=>{
//     const {name,email,password}=req.body;
//     const user=await users.create({
//         name:name,
//         email:email,
//         password:password
//     })
// res.status(201).cookie("token","cookie").json({success:true,
//     message:"shi hai"})
// }
// export const del=async(req,res)=>{
//    const id =req.body;
//    const user= await users.findById(id);
//    await user.remove()
// res.status(201).cookie("token","cookie").json({success:true,
//     message:"delete sucessfully"})
// }
