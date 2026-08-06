import { useState } from "react"
import "./TaskForm.css"
function TaskForm({onAddtask,editingtask,onHandlechange,tasks}){
    const [title,setTitle]=useState(editingtask ? editingtask.title : "")
    const [err,setErr]=useState("")
    const [erreur,setErreur]=useState("")
    function handleclick(e){
        e.preventDefault()
        const titletrim=title.trim()
        const isexiste=tasks.some(e=>e.title.trim().toLowerCase()===title.trim().toLowerCase())
        if(titletrim && !isexiste ){
             onAddtask(titletrim)
             setTitle("")
             setErr("")
             setErreur("")
             return
        }
        else if(isexiste){
            setErreur("cette tache deja existe")
            return
        }
       setErr("vous devez remplir le champ") 

    }
    return(
        <>
        <form className="task-form" action="">
            <select className="filter-select" onChange={onHandlechange}>
        <option value="all">Toutes</option>
        <option value="active">Actives</option>
        <option value="completed">Terminées</option>
    </select>
            <div className="input-container">
                   <input  type="text"  placeholder="Entrez une tâche..." value={title} onChange={(e)=> {setTitle(e.target.value)
                setErr("")
                setErreur("")
             }}/>
             {err &&<span  className="err">{err}  </span>}
             {erreur && <span className="err">{erreur}</span>}
            </div>
             <button type="button" onClick={handleclick}>{editingtask ? "Modifier" : "Ajouter"}</button>
        </form>
        </>
    )
}
export default TaskForm