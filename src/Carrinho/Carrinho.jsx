import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Carrinho({ listaPedidos, removerPedido }) {
    return (
        <div>
            <Header />
            <h1>Carrinho</h1>
            <Footer />
        </div>
    );
}
