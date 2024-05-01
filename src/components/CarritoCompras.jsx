import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function CarritoCompras() {
    return (
        <>
            <div class="carrito-contenedor">
                <a className="carrito-logo" href="#" id="cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </a>
                <span className="cuenta-carrito">0</span>
            </div>
        </>
    );
}