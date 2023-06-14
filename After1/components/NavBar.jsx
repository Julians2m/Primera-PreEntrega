import logo from "../assets/logo-joker2.svg"
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <header>
            <nav>
                <div>
                <img src={logo} alt="" />
                <h1>JOKER GAMES</h1>
                </div>
                <ul>
                    <li>Acción</li>
                    <li>Aventura</li>
                    <li>Deportes</li>
                    <li>Plataforma</li>
                    <li>Simuladores</li>
                </ul>
                <CartWidget/>
            </nav>
            
        </header>
    )
}

export default NavBar