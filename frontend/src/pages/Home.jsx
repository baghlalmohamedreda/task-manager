import Header from "../components/header/Header";
import TaskForm from "../components/taskform/TaskForm";
import { useState } from "react";
import TaskList from "../components/tasklist/TaskList";

function Home() {

    const [tasks, setTasks] = useState([
        { id: 1, title: "apprendre react" }
    ]);

    const [editingtask, setEditingtask] = useState(null);

    function addtask(title) {

        if (editingtask) {

            setTasks(prevtasks =>
                prevtasks.map(task =>
                    task.id === editingtask.id
                        ? { ...task, title: title }
                        : task
                )
            );

            setEditingtask(null);

        } else {

            setTasks(prevtasks => [
                ...prevtasks,
                {
                    id: Date.now(),
                    title: title
                }
            ]);

        }

    }

    function deletetask(id) {
        setTasks(prevtasks =>
            prevtasks.filter(task => task.id !== id)
        );
    }

    function edittask(task) {
        setEditingtask(task);
    }

    return (
        <>
            <Header />

            <TaskForm
                key={editingtask ? editingtask.id : "new-task"}
                onAddtask={addtask}
                editingtask={editingtask}
            />

            <TaskList
                tasks={tasks}
                onDeletetask={deletetask}
                onEditingtask={edittask}
            />
        </>
    );
}

export default Home;
