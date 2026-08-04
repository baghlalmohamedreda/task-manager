import "./TaskItem.css"

function TaskItem({task,onDeletetask,onEditingtask,onHandlchange}){
    return(
        <>
        <div className="task-item">

            <label className="task-info">
                
            <input type="checkbox" checked={task.completed} onChange={()=>onHandlchange(task.id)}/>
            <span style={{ textDecoration: task.completed? "line-through":"none"

            }}>{task.title}</span>  
   

            </label>
        <div className="task-buttons">
            <button onClick={()=>onEditingtask(task) } >modifier</button>
            <button onClick={()=>onDeletetask(task.id)} > supprimer</button>
            
            </div>    

        
        </div>
        
        </>
    )
}
export default TaskItem
