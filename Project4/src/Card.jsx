
import star from './assets/star.png'


export default function Card(props){

    return(
        <div id="card">
            <img className='card-img' src={props.img}></img>
            <div className='card-item'>
                <img src={star} className='star-img'></img>
                <p className='start-text'>{props.rating}</p>
            </div>
            <p className='pp'>{props.description}</p>
            {props.price} 
        </div>
    );
}