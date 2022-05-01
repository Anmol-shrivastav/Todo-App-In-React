import React, { useRef, useState } from 'react'
import './mycss/AddTask.css'

function AddTask(props){
    let formContainer ={
        maxWidth: "600px",
        margin: "0 auto",
        height: "auto",
        border: "1px solid black",
        boxSizing: "border-box",
        padding: "20px 10px",
        backgroundColor: "#f5f5f5"
    }

    const msgDiv = useRef(null);
    const descInputBox = useRef(null);

    const [taskStr , updateTaskStr] = useState("");
    const [desStr, updateDesStr] = useState("");

    function showAndHideMsg(){
        msgDiv.current.style.display = "block";
        setTimeout(()=>{
            msgDiv.current.style.display = "none";
        }, 3000);
    }

    function submitData(Event){
        Event.preventDefault();
        let task = Event.currentTarget[0].value.trim();
        let description = Event.currentTarget[1].value.trim();

        if(!task || !description){
            alert("Both Fields Are Required.");
        }else{
            
            let allTaskObjAry = JSON.parse(localStorage.getItem("Todos"));

            console.log(allTaskObjAry);

            let id;
            if(allTaskObjAry === null || allTaskObjAry.length === 0){
                id = 1;
                allTaskObjAry = [];
            }else{
                id = allTaskObjAry[allTaskObjAry.length-1].ID + 1;
            }
            

            let taskObj = {
                ID : id,
                Task : task,
                Description : description 
            }

            allTaskObjAry.push(taskObj);

            props.updateUI(allTaskObjAry);

            updateTaskStr("");
            updateDesStr("");
            descInputBox.current.blur();

            let objAry = JSON.stringify(allTaskObjAry);

            localStorage.setItem("Todos", objAry);
            
            showAndHideMsg();
        }

    }

    function changeTaskStr(event){
        updateTaskStr(event.target.value);
    }

    function changeDesStr(e){
        updateDesStr(e.target.value);
    }

    return(
        <>
            <div style={formContainer}>
                <h3>Add Your Task Here</h3>
                <hr />
                <form onSubmit={ submitData }>
                    <div className="form-group">
                        <label>Task</label>
                        <input type="text" value={taskStr} onChange={changeTaskStr} className="form-control" required/>
                    </div>
                    
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" value={desStr} onChange={changeDesStr}  ref={descInputBox} className="form-control" required/>
                    </div>

                    <button type="submit" className='btn btn-success'>Add</button>
                    
                </form>

                <div className='showMsg'  ref={msgDiv}>Added Sucessfuly</div>

            </div>
        </>
    );
}

export default AddTask;