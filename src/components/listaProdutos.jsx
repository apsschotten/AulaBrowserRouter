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
            nome: 'Bandeira - Império Russo',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Histórica", "Europa", "Ásia", "Russa"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_the_Romanov_Monarchy.svg/1024px-Flag_of_the_Romanov_Monarchy.svg.png'
        },

        {
            id: 7,
            nome: 'Bandeira - Japão',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Japonesa"],
            imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1024px-Flag_of_Japan.svg.png'
        },
        {
            id: 8,
            nome: 'Bandeira - Reino Unido - Grã-Bretanha',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Britânica"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg'
        },
        {
            id: 9,
            nome: 'Bandeira - Inglaterra',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Britânica"],
            imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1024px-Flag_of_England.svg.png'
        },
        {
            id: 10,
            nome: 'Bandeira - Escócia',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Britânica"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1024px-Flag_of_Scotland.svg.png'
        },
        {
            id: 11,
            nome: 'Bandeira - Irlanda do Norte - São Patrício',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Britânica"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Saint_Patrick%27s_Saltire.svg'
        },
        {
            id: 12,
            nome: 'Bandeira - Irlanda do Norte',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Britânica"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Northern_Ireland_%281953–1972%29.svg'
        },
        {
            id: 13,
            nome: 'Bandeira - País de Gales',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Britânica"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/1024px-Flag_of_Wales.svg.png'
        },
        {
            id: 14,
            nome: 'Bandeira - EUA - Estados Unidos da América',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "America do Norte", "Estadunidense"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1280px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png'
        },
        {
            id: 15,
            nome: 'Bandeira - França',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Francesa"],
            imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png'
        },
        {
            id: 16,
            nome: 'Bandeira - Itália',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Italiana"],
            imagem: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg'
        },
        {
            id: 17,
            nome: 'Bandeira - Austrália',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Oceania", "Australiana"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1280px-Flag_of_Australia_%28converted%29.svg.png'
        },
        {
            id: 18,
            nome: 'Bandeira - Nova Zelândia',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Oceania", "Neo-Zelandesa"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1280px-Flag_of_New_Zealand.svg.png'
        },
        {
            id: 19,
            nome: 'Bandeira - Canadá',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "América do Norte", "Canadense"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png'
        },
        {
            id: 20,
            nome: 'Bandeira - Espanha',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Hispânica"],
            imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1024px-Flag_of_Spain.svg.png'
        },
        {
            id: 21,
            nome: 'Bandeira -  Império Austro-Húngaro - Aústria-Hungria',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Histórica", "Europa", "Germânica", "Húngara"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ensign_of_Austro-Hungarian_civil_fleet_%281869-1918%29.svg/1024px-Ensign_of_Austro-Hungarian_civil_fleet_%281869-1918%29.svg.png'
        },
        {
            id: 22,
            nome: 'Bandeira - Hungria',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Húngara"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1280px-Flag_of_Hungary.svg.png'
        },
        {
            id: 23,
            nome: 'Bandeira - Aústria',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Germânica"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1024px-Flag_of_Austria.svg.png'
        },
        {
            id: 24,
            nome: 'Bandeira - China',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Sino", "Socialista"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1024px-Flag_of_the_People%27s_Republic_of_China.svg.png'
        },
        {
            id: 25,
            nome: 'Bandeira - Hong-Kong',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Sino"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1024px-Flag_of_Hong_Kong.svg.png'
        },
        {
            id: 26,
            nome: 'Bandeira - Taiwan',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Sino"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1024px-Flag_of_the_Republic_of_China.svg.png'
        },
        {
            id: 27,
            nome: 'Bandeira - Grécia',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Grega"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1024px-Flag_of_Greece.svg.png'
        },
        {
            id: 28,
            nome: 'Bandeira - Turquia',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Ásia", "Turca"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1024px-Flag_of_Turkey.svg.png'
        },
        {
            id: 29,
            nome: 'Bandeira - Irlanda',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Irlandesa"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1280px-Flag_of_Ireland.svg.png'
        },
        {
            id: 30,
            nome: 'Bandeira - Córeia do Norte',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Coreana", "Socialista"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1280px-Flag_of_North_Korea.svg.png'
        },
        {
            id: 31,
            nome: 'Bandeira - Córeia do Sul',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Coreana"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1024px-Flag_of_South_Korea.svg.png'
        },
        {
            id: 32,
            nome: 'Bandeira - Movimemento Córeia Unificada',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de Grupo/Movimento", "Grupo", "Ásia", "Coreana"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Unification_flag_of_Korea.svg/1024px-Unification_flag_of_Korea.svg.png'
        },
        {
            id: 33,
            nome: 'Bandeira - Filipinas',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Filipina"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1280px-Flag_of_the_Philippines.svg.png'
        },
        {
            id: 34,
            nome: 'Bandeira - Malásia',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Malaia"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1280px-Flag_of_Malaysia.svg.png'
        },
        {
            id: 35,
            nome: 'Bandeira - Vietname',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Vietnamita", "Socialista"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1024px-Flag_of_Vietnam.svg.png'
        },
        {
            id: 36,
            nome: 'Bandeira - FNL - Vietname do Norte - Vietcongues',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Histórica", "Ásia", "Vietnamita", "Socialista"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/FNL_Flag.svg/1024px-FNL_Flag.svg.png'
        },
        {
            id: 37,
            nome: 'Bandeira - Vietname do Sul',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Histórica", "Ásia", "Vietnamita"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_South_Vietnam.svg/1024px-Flag_of_South_Vietnam.svg.png'
        },
        {
            id: 38,
            nome: 'Bandeira - Cuba',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "América Central", "Cubana", "Socialista"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1280px-Flag_of_Cuba.svg.png'
        },
        {
            id: 39,
            nome: 'Bandeira - Laos',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Laosiana", "Socialista"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/1024px-Flag_of_Laos.svg.png'
        },
        {
            id: 40,
            nome: 'Bandeira - Angola',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "África", "Angolana",],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1024px-Flag_of_Angola.svg.png'
        },
        {
            id: 41,
            nome: 'Bandeira - Moçambique',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "África", "Moçambicana"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/1024px-Flag_of_Mozambique.svg.png'
        },
        {
            id: 42,
            nome: 'Bandeira - Cabo Verde',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "África", "Cabo-Verdiana"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/1024px-Flag_of_Cape_Verde.svg.png'
        },
        {
            id: 43,
            nome: 'Bandeira - São Tomé e Príncipe',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "África", "São-Tomense"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_São_Tomé_and_Príncipe.svg/1280px-Flag_of_São_Tomé_and_Príncipe.svg.png'
        },
        {
            id: 44,
            nome: 'Bandeira - Timor Leste',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Ásia", "Atual", "Timorense"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/1280px-Flag_of_East_Timor.svg.png'
        },
        {
            id: 45,
            nome: 'Bandeira - Guiné Bissau',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "África", "Guineense"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/1280px-Flag_of_Guinea-Bissau.svg.png'
        },
        {
            id: 46,
            nome: 'Bandeira - Guiné Equatorial',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "África", "Equato-Guineense"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/1024px-Flag_of_Equatorial_Guinea.svg.png'
        },
        {
            id: 47,
            nome: 'Bandeira - Portugal',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Portuguesa"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1024px-Flag_of_Portugal.svg.png'
        },
        {
            id: 48,
            nome: 'Bandeira - Noruega',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Nórdica"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/800px-Flag_of_Norway.svg.png'
        },
        {
            id: 49,
            nome: 'Bandeira - Dinamarca',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Nórdica"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/800px-Flag_of_Denmark.svg.png'
        },
        {
            id: 50,
            nome: 'Bandeira - Islândia',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Nórdica"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.svg.png'
        },
        {
            id: 51,
            nome: 'Bandeira - Finlândia',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Nórdica"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1024px-Flag_of_Finland.svg.png'
        },
        {
            id: 52,
            nome: 'Bandeira - Suécia',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Nórdica"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1024px-Flag_of_Sweden.svg.png'
        },

        {
            id: 53,
            nome: 'Bandeira - Polônia',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Polonesa"],
            imagem: 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg'
        },
        {
            id: 54,
            nome: 'Bandeira - Albânia',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Albanesa"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/800px-Flag_of_Albania.svg.png'
        },
        {
            id: 55,
            nome: 'Bandeira - Bélgica',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Belga"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/800px-Flag_of_Belgium.svg.png'
        },
        {
            id: 56,
            nome: 'Bandeira - Países Baixos - Holanda',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Holandesa"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1024px-Flag_of_the_Netherlands.svg.png'
        },
        {
            id: 57,
            nome: 'Bandeira - Vaticano',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Religiosa"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_Vatican_City_%282023–present%29.svg/800px-Flag_of_Vatican_City_%282023–present%29.svg.png'
        },
        {
            id: 58,
            nome: 'Bandeira - República Tcheca - Tchéquia',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Europa", "Tcheca"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1024px-Flag_of_the_Czech_Republic.svg.png'
        },
        {
            id: 59,
            nome: 'Bandeira - Israel',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Israelita"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/800px-Flag_of_Israel.svg.png'
        },
        {
            id: 60,
            nome: 'Bandeira - Palestina',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "Ásia", "Palestina"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/1280px-Flag_of_Palestine.svg.png'
        },
        {
            id: 61,
            nome: 'Bandeira - Sacro Império Romano-Germânico',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Histórica", "Romana", "Europa"],
            imagem: 'https://cdn11.bigcommerce.com/s-hhbbk/images/stencil/1280x1280/products/1939/42891/HIST0363__03551.1580527270.png?c=2'
        },
        {
            id: 62,
            nome: 'Bandeira - Império Romano',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Histórica", "Romana", "Europa", "África", "Ásia"],
            imagem: 'https://flagman.ie/flags/wp-content/uploads/2021/05/Roman-Empire-Flag.jpg'
        },
        {
            id: 63,
            nome: 'Bandeira - Império Romano',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Histórica", "Romana", "Europa", "África", "Ásia"],
            imagem: 'https://i.pinimg.com/originals/98/b0/38/98b038f4d7421a8fe498537fe8915a38.png'
        },
        {
            id: 64,
            nome: 'Bandeira - União Africana',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de Grupo/Movimento", "Grupo", "África"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_the_African_Union.svg/1024px-Flag_of_the_African_Union.svg.png'
        },
        {
            id: 65,
            nome: 'Bandeira - União Européia',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de Grupo/Movimento", "Grupo", "Europa"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1024px-Flag_of_Europe.svg.png'
        },
        {
            id: 66,
            nome: 'Bandeira - México',
            preço: 49.99,
            estoque: 10,
            categorias: ["Bandeira de País", "Atual", "América do Norte", "Mexicana"],
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1024px-Flag_of_Mexico.svg.png'
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
                                <p class="pPrice">R${produto.preço}</p>
                                <button onClick={() => removerPedido(produto.id)} class="bCard">Remover</button>
                            </div>
                        )
                    }
                </div>
            </>
        </div>
    );
}