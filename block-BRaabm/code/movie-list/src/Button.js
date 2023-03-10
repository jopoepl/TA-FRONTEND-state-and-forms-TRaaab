function Button (props) {
    return (
        props.hover ?  <button info = {props.info} onClick={props.onClick}>Know More</button> : null
        )
}

export default Button;