import { getTaches } from "../services/tachesServices";
export async function getTachesController(req,res){
    try{
        const user_id=req.user_id
        const response=await getTaches(user_id)
        return res.status(200).json(response)

    }catch(e){
        return res.status(500).json({message:e.message})
    }
}