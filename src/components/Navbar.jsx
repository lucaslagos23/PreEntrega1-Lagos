import CarritoCompras from "./CarritoCompras";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <>
        <nav className="barraDeNavegacion">
            <a className="logo" href="#">GamerClub</a>
            <div className="navigation-links">
                <div className="search-box">
                    <input className="barraDeBusqueda" type="text" placeholder="Eso que querés.. buscalo acá" />
                    <span className="search-icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                </div>
                <a className="login-link" href="#">Bienvenida/o Usuario</a>
            </div>
            <CarritoCompras />
        </nav>
        </>
    );
}