import express from "express"
import { getTachesController } from "../controllers/tachesControllers.js"
const router=express.Router()

router.get("/",getTachesController)



export default router