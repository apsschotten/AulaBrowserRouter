import { useState } from "react";

export default function Produtos() {

    const [listaProdutos, setProdutos] = useState([
        { id: 1, nome: 'Bandeira - RDA - Alemanha "Oriental"', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_East_Germany.svg/1280px-Flag_of_East_Germany.svg.png'},
        { id: 2, nome: 'Bandeira - RFA - Alemanha "Ocidental"', preço: 49.99, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0kplS3BTA9eTHd1kWzfOb_vuPuLYkPpjnA&s'},
        { id: 3, nome: 'Bandeira - Alemanha', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png?20111003033442'},
        { id: 4, nome: 'Bandeira - Império Alemão', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Germany_%281933–1935%29.svg/512px-Flag_of_Germany_%281933–1935%29.svg.png'},
        { id: 5, nome: 'Bandeira - Prússia', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Prussia_%281892-1918%29.svg/800px-Flag_of_Prussia_%281892-1918%29.svg.png'},
        { id: 6, nome: 'Bandeira - Rússia', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg'},
        { id: 7, nome: 'Bandeira - Império Russo', preço: 49.99, imagem: 'https://en.wikipedia.org/wiki/File:Flag_of_the_Romanov_Monarchy.svg'},
        { id: 8, nome: 'Bandeira - URSS - União Soviética', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/800px-Flag_of_the_Soviet_Union.svg.png'},
        { id: 9, nome: 'Bandeira - Brasil', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png'},
        { id: 10, nome: 'Bandeira - Brasil Império', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bandeira_do_Império_do_Brasil_com_nó_e_cores_corretos.svg/1024px-Bandeira_do_Império_do_Brasil_com_nó_e_cores_corretos.svg.png'},
        { id: 11, nome: 'Bandeira - AC - Acre', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852740bandeiraacre.png'},
        { id: 12, nome: 'Bandeira - AL - Alagoas', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743Bandeira_de_Alagoas.svg.png'},
        { id: 13, nome: 'Bandeira - AP - Amapá', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_Amap.svg.png'},
        { id: 14, nome: 'Bandeira - AM - Amazonas', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_Amazonas.svg.png'},
        { id: 15, nome: 'Bandeira - BA - Bahia', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeirabahia.png'},
        { id: 16, nome: 'Bandeira - CE - Ceará', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeiraceara.png'},
        { id: 17, nome: 'Bandeira - DF - Distrito Federal - Brasília', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeiradistritofederal.png'},
        { id: 18, nome: 'Bandeira - ES - Espírito Santo', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeiraespiritosanto.png'},
        { id: 19, nome: 'Bandeira - GO - Goiás', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiragoias.png'},
        { id: 20, nome: 'Bandeira - MA - Maranhão', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeiradomaranhao.jpg'},
        { id: 21, nome: 'Bandeira - MT - Mato Grosso', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiramatogrosso.png'},
        { id: 22, nome: 'Bandeira - MS - Mato Grosso do Sul', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744bandeira_Mato_Grosso_Sul.png'},
        { id: 23, nome: 'Bandeira - MG - Minas Gerais', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743Bandeira_de_Minas_Gerais.svg.png'},
        { id: 24, nome: 'Bandeira - PA - Pará', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_Par.svg.png'},
        { id: 25, nome: 'Bandeira - PB - Paraíba', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiraparaiba.png'},
        { id: 26, nome: 'Bandeira - PR - Paraná', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiraparana.png'},
        { id: 27, nome: 'Bandeira - PB - Pernambuco', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741BandeiradePernambuco.png'},
        { id: 28, nome: 'Bandeira - PI - Piauí', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeirapiaui.png'},
        { id: 29, nome: 'Bandeira - RJ - Rio de Janeiro', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeirariodejaneiro.png'},
        { id: 30, nome: 'Bandeira - RN - Rio Grande do Norte', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeirariograndedonorte.png'},
        { id: 31, nome: 'Bandeira - RS - Rio Grande do Sul', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirariograndedosul.png'},
        { id: 32, nome: 'Bandeira - RO - Rondônia', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirarondonia.png'},
        { id: 33, nome: 'Bandeira - RR - Roraima', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeiraroraima.png'},
        { id: 34, nome: 'Bandeira - SC - Santa Catarina', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirasantacatarina.png'},
        { id: 35, nome: 'Bandeira - SP - São Paulo', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_estado_de_S_Paulo.svg.png'},
        { id: 36, nome: 'Bandeira - SE - Sergipe', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirasergipe.png'},
        { id: 37, nome: 'Bandeira - TO - Tocantins', preço: 39.99, imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeiratocantins.png'},
        { id: 38, nome: 'Bandeira - Japão', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1024px-Flag_of_Japan.svg.png'},
        { id: 39, nome: 'Bandeira - Reino Unido - Grã-Bretanha', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1024px-Flag_of_Japan.svg.png'},
        { id: 40, nome: 'Bandeira - Inglaterra', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1024px-Flag_of_England.svg.png'},
        { id: 41, nome: 'Bandeira - Escócia', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1024px-Flag_of_Scotland.svg.png'},
        { id: 42, nome: 'Bandeira - Irlanda do Norte - São Patrício', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Saint_Patrick%27s_Saltire.svg'},
        { id: 43, nome: 'Bandeira - Irlanda do Norte', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Northern_Ireland_%281953–1972%29.svg'},
        { id: 44, nome: 'Bandeira - País de Gales', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/1024px-Flag_of_Wales.svg.png'},
        { id: 45, nome: 'Bandeira - EUA - Estados Unidos da América', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1280px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png'},
        { id: 46, nome: 'Bandeira - França', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png'},
        { id: 47, nome: 'Bandeira - Itália', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg'},
        { id: 48, nome: 'Bandeira - Austrália', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1280px-Flag_of_Australia_%28converted%29.svg.png'},
        { id: 49, nome: 'Bandeira - Nova Zelândia', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1280px-Flag_of_New_Zealand.svg.png'},
        { id: 50, nome: 'Bandeira - Canadá', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png'},
        { id: 51, nome: 'Bandeira - Espanha', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1024px-Flag_of_Spain.svg.png'},
        { id: 52, nome: 'Bandeira -  Império Austro-Húngaro - Aústria-Hungria', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ensign_of_Austro-Hungarian_civil_fleet_%281869-1918%29.svg/1024px-Ensign_of_Austro-Hungarian_civil_fleet_%281869-1918%29.svg.png'},
        { id: 53, nome: 'Bandeira - Hungria', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1280px-Flag_of_Hungary.svg.png'},
        { id: 54, nome: 'Bandeira - Aústria', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1024px-Flag_of_Austria.svg.png'},
        { id: 55, nome: 'Bandeira - China', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1024px-Flag_of_the_People%27s_Republic_of_China.svg.png'},
        { id: 56, nome: 'Bandeira - Hong-Kong', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1024px-Flag_of_Hong_Kong.svg.png'},
        { id: 57, nome: 'Bandeira - Taiwan', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1024px-Flag_of_the_Republic_of_China.svg.png'},
        { id: 58, nome: 'Bandeira - Grécia', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1024px-Flag_of_Greece.svg.png'},
        { id: 59, nome: 'Bandeira - Turquia', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1024px-Flag_of_Turkey.svg.png'},
        { id: 60, nome: 'Bandeira - Irlanda', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1280px-Flag_of_Ireland.svg.png'},
        { id: 61, nome: 'Bandeira - Córeia do Norte', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1280px-Flag_of_North_Korea.svg.png'},
        { id: 62, nome: 'Bandeira - Córeia do Sul', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1024px-Flag_of_South_Korea.svg.png'},
        { id: 63, nome: 'Bandeira - Movimemento Córeia Unificada', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Unification_flag_of_Korea.svg/1024px-Unification_flag_of_Korea.svg.png'},
        { id: 64, nome: 'Bandeira - Filipinas', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Unification_flag_of_Korea.svg/1024px-Unification_flag_of_Korea.svg.png'},
        { id: 65, nome: 'Bandeira - Malásia', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1280px-Flag_of_Malaysia.svg.png'},
        { id: 66, nome: 'Bandeira - Vietname', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1024px-Flag_of_Vietnam.svg.png'},
        { id: 67, nome: 'Bandeira - FNL - Vietname do Norte - Vietcongues', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/FNL_Flag.svg/1024px-FNL_Flag.svg.png'},
        { id: 68, nome: 'Bandeira - Vietname do Sul', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_South_Vietnam.svg/1024px-Flag_of_South_Vietnam.svg.png'},
        { id: 69, nome: 'Bandeira - Cuba', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1280px-Flag_of_Cuba.svg.png'},
        { id: 70, nome: 'Bandeira - Laos', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/1024px-Flag_of_Laos.svg.png'},
        { id: 71, nome: 'Bandeira - Angola', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1024px-Flag_of_Angola.svg.png'},
        { id: 72, nome: 'Bandeira - Moçambique', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/1024px-Flag_of_Mozambique.svg.png'},
        { id: 73, nome: 'Bandeira - Cabo Verde', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/1024px-Flag_of_Cape_Verde.svg.png'},
        { id: 74, nome: 'Bandeira - São Tomé e Príncipe', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_São_Tomé_and_Príncipe.svg/1280px-Flag_of_São_Tomé_and_Príncipe.svg.png'},
        { id: 75, nome: 'Bandeira - Timor Leste', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/1280px-Flag_of_East_Timor.svg.png'},
        { id: 76, nome: 'Bandeira - Guiné Bissau', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/1280px-Flag_of_Guinea-Bissau.svg.png'},
        { id: 77, nome: 'Bandeira - Guiné Equatorial', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/1024px-Flag_of_Equatorial_Guinea.svg.png'},
        { id: 78, nome: 'Bandeira - Portugal', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1024px-Flag_of_Portugal.svg.png'},
        { id: 79, nome: 'Bandeira - Noruega', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/800px-Flag_of_Norway.svg.png'},
        { id: 80, nome: 'Bandeira - Dinamarca', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/800px-Flag_of_Denmark.svg.png'},
        { id: 81, nome: 'Bandeira - Islândia', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.svg.png'},
        { id: 82, nome: 'Bandeira - Finlândia', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1024px-Flag_of_Finland.svg.png'},
        { id: 83, nome: 'Bandeira - Suécia', preço: 49.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1024px-Flag_of_Sweden.svg.png'},
        { id: 84, nome: 'Bandeira - ', preço: 49.99, imagem: ''},
        { id: 85, nome: 'Bandeira - ', preço: 49.99, imagem: ''},
        { id: 86, nome: 'Bandeira - ', preço: 49.99, imagem: ''},
        { id: 87, nome: 'Bandeira - ', preço: 49.99, imagem: ''},
        { id: 88, nome: 'Bandeira - ', preço: 49.99, imagem: ''},
        { id: 89, nome: 'Bandeira - ', preço: 49.99, imagem: ''},
        { id: 90, nome: 'Bandeira - ', preço: 49.99, imagem: ''},
        { id: 91, nome: 'Bandeira - ', preço: 49.99, imagem: ''},
        { id: 92, nome: 'Bandeira - ', preço: 49.99, imagem: ''},
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