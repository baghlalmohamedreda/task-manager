import { useState } from "react"
import "./TaskForm.css"

function TaskForm({ onAddtask, editingtask, tasks }) {

    const [title, setTitle] = useState(
        editingtask ? editingtask.title : ""
    )

    const [err, setErr] = useState("")
    const [erreur, setErreur] = useState("")

    async function handleclick(e) {
        e.preventDefault()

        const titletrim = title.trim()

        const isexiste = tasks.some(task =>
            task.title.trim().toLowerCase() === titletrim.toLowerCase()
            &&
            task.id !== editingtask?.id
        )

        if (!titletrim) {
            setErr("vous devez remplir le champ")
            return
        }

        if (isexiste) {
            setErreur("cette tâche existe déjà")
            return
        }

        await onAddtask(titletrim)

        setTitle("")
        setErr("")
        setErreur("")
    }

    return (
        <form
            className="task-form"
            onSubmit={handleclick}
        >

            <div className="input-container">

                <input
                    type="text"
                    placeholder="Entrez une tâche..."
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                        setErr("")
                        setErreur("")
                    }}
                />

                {err && (
                    <span className="err">
                        {err}
                    </span>
                )}

                {erreur && (
                    <span className="err">
                        {erreur}
                    </span>
                )}

            </div>

            <button type="submit">
                {editingtask ? "Modifier" : "Ajouter"}
            </button>

        </form>
    )
}

export default TaskForm