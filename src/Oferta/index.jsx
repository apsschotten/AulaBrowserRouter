import Header from "../components/Header.jsx";
import Ofertas from "../components/listaOfertas.jsx";
import Footer from "../components/Footer.jsx";

export default function Oferta() {
    return (
        <>
            <Header />
            <h1>Ofertas</h1>
            <Ofertas />
            <Footer />
        </>
    );
}