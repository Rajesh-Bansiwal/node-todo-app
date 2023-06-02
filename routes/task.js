import express from "express"
import { auth } from "../middelware/auth.js";
import { deletetask, getmytask, newtask, updatetask } from "../controllers/task.js";
const router=express.Router();
router.post("/new",auth,newtask);
router.get("/my",auth,getmytask)
router.route("/:id").put(auth,updatetask).delete(auth,deletetask)
export default router;