import { Link } from "react-router-dom";
import '../globals.css'

export default function Header() {
    return (
        <header>
            <div class="iTop">
            <img src="src/images/Logo.png" class="hImage" />
            </div>
            <div class="bList">
                <button class="bTop">
                    <Link to="/home">
                        <li>Home</li>
                    </Link>
                </button>
                <button class="bTop">
                    <Link to="/produto">
                        <li>Produtos</li>
                    </Link>
                </button>
                <button class="bTop">
                    <Link to="/oferta">
                        <li>Ofertas</li>
                    </Link>
                </button>
                <button class="bTop">
                    <Link to="/carrinho">
                        <li>Carrinho</li>
                    </Link>
                </button>
            </div>
        </header>
    );
}  