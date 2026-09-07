import { getTaches,delelteTache } from "../services/tachesServices.js";

export async function getTachesController(req,res){
    try{
        const user_id=req.user_id
        const response=await getTaches(user_id)
        return res.status(200).json(response)

    }catch(e){
        return res.status(500).json({message:e.message})
    }
}
export async function deleteTacheController(req,res){
    try{
        const userId=req.userId
        const id=req.params.id
        const response=await delelteTache(userId,id)
        if(response){
            return res.status(200).json({message:"deleled successfully"})
        }
        return res.status(400).json({message:"not found"})

    }catch(e){
        res.status(500).json({message:e.message})
    }
    
}