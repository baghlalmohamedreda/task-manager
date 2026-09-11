import jwt from "jsonwebtoken"
import {getUserByEmail,findUserToLogin,registerUser} from "../services/authService.js"
export async function login(req,res){
    try{
    const {email,password}=req.body
    const userExist=await findUserToLogin(email,password)
    if(!userExist){
       return res.status(401).json({message:"user email or password not correct"})
    }
    const token =jwt.sign({
        id:userExist.id
    },
    process.env.JWT_SECRET,
    {expiresIn:"1h"}

)
return res.status(200).json({
    message:"login succes",
    token
})

    }catch(e){
        return res.status(500).json({message:e.error})
    }
  
}
export async function register(req,res){
    try{
        console.log("REGISTER CONTROLLER CALLED")

         const {name,email,password}=req.body
    const userExist=await getUserByEmail(email)
    if(userExist){
        return res.status(400).json({message:"user exist  svp fait le login"})
    }
    const response=await registerUser(name,email,password)
    if(response){
       return res.status(200).json({message:"succes"})
    }

    }catch(e){
        return res.status(500).json({message:e.message})
    }
   

}
