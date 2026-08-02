import TaskItem from "../taskitem/TaskItem";
function TaskList({tasks,onDeletetask,onEditingtask}){
    
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
             /> 
        )
    }
    )}
    </div>
    )
}
export default TaskList
