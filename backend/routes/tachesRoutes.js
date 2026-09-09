import express from "express"
import { deleteTaskController, getTasksController,deleteAllTasksCotroller,addTaskController,updateTaskController } from "../controllers/tachesControllers.js"
import { authMiddleware } from "../middleware/authMiddleware.js"
const router=express.Router()

router.get("/",authMiddleware,getTasksController)
router.delete("/:id",authMiddleware,deleteTaskController)
router.delete("/all",authMiddleware,deleteAllTasksCotroller)
router.post("/:id",authMiddleware,addTaskController)
router.put("/:id",authMiddleware,updateTaskController)


export default router