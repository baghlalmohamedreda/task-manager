function TaskItem({task,onDeletetask,onEditingtask,onHandlchange}){
    return(
        <>
        <div>
            <label>
                
            <input type="checkbox" checked={task.completed} onChange={()=>onHandlchange(task.id)}/>
            <span style={{ textDecoration: task.completed? "line-through":"none"

            }}>{task.title}</span>  
   

            </label>

        <button onClick={()=>onEditingtask(task) } >modifier</button>
        <button onClick={()=>onDeletetask(task.id)} > supprimer</button>
        </div>
        
        </>
    )
}
export default TaskItem
