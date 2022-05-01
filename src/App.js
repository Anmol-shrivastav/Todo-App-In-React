import "./App.css"
import React, {useState } from 'react'
import Navbar from './mycomponents/header'
import Todos from './mycomponents/Todos'
import Footer from './mycomponents/Footer'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddTask from './mycomponents/AddTask'

function App(){
  function deleteFromAry(ID){
    let allTodosAry = JSON.parse(localStorage.getItem("Todos"));

    let newTodosAry = allTodosAry.filter((obj)=>{
      return obj.ID === ID ? false : true;
    });

    localStorage.setItem("Todos", JSON.stringify(newTodosAry));
    updateState(newTodosAry);
  }   

  let allTodosAry = JSON.parse(localStorage.getItem("Todos"));
  
  const [currState, updateState] = useState(allTodosAry);



  return(
    <Router>
      <Navbar title="My Todo List"/>
        <Routes>
          <Route exact path="/" element={ <Todos allTasks={currState} onDelete={deleteFromAry}/> }>
           
          </Route>
          
          <Route exact path="/AddTask" element={ <AddTask  updateUI = { updateState } /> } >
          </Route>
          
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;