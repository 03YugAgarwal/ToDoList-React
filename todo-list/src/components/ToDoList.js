import React from "react";

const ToDoList=(props)=>{

    return (
        <>
            <div className="todolist_type">
                <li>{props.text}</li>
                <button onClick={()=>{
                    props.onSelect(props.id)
                }} >X</button>
            </div>
        </>
    )
}

export default ToDoList;