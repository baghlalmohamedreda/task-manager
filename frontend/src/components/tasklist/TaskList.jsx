import TaskItem from "../taskitem/taskitem";
function TaskList({tasks}){
    
    return(
    <div>
         {tasks.map((t)=>
    {
        return(
            <TaskItem 
            key={t.id}
            task={t} 
             />
        )
    }
    )}
    </div>
    )
}
export default TaskList