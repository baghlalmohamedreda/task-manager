import express from "express"
import { deleteTaskController, getTasksController } from "../controllers/tachesControllers.js"
import { authMiddleware } from "../middleware/authMiddleware.js"
const router=express.Router()

router.get("/",authMiddleware,getTasksController)
router.delete("/",authMiddleware,deleteTaskController)


export default router