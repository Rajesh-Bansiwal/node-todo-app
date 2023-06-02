import jwt from "jsonwebtoken"
export const cokrie=async(user,res,message,status=200)=>{
    const token=jwt.sign({_id:user._id},process.env.secret)
    // console.log(token)
    res.status(status).cookie("token",token,{
    httpOnly:true,
    maxAge:15*60*1000
    }).json({sucess:"true",message:message})
    
}