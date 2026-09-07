import express from "express"
import cors from "cors"
import tachesRoutes from "./routes/tachesRoutes.js"
import { regesterUser } from "./services/authService.js"

const app=express()
app.use(express.json())
app.use(cors())
app.use("/api/taches",tachesRoutes)
app.use("/api/auth",)