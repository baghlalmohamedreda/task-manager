import TaskItem from "../taskitem/TaskItem";
import "./TaskList.css"
function TaskList({tasks,onDeletetask,onEditingtask,onHandlchange,onHandlefilterchange,onSupprimertt}){
    
    return(
    <div className="task-list">
       <div className="clear-completed-btn">
    <button onClick={onSupprimertt}>
         Supprimer terminées
    </button>
</div>
         {tasks.map((task)=>
    {
        return(
            <TaskItem 
            key={task.id}
            task={task} 
            onDeletetask={onDeletetask}
            onEditingtask={onEditingtask}
            onHandlchange={onHandlchange}
             /> 
        )
    }
    )}
    
    </div>
    )
}
export default TaskList
