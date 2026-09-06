import { getTaches,regesterUser } from "../services/tachesServices.js";
import {getUserByEmail} from "../services/authService.js"
export async function getTachesController(req,res){
    try{
        const user_id=req.user_id
        const response=await getTaches(user_id)
        return res.status(200).json(response)

    }catch(e){
        return res.status(500).json({message:e.message})
    }
}
export async function regester(req,res){
    try{

         const {name,email,password}=req.body
    const userExist=await getUserByEmail(email)
    if(userExist){
        res.status(400).json({message:"user exist  svp fait le login"})
    }
    const response=await regesterUser(name,email,password)
    if(response){
        res.status(200).json({message:"succes"})
    }


    }catch(e){
        res.status(500).json({message:e.message})
    }
   

}