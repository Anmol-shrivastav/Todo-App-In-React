import React from "react";
import './mycss/TodoItems.css';

function TodoItem(props){
    return(
        <>
            <div className="todo-container">
                <p>Task Id : {props.task.ID}</p>
                <p className="text-bold">Task : {props.task.Task}</p>
                <p>Description : {props.task.Description}</p>
                <div className="btn-container">
                    <button align="right" className="btn btn-sm btn-success" onClick={()=>{props.onDeleteFun(props.task.ID)}}>Done</button>
                </div>
                
            </div>
            <hr />
        </>
    );
}

export default TodoItem;