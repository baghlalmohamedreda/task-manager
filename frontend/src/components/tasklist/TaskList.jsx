import TaskItem from "../taskitem/TaskItem";
function TaskList({tasks,onDeletetask,onEditingtask,onHandlchange}){
    
    return(
    <div>
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
