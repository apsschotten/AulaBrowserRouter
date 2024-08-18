import { useState } from "react";

export default function Produtos() {

    const [listaProdutos, setProdutos] = useState([
        { id: 1, nome: 'CD - IFA Wartburg - Im Dienste des Sozialismus', preço: 19.99, imagem: 'https://pbs.twimg.com/media/GVSJ3n2XQAA8CTC?format=png&name=small' },
        { id: 2, nome: 'Pelúcia - Kasane Teto', preço: 19.99, imagem: 'https://pbs.twimg.com/media/GVSJ3n2W8AAsOlk?format=png&name=small' },
        { id: 3, nome: 'Pelúcia - Akita Neru', preço: 19.99, imagem: 'https://pbs.twimg.com/media/GVSJ3n2WcAIm6OP?format=png&name=900x900'},
        { id: 4, nome: 'Bandeira - República Democrática Alemã - "Alemanha Oriental"', preço: 19.99, imagem: 'https://pbs.twimg.com/media/GVSJ3n2W0AAMdKX?format=png&name=small'},
        { id: 5, nome: 'CD - Rammstein - Untitled', preço: 19.99, imagem: 'https://pbs.twimg.com/media/GVSJ6MVWQAAIPZe?format=jpg&name=medium'},
        { id: 6, nome: 'CD Rammstein - Mutter', preço: 19.99, imagem: 'https://pbs.twimg.com/media/GVSJ6MPW0AAZZg9?format=png&name=360x360'},
        { id: 7, nome: 'CD - Weezer - Pinkerton', preço: 19.99, imagem: 'https://pbs.twimg.com/media/GVSJ6MVX0AEWrAo?format=jpg&name=medium'},
        { id: 8, nome: 'CD - Rammstein - Made in Germany', preço: 19.99, imagem: 'https://pbs.twimg.com/media/GVSJ6MOWsAAqmn2?format=jpg&name=360x360'},
        { id: 9, nome: 'Pelúcia - Hatsune Miku', preço: 19.99, imagem: 'https://pbs.twimg.com/media/GVSJ8RyXAAABr6t?format=jpg&name=medium'},
        { id: 10, nome: 'CD - Weezer - Blue Album', preço: 19.99, imagem: 'https://pbs.twimg.com/media/GVSJ8R9XEAA6Iww?format=jpg&name=medium'},
        { id: 11, nome: 'Pelúcia - Cabeça El Gato', preço: 19.99, imagem: 'https://pbs.twimg.com/media/GVSJ8SLWAAABQMg?format=png&name=medium'},
        { id: 12, nome: 'Pelúcia - Rei Chikita', preço: 19.99, imagem: 'https://pbs.twimg.com/media/GVSJ8SJXEAAho60?format=jpg&name=medium'},
        { id: 13, nome: 'Nendoroid - DDLC - Natsuki', preço: 19.99, imagem: 'https://pbs.twimg.com/media/GVSJ-3RW0AAUvI1?format=png&name=900x900'},
        { id: 14, nome: 'Broche - Autistic Creature', preço: 19.99, imagem: 'https://pbs.twimg.com/media/GVSJ-3tWQAA5to-?format=jpg&name=medium'},
        { id: 15, nome: '', preço: 19.99, imagem: ''},
        { id: 16, nome: '', preço: 19.99, imagem: ''},
        { id: 17, nome: '', preço: 19.99, imagem: ''},
        { id: 18, nome: '', preço: 19.99, imagem: ''},
        { id: 19, nome: '', preço: 19.99, imagem: ''},
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