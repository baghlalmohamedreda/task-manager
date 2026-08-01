function TaskItem({task}){
    return(
        <>
        <div>
            <label >
            <input type="checkbox" />
            {task.title}
        </label>
        <button>modifier</button>
        <button>supprimer</button>
        </div>
        </>
    )
}
export default TaskItem
