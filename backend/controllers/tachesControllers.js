import { getTasks,delelteTask,deleteAll,addTask } from "../services/tachesServices.js";

export async function getTasksController(req,res){
    try{
        const user_id=req.user_id
        const response=await getTasks(user_id)
        return res.status(200).json(response)

    }catch(e){
        return res.status(500).json({message:e.message})
    }
}
export async function deleteTaskController(req,res){
    try{
        const userId=req.userId
        const id=req.params.id
        const response=await delelteTask(userId,id)
        if(response){
            return res.status(200).json({message:"deleled successfully"})
        }
        return res.status(400).json({message:"not found"})

    }catch(e){
        res.status(500).json({message:e.message})
    }
    
}
export async function deleteAllTasksCotroller(req,res){
    try{
          const userId=req.userId
          const response =await deleteAll(userId)
          if(!response){
            return res.status(400).josn({message:"error"})
          }
          return res.status(200).json({message:"deleted successeful"})

    }catch(e){
        res.stastus(500).json({message:e.message})
    }
  
}
export async function addTask(req,res){
    const userId=req.userId
    const {title,description,completed}=req.body
    const response = await addTask(userId,title,description,completed)
    if(!response){
        return res.status(400).json({message:"error"})
    }
    return res.status(200).json({message:" add successeful"})

}