import React from "react"
import './mycss/header.css'
import { NavLink } from "react-router-dom";


function Navbar(props){

    let activeStyle = {
      fontWeight : "bold",
      fontStyle: "oblique"
    };

    // let activeClassName = "bold";

    return <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink className="navbar-brand" to="/" style={ ({isActive}) => isActive ? activeStyle : undefined}>{props.title}</NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/" style={ ({isActive}) => isActive ? activeStyle : undefined }>Home <span className="sr-only">(current)</span></NavLink>
                  </li>
                  
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/AddTask" style={ ({isActive}) => isActive ? activeStyle : undefined}>Add Task</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
    </>
}

export default Navbar;


