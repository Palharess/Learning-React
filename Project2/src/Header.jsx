import logo from "./assets/react-logo.png"


function Header() {
    return (
        <header>
            <div className='container'>
                <div className='one'><img src={logo} width="40px" /></div>
                <div className='two' id='q'>
                  <ul className='nav-ul'>
                      <li>Preço</li>
                      <li>Sobre</li>
                      <li>Contato</li>
                    </ul>
                </div>

            </div>
        </header>
    )
}

export default Header