import { useState } from "react"
import "./TaskForm.css"
function TaskForm({onAddtask,editingtask}){
    const [title,setTitle]=useState(editingtask ? editingtask.title : "")
    const [err,setErr]=useState("")
    function handleclick(e){
        e.preventDefault()
        const titletrim=title.trim()
        if(titletrim){
             onAddtask(titletrim)
             setTitle("")
             setErr("")
             return
        }
       setErr("vous devez remplir le champ") 
    }
    return(
        <>
        <form className="task-form" action="">
            <select className="filter-select">
        <option value="all">Toutes</option>
        <option value="active">Actives</option>
        <option value="completed">Terminées</option>
    </select>
            <div className="input-container">
                   <input  type="text"  placeholder="Entrez une tâche..." value={title} onChange={(e)=> {setTitle(e.target.value)
                setErr("")
             }}/>
             {err &&<span  className="err">{err}  </span>}
            </div>
             <button type="button" onClick={handleclick}>{editingtask ? "Modifier" : "Ajouter"}</button>
        </form>
        </>
    )
}
export default TaskForm