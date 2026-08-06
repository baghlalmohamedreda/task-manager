import "./TaskToolBar.css"
function TaskToolBar({onSupprimertt,onHandlechange,onHandlesearchbar}){
    return(
         <div className="task-toolbar">
             <div className="search-container">
                <input
                    type="text"
                    placeholder="🔍 Rechercher une tâche..."
                    onChange={onHandlesearchbar}
                />
            </div>
             <div className="toolbar-actions">
                <select
                    className="filter-select"
                    onChange={onHandlechange}
                >
                    <option value="all">Toutes</option>
                    <option value="active">Actives</option>
                    <option value="completed">Terminées</option>
                </select>

                <button
                    className="clear-completed-btn"
                    onClick={onSupprimertt}
                >
                    Supprimer terminées
                </button>
              </div>

         </div >  
       



    )
    
   





}
export default TaskToolBar
