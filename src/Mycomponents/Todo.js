import React from "react";

export const Todo = (props) => {

    return(
        <div>
            <h4>{props.worker.title}</h4>
            <p>{props.worker.decs}</p>
            <button className="custom-btn delete-btn custom-btn-sm">Delete</button>
        </div>
        

    )
}