

export default function Joke(props){
    
    return(
        <div>
            <p>{props.setup}</p>
            <h3>{props.punchline}</h3>
            <hr/>
        </div>
    );

    
}