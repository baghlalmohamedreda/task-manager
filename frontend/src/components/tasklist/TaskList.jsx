import TaskItem from "../taskitem/TaskItem";
import "./TaskList.css"
function TaskList({tasks,onDeletetask,onEditingtask,onHandlchange,onHandlefilterchange}){
    
    return(
    <div className="task-list">
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
