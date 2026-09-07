import express from "express"
import { login, regester } from "../controllers/auhtController"
const route=express.Router()
route.post("/regester",regester)
router.post("login",login)
export default route