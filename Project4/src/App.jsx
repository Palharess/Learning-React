import Navbar from "./Navbar"
import Center from "./Center"
import Card from "./Card"
import logo from './assets/katie-zaferes.png'

const price2 = <p className='pp'><span className='bold'> From $136</span> / person</p> 

    


export default function App() {
    return (
        <div>
            <Navbar/>
            <Center/>
            <Card
                img = {logo}
                rating = {5.0}
                description = "Life lessons with Katie Zaferes"
                price = {price2}
            />
        </div>
    )
}