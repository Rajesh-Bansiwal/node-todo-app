import express from "express"
import { getdata, login,logout, register} from "../controllers/user.js";
import { auth } from "../middelware/auth.js";
const router=express.Router();
// router.post("/usersnew",add)
// router.get("/userid/:id",getid)
// router.get("/usersall",getall)
router.post("/usernew",register)
router.post("/login",login)
router.get("/logout",logout)
router.get("/me",auth,getdata)
// router.delete("/delete",del)
export default router;