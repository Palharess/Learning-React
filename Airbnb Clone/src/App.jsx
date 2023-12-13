import Navbar from "./Navbar"
import Center from "./Center"
import Card from "./Card"
import logo from './assets/katie-zaferes.png'
import cardData from "./cardData"



    


export default function App() {
    const cardElements = cardData.map((card) =>{
        return <Card
            img = {card.img}
            rating = {card.stats.rating}
            reviewCount = {card.stats.reviewCount}
            description = {card.description}
            price = {card.price}
            location = {card.location}
        />
    })
    return (
        <div>
            <Navbar/>
            <Center/>
            {cardElements}
        </div>
    )
}