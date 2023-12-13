
import star from './assets/star.png'


export default function Card(props){

    return(
        <div id="card">
            <img className='card-img' src={props.img}></img>
            <div className='card-item'>
                <img src={star} className='star-img'></img>
                <p className='start-text'>{props.rating}<span className='light'>({props.reviewCount}) •</span></p>
                <p className='start-text'>{props.location}</p>
                
            </div>
            
            <p className='pp'>{props.description}</p>
            <p className='pp'>From <span className='bold'>${props.price} </span>  / person</p>
        </div>
    );
}