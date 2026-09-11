export async function loginUser(formData){
    const response =await fetch(`http://localhost:5000/api/auth/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
    })
    const data =await response.json()
    if(!response.ok){
        throw new Error(data.message);
        
    }
    return data

}
export async function registerUser(formData){
    const response=await fetch(`http://localhost:5000/api/auth/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
    })
    const data=await response.json()
    if(!response.ok){
        throw new Error(data.message)
    }
    return data
}