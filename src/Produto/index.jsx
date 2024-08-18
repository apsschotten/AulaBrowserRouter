import Header from "../components/Header.jsx";
import Produtos from "../components/Produtos.jsx";
import Footer from "../components/Footer.jsx";

export default function Produto() {
    return (
        <>
            <Header />
            <h1>Produtos</h1>
            <Produtos />
            <Footer />
        </>
    );
}