import Header from "../components/Header.jsx";
import Produtos from "../components/listaProdutos.jsx";
import Footer from "../components/Footer.jsx";

export default function Oferta() {
    return (
        <>
            <Header />
            <h1>Ofertas</h1>
            <Produtos />
            <Footer />
        </>
    );
}