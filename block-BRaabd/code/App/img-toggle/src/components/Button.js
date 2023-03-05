import React from "react"

function Button(props){
    return (
        <button onClick={props.onClick} selection={props.selection}>{props.label}</button>
    )
}

export default Button;