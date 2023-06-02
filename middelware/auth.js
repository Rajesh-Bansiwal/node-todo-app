import { users } from "../models/user.js"
import jwt from "jsonwebtoken"

export const auth=async(req,res,next)=>{
const {token}=req.cookies;
console.log("req.body",req.body)
// console.log(token)
if(!token){
    return res.status(401).json({message:"lOGIN FIRST"})
}
// const decoded=jwt.decode(token,process.env.secret);
const decoded=jwt.verify(token,process.env.secret)
// console.log(decoded)
const find=await users.findById(decoded._id)  
console.log("find by id",find)
req.user=await users.findById(decoded._id)    
console.log("req.user",req.user)
 next();
}