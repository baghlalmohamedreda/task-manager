import TaskItem from "../taskitem/TaskItem";
function TaskList({tasks,onDeletetask,onEditingtask}){
    
    return(
    <div>
         {tasks.map((t)=>
    {
        return(
            <TaskItem 
            key={t.id}
            task={t} 
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
