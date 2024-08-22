import Header from "../components/Header.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Produtos from "../components/listaProdutos.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
    return (
        <>
            <Header />
            <Carousel>
                <div>
                    <img src="src/images/Slide01.jpg" />
                </div>
                <div>
                    <img src="src/images/Slide02.jpg" />
                </div>
                <div>
                    <img src="src/images/Slide03.jpg" />
                </div>
            </Carousel>
            <h1>Home</h1>
            <Produtos />
            <Footer />
        </>
    );
}