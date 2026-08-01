import TaskItem from "../taskitem/taskitem";
function TaskList({tasks,onDeletetask}){
    
    return(
    <div>
         {tasks.map((t)=>
    {
        return(
            <TaskItem 
            key={t.id}
            task={t} 
            onDeletetask={onDeletetask}
             />
        )
    }
    )}
    </div>
    )
}
export default TaskList