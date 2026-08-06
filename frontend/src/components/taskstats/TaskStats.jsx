
import "./TaskStats.css"

function TaskStats({tasks}){

    return(
        <div className="task-stats">
            <div className="stat-item">
                <span>Total</span>
                <strong>{tasks.length}</strong>
            </div>
            <div className="stat-item">
                 <span>actives</span>
                 <strong>{tasks.filter(e=>e.completed==false).length}</strong>
            </div>
            <div className="stat-item">
                 <span>Terminee</span>
                <strong>{tasks.filter(e=>e.completed==true).length}</strong>
            </div>
        </div>
    )
}
export default TaskStats