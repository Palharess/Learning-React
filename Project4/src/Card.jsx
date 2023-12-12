import logo from './assets/katie-zaferes.png'
import star from './assets/star.png'


export default function Card(){

    return(
        <div id="card">
            <img className='card-img' src={logo}></img>
            <div className='card-item'>
                <img src={star} className='star-img'></img>
                <p className='start-text'>5.0</p>
            </div>
            <p className='pp'>Life lessons with Katie Zaferes</p>
            <p className='pp'> <span className='bold'>From $136</span> / person</p> 
        </div>
    );
}