import logo from './assets/photo-grid.png'


export default function Center(){
    return(
        <div className='c-div'>
            <img className='cen-img' src={logo}></img>
            <h1 className='h1-center'>Online Experiences</h1>
            <p className='p-center'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    );
}