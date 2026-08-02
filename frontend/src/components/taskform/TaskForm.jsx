import { useState } from "react"

function TaskForm({onAddtask,editingtask}){
    const [title,setTitle]=useState(editingtask ? editingtask.title : "")
    function handleclick(){
        onAddtask(title)
        setTitle("")
    }
    return(
        <>
        <input type="text"  placeholder="Entrez une tâche..." value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <button onClick={handleclick}>{editingtask ? "Modifier" : "Ajouter"}</button>
        </>
    )
}
export default TaskForm