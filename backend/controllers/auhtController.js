import {getUserByEmail,findUserToLogin,regesterUser} from "../services/authService.js"
export async function login(req,res){
    try{
    const {email,password}=req.body
    const userExist=await findUserToLogin(email,password)
    if(!userExist){
       return res.status(401).json({message:"user email or password not correct"})
    }
    const token =jwt.signe({
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
        res.status(500).json({message:e.error})
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
