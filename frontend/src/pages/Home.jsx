import Header from "../components/header/Header";
import TaskForm from "../components/taskform/TaskForm";
import DeleteModal from "../components/deletemodal/DeleteModal"
import { useState,useEffect } from "react";
import TaskList from "../components/tasklist/TaskList";
import TaskStats from "../components/taskstats/TaskStats";
import DeleteCompleted from "../components/deletemodal/DeleteCompleted"
import TaskToolBar from "../components/tasktoolbar/TaskToolBar"
import "./Home.css"
function Home() {
    const [tasks, setTasks] = useState(()=>{
        const values=localStorage.getItem("tasks")
        return values? JSON.parse(values):[]
    }
)
const [filter,setFilter]=useState(()=>{
    return localStorage.getItem("filter")||"all"

})
const [searchtask,setSearchtask]=useState(()=>{
    return localStorage.getItem("searchtask")||""

})
 const [editingtask, setEditingtask] = useState(null);
 const [showmodal,setShowmodal]=useState(false)
 const [showdelete,setShowdelete]=useState(false)
 const [tasktodelete,setTasktodelete]=useState(null)

 
useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))  
},[tasks])
useEffect(()=>{
    localStorage.setItem("filter",filter)

}
,[filter])
useEffect(()=>{
    localStorage.setItem("searchtask",searchtask)

},[searchtask])
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
            ])

           
        }
    }
function handlchange(id){
        setTasks(prev=>prev.map(task=>
            task.id===id?
            {...task,completed:!task.completed}
            :task
        ))
    }
function annuler(){
    setShowmodal(false)
    setTasktodelete(null)
}
function confirmesuppression(){
    if(tasktodelete){
        setTasks(prev=>prev.filter(e=>e.id!==tasktodelete))
        setShowmodal(false)
        setTasktodelete(null)
    }
}
function deletetask(id) {
        setShowmodal(true)
        setTasktodelete(id) 
    }
function edittask(task) {
        setEditingtask(task);
    }
    
function handlefilterchange(){
        if(filter=="all"){
            return tasks
        }
        else if(filter=="active"){
            return tasks.filter(e=>e.completed===false)
        }
        else if(filter=="completed"){
            return tasks.filter(e=>e.completed==true)
            
        }
    }
function handlechange(e){
        setFilter(e.target.value)
    }
function annulersuppresiondt(){
        setShowdelete(false)


    }
function confirmersuppresiondt(){
        setTasks(prev=>prev.filter(e=>e.completed==false))
        setShowdelete(false)
    }
function supprimertt(){
        setShowdelete(true)

    }
function handlesearchbar(e){
    setSearchtask(e.target.value)
}
function handlesearchtask(){
    if(searchtask.trim()){
        return handlefilterchange().filter(e=>e.title.trim().toLowerCase().includes(searchtask.toLowerCase()))

    }
    return handlefilterchange()


}    

return (
    <div className="home">
        <Header />
        <TaskForm
            key={editingtask ? editingtask.id : "new-task"}
            onAddtask={addtask}
            editingtask={editingtask}
            onHandlechange={handlechange}
            tasks={tasks}
        />
        <TaskToolBar onSupprimertt={supprimertt} 
                     onHandlechange={handlechange}
                     onHandlesearchbar={handlesearchbar}
                     searchtask={searchtask}
                     filter={filter}


        
        />
        <TaskList
            tasks={handlesearchtask()}
            onDeletetask={deletetask}
            onEditingtask={edittask}
            onHandlchange={handlchange}
            onSupprimertt={supprimertt}
        />
        <TaskStats tasks={tasks} />
        {showmodal && (
            <DeleteModal
                onAnuller={annuler}
                onSupprimer={confirmesuppression}
            />
        )}
        {showdelete && (
            <DeleteCompleted
                onAnuller={annulersuppresiondt}
                onSupprimer={confirmersuppresiondt}
            />
        )}
    </div>
)
}
export default Home;
