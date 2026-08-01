import Header from "../components/header/header";
import Taskform from "../components/taskform/TaskForm";
import { useState } from "react";
import TaskList from "../components/tasklist/tasklist";
function Home(){
const [tasks,setTasks]=useState([{id:1,title:"apprendre react"}])
function addtask(title){
    setTasks((prevtask)=>[...tasks,{id:Date.now(),title:title}])

}
function deletetask(id){
    setTasks(tasks.filter((t)=>id!==t.id))

}
    return(
        <>
         <Header/>
         <Taskform onAddtask={addtask}/>
         <TacdskList tasks ={tasks} onDeletetask={deletetask} />

        </>
      
    )
}
export default Home