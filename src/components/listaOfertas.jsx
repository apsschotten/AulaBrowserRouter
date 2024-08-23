import { useState } from "react";
import '../globals.css';

export default function Ofertas() {
    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            nome: 'Bandeira - Rússia',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Ásia", "Russa", "Ex-República Soviética"],
            imagem: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg'
        },
        {
            id: 2,
            nome: 'Bandeira - URSS - União Soviética',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Histórica", "Europa", "Ásia", "Russa", "Soviética", "Socialista"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/800px-Flag_of_the_Soviet_Union.svg.png'
        },
        {
            id: 3,
            nome: 'Bandeira - Brasil',
            preço: 49.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "América do Sul", "Brasileira"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png'
        },
        {
            id: 4,
            nome: 'Bandeira - Brasil Império',
            preço: 49.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de País", "Histórica", "América do Sul", "Brasileira"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bandeira_do_Império_do_Brasil_com_nó_e_cores_corretos.svg/1024px-Bandeira_do_Império_do_Brasil_com_nó_e_cores_corretos.svg.png'
        },
        {
            id: 5,
            nome: 'Bandeira - AC - Acre',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nortista"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852740bandeiraacre.png'
        },
        {
            id: 6,
            nome: 'Bandeira - AL - Alagoas',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743Bandeira_de_Alagoas.svg.png'
        },
        {
            id: 7,
            nome: 'Bandeira - AP - Amapá',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nortista"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_Amap.svg.png'
        },
        {
            id: 8,
            nome: 'Bandeira - AM - Amazonas',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nortista"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_Amazonas.svg.png'
        },
        {
            id: 9,
            nome: 'Bandeira - BA - Bahia',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeirabahia.png'
        },
        {
            id: 10,
            nome: 'Bandeira - CE - Ceará',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeiraceara.png'
        },
        {
            id: 11,
            nome: 'Bandeira - DF - Distrito Federal - Brasília',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Centro-Oestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeiradistritofederal.png'
        },
        {
            id: 12,
            nome: 'Bandeira - ES - Espírito Santo',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sudestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeiraespiritosanto.png'
        },
        {
            id: 13,
            nome: 'Bandeira - GO - Goiás',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Centro-Oestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiragoias.png'
        },
        {
            id: 14,
            nome: 'Bandeira - MA - Maranhão',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bandeira_do_Maranhão.svg/1024px-Bandeira_do_Maranhão.svg.png'
        },
        {
            id: 15,
            nome: 'Bandeira - MT - Mato Grosso',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Centro-Oestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiramatogrosso.png'
        },
        {
            id: 16,
            nome: 'Bandeira - MS - Mato Grosso do Sul',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Centro-Oestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744bandeira_Mato_Grosso_Sul.png'
        },
        {
            id: 17,
            nome: 'Bandeira - MG - Minas Gerais',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sudestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743Bandeira_de_Minas_Gerais.svg.png'
        },
        {
            id: 18,
            nome: 'Bandeira - PA - Pará',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nortista"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_Par.svg.png'
        },
        {
            id: 19,
            nome: 'Bandeira - PB - Paraíba',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiraparaiba.png'
        },
        {
            id: 20,
            nome: 'Bandeira - PR - Paraná',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sulista"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiraparana.png'
        },
        {
            id: 21,
            nome: 'Bandeira - PB - Pernambuco',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741BandeiradePernambuco.png'
        },
        {
            id: 22,
            nome: 'Bandeira - PI - Piauí',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeirapiaui.png'
        },
        {
            id: 23,
            nome: 'Bandeira - RJ - Rio de Janeiro',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sudestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeirariodejaneiro.png'
        },
        {
            id: 24,
            nome: 'Bandeira - RN - Rio Grande do Norte',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeirariograndedonorte.png'
        },
        {
            id: 25,
            nome: 'Bandeira - RS - Rio Grande do Sul',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sulista"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirariograndedosul.png'
        },
        {
            id: 26,
            nome: 'Bandeira - RO - Rondônia',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nortista"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirarondonia.png'
        },
        {
            id: 27,
            nome: 'Bandeira - RR - Roraima',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nortista"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeiraroraima.png'
        },
        {
            id: 28,
            nome: 'Bandeira - SC - Santa Catarina',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sulista"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirasantacatarina.png'
        },
        {
            id: 29,
            nome: 'Bandeira - SP - São Paulo',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sudestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_estado_de_S_Paulo.svg.png'
        },
        {
            id: 30,
            nome: 'Bandeira - SE - Sergipe',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirasergipe.png'
        },
        {
            id: 31,
            nome: 'Bandeira - TO - Tocantins',
            preço: 39.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nortista"],
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeiratocantins.png'
        },
        {
            id: 32,
            nome: 'Bandeira - Armênia',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Ex-República Soviética"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1280px-Flag_of_Armenia.svg.png'
        },
        {
            id: 33,
            nome: 'Bandeira - Azerbaijão',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Ásia", "Ex-República Soviética"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1280px-Flag_of_Azerbaijan.svg.png'
        },
        {
            id: 34,
            nome: 'Bandeira - Bielorússia - Belarus',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Ex-República Soviética"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1280px-Flag_of_Belarus.svg.png'
        },
        {
            id: 35,
            nome: 'Bandeira - Estônia',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Ex-República Soviética"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1024px-Flag_of_Estonia.svg.png'
        },
        {
            id: 36,
            nome: 'Bandeira - Geórgia',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Ásia", "Ex-República Soviética"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1024px-Flag_of_Georgia.svg.png'
        },
        {
            id: 37,
            nome: 'Bandeira - Cazaquistão',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Ásia", "Ex-República Soviética"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1280px-Flag_of_Kazakhstan.svg.png'
        },
        {
            id: 38,
            nome: 'Bandeira - Quirguistão',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Ex-República Soviética"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1024px-Flag_of_Kyrgyzstan.svg.png'
        },
        {
            id: 39,
            nome: 'Bandeira - Letônia',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Ex-República Soviética"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/1280px-Flag_of_Latvia.svg.png'
        },
        {
            id: 40,
            nome: 'Bandeira - Lituânia',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Ex-República Soviética"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1024px-Flag_of_Lithuania.svg.png'
        },
        {
            id: 41,
            nome: 'Bandeira - Moldávia',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Ex-República Soviética", "Socialista"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1280px-Flag_of_Moldova.svg.png'
        },
        {
            id: 42,
            nome: 'Bandeira - Tajiquistão',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Ex-República Soviética"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/1280px-Flag_of_Tajikistan.svg.png'
        },
        {
            id: 43,
            nome: 'Bandeira - Turquemenistão',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Ex-República Soviética"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/1024px-Flag_of_Turkmenistan.svg.png'
        },
        {
            id: 44,
            nome: 'Bandeira - Ucrânia',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Ex-República Soviética"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1024px-Flag_of_Ukraine.svg.png'
        },
        {
            id: 45,
            nome: 'Bandeira - Uzbequistão',
            preço: 49.99,
            desconto: 0.5,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Ex-República Soviética"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png'
        },
        {
            id: 46,
            nome: 'Bandeira - Venezuela',
            preço: 49.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "América do Sul", "Venezuelana", "Socialista"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/800px-Flag_of_Venezuela.svg.png'
        },
        {
            id: 48,
            nome: 'Bandeira - Argentina',
            preço: 49.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "América do Sul", "Argentina"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg'
        },
        {
            id: 49,
            nome: 'Bandeira - Bolívia',
            preço: 49.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "América do Sul", "Boliviana"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/1024px-Flag_of_Bolivia_%28state%29.svg.png'
        },
        {
            id: 50,
            nome: 'Bandeira - Chile',
            preço: 49.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "América do Sul", "Chilena"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1024px-Flag_of_Chile.svg.png'
        },
        {
            id: 51,
            nome: 'Bandeira - Colômbia',
            preço: 49.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "América do Sul", "Colombiana"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1024px-Flag_of_Colombia.svg.png'
        },
        {
            id: 52,
            nome: 'Bandeira - Equador',
            preço: 49.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "América do Sul", "Equatoriana"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1024px-Flag_of_Ecuador.svg.png'
        },
        {
            id: 53,
            nome: 'Bandeira - Paraguai',
            preço: 49.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "América do Sul", "Paraguaia"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1280px-Flag_of_Paraguay.svg.png'
        },
        {
            id: 54,
            nome: 'Bandeira - Peru',
            preço: 49.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "América do Sul", "Peruana"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1024px-Flag_of_Peru.svg.png'
        },
        {
            id: 55,
            nome: 'Bandeira - Uruguai',
            preço: 49.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "América do Sul", "Uruguaia"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1024px-Flag_of_Uruguay.svg.png'
        },
        {
            id: 56,
            nome: 'Bandeira - Guiana',
            preço: 49.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "América do Sul", "Guineense"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/1024px-Flag_of_Guyana.svg.png'
        },
        {
            id: 58,
            nome: 'Bandeira - Suriname',
            preço: 49.99,
            desconto: 0.75,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "América do Sul", "Surinamês"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/1024px-Flag_of_Suriname.svg.png'
        },
        {
            id: 57,
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