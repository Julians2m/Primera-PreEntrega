import {useState} from 'react'
import cart from '../assets/cart.svg'

function Contador() {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
    setContador(contador + 1);
    };

    const decrementar = () => {
    setContador(contador - 1);
    };

    return (
    <div>
        <h2>Agregar al carrito</h2>
        <p>{contador}</p>
        <button onClick={incrementar}>Agregar al Carrito</button>
        <button onClick={decrementar}>Quitar del Carrito</button>
    </div>
    );
}
const CartWidget = () => {
    return (
        <div>
            <div>
                <img src={cart} alt="cart-widget" />
                <p>$0,00</p>
                <div>{Contador()}</div>
            </div>
        </div>
    )
}

export default CartWidget