
function Button(props){
    return <button onClick={props.event} style={{padding: 20}}>{props.text}</button>
}

export default Button