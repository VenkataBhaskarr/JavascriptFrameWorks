function Button(props) {
    return(
        <button className="btn btn-primary" style={{backgroundColor: props.color}}>{props.text}</button>
    );
}
export default Button;