function TaskItem({task,onDeletetask,onEditingtask}){
    return(
        <>
        <div>
            <label >
            <input type="checkbox" />
            {task.title}
        </label>
        <button onClick={()=>onEditingtask(task) } >modifier</button>
        <button onClick={()=>onDeletetask(task.id)} > supprimer</button>
        </div>
        </>
    )
}
export default TaskItem
