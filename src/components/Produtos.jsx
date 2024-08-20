import { useState } from "react";
import '../globals.css';

export default function Produtos() {

    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            nome: 'Bandeira - RDA - Alemanha "Oriental"',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_East_Germany.svg/1280px-Flag_of_East_Germany.svg.png'
        },
        {
            id: 2,
            nome: 'Bandeira - RFA - Alemanha "Ocidental"',
            preçoFF: 49.99,
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0kplS3BTA9eTHd1kWzfOb_vuPuLYkPpjnA&s'
        },
        {
            id: 3,
            nome: 'Bandeira - Alemanha',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png?20111003033442'
        },
        {
            id: 4,
            nome: 'Bandeira - Império Alemão',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Germany_%281933–1935%29.svg/512px-Flag_of_Germany_%281933–1935%29.svg.png'
        },
        {
            id: 5,
            nome: 'Bandeira - Prússia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Prussia_%281892-1918%29.svg/800px-Flag_of_Prussia_%281892-1918%29.svg.png'
        },
        {
            id: 6,
            nome: 'Bandeira - Rússia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg'
        },
        {
            id: 7,
            nome: 'Bandeira - Império Russo',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_the_Romanov_Monarchy.svg/1024px-Flag_of_the_Romanov_Monarchy.svg.png'
        },
        {
            id: 8,
            nome: 'Bandeira - URSS - União Soviética',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/800px-Flag_of_the_Soviet_Union.svg.png'
        },
        {
            id: 9,
            nome: 'Bandeira - Brasil',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png'
        },
        {
            id: 10,
            nome: 'Bandeira - Brasil Império',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bandeira_do_Império_do_Brasil_com_nó_e_cores_corretos.svg/1024px-Bandeira_do_Império_do_Brasil_com_nó_e_cores_corretos.svg.png'
        },
        {
            id: 11,
            nome: 'Bandeira - AC - Acre',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852740bandeiraacre.png'
        },
        {
            id: 12,
            nome: 'Bandeira - AL - Alagoas',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743Bandeira_de_Alagoas.svg.png'
        },
        {
            id: 13,
            nome: 'Bandeira - AP - Amapá',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_Amap.svg.png'
        },
        {
            id: 14,
            nome: 'Bandeira - AM - Amazonas',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_Amazonas.svg.png'
        },
        {
            id: 15,
            nome: 'Bandeira - BA - Bahia',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeirabahia.png'
        },
        {
            id: 16,
            nome: 'Bandeira - CE - Ceará',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeiraceara.png'
        },
        {
            id: 17,
            nome: 'Bandeira - DF - Distrito Federal - Brasília',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeiradistritofederal.png'
        },
        {
            id: 18,
            nome: 'Bandeira - ES - Espírito Santo',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741bandeiraespiritosanto.png'
        },
        {
            id: 19,
            nome: 'Bandeira - GO - Goiás',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiragoias.png'
        },
        {
            id: 20,
            nome: 'Bandeira - MA - Maranhão',
            preçoFF: 39.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bandeira_do_Maranhão.svg/1024px-Bandeira_do_Maranhão.svg.png'
        },
        {
            id: 21,
            nome: 'Bandeira - MT - Mato Grosso',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiramatogrosso.png'
        },
        {
            id: 22,
            nome: 'Bandeira - MS - Mato Grosso do Sul',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744bandeira_Mato_Grosso_Sul.png'
        },
        {
            id: 23,
            nome: 'Bandeira - MG - Minas Gerais',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743Bandeira_de_Minas_Gerais.svg.png'
        },
        {
            id: 24,
            nome: 'Bandeira - PA - Pará',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_Par.svg.png'
        },
        {
            id: 25,
            nome: 'Bandeira - PB - Paraíba',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiraparaiba.png'
        },
        {
            id: 26,
            nome: 'Bandeira - PR - Paraná',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeiraparana.png'
        },
        {
            id: 27,
            nome: 'Bandeira - PB - Pernambuco',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852741BandeiradePernambuco.png'
        },
        {
            id: 28,
            nome: 'Bandeira - PI - Piauí',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeirapiaui.png'
        },
        {
            id: 29,
            nome: 'Bandeira - RJ - Rio de Janeiro',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeirariodejaneiro.png'
        },
        {
            id: 30,
            nome: 'Bandeira - RN - Rio Grande do Norte',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852742bandeirariograndedonorte.png'
        },
        {
            id: 31,
            nome: 'Bandeira - RS - Rio Grande do Sul',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirariograndedosul.png'
        },
        {
            id: 32,
            nome: 'Bandeira - RO - Rondônia',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirarondonia.png'
        },
        {
            id: 33,
            nome: 'Bandeira - RR - Roraima',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeiraroraima.png'
        },
        {
            id: 34,
            nome: 'Bandeira - SC - Santa Catarina',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirasantacatarina.png'
        },
        {
            id: 35,
            nome: 'Bandeira - SP - São Paulo',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852744Bandeira_do_estado_de_S_Paulo.svg.png'
        },
        {
            id: 36,
            nome: 'Bandeira - SE - Sergipe',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeirasergipe.png'
        },
        {
            id: 37,
            nome: 'Bandeira - TO - Tocantins',
            preçoFF: 39.99,
            imagem: 'http://www.educadores.diaadia.pr.gov.br/modules/galeria/uploads/11/normal_1409852743bandeiratocantins.png'
        },
        {
            id: 38,
            nome: 'Bandeira - Japão',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1024px-Flag_of_Japan.svg.png'
        },
        {
            id: 39,
            nome: 'Bandeira - Reino Unido - Grã-Bretanha',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg'
        },
        {
            id: 40,
            nome: 'Bandeira - Inglaterra',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1024px-Flag_of_England.svg.png'
        },
        {
            id: 41,
            nome: 'Bandeira - Escócia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1024px-Flag_of_Scotland.svg.png'
        },
        {
            id: 42,
            nome: 'Bandeira - Irlanda do Norte - São Patrício',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Saint_Patrick%27s_Saltire.svg'
        },
        {
            id: 43,
            nome: 'Bandeira - Irlanda do Norte',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Northern_Ireland_%281953–1972%29.svg'
        },
        {
            id: 44,
            nome: 'Bandeira - País de Gales',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/1024px-Flag_of_Wales.svg.png'
        },
        {
            id: 45,
            nome: 'Bandeira - EUA - Estados Unidos da América',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1280px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png'
        },
        {
            id: 46,
            nome: 'Bandeira - França',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png'
        },
        {
            id: 47,
            nome: 'Bandeira - Itália',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg'
        },
        {
            id: 48,
            nome: 'Bandeira - Austrália',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1280px-Flag_of_Australia_%28converted%29.svg.png'
        },
        {
            id: 49,
            nome: 'Bandeira - Nova Zelândia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1280px-Flag_of_New_Zealand.svg.png'
        },
        {
            id: 50,
            nome: 'Bandeira - Canadá',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png'
        },
        {
            id: 51,
            nome: 'Bandeira - Espanha',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1024px-Flag_of_Spain.svg.png'
        },
        {
            id: 52,
            nome: 'Bandeira -  Império Austro-Húngaro - Aústria-Hungria',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ensign_of_Austro-Hungarian_civil_fleet_%281869-1918%29.svg/1024px-Ensign_of_Austro-Hungarian_civil_fleet_%281869-1918%29.svg.png'
        },
        {
            id: 53,
            nome: 'Bandeira - Hungria',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1280px-Flag_of_Hungary.svg.png'
        },
        {
            id: 54,
            nome: 'Bandeira - Aústria',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1024px-Flag_of_Austria.svg.png'
        },
        {
            id: 55,
            nome: 'Bandeira - China',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1024px-Flag_of_the_People%27s_Republic_of_China.svg.png'
        },
        {
            id: 56,
            nome: 'Bandeira - Hong-Kong',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1024px-Flag_of_Hong_Kong.svg.png'
        },
        {
            id: 57,
            nome: 'Bandeira - Taiwan',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1024px-Flag_of_the_Republic_of_China.svg.png'
        },
        {
            id: 58,
            nome: 'Bandeira - Grécia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1024px-Flag_of_Greece.svg.png'
        },
        {
            id: 59,
            nome: 'Bandeira - Turquia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1024px-Flag_of_Turkey.svg.png'
        },
        {
            id: 60,
            nome: 'Bandeira - Irlanda',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1280px-Flag_of_Ireland.svg.png'
        },
        {
            id: 61,
            nome: 'Bandeira - Córeia do Norte',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1280px-Flag_of_North_Korea.svg.png'
        },
        {
            id: 62,
            nome: 'Bandeira - Córeia do Sul',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1024px-Flag_of_South_Korea.svg.png'
        },
        {
            id: 63,
            nome: 'Bandeira - Movimemento Córeia Unificada',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Unification_flag_of_Korea.svg/1024px-Unification_flag_of_Korea.svg.png'
        },
        {
            id: 64,
            nome: 'Bandeira - Filipinas',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1280px-Flag_of_the_Philippines.svg.png'
        },
        {
            id: 65,
            nome: 'Bandeira - Malásia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1280px-Flag_of_Malaysia.svg.png'
        },
        {
            id: 66,
            nome: 'Bandeira - Vietname',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1024px-Flag_of_Vietnam.svg.png'
        },
        {
            id: 67,
            nome: 'Bandeira - FNL - Vietname do Norte - Vietcongues',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/FNL_Flag.svg/1024px-FNL_Flag.svg.png'
        },
        {
            id: 68,
            nome: 'Bandeira - Vietname do Sul',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_South_Vietnam.svg/1024px-Flag_of_South_Vietnam.svg.png'
        },
        {
            id: 69,
            nome: 'Bandeira - Cuba',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1280px-Flag_of_Cuba.svg.png'
        },
        {
            id: 70,
            nome: 'Bandeira - Laos',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/1024px-Flag_of_Laos.svg.png'
        },
        {
            id: 71,
            nome: 'Bandeira - Angola',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1024px-Flag_of_Angola.svg.png'
        },
        {
            id: 72,
            nome: 'Bandeira - Moçambique',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/1024px-Flag_of_Mozambique.svg.png'
        },
        {
            id: 73,
            nome: 'Bandeira - Cabo Verde',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/1024px-Flag_of_Cape_Verde.svg.png'
        },
        {
            id: 74,
            nome: 'Bandeira - São Tomé e Príncipe',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_São_Tomé_and_Príncipe.svg/1280px-Flag_of_São_Tomé_and_Príncipe.svg.png'
        },
        {
            id: 75,
            nome: 'Bandeira - Timor Leste',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/1280px-Flag_of_East_Timor.svg.png'
        },
        {
            id: 76,
            nome: 'Bandeira - Guiné Bissau',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/1280px-Flag_of_Guinea-Bissau.svg.png'
        },
        {
            id: 77,
            nome: 'Bandeira - Guiné Equatorial',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/1024px-Flag_of_Equatorial_Guinea.svg.png'
        },
        {
            id: 78,
            nome: 'Bandeira - Portugal',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1024px-Flag_of_Portugal.svg.png'
        },
        {
            id: 79,
            nome: 'Bandeira - Noruega',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/800px-Flag_of_Norway.svg.png'
        },
        {
            id: 80,
            nome: 'Bandeira - Dinamarca',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/800px-Flag_of_Denmark.svg.png'
        },
        {
            id: 81,
            nome: 'Bandeira - Islândia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.svg.png'
        },
        {
            id: 82,
            nome: 'Bandeira - Finlândia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1024px-Flag_of_Finland.svg.png'
        },
        {
            id: 83,
            nome: 'Bandeira - Suécia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1024px-Flag_of_Sweden.svg.png'
        },
        {
            id: 84,
            nome: 'Bandeira - Armênia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1280px-Flag_of_Armenia.svg.png'
        },
        {
            id: 85,
            nome: 'Bandeira - Azerbaijão',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1280px-Flag_of_Azerbaijan.svg.png'
        },
        {
            id: 86,
            nome: 'Bandeira - Bielorússia - Belarus',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1280px-Flag_of_Belarus.svg.png'
        },
        {
            id: 87,
            nome: 'Bandeira - Estônia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1024px-Flag_of_Estonia.svg.png'
        },
        {
            id: 88,
            nome: 'Bandeira - Geórgia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1024px-Flag_of_Georgia.svg.png'
        },
        {
            id: 89,
            nome: 'Bandeira - Cazaquistão',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1280px-Flag_of_Kazakhstan.svg.png'
        },
        {
            id: 90,
            nome: 'Bandeira - Quirguistão',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1024px-Flag_of_Kyrgyzstan.svg.png'
        },
        {
            id: 91,
            nome: 'Bandeira - Letônia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/1280px-Flag_of_Latvia.svg.png'
        },
        {
            id: 92,
            nome: 'Bandeira - Lituânia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1024px-Flag_of_Lithuania.svg.png'
        },
        {
            id: 93,
            nome: 'Bandeira - Moldávia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1280px-Flag_of_Moldova.svg.png'
        },
        {
            id: 94,
            nome: 'Bandeira - Tajiquistão',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/1280px-Flag_of_Tajikistan.svg.png'
        },
        {
            id: 95,
            nome: 'Bandeira - Turquemenistão',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/1024px-Flag_of_Turkmenistan.svg.png'
        },
        {
            id: 96,
            nome: 'Bandeira - Ucrânia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1024px-Flag_of_Ukraine.svg.png'
        },
        {
            id: 97,
            nome: 'Bandeira - Uzbequistão',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png'
        },
        {
            id: 98,
            nome: 'Bandeira - Venezuela',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/800px-Flag_of_Venezuela.svg.png'
        },
        {
            id: 99,
            nome: 'Bandeira - México',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1024px-Flag_of_Mexico.svg.png'
        },
        {
            id: 100,
            nome: 'Bandeira - Argentina',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg'
        },
        {
            id: 101,
            nome: 'Bandeira - Bolívia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/1024px-Flag_of_Bolivia_%28state%29.svg.png'
        },
        {
            id: 102,
            nome: 'Bandeira - Chile',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1024px-Flag_of_Chile.svg.png'
        },
        {
            id: 103,
            nome: 'Bandeira - Colômbia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1024px-Flag_of_Colombia.svg.png'
        },
        {
            id: 104,
            nome: 'Bandeira - Equador',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1024px-Flag_of_Ecuador.svg.png'
        },
        {
            id: 105,
            nome: 'Bandeira - Paraguai',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1280px-Flag_of_Paraguay.svg.png'
        },
        {
            id: 106,
            nome: 'Bandeira - Peru',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1024px-Flag_of_Peru.svg.png'
        },
        {
            id: 107,
            nome: 'Bandeira - Uruguai',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1024px-Flag_of_Uruguay.svg.png'
        },
        {
            id: 108,
            nome: 'Bandeira - Polônia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg'
        },
        {
            id: 109,
            nome: 'Bandeira - Sérvia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1024px-Flag_of_Serbia.svg.png'
        },
        {
            id: 110,
            nome: 'Bandeira - Albânia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/800px-Flag_of_Albania.svg.png'
        },
        {
            id: 111,
            nome: 'Bandeira - Bélgica',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/800px-Flag_of_Belgium.svg.png'
        },
        {
            id: 112,
            nome: 'Bandeira - Países Baixos - Holanda',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1024px-Flag_of_the_Netherlands.svg.png'
        },
        {
            id: 113,
            nome: 'Bandeira - Vaticano',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_Vatican_City_%282023–present%29.svg/800px-Flag_of_Vatican_City_%282023–present%29.svg.png'
        },
        {
            id: 114,
            nome: 'Bandeira - República Tcheca - Tchéquia',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1024px-Flag_of_the_Czech_Republic.svg.png'
        },
        {
            id: 115,
            nome: 'Bandeira - Israel',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/800px-Flag_of_Israel.svg.png'
        },
        {
            id: 116,
            nome: 'Bandeira - Palestina',
            preçoFF: 49.99,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/1280px-Flag_of_Palestine.svg.png'
        },
        {
            id: 117,
            nome: 'Bandeira - Sacro Império Romano-Germânico',
            preçoFF: 49.99,
            imagem: 'https://cdn11.bigcommerce.com/s-hhbbk/images/stencil/1280x1280/products/1939/42891/HIST0363__03551.1580527270.png?c=2'
        },
        {
            id: 118,
            nome: 'Bandeira - Império Romano',
            preçoFF: 49.99,
            imagem: 'https://flagman.ie/flags/wp-content/uploads/2021/05/Roman-Empire-Flag.jpg'
        },
        {
            id: 119,
            nome: 'Bandeira - Império Romano',
            preçoFF: 49.99,
            imagem: 'https://i.pinimg.com/originals/98/b0/38/98b038f4d7421a8fe498537fe8915a38.png'
        },
        {
            id: 120,
            nome: 'Bandeira - União Africana',
            preçoFF: 49.99,
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
                                <p class="pPrice">R${produto.preçoFF}</p>
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