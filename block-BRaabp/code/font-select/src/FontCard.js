
function FontCard(props){
    return(
        <div className="font-card">
            <h2>{props.fontName}</h2>
            <h3>{props.type}</h3>
            <p style={props.style}>{props.fontText}</p>
        </div>
    )
}

export default FontCard;