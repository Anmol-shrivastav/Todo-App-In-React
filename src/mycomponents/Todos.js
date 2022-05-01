import React from "react";
import TodoItem from "./TodoItems";
import './mycss/Todos.css'


function Todos(props){
    let allTodos = props.allTasks;

    return(
        <>
            <div className="todos-container">
                <h1 align="center">Tasks We Need To Do.</h1>
                <hr />
                
                {
                    allTodos.length === 0 ? "No Task To Do, Enjoy Your Time" : 
                    allTodos.map((obj)=>{
                    return(<TodoItem task={obj} key={obj.ID} onDeleteFun={props.onDelete} />);
                })}
                
            </div>
        </>
    );
}

export default Todos;