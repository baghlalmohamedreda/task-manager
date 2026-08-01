function TaskItem({task,onDeletetask}){
    return(
        <>
        <div>
            <label >
            <input type="checkbox" />
            {task.title}
        </label>
        <button >modifier</button>
        <button onClick={()=>onDeletetask(task.id)} > supprimer</button>
        </div>
        </>
    )
}
export default TaskItem
