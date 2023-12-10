import logo from "./assets/react-icon-small.png"


function Navbar(){
    return(
        <nav className="container">
            <img src={logo}></img>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>

    );
}

export default Navbar