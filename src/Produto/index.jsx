import Header from "../components/Header";
import Produtos from "../components/Produtos";
import Footer from "../components/Footer";

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