export async function getTasks(){
    const token =localStorage.getItem("token")
    const response =await fetch(`http://localhost:5000/api/tasks`,{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    const data =await response.json()
    if(!response.ok){
        throw new Error(data.message)
    }
    return data
}