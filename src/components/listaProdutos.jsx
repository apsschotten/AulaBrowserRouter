import { useState } from "react";
import '../globals.css';

export default function Produtos() {
const [listaProdutos, setProdutos] = useState([
    {
        id: 1,
        nome: 'Bandeira - RDA - Alemanha "Oriental"',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Histórica", "Europa", "Germânica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_East_Germany.svg/1280px-Flag_of_East_Germany.svg.png'
    },
    {
        id: 2,
        nome: 'Bandeira - RFA - Alemanha "Ocidental"',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Histórica", "Europa", "Germânica"],
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0kplS3BTA9eTHd1kWzfOb_vuPuLYkPpjnA&s'
    },
    {
        id: 3,
        nome: 'Bandeira - Alemanha',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Germânica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png?20111003033442'
    },
    {
        id: 4,
        nome: 'Bandeira - Império Alemão',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Histórica", "Europa", "Germânica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Germany_%281933–1935%29.svg/512px-Flag_of_Germany_%281933–1935%29.svg.png'
    },
    {
        id: 5,
        nome: 'Bandeira - Prússia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Histórica", "Europa", "Germânica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Prussia_%281892-1918%29.svg/800px-Flag_of_Prussia_%281892-1918%29.svg.png'
    },
    {
        id: 6,
        nome: 'Bandeira - Rússia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Ásia", "Russa", "Ex-República Soviética"],
        imagem: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg'
    },
    {
        id: 7,
        nome: 'Bandeira - Império Russo',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Histórica", "Europa", "Ásia", "Russa"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_the_Romanov_Monarchy.svg/1024px-Flag_of_the_Romanov_Monarchy.svg.png'
    },
    {
        id: 8,
        nome: 'Bandeira - URSS - União Soviética',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Histórica", "Europa", "Ásia", "Russa", "Soviética", "Socialista"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/800px-Flag_of_the_Soviet_Union.svg.png'
    },
    {
        id: 9,
        nome: 'Bandeira - Brasil',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "América do Sul", "Brasileira"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png'
    },
    {
        id: 10,
        nome: 'Bandeira - Brasil Império',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Histórica", "América do Sul", "Brasileira"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bandeira_do_Império_do_Brasil_com_nó_e_cores_corretos.svg/1024px-Bandeira_do_Império_do_Brasil_com_nó_e_cores_corretos.svg.png'
    },
    {
        id: 11,
        nome: 'Bandeira - AC - Acre',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nortista"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852740bandeiraacre.png'
    },
    {
        id: 12,
        nome: 'Bandeira - AL - Alagoas',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743Bandeira_de_Alagoas.svg.png'
    },
    {
        id: 13,
        nome: 'Bandeira - AP - Amapá',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nortista"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_Amap.svg.png'
    },
    {
        id: 14,
        nome: 'Bandeira - AM - Amazonas',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nortista"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_Amazonas.svg.png'
    },
    {
        id: 15,
        nome: 'Bandeira - BA - Bahia',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeirabahia.png'
    },
    {
        id: 16,
        nome: 'Bandeira - CE - Ceará',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeiraceara.png'
    },
    {
        id: 17,
        nome: 'Bandeira - DF - Distrito Federal - Brasília',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Centro-Oestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeiradistritofederal.png'
    },
    {
        id: 18,
        nome: 'Bandeira - ES - Espírito Santo',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sudestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeiraespiritosanto.png'
    },
    {
        id: 19,
        nome: 'Bandeira - GO - Goiás',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Centro-Oestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiragoias.png'
    },
    {
        id: 20,
        nome: 'Bandeira - MA - Maranhão',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bandeira_do_Maranhão.svg/1024px-Bandeira_do_Maranhão.svg.png'
    },
    {
        id: 21,
        nome: 'Bandeira - MT - Mato Grosso',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Centro-Oestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiramatogrosso.png'
    },
    {
        id: 22,
        nome: 'Bandeira - MS - Mato Grosso do Sul',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Centro-Oestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744bandeira_Mato_Grosso_Sul.png'
    },
    {
        id: 23,
        nome: 'Bandeira - MG - Minas Gerais',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sudestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743Bandeira_de_Minas_Gerais.svg.png'
    },
    {
        id: 24,
        nome: 'Bandeira - PA - Pará',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nortista"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_Par.svg.png'
    },
    {
        id: 25,
        nome: 'Bandeira - PB - Paraíba',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiraparaiba.png'
    },
    {
        id: 26,
        nome: 'Bandeira - PR - Paraná',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sulista"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiraparana.png'
    },
    {
        id: 27,
        nome: 'Bandeira - PB - Pernambuco',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741BandeiradePernambuco.png'
    },
    {
        id: 28,
        nome: 'Bandeira - PI - Piauí',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeirapiaui.png'
    },
    {
        id: 29,
        nome: 'Bandeira - RJ - Rio de Janeiro',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sudestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeirariodejaneiro.png'
    },
    {
        id: 30,
        nome: 'Bandeira - RN - Rio Grande do Norte',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeirariograndedonorte.png'
    },
    {
        id: 31,
        nome: 'Bandeira - RS - Rio Grande do Sul',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sulista"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirariograndedosul.png'
    },
    {
        id: 32,
        nome: 'Bandeira - RO - Rondônia',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nortista"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirarondonia.png'
    },
    {
        id: 33,
        nome: 'Bandeira - RR - Roraima',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nortista"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeiraroraima.png'
    },
    {
        id: 34,
        nome: 'Bandeira - SC - Santa Catarina',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sulista"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirasantacatarina.png'
    },
    {
        id: 35,
        nome: 'Bandeira - SP - São Paulo',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Sudestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_estado_de_S_Paulo.svg.png'
    },
    {
        id: 36,
        nome: 'Bandeira - SE - Sergipe',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nordestina"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirasergipe.png'
    },
    {
        id: 37,
        nome: 'Bandeira - TO - Tocantins',
        preço: 39.99,
        estoque: 10,
        categorias: ["Bandeira de Estado", "Atual", "América do Sul", "Brasileira", "Nortista"],
        imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeiratocantins.png'
    },
    {
        id: 38,
        nome: 'Bandeira - Japão',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Japonesa"],
        imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1024px-Flag_of_Japan.svg.png'
    },
    {
        id: 39,
        nome: 'Bandeira - Reino Unido - Grã-Bretanha',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Britânica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg'
    },
    {
        id: 40,
        nome: 'Bandeira - Inglaterra',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Britânica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1024px-Flag_of_England.svg.png'
    },
    {
        id: 41,
        nome: 'Bandeira - Escócia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Britânica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1024px-Flag_of_Scotland.svg.png'
    },
    {
        id: 42,
        nome: 'Bandeira - Irlanda do Norte - São Patrício',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Britânica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Saint_Patrick%27s_Saltire.svg'
    },
    {
        id: 43,
        nome: 'Bandeira - Irlanda do Norte',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Britânica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Northern_Ireland_%281953–1972%29.svg'
    },
    {
        id: 44,
        nome: 'Bandeira - País de Gales',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Britânica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/1024px-Flag_of_Wales.svg.png'
    },
    {
        id: 45,
        nome: 'Bandeira - EUA - Estados Unidos da América',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "America do Norte", "Estadunidense"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1280px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png'
    },
    {
        id: 46,
        nome: 'Bandeira - França',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Francesa"],
        imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png'
    },
    {
        id: 47,
        nome: 'Bandeira - Itália',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Italiana"],
        imagem: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg'
    },
    {
        id: 48,
        nome: 'Bandeira - Austrália',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Oceania", "Australiana"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1280px-Flag_of_Australia_%28converted%29.svg.png'
    },
    {
        id: 49,
        nome: 'Bandeira - Nova Zelândia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Oceania", "Neo-Zelandesa"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1280px-Flag_of_New_Zealand.svg.png'
    },
    {
        id: 50,
        nome: 'Bandeira - Canadá',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "América do Norte", "Canadense"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png'
    },
    {
        id: 51,
        nome: 'Bandeira - Espanha',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Hispânica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1024px-Flag_of_Spain.svg.png'
    },
    {
        id: 52,
        nome: 'Bandeira -  Império Austro-Húngaro - Aústria-Hungria',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Histórica", "Europa", "Germânica", "Húngara"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ensign_of_Austro-Hungarian_civil_fleet_%281869-1918%29.svg/1024px-Ensign_of_Austro-Hungarian_civil_fleet_%281869-1918%29.svg.png'
    },
    {
        id: 53,
        nome: 'Bandeira - Hungria',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Húngara"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1280px-Flag_of_Hungary.svg.png'
    },
    {
        id: 54,
        nome: 'Bandeira - Aústria',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Germânica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1024px-Flag_of_Austria.svg.png'
    },
    {
        id: 55,
        nome: 'Bandeira - China',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Sino", "Socialista"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1024px-Flag_of_the_People%27s_Republic_of_China.svg.png'
    },
    {
        id: 56,
        nome: 'Bandeira - Hong-Kong',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Sino"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1024px-Flag_of_Hong_Kong.svg.png'
    },
    {
        id: 57,
        nome: 'Bandeira - Taiwan',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Sino"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1024px-Flag_of_the_Republic_of_China.svg.png'
    },
    {
        id: 58,
        nome: 'Bandeira - Grécia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Grega"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1024px-Flag_of_Greece.svg.png'
    },
    {
        id: 59,
        nome: 'Bandeira - Turquia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Ásia", "Turca"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1024px-Flag_of_Turkey.svg.png'
    },
    {
        id: 60,
        nome: 'Bandeira - Irlanda',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Irlandesa"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1280px-Flag_of_Ireland.svg.png'
    },
    {
        id: 61,
        nome: 'Bandeira - Córeia do Norte',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Coreana", "Socialista"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1280px-Flag_of_North_Korea.svg.png'
    },
    {
        id: 62,
        nome: 'Bandeira - Córeia do Sul',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Coreana"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1024px-Flag_of_South_Korea.svg.png'
    },
    {
        id: 63,
        nome: 'Bandeira - Movimemento Córeia Unificada',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Grupo", "Ásia", "Coreana"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Unification_flag_of_Korea.svg/1024px-Unification_flag_of_Korea.svg.png'
    },
    {
        id: 64,
        nome: 'Bandeira - Filipinas',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Filipina"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1280px-Flag_of_the_Philippines.svg.png'
    },
    {
        id: 65,
        nome: 'Bandeira - Malásia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Malaia"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1280px-Flag_of_Malaysia.svg.png'
    },
    {
        id: 66,
        nome: 'Bandeira - Vietname',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Vietnamita", "Socialista"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1024px-Flag_of_Vietnam.svg.png'
    },
    {
        id: 67,
        nome: 'Bandeira - FNL - Vietname do Norte - Vietcongues',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Histórica", "Ásia", "Vietnamita", "Socialista"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/FNL_Flag.svg/1024px-FNL_Flag.svg.png'
    },
    {
        id: 68,
        nome: 'Bandeira - Vietname do Sul',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Histórica", "Ásia", "Vietnamita"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_South_Vietnam.svg/1024px-Flag_of_South_Vietnam.svg.png'
    },
    {
        id: 69,
        nome: 'Bandeira - Cuba',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "América Central", "Cubana", "Socialista"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1280px-Flag_of_Cuba.svg.png'
    },
    {
        id: 70,
        nome: 'Bandeira - Laos',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Laosiana", "Socialista"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/1024px-Flag_of_Laos.svg.png'
    },
    {
        id: 71,
        nome: 'Bandeira - Angola',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "África", "Angolana",],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1024px-Flag_of_Angola.svg.png'
    },
    {
        id: 72,
        nome: 'Bandeira - Moçambique',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "África", "Moçambicana"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/1024px-Flag_of_Mozambique.svg.png'
    },
    {
        id: 73,
        nome: 'Bandeira - Cabo Verde',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "África", "Cabo-Verdiana"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/1024px-Flag_of_Cape_Verde.svg.png'
    },
    {
        id: 74,
        nome: 'Bandeira - São Tomé e Príncipe',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "África", "São-Tomense"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_São_Tomé_and_Príncipe.svg/1280px-Flag_of_São_Tomé_and_Príncipe.svg.png'
    },
    {
        id: 75,
        nome: 'Bandeira - Timor Leste',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Ásia", "Atual", "Timorense"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/1280px-Flag_of_East_Timor.svg.png'
    },
    {
        id: 76,
        nome: 'Bandeira - Guiné Bissau',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "África", "Guineense"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/1280px-Flag_of_Guinea-Bissau.svg.png'
    },
    {
        id: 77,
        nome: 'Bandeira - Guiné Equatorial',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "África", "Equato-Guineense"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/1024px-Flag_of_Equatorial_Guinea.svg.png'
    },
    {
        id: 78,
        nome: 'Bandeira - Portugal',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Portuguesa"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1024px-Flag_of_Portugal.svg.png'
    },
    {
        id: 79,
        nome: 'Bandeira - Noruega',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Nórdica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/800px-Flag_of_Norway.svg.png'
    },
    {
        id: 80,
        nome: 'Bandeira - Dinamarca',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Nórdica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/800px-Flag_of_Denmark.svg.png'
    },
    {
        id: 81,
        nome: 'Bandeira - Islândia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Nórdica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.svg.png'
    },
    {
        id: 82,
        nome: 'Bandeira - Finlândia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Nórdica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1024px-Flag_of_Finland.svg.png'
    },
    {
        id: 83,
        nome: 'Bandeira - Suécia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Nórdica"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1024px-Flag_of_Sweden.svg.png'
    },
    {
        id: 84,
        nome: 'Bandeira - Armênia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Ex-República Soviética"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1280px-Flag_of_Armenia.svg.png'
    },
    {
        id: 85,
        nome: 'Bandeira - Azerbaijão',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Ásia", "Ex-República Soviética"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1280px-Flag_of_Azerbaijan.svg.png'
    },
    {
        id: 86,
        nome: 'Bandeira - Bielorússia - Belarus',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Ex-República Soviética"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1280px-Flag_of_Belarus.svg.png'
    },
    {
        id: 87,
        nome: 'Bandeira - Estônia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Ex-República Soviética"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1024px-Flag_of_Estonia.svg.png'
    },
    {
        id: 88,
        nome: 'Bandeira - Geórgia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Ásia", "Ex-República Soviética"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1024px-Flag_of_Georgia.svg.png'
    },
    {
        id: 89,
        nome: 'Bandeira - Cazaquistão',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Ásia", "Ex-República Soviética"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1280px-Flag_of_Kazakhstan.svg.png'
    },
    {
        id: 90,
        nome: 'Bandeira - Quirguistão',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Ex-República Soviética"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1024px-Flag_of_Kyrgyzstan.svg.png'
    },
    {
        id: 91,
        nome: 'Bandeira - Letônia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Ex-República Soviética"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/1280px-Flag_of_Latvia.svg.png'
    },
    {
        id: 92,
        nome: 'Bandeira - Lituânia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Ex-República Soviética"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1024px-Flag_of_Lithuania.svg.png'
    },
    {
        id: 93,
        nome: 'Bandeira - Moldávia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Ex-República Soviética", "Socialista"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1280px-Flag_of_Moldova.svg.png'
    },
    {
        id: 94,
        nome: 'Bandeira - Tajiquistão',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Ex-República Soviética"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/1280px-Flag_of_Tajikistan.svg.png'
    },
    {
        id: 95,
        nome: 'Bandeira - Turquemenistão',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Ex-República Soviética"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/1024px-Flag_of_Turkmenistan.svg.png'
    },
    {
        id: 96,
        nome: 'Bandeira - Ucrânia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Ex-República Soviética"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1024px-Flag_of_Ukraine.svg.png'
    },
    {
        id: 97,
        nome: 'Bandeira - Uzbequistão',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Ex-República Soviética"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png'
    },
    {
        id: 98,
        nome: 'Bandeira - Venezuela',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "América do Sul", "Venezuelana", "Socialista"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/800px-Flag_of_Venezuela.svg.png'
    },
    {
        id: 99,
        nome: 'Bandeira - México',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "América do Norte", "Mexicana"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1024px-Flag_of_Mexico.svg.png'
    },
    {
        id: 100,
        nome: 'Bandeira - Argentina',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "América do Sul", "Argentina"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg'
    },
    {
        id: 101,
        nome: 'Bandeira - Bolívia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "América do Sul", "Boliviana"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/1024px-Flag_of_Bolivia_%28state%29.svg.png'
    },
    {
        id: 102,
        nome: 'Bandeira - Chile',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "América do Sul", "Chilena"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1024px-Flag_of_Chile.svg.png'
    },
    {
        id: 103,
        nome: 'Bandeira - Colômbia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "América do Sul", "Colombiana"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1024px-Flag_of_Colombia.svg.png'
    },
    {
        id: 104,
        nome: 'Bandeira - Equador',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "América do Sul", "Equatoriana"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1024px-Flag_of_Ecuador.svg.png'
    },
    {
        id: 105,
        nome: 'Bandeira - Paraguai',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "América do Sul", "Paraguaia"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1280px-Flag_of_Paraguay.svg.png'
    },
    {
        id: 106,
        nome: 'Bandeira - Peru',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "América do Sul", "Peruana"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1024px-Flag_of_Peru.svg.png'
    },
    {
        id: 107,
        nome: 'Bandeira - Uruguai',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "América do Sul", "Uruguaia"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1024px-Flag_of_Uruguay.svg.png'
    },
    {
        id: 108,
        nome: 'Bandeira - Polônia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Polonesa"],
        imagem: 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg'
    },
    {
        id: 109,
        nome: 'Bandeira - Sérvia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Sérvia"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1024px-Flag_of_Serbia.svg.png'
    },
    {
        id: 110,
        nome: 'Bandeira - Albânia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Albanesa"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/800px-Flag_of_Albania.svg.png'
    },
    {
        id: 111,
        nome: 'Bandeira - Bélgica',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Belga"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/800px-Flag_of_Belgium.svg.png'
    },
    {
        id: 112,
        nome: 'Bandeira - Países Baixos - Holanda',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Holandesa"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1024px-Flag_of_the_Netherlands.svg.png'
    },
    {
        id: 113,
        nome: 'Bandeira - Vaticano',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Religiosa"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_Vatican_City_%282023–present%29.svg/800px-Flag_of_Vatican_City_%282023–present%29.svg.png'
    },
    {
        id: 114,
        nome: 'Bandeira - República Tcheca - Tchéquia',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Europa", "Tcheca"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1024px-Flag_of_the_Czech_Republic.svg.png'
    },
    {
        id: 115,
        nome: 'Bandeira - Israel',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Israelita"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/800px-Flag_of_Israel.svg.png'
    },
    {
        id: 116,
        nome: 'Bandeira - Palestina',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Atual", "Ásia", "Palestina"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/1280px-Flag_of_Palestine.svg.png'
    },
    {
        id: 117,
        nome: 'Bandeira - Sacro Império Romano-Germânico',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Histórica", "Romana", "Europa"],
        imagem: 'https://cdn11.bigcommerce.com/s-hhbbk/images/stencil/1280x1280/products/1939/42891/HIST0363__03551.1580527270.png?c=2'
    },
    {
        id: 118,
        nome: 'Bandeira - Império Romano',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Histórica", "Romana", "Europa", "África", "Ásia"],
        imagem: 'https://flagman.ie/flags/wp-content/uploads/2021/05/Roman-Empire-Flag.jpg'
    },
    {
        id: 119,
        nome: 'Bandeira - Império Romano',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Histórica", "Romana", "Europa", "África", "Ásia"],
        imagem: 'https://i.pinimg.com/originals/98/b0/38/98b038f4d7421a8fe498537fe8915a38.png'
    },
    {
        id: 120,
        nome: 'Bandeira - União Africana',
        preço: 49.99,
        estoque: 10,
        categorias: ["Bandeira de País", "Grupo", "África"],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_the_African_Union.svg/1024px-Flag_of_the_African_Union.svg.png'
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
                    {
                        listaProdutos.map((produto) =>
                            <div key={produto.id} class="pCard">
                                <img src={produto.imagem} class="pImage" />
                                <p class="pName">{produto.nome}</p>
                                <p class="pPrice">R${produto.preço}</p>
                                <button onClick={() => adicionarItemPedidos(produto)} class="bCard">Adicionar ao Carrinho!</button>
                            </div>
                        )
                    }
                    {
                        listaPedidos.map((produto) =>
                            <div key={produto.id} class="pCard">
                                <img src={produto.imagem} class="pImage" />
                                <p class="pName">{produto.nome}</p>
                                <p class="pPrice">R${produto.preçoFF}</p>
                                <button onClick={() => removerPedido(produto.id)} class="bCard">Remover</button>
                            </div>
                        )
                    }
                </div>
            </>
        </div>
    );
}