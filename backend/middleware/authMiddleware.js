import jwt from "jsonwebtoken"
export function authMiddleware(req,res,next){
    try{
        const authHeader=req.headers.authorization
        if(!authHeader){
            return res.status(400).json({message:"token manquant"})
        }
        const token =authHeader.split(" ")[1]
        if(!token){
            return res.status(400).json({message:"token manquant"})
        }
        const decode=jwt.verify(
            token,
            process.env.JWT_SECRET
        )
        req.userId=decode.id
        next()

    }catch(e){
        return res.status(500).json({message:"tkon invalide"})

    }

}