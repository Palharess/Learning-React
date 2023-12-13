import logo from './assets/katie-zaferes.png'
import bikeLogo from './assets/mountain-bike.png'
import weddingLogo from './assets/wedding-photography.png'


export default [
    {
        img: logo,
        rating: 5,
        description: "Life lessons with Katie Zaferes",
        price: 136,
        location: "USA",
        stats: {
            reviewCount: 6,
            rating: 5,
        },
    },
    {
        id: 2,
        description: "Learn Wedding Photography",
        title: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        img: weddingLogo,
        stats: {
            reviewCount: 30,
            rating: 5.0
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        description: "Group Mountain Biking",
        title: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        img: bikeLogo,
        
        stats: {
            reviewCount: 2,
            rating: 4.8
        },
        location: "Norway",
        openSpots: 3,
    }

]