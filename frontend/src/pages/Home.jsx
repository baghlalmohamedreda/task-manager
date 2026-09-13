import Header from "../components/header/Header";
import DeleteModal from "../components/deletemodal/DeleteModal"
import TaskForm from "../components/taskform/taskform";
import { useState,useEffect } from "react";
import TaskList from "../components/tasklist/tasklist";
import TaskStats from "../components/taskstats/TaskStats";
import DeleteCompleted from "../components/deletemodal/DeleteCompleted"
import TaskToolBar from "../components/tasktoolbar/TaskToolBar"
import { getTasks,deleteTask,deleteAllTasks } from "../services/taskServices";
import "./Home.css"
function Home() {
    const [tasks, setTasks] = useState([])
const [filter,setFilter]=useState(()=>{
    return localStorage.getItem("filter")||"all"

})
const [searchtask,setSearchtask]=useState(()=>{
    return localStorage.getItem("searchtask")||""

})
const [theme,setTheme]=useState(()=>{
    return localStorage.getItem("theme")||"light"
})
 const [editingtask, setEditingtask] = useState(null);
 const [showmodal,setShowmodal]=useState(false)
 const [showdelete,setShowdelete]=useState(false)
 const [tasktodelete,setTasktodelete]=useState(null)

useEffect(()=>{
    async function loadTasks(){
        const data=await getTasks()
        setTasks(data)
    }
    loadTasks()
    },[])
useEffect(()=>{
    localStorage.setItem("filter",filter)

}
,[filter])
useEffect(()=>{
    localStorage.setItem("searchtask",searchtask)

},[searchtask])
useEffect(()=>{
    localStorage.setItem("theme",theme)


},[theme])

function toggletheme(){
    if(theme=="light"){
        setTheme("dark")
    }
    else{
        setTheme("light")
    }

}
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
useEffect(() => {
    document.body.className = theme;
}, [theme]);    
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
async function confirmesuppression(){
    try{
        if(tasktodelete){
        const response =await deleteTask(tasktodelete)
        setTasks(prev=>prev.filter(e=>e.id!==tasktodelete))
        setShowmodal(false)
        setTasktodelete(null)
    }
    }catch(e){
        console.log(e.message)
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
async function confirmersuppresiondt() {
  console.log("1 - clic supprimer")

  try {
    console.log("2 - avant API")

    await deleteAllTasks()

    console.log("3 - suppression backend réussie")

    setTasks(prev =>
      prev.filter(task => !task.completed)
    )

    setShowdelete(false)

    console.log("4 - state mis à jour")

  } catch (e) {
    console.log("ERREUR :", e.message)
  }
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
    <div className={`app ${theme}`}>
        <div className="home">
        <Header onToggletheme={toggletheme} theme={theme}/>
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




    </div>
    
)
}
export default Home;
