import "./DeleteModal.css"

function DeleteModal({onAnuller,onSupprimer}){
    return (
       <div className="modal-overlay">
        <div className="modal" >
             <h2>supprimer la tache</h2>
             <p>voulez vous vraiment supprimer cette tache</p>
             <div className="modal-buttons">
            <button onClick={onAnuller}>annuler</button>
            <button onClick={onSupprimer}>supprimer</button>
        </div>
        </div>
       </div>
    )
}
export default DeleteModal