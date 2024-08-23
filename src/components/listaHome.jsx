import { useState } from "react";
import '../globals.css';

export default function HomeP() {
    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            nome: 'Bandeira - URSS - União Soviética',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Histórica", "Europa", "Ásia", "Russa", "Soviética", "Socialista"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/800px-Flag_of_the_Soviet_Union.svg.png'
        },
        {
            id: 3,
            nome: 'Bandeira - PR - Paraná',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sulista"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiraparana.png'
        },
        {
            id: 4,
            nome: 'Bandeira - RS - Rio Grande do Sul',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sulista"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirariograndedosul.png'
        },
        {
            id: 5,
            nome: 'Bandeira - SC - Santa Catarina',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sulista"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirasantacatarina.png'
        },
        {
            id: 6,
            nome: 'Bandeira - Moldávia',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Ex-República Soviética", "Socialista"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1280px-Flag_of_Moldova.svg.png'
        },
        {
            id: 7,
            nome: 'Bandeira - Sérvia',
            preço: 49.99,
            desconto: 0.2,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Sérvia"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1024px-Flag_of_Serbia.svg.png'
        }
    ]);


    const [listaPedidos, setListaPedidos] = useState([]);

    const adicionarItemPedidos = (objeto) => {
        setListaPedidos([...listaPedidos, objeto])
    }

    const removerPedido = (id) => {
        let remover = false;
        let listaAux = listaPedidos.filter((produto) => {
            if (remover == false) {
                if (produto.id !== id) {
                    return produto
                } else {
                    remover = true;
                    return null
                }
            } else {
                return produto
            }
        });
        setListaPedidos(listaAux);
    }

    return (
        <div id="Switch">
            <>
                <div class="cardOut">

                    {listaProdutos.map((produto) => {
                        const pFinal = produto.preço * produto.desconto;

                        return (
                            <div key={produto.id} className="pCard">
                                <img src={produto.imagem} className="pImage" />
                                <p className="pName">{produto.nome}</p>
                                <p className="dPrice">R$ {produto.preço}</p>
                                <p className="hPrice">R$ {pFinal.toFixed(2)}</p>
                                <button onClick={() => adicionarItemPedidos(produto)} className="bCard">Adicionar ao Carrinho!</button>
                            </div>
                        );
                    })}
                    {listaPedidos.map((produto) => {
                        const pFinal = produto.preço * produto.desconto;

                        return (
                            <div key={produto.id} className="pCard">
                                <img src={produto.imagem} className="pImage" />
                                <p className="pName">{produto.nome}</p>
                                <p className="dPrice">R$ {produto.preço}</p>
                                <p className="hPrice">R$ {pFinal.toFixed(2)}</p>
                                <button onClick={() => removerPedido(produto.id)} className="bCard">Remover</button>
                            </div>
                        );
                    })}
                </div>
            </>
        </div>
    );
}