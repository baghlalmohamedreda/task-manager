import "./DeleteCompleted.css"

function DeleteCompleted({onAnuller,onSupprimer}){
    return (
       <div className="modal-overlay">
        <div className="modal" >
             <h2>supprimer tout les taches terminees</h2>
             <p>voulez vous vraiment supprimer tout</p>
             <div className="modal-buttons">
            <button onClick={onAnuller}>annuler</button>
            <button onClick={onSupprimer}>supprimer</button>

        </div>
        </div>

       </div>
    )



}
export default DeleteCompleted