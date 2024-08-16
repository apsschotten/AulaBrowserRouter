import { useState } from "react";

export default function Produtos() {

    const [listaProdutos, setProdutos] = useState([
        { id: 1, nome: '', preço: 19.99, imagem: '' },
        { id: 2, nome: '', preço: 19.99, imagem: '' }
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
        <div>
            <>
                {
                    listaProdutos.map((produto) =>
                        <div key={produto.id}>
                            <img src={produto.imagem} />
                            <p>{produto.nome}</p>
                            <p>R$</p><p>{produto.preço}</p>
                            <button onClick={() => adicionarItemPedidos(produto)}>Adicionar ao Carrinho!</button>
                        </div>
                    )
                }
                {
                    listaPedidos.map((produto) =>
                        <div key={produto.id} id="Prod">
                            <img src={produto.imagem} />
                            <p>{produto.nome}</p>
                            <p>R$</p><p>{produto.preço}</p>
                            <button onClick={() => removerPedido(produto.id)}>Remover</button>
                        </div>
                    )
                }
            </>
        </div>
    );
}