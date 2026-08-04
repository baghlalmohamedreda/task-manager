import { useState } from "react"
import "./TaskForm.css"
function TaskForm({onAddtask,editingtask}){
    const [title,setTitle]=useState(editingtask ? editingtask.title : "")
    function handleclick(){
        onAddtask(title)
        setTitle("")
    }
    return(
        <>
        <form className="task-form" action="">
             <input  type="text"  placeholder="Entrez une tâche..." value={title} onChange={(e)=> setTitle(e.target.value)}/>
             <button onClick={handleclick}>{editingtask ? "Modifier" : "Ajouter"}</button>
        </form>
       
        </>
    )
}
export default TaskForm