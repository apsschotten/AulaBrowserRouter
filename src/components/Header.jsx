import { Link } from "react-router-dom";
import '../globals.css'

export default function Header() {
    return (
        <header>
            <img src="src/images/Logo.png" class="hImage"/>
            <ul>
                <Link to="/home">
                    <li>Home</li>
                </Link>
                <Link to="/produto">
                    <li>Produtos</li>
                </Link>
                <Link to="/oferta">
                    <li>Ofertas</li>
                </Link>
            </ul>
        </header>
    );
}  