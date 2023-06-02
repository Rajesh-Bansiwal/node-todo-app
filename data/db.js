import mongoose from "mongoose";
export const connectdb=()=>{
    mongoose.connect(process.env.url,{
    dbName:"backened-api"
}).then(()=>{
    console.log("connect")
}).catch((e)=>{
console.log(e)
})
}