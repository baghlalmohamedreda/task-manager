import { useState } from "react"
function TaskForm({onAddtask}){
    const [title,setTitle]=useState("")
    function handleclick(){
        onAddtask(title)
        setTitle("")
    }
    return(
        <>
        <input type="text"  placeholder="Entrez une tâche..." onChange={(e)=> setTitle(e.target.value)}/>
        <button onClick={handleclick}>Ajouter</button>  
        </>
    )
}
export default TaskForm