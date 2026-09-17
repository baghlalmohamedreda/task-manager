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
export async function deleteTask(id){
    const token =localStorage.getItem("token")
    const response=await fetch(`http://localhost:5000/api/tasks/${id}`,{
        method:"DELETE",
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    const data=await response.json()
     if(!response.ok){
        throw new Error(data.message)
    }
    return data

}
export async function deleteAllTasks(){
    const token =localStorage.getItem("token")
     const response=await fetch(`http://localhost:5000/api/tasks`,{
        method:"DELETE",
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    const data=await response.json()
     if(!response.ok){
        throw new Error(data.message)
    }
    return data
}
export async function updateToggle(id,tasks){
     const token =localStorage.getItem("token")
     const response=await fetch(`http://localhost:5000/api/tasks/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({completed:tasks.completed})
    })
    const data=await response.json()
     if(!response.ok){
        throw new Error(data.message)
    }
    return data

}
export async function addTask(tasks) {
    const token=localStorage.getItem("token")
    const response =await fetch(`http://localhost:5000/api/tasks`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({title:tasks.title,completed:tasks.completed})
    })
     const data=await response.json()
     if(!response.ok){
        throw new Error(data.message)
    }
    return data

}