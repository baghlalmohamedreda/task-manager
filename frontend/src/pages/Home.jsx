import Header from "../components/header/header";
import Taskform from "../components/taskform/TaskForm";
import { useState } from "react";
import TaskList from "../components/tasklist/tasklist";
function Home(){
const [tasks,setTasks]=useState([{id:1,title:"apprendre react"}])
function addtask(title){
    setTasks((prevtask)=>[...tasks,{id:Date.now(),title:title}])

}
    return(
        <>
         <Header/>
         <Taskform onAddtask={addtask}/>
         <TacdskList tasks ={tasks} />

        </>
      
    )
}
export default Home