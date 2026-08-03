import Header from "../components/header/Header";
import TaskForm from "../components/taskform/TaskForm";
import { useState,useEffect } from "react";
import TaskList from "../components/tasklist/TaskList";

function Home() {
    const [tasks, setTasks] = useState(()=>{
        const values=localStorage.getItem("tasks")
        return values? JSON.parse(values):[]
    }
)
 const [editingtask, setEditingtask] = useState(null);

useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))  
},[tasks])

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
                    title: title,
                    completed:false
                }
            ]);

        }
    }
    function handlchange(id){
        setTasks(prev=>prev.map(task=>
            task.id===id?
            {...task,completed:!task.completed}
            :task


        ))

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
                onHandlchange={handlchange}
            />
        </>
    );
}
export default Home;
