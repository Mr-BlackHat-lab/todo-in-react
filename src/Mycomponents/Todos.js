import React from "react";
import { Todo } from "./Todo";
import '../cssOfComponents/works.css'

export default function Todos(props){
    return(
        <div className="custom-container">
            <Todo worker = {props.works[0]}/>

        </div>
    )
}