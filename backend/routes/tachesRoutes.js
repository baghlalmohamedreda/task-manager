import express from "express"
import { deleteTacheController, getTachesController } from "../controllers/tachesControllers.js"
const router=express.Router()

router.get("/",getTachesController)
router.delete("/",deleteTacheController)


export default router