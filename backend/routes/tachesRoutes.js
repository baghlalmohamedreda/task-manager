import express from "express"
import { deleteTaskController, getTasksController,deleteAllTasksCotroller,addTaskController,updateTaskController } from "../controllers/tachesControllers.js"
import { authMiddleware } from "../middleware/authMiddleware.js"
const router=express.Router()

router.get("/",authMiddleware,getTasksController)
router.delete("/",authMiddleware,deleteTaskController)
router.delete("/all",authMiddleware,deleteAllTasksCotroller)
router.post("/",authMiddleware,addTaskController)
router.put("/",authMiddleware,updateTaskController)


export default router