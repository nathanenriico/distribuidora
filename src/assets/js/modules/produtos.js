// Base de dados de produtos por categoria
const produtosPorCategoria = {
    "* CERVEJAS 1 *": {
        "SKOL": [
            { nome: "Skol 269 ml caixa com 15 unidades", preco: "29,40", precoAntigo: "33,00", desconto: "-11%", img: "SKOL", volume: "269" },
            { nome: "Skol 350 ml caixa com 12 unidades", preco: "34,80", img: "SKOL", volume: "350" },
            { nome: "Skol 550 ml caixa com 12 unidades", preco: "48,00", img: "SKOL", volume: "550" },
            { nome: "Skol 600 ml caixa com 24 unidades", preco: "132,00", img: "SKOL", volume: "600" },
            { nome: "Skol 1 litro 12 unidades", preco: "98,40", nota: "Garrafa retornável", img: "SKOL", volume: "1000" },
            { nome: "Skol 300 ml caixa com 24 unidades", preco: "51,60", img: "SKOL", volume: "300" }
        ],
        "ITAIPAVA": [
            { nome: "Itaipava 269 ml 12 unidades", preco: "23,40", precoAntigo: "24,00", desconto: "-3%", img: "ITAIPAVA", volume: "269" },
            { nome: "Itaipava 350 ml 12 unidades", preco: "28,80", img: "ITAIPAVA", volume: "350" },
            { nome: "Itaipava 300 ml 24 unidades", preco: "48,00", nota: "Garrafa descartável", img: "ITAIPAVA", volume: "300" },
            { nome: "Itaipava 473 ml 12 unidades", preco: "36,00", img: "ITAIPAVA", volume: "473" },
            { nome: "Itaipava 600 ml 24 unidades", preco: "120,00", nota: "Garrafa retornável", img: "ITAIPAVA", volume: "600" },
            { nome: "Itaipava 1 litro 12 unidades", preco: "72,00", img: "ITAIPAVA", volume: "1000" }
        ],
        "BRAHMA": [
            { nome: "Brahma duplo malte 269 ml 15 unidade", preco: "34,50", img: "BRAHMA", volume: "269" },
            { nome: "Brahma duplo malte 350 ml 12 unidade", preco: "37,80", img: "BRAHMA", volume: "350" },
            { nome: "Brahma duplo malte 600 ml 24 unidade", preco: "144,00", nota: "Garrafa retornável", img: "BRAHMA", volume: "600" },
            { nome: "Brahma duplo malte 1 litro 12 unidad", preco: "87,60", nota: "Garrafa retornável", img: "BRAHMA", volume: "1000" },
            { nome: "Brahma chopp 269 ml 15 unidades", preco: "32,25", img: "BRAHMA", volume: "269" },
            { nome: "Brahma chopp 350 ml 12 unidades", preco: "33,00", img: "BRAHMA", volume: "350" },
            { nome: "Brahma chopp 300 ml 24 unidades", preco: "48,00", nota: "Garrafa retornável", img: "BRAHMA", volume: "300" },
            { nome: "Brahma chopp 550 ml 12 unidades", preco: "48,00", img: "BRAHMA", volume: "550" },
            { nome: "Brahma chopp 600 ml 24 unidades", preco: "144,00", nota: "Garrafa retornável", img: "BRAHMA", volume: "600" },
            { nome: "Brahma chopp 1 litro 12 unidades", preco: "81,60", nota: "Garrafa retornável", img: "BRAHMA", volume: "1000" }
        ],
        "BUDWEISER": [
            { nome: "Budweiser 269 ml 8 unidades", preco: "20,40", img: "BUD", volume: "269" },
            { nome: "Budweiser 350 ml 12 unidades", preco: "36,00", img: "BUD", volume: "350" },
            { nome: "Budweiser long neck 330 ml 24 unidades", preco: "108,00", img: "BUD", volume: "330" }
        ],
        "AMSTEL": [
            { nome: "Amstel 269 ml 12 unidades", preco: "30,00", nota: "Mega promoção", img: "AMSTEL", volume: "269" },
            { nome: "Amstel 350ml 12 unidades", preco: "33,60", img: "AMSTEL", volume: "350" },
            { nome: "Amstel 473ml 12 unidades", preco: "43,99", img: "AMSTEL", volume: "473" }
        ],
        "IMPÉRIO": [
            { nome: "Império 269 ml 15 unidades", preco: "29,85", img: "IMPERIO", volume: "269" },
            { nome: "Império 350 ml 12 unidades", preco: "28,80", img: "IMPERIO", volume: "350" }
        ]
    },
    
    "* CERVEJAS 2 *": {
        "HEINEKEN": [
            { nome: "Heineken 330ml 12 unidades", preco: "45,90", img: "HEINEKEN", volume: "330" },
            { nome: "Heineken 600ml 12 unidades", preco: "89,90", img: "HEINEKEN", volume: "600" },
            { nome: "Heineken 269ml 15 unidades", preco: "42,90", img: "HEINEKEN", volume: "269" },
            { nome: "Heineken 1 litro 12 unidades", preco: "125,90", nota: "Garrafa retornável", img: "HEINEKEN", volume: "1000" }
        ],
        "STELLA ARTOIS": [
            { nome: "Stella Artois 330ml 12 unidades", preco: "52,80", img: "STELLA", volume: "330" },
            { nome: "Stella Artois 550ml 12 unidades", preco: "78,90", img: "STELLA", volume: "550" },
            { nome: "Stella Artois 269ml 15 unidades", preco: "48,90", img: "STELLA", volume: "269" },
            { nome: "Stella Artois 600ml 24 unidades", preco: "156,00", nota: "Garrafa retornável", img: "STELLA", volume: "600" }
        ],
        "CORONA": [
            { nome: "Corona 330ml 12 unidades", preco: "48,90", img: "CORONA", volume: "330" },
            { nome: "Corona 355ml 24 unidades", preco: "95,80", img: "CORONA", volume: "355" },
            { nome: "Corona 473ml 12 unidades", preco: "58,90", img: "CORONA", volume: "473" },
            { nome: "Corona long neck 330ml 24 unidades", preco: "118,90", img: "CORONA", volume: "330" }
        ],
        "SPATEN": [
            { nome: "Spaten 350 ml 12 unidades", preco: "42,00", img: "SPATEN", volume: "350" },
            { nome: "Spaten long neck 355 ml 24 unidades", preco: "108,00", img: "SPATEN", volume: "355" },
            { nome: "Spaten 600 ml 24 unidades", preco: "165,60", img: "SPATEN", volume: "600" }
        ],
        "EISENBAHN": [
            { nome: "Eisenbahn Pilsen 355ml 12 unidades", preco: "44,90", img: "EISENBAHN", volume: "355" },
            { nome: "Eisenbahn Weiss 355ml 12 unidades", preco: "46,90", img: "EISENBAHN", volume: "355" },
            { nome: "Eisenbahn Strong Golden 355ml 12 unidades", preco: "48,90", img: "EISENBAHN", volume: "355" }
        ]
    },
    
    "* CERVEJAS 3 *": {
        "ORIGINAL": [
            { nome: "Original 600ml 12 unidades", preco: "42,90", img: "ORIGINAL", volume: "600" },
            { nome: "Original 1 litro 12 unidades", preco: "68,90", img: "ORIGINAL", volume: "1000" },
            { nome: "Original 350ml 12 unidades", preco: "35,90", img: "ORIGINAL", volume: "350" },
            { nome: "Original 269ml 15 unidades", preco: "32,90", img: "ORIGINAL", volume: "269" }
        ],
        "ANTARTICA": [
            { nome: "Antarctica 350ml 12 unidades", preco: "31,90", img: "ANTARTICA", volume: "350" },
            { nome: "Antarctica 600ml 12 unidades", preco: "58,90", img: "ANTARTICA", volume: "600" },
            { nome: "Antarctica 269ml 15 unidades", preco: "28,90", img: "ANTARTICA", volume: "269" },
            { nome: "Antarctica 1 litro 12 unidades", preco: "65,90", nota: "Garrafa retornável", img: "ANTARTICA", volume: "1000" }
        ],
        "CABARÉ ICE": [
            { nome: "Cabaré Ice limão long neck 275 ml 6 unidades", preco: "41,90", img: "CABARE", volume: "275" },
            { nome: "Cabaré Ice long neck 275 ml 8 unidades", preco: "41,90", img: "CABARE", volume: "275" }
        ],
        "SMIRNOFF ICE": [
            { nome: "Smirnoff Ice long neck xdk 275 ml 6 unidades", preco: "29,40", img: "SMIRNOFF_ICE", volume: "275" }
        ],
        "PETRA": [
            { nome: "Petra 350ml 12 unidades", preco: "33,90", img: "PETRA", volume: "350" },
            { nome: "Petra 600ml 12 unidades", preco: "62,90", img: "PETRA", volume: "600" },
            { nome: "Petra Puro Malte 355ml 12 unidades", preco: "38,90", img: "PETRA", volume: "355" }
        ],
        "DEVASSA": [
            { nome: "Devassa 350ml 12 unidades", preco: "29,90", img: "DEVASSA", volume: "350" },
            { nome: "Devassa 600ml 12 unidades", preco: "54,90", img: "DEVASSA", volume: "600" },
            { nome: "Devassa Bem Loura 350ml 12 unidades", preco: "31,90", img: "DEVASSA", volume: "350" },
            { nome: "Devassa Bem Escura 350ml 12 unidades", preco: "31,90", img: "DEVASSA", volume: "350" }
        ]
    },
    
    "* DESTILADOS 1 *": {
        "VODKA": [
            { nome: "Vodka Smirnoff 998 ml", preco: "33,00", img: "SMIRNOFF", volume: "998" },
            { nome: "Vodka Absolut 1 litro", preco: "57,00", img: "ABSOLUT", volume: "1000" },
            { nome: "Vodka Absolut vanilla 1 litro", preco: "64,00", img: "ABSOLUT", volume: "1000" },
            { nome: "Vodka Absolut grapefruit 1 litro", preco: "69,00", img: "ABSOLUT", volume: "1000" },
            { nome: "Vodka Absolut manga 1 litro", preco: "69,00", img: "ABSOLUT", volume: "1000" },
            { nome: "Vodka Absolut pêssego 1 litro", preco: "69,00", img: "ABSOLUT", volume: "1000" },
            { nome: "Vodka Absolut elyx 750 ml", preco: "99,00", img: "ABSOLUT", volume: "750" },
            { nome: "Greey goose citron 750 ml", preco: "105,90", img: "GREYGOOSE", volume: "750" },
            { nome: "Greey goose pera 750 ml", preco: "105,90", img: "GREYGOOSE", volume: "750" },
            { nome: "Greey goose laranja 750 ml", preco: "105,90", img: "GREYGOOSE", volume: "750" }
        ],
        "WHISKY": [
            { nome: "Bell's 700 ml", preco: "22,90", img: "BELLS", volume: "700" },
            { nome: "Grand old parr 1 litro", preco: "117,00", img: "GRANDOLDPARR", volume: "1000" },
            { nome: "Ballantine's 12 anos 1 litro", preco: "77,80", img: "BALLANTINES", volume: "1000" },
            { nome: "Ballantine's 8 anos 1 litro", preco: "51,99", img: "BALLANTINES", volume: "1000" },
            { nome: "White horse 500 ml", preco: "29,90", img: "WHITEHORSE", volume: "500" },
            { nome: "White horse 1 litro", preco: "52,99", img: "WHITEHORSE", volume: "1000" },
            { nome: "Chivas Regal 12 anos 1 litro", preco: "100,00", img: "CHIVAS", volume: "1000" },
            { nome: "Buchanans 1 litro", preco: "129,99", img: "BUCHANANS", volume: "1000" },
            { nome: "Bourbon woodford 750 ml", preco: "180,00", img: "WOODFORD", volume: "750" },
            { nome: "Jack daniel's gentleman 1 litro", preco: "139,99", precoAntigo: "150,00", desconto: "-7%", img: "JACK", volume: "1000" },
            { nome: "Jack daniel's 1 Apple 1 litro", preco: "139,99", img: "JACK", volume: "1000" },
            { nome: "Jack daniel's n7 1 litro", preco: "120,00", precoAntigo: "129,00", desconto: "-7%", img: "JACK", volume: "1000" },
            { nome: "Jack daniel's honey 1 litro", preco: "115,00", precoAntigo: "128,00", desconto: "-10%", img: "JACK", volume: "1000" },
            { nome: "Jack daniel's fire 1 litro", preco: "115,00", precoAntigo: "128,00", desconto: "-10%", img: "JACK", volume: "1000" },
            { nome: "Jack daniel's 200 ml", preco: "24,00", img: "JACK", volume: "200" },
            { nome: "Jack daniel's 375 ml", preco: "44,99", precoAntigo: "49,99", desconto: "-10%", img: "JACK", volume: "375" },
            { nome: "Black white 1 litro", preco: "58,80", img: "BLACKWHITE", volume: "1000" },
            { nome: "Whisky red label 750 ml Caixa 12 garrafas", preco: "768,00", img: "RED", volume: "750" },
            { nome: "Whisky Johnnie Walker swing 750 ml", preco: "350,00", img: "JOHNNIEWALKER", volume: "750" },
            { nome: "Whisky red label 1 litro", preco: "73,00", img: "RED", volume: "1000" },
            { nome: "Whisky Black Label 1 litro", preco: "130,00", img: "BLACKLABEL", volume: "1000" },
            { nome: "Whisky green Label 750 ml", preco: "210,00", img: "GREENLABEL", volume: "750" },
            { nome: "Whisky Blue label 750 ml", preco: "1.125,00", img: "BLUELABEL", volume: "750" }
        ],
        "SAKÊ": [
            { nome: "Sakê thikara gold 745 ml", preco: "28,90", img: "THIKARA", volume: "745" },
            { nome: "Sakê thikara silver 745 ml", preco: "28,90", img: "THIKARA", volume: "745" },
            { nome: "Sakê kampai 745 ml", preco: "24,90", img: "KAMPAI", volume: "745" }
        ],
        "LICORES": [
            { nome: "Rose piscina 750 ml", preco: "66,90", img: "ROSEPISCINA", volume: "750" },
            { nome: "Licor Jagermeister 700 ml", preco: "85,00", img: "JAGERMEISTER", volume: "700" },
            { nome: "Conhaque domecq", preco: "29,80", img: "DOMECQ", volume: "750" },
            { nome: "Campari 900 ml", preco: "39,90", precoAntigo: "42,50", desconto: "-6%", img: "CAMPARI", volume: "900" },
            { nome: "Aperol 750 ml", preco: "30,99", precoAntigo: "38,90", desconto: "-20%", img: "APEROL", volume: "750" }
        ],
        "RUM": [
            { nome: "Ypióca ouro 965 ml", preco: "18,90", img: "YPIOCA", volume: "965" },
            { nome: "Run Bacardi prata 980 ml", preco: "28,00", img: "BACARDI", volume: "980" },
            { nome: "Run branca 980 ml", preco: "28,00", img: "RUMBRANCA", volume: "980" },
            { nome: "Bacardi big Apple 980 ml", preco: "28,00", img: "BACARDI", volume: "980" }
        ],
        "TEQUILA": [
            { nome: "Tequila José Cuervo 750 ml", preco: "89,90", img: "JOSECUERVO", volume: "750" }
        ],
        "GIN": [
            { nome: "Gin seargers 980 ml", preco: "29,90", img: "SEARGERS", volume: "980" },
            { nome: "Gin bombay bramble 700 ml", preco: "98,00", img: "BOMBAY", volume: "700" },
            { nome: "Gin tanqueray N ten 750 ml", preco: "80,00", img: "TANQUERAY", volume: "750" },
            { nome: "Gin tanqueray London dry 750 ml", preco: "89,90", img: "TANQUERAY", volume: "750" }
        ]
    },
    
    "* DESTILADOS 2 *": {
        "VODKA ETERNITY": [
            { nome: "Vodka eternity açaí 950 ml Caixa com 6 garrafas", preco: "84,00", img: "ETERNITY", volume: "950" },
            { nome: "Vodka Eternity maracujá 900 ml 6 unidades", preco: "84,00", img: "ETERNITY", volume: "900" },
            { nome: "Vodka eternity blueberry 950 ml 6 unidades", preco: "84,00", img: "ETERNITY", volume: "950" },
            { nome: "Vodka Eternity maçã verde 950 ml 6 unidades", preco: "84,00", img: "ETERNITY", volume: "950" },
            { nome: "Vodka eternity red fruits 6 unidades", preco: "84,00", img: "ETERNITY", volume: "950" }
        ],
        "VODKA CIROC": [
            { nome: "Vodka ciroc red Berry 750 ml", preco: "115,00", img: "CIROC", volume: "750" },
            { nome: "Vodka ciroc peach 750 ml", preco: "115,00", img: "CIROC", volume: "750" },
            { nome: "Vodka ciroc tradicional 750 ml", preco: "115,00", img: "CIROC", volume: "750" },
            { nome: "Vodka ciroc pineapple 750 ml", preco: "115,00", img: "CIROC", volume: "750" },
            { nome: "Vodka ciroc peach pêssego 750 ml", preco: "115,00", img: "CIROC", volume: "750" },
            { nome: "Vodka ciroc melancia 750 ml", preco: "115,00", img: "CIROC", volume: "750" },
            { nome: "Vodka ciroc summer colada 750 ml", preco: "115,00", img: "CIROC", volume: "750" },
            { nome: "Vodka ciroc passion 750 ml", preco: "115,00", img: "CIROC", volume: "750" },
            { nome: "Vodka ciroc mango 750 ml", preco: "115,00", img: "CIROC", volume: "750" }
        ],
        "VODKA OUTRAS": [
            { nome: "Vodka balalaika 1 litro", preco: "14,00", img: "BALALAIKA", volume: "1000" },
            { nome: "Vodka Absolut 200 ml", preco: "39,90", img: "ABSOLUT", volume: "200" }
        ],
        "GIN ROCKS": [
            { nome: "Gin rocks doce 1 litro 6 unidades Valor para caixa fechada", preco: "114,00", nota: "Caixa fechada R$ 19,00 cada", img: "ROCKS", volume: "1000" },
            { nome: "Gin rocks doce 1 litro", preco: "20,90", img: "ROCKS", volume: "1000" },
            { nome: "Gin rocks seco 1 litro", preco: "20,90", img: "ROCKS", volume: "1000" }
        ],
        "GIN ETERNITY": [
            { nome: "Gin eternity Royale Berry 900 ml 6 unidades", preco: "88,80", img: "ETERNITY_GIN", volume: "900" },
            { nome: "Gin eternity melancia 900 ml 6 unidades", preco: "88,80", img: "ETERNITY_GIN", volume: "900" },
            { nome: "Gin eternity tropical 900 ml 6 garrafas", preco: "88,80", img: "ETERNITY_GIN", volume: "900" },
            { nome: "Gin eternity strawberry 900 ml 6 unidades", preco: "88,80", img: "ETERNITY_GIN", volume: "900" },
            { nome: "Gin eternity maçã verde 900 ml 6 unidades", preco: "88,80", img: "ETERNITY_GIN", volume: "900" },
            { nome: "Gin eternity Royale Berry 900 ml", preco: "14,80", img: "ETERNITY_GIN", volume: "900" },
            { nome: "Gin eternity melancia 900 ml", preco: "14,80", img: "ETERNITY_GIN", volume: "900" },
            { nome: "Gin eternity tropical 900 ml", preco: "14,80", img: "ETERNITY_GIN", volume: "900" },
            { nome: "Gin eternity strawberry 900 ml", preco: "14,80", img: "ETERNITY_GIN", volume: "900" },
            { nome: "Gin eternity maçã verde 900 ml", preco: "14,80", img: "ETERNITY_GIN", volume: "900" }
        ],
        "GIN OUTROS": [
            { nome: "Gin beefeater pink 700 ml", preco: "73,50", precoAntigo: "78,00", desconto: "-6%", img: "BEEFEATER", volume: "700" }
        ],
        "WHISKY": [
            { nome: "Whisky cockland 1 litro", preco: "28,50", precoAntigo: "30,00", desconto: "-5%", img: "COCKLAND", volume: "1000" },
            { nome: "Whisky passaport scotch 1 litro", preco: "31,50", precoAntigo: "34,00", desconto: "-7%", img: "PASSAPORT", volume: "1000" },
            { nome: "Passaport honey 670 ml", preco: "34,99", precoAntigo: "43,50", desconto: "-20%", img: "PASSAPORT", volume: "670" },
            { nome: "Black Label 750 ml", preco: "115,00", img: "BLACKLABEL", volume: "750" }
        ],
        "CACHAÇA": [
            { nome: "Velho barreiro 910ml 12 unidades", preco: "107,99", img: "BARREIRO", volume: "910" },
            { nome: "Cachaça 51 965 ml 12 unidades", preco: "96,00", img: "51", volume: "965" },
            { nome: "Pitu lata 350 ml 12 unidades", preco: "33,60", img: "PITU", volume: "350" },
            { nome: "Pitu garrafa 965 ml", preco: "9,00", img: "PITU", volume: "965" },
            { nome: "Cantinho do vale 880ml 12 unidades", preco: "33,60", img: "CANTINHODOVALE", volume: "880" },
            { nome: "Catuaba selvagem 1 litro", preco: "10,99", img: "CATUABA", volume: "1000" },
            { nome: "Catuaba de açaí 1 litro", preco: "10,99", img: "CATUABA", volume: "1000" }
        ],
        "LICORES E APERITIVOS": [
            { nome: "Conhaque Dreher 900ml", preco: "14,00", img: "DREHER", volume: "900" },
            { nome: "Licor 43 700 ml", preco: "104,90", precoAntigo: "117,00", desconto: "-10%", img: "LICOR43", volume: "700" },
            { nome: "Contini Branco 900 ml 6 unidades", preco: "78,00", img: "CONTINI", volume: "900" },
            { nome: "Stroke menta 950 ml 6 unidades", preco: "78,00", img: "STROKE", volume: "950" },
            { nome: "Xarope groselha g nutre 900 ml 12 unidades", preco: "60,00", img: "XAROPE", volume: "900" },
            { nome: "Paratudo raízes amarga 900 ml", preco: "15,00", img: "PARATUDO", volume: "900" },
            { nome: "São João da barra conhaque 900 ml", preco: "17,50", precoAntigo: "24,90", desconto: "-30%", img: "SAOJOAO", volume: "900" },
            { nome: "Cynar aperitivo 900 ml", preco: "22,00", img: "CYNAR", volume: "900" }
        ]
    },
    
    "* REFRIGERANTES 1 *": {
        "COCA-COLA": [
            { nome: "Coca-cola 2 litros 6 unidades", preco: "42,60", precoAntigo: "49,80", desconto: "-14%", img: "COCA", volume: "2000" },
            { nome: "Coca-cola 350 ml 24 unidades", preco: "72,00", img: "COCA", volume: "350" },
            { nome: "Coca-cola 200 ml 12 unidades", preco: "16,80", img: "COCA", volume: "200" },
            { nome: "Coca-cola zero 2 litros", preco: "48,00", img: "COCA", volume: "2000" },
            { nome: "Coca 350 ml 12 unidades", preco: "36,00", img: "COCA", volume: "350" }
        ],
        "FANTA": [
            { nome: "Fanta uva 2 litros 6 unidades", preco: "37,50", img: "FANTA", volume: "2000" },
            { nome: "Fanta guaraná 2 litros 6 unidades", preco: "37,50", img: "FANTA", volume: "2000" },
            { nome: "Fanta laranja 2 litros 6 unidades", preco: "37,50", img: "FANTA", volume: "2000" },
            { nome: "Fanta uva 350 ml 12 unidades", preco: "28,80", img: "FANTA", volume: "350" },
            { nome: "Fanta guaraná 350 ml 12 unidades", preco: "33,60", img: "FANTA", volume: "350" },
            { nome: "Fanta guaraná 200 ml 12 unidades", preco: "16,90", img: "FANTA", volume: "200" },
            { nome: "Fanta laranja 350 ml 12 unidades", preco: "30,60", img: "FANTA", volume: "350" },
            { nome: "Fanta laranja 200 ml 12 unidades", preco: "17,00", img: "FANTA", volume: "200" }
        ],
        "SPRITE": [
            { nome: "Sprite limão 2 litros 6 unidades", preco: "32,00", img: "SPRITE", volume: "2000" },
            { nome: "Sprite limão 350 ml 12 unidades", preco: "29,40", img: "SPRITE", volume: "350" }
        ],
        "GUARANÁ ANTARCTICA": [
            { nome: "Guaraná Antarctica 2 litros 6 unidades", preco: "35,40", img: "GUARANA", volume: "2000" },
            { nome: "Guaraná Antarctica 200 ml 12 unidades", preco: "16,80", img: "GUARANA", volume: "200" },
            { nome: "Guaraná Antarctica 350 ml 12 unidades", preco: "30,00", img: "GUARANA", volume: "350" },
            { nome: "Guaraná Antarctica 1 litro 12 unidades", preco: "36,00", img: "GUARANA", volume: "1000" }
        ],
        "PEPSI": [
            { nome: "Pepsi cola 2 litros 6 unidades", preco: "36,60", img: "PEPSI", volume: "2000" },
            { nome: "Pepsi cola 200 ml 12 unidades", preco: "16,69", img: "PEPSI", volume: "200" },
            { nome: "Pepsi cola 350 ml 12 unidades", preco: "33,60", img: "PEPSI", volume: "350" },
            { nome: "Pepsi cola 1 litro 12 unidades", preco: "39,60", img: "PEPSI", volume: "1000" },
            { nome: "Pepsi Twist 350 ml 12 unidades", preco: "31,00", img: "PEPSI", volume: "350" }
        ],
        "SUKITA": [
            { nome: "Sukita laranja 350 ml 12 unidades", preco: "29,40", img: "SUKITA", volume: "350" }
        ],
        "TUBAÍNA": [
            { nome: "Tubaína 2 litros 6 unidades", preco: "30,00", img: "TUBAINA", volume: "2000" }
        ],
        "SODA": [
            { nome: "Soda 2 litros 6 unidades", preco: "25,20", img: "SODA", volume: "2000" },
            { nome: "Soda 350 ml 12 unidades", preco: "26,40", img: "SODA", volume: "350" }
        ],
        "CONVENÇÃO": [
            { nome: "Convenção guaraná 2 litros 6 unidades", preco: "23,40", img: "CONVENCAO", volume: "2000" },
            { nome: "Convenção frutaína 2 litros 6 unidades", preco: "23,40", img: "CONVENCAO", volume: "2000" },
            { nome: "Convenção laranja 2 litro 6 unidades", preco: "23,40", img: "CONVENCAO", volume: "2000" },
            { nome: "Convenção uva 2 litros 6 unidades", preco: "23,40", img: "CONVENCAO", volume: "2000" },
            { nome: "Convenção abacaxi 2 litros 6 unidades", preco: "23,40", img: "CONVENCAO", volume: "2000" },
            { nome: "Convenção limão 350 ml 12 unidades", preco: "15,60", img: "CONVENCAO", volume: "350" },
            { nome: "Convenção guaraná 350 ml 12 unidades", preco: "15,60", img: "CONVENCAO", volume: "350" },
            { nome: "Convenção uva 350 ml 12 unidades", preco: "15,60", img: "CONVENCAO", volume: "350" },
            { nome: "Convenção frutaína 350 ml 12 unidades", preco: "15,60", img: "CONVENCAO", volume: "350" }
        ],
        "DOLLY": [
            { nome: "Dolly guaraná 2 litros 6 unidades", preco: "24,00", img: "DOLLY", volume: "2000" },
            { nome: "Dolly limão 2 litros 6 unidades", preco: "24,00", img: "DOLLY", volume: "2000" }
        ],
        "GATORADE": [
            { nome: "Gatorade morango 500 ml 6 unidades", preco: "29,40", img: "GATORADE", volume: "500" },
            { nome: "Gatorade laranja 500 ml 6 unidades", preco: "29,40", img: "GATORADE", volume: "500" },
            { nome: "Gatorade frutas cítricas 500 ml 6 unidades", preco: "29,40", img: "GATORADE", volume: "500" },
            { nome: "Gatorade maracujá 500 ml 6 unidades", preco: "29,40", img: "GATORADE", volume: "500" },
            { nome: "Gatorade limão 500 ml 6 unidades", preco: "29,40", img: "GATORADE", volume: "500" },
            { nome: "Gatorade Berry blue 500 ml 6 unidades", preco: "29,40", img: "GATORADE", volume: "500" },
            { nome: "Gatorade uva 500 ml 6 unidades", preco: "29,40", img: "GATORADE", volume: "500" }
        ],
        "ITI": [
            { nome: "Iti cola 2 litros 6 unidades", preco: "25,00", img: "ITI", volume: "2000" }
        ]
    },
    
    "* REFRIGERANTES 2 *": {
        "FANTA": [
            { nome: "Fanta Laranja 350ml 12 unidades", preco: "17,90", img: "FANTA", volume: "350" },
            { nome: "Fanta Uva 350ml 12 unidades", preco: "17,90", img: "FANTA", volume: "350" }
        ],
        "SPRITE": [
            { nome: "Sprite 350ml 12 unidades", preco: "17,90", img: "SPRITE", volume: "350" },
            { nome: "Sprite 2L 6 unidades", preco: "42,90", img: "SPRITE", volume: "2000" }
        ],
        "ITI": [
            { nome: "Iti limão 2 litros 6 unidades", preco: "22,80", img: "ITI", volume: "2000" },
            { nome: "Iti laranja 2 litros 6 unidades", preco: "22,80", img: "ITI", volume: "2000" },
            { nome: "Iti guaraná 2 litros 6 unidades", preco: "22,80", img: "ITI", volume: "2000" }
        ],
        "DOLLY": [
            { nome: "Dolly laranja 2 litros 6 unidades", preco: "24,00", img: "DOLLY", volume: "2000" },
            { nome: "Dolly uva 2 litros 6 unidades", preco: "24,00", img: "DOLLY", volume: "2000" },
            { nome: "Dolly cola 2 litros 6 unidades", preco: "24,00", img: "DOLLY", volume: "2000" }
        ],
        "GUARAVITON": [
            { nome: "Guaraviton açaí 500 ml 12 unidades", preco: "34,80", img: "GUARAVITON", volume: "500" }
        ],
        "H20H!": [
            { nome: "H20h! Limão 500 ml 6 unidades", preco: "21,00", img: "H20H", volume: "500" },
            { nome: "H20H! Limoneto 500 ml 6 unidades", preco: "21,00", img: "H20H", volume: "500" }
        ]
    },
    
    "* ENERGÉTICO *": {
        "RED BULL": [
            { nome: "Red Bull tradicional 250 ml 24 unidades", preco: "158,40", precoAntigo: "168,00", desconto: "-6%", img: "REDBULL", volume: "250" },
            { nome: "Red Bull coco com açaí 250 ml 24 unidades", preco: "158,40", precoAntigo: "168,00", desconto: "-6%", img: "REDBULL", volume: "250" },
            { nome: "Red Bull melancia 250 ml 24 unidades", preco: "158,40", precoAntigo: "168,00", desconto: "-6%", img: "REDBULL", volume: "250" },
            { nome: "Red Bull sugar free 250 ml 24 unidades", preco: "158,40", precoAntigo: "168,00", desconto: "-6%", img: "REDBULL", volume: "250" },
            { nome: "Red Bull tropical 250 ml 24 unidades", preco: "158,40", precoAntigo: "168,00", desconto: "-6%", img: "REDBULL", volume: "250" },
            { nome: "Red Bull tradicional 473 ml 24 unidades", preco: "174,00", precoAntigo: "180,00", desconto: "-3%", img: "REDBULL", volume: "473" }
        ],
        "MONSTER": [
            { nome: "Monster energy tradicional 473 ml 6 unidades", preco: "29,95", img: "MONSTER", volume: "473" },
            { nome: "Monster khaotic tropical 473 ml 6 unidades", preco: "29,95", img: "MONSTER", volume: "473" },
            { nome: "Monster mango loco 473 ml 6 unidades", preco: "29,95", img: "MONSTER", volume: "473" },
            { nome: "Monster pipeline punch 473 ml 6 unidades", preco: "29,95", img: "MONSTER", volume: "473" },
            { nome: "Monster energy ultra 473 ml 6 unidades", preco: "29,95", img: "MONSTER", volume: "473" },
            { nome: "Monster khaos 473 ml 6 unidades", preco: "29,95", img: "MONSTER", volume: "473" }
        ],
        "BALY": [
            { nome: "Baly melancia 2 litros 6 unidades", preco: "37,50", precoAntigo: "42,00", desconto: "-11%", img: "BALY", volume: "2000" },
            { nome: "Baly tangerina 2 litros 6 unidades", preco: "37,50", precoAntigo: "42,00", desconto: "-11%", img: "BALY", volume: "2000" },
            { nome: "Baly maçã verde 2 litros 6 unidades", preco: "37,50", precoAntigo: "42,00", desconto: "-11%", img: "BALY", volume: "2000" },
            { nome: "Baly coco com açaí 2 litros 6 unidades", preco: "37,50", precoAntigo: "42,00", desconto: "-11%", img: "BALY", volume: "2000" },
            { nome: "Baly maracujá 2 litros 6 unidades", preco: "37,50", precoAntigo: "42,00", desconto: "-11%", img: "BALY", volume: "2000" },
            { nome: "Bally cranberry 2 litros 6 unidades", preco: "37,50", precoAntigo: "42,00", desconto: "-11%", img: "BALY", volume: "2000" },
            { nome: "Bally tradicional 2 litros 6 unidades", preco: "37,50", precoAntigo: "42,00", desconto: "-11%", img: "BALY", volume: "2000" },
            { nome: "Baly morango e pêssego 2 litros Fardo com 6 unidades", preco: "37,50", precoAntigo: "42,00", desconto: "-11%", img: "BALY", volume: "2000" }
        ],
        "FURIOSO": [
            { nome: "Energético furioso tropical 2 litros 6 unidades", preco: "29,40", img: "FURIOSO", volume: "2000" },
            { nome: "Furioso melancia e morango 2 litros 6 unidades", preco: "29,40", img: "FURIOSO", volume: "2000" },
            { nome: "Furioso tradicional 2 litros 6 unidades", preco: "29,40", img: "FURIOSO", volume: "2000" },
            { nome: "Furioso melão e maçã verde 2 litros 6 unidades", preco: "29,40", img: "FURIOSO", volume: "2000" }
        ],
        "VIBE": [
            { nome: "Vibe 2 litros fardo com 6 unidades", preco: "37,80", img: "VIBE", volume: "2000" },
            { nome: "Energético vibe melancia 2 litros", preco: "37,80", img: "VIBE", volume: "2000" }
        ],
        "OUTROS": [
            { nome: "Energético fluxo 2 litros 6 unidades", preco: "30,00", img: "FLUXO", volume: "2000" },
            { nome: "Energético tsunami 2 litros 6 unidades", preco: "27,60", img: "TSUNAMI", volume: "2000" },
            { nome: "Energético red horse 2 litros", preco: "31,80", img: "REDHORSE", volume: "2000" },
            { nome: "Energético master Black 2 litros", preco: "25,80", img: "MASTERBLACK", volume: "2000" }
        ]
    },
    
    "* ÁGUA DE CÔCO/ ÁGUA *": {
        "ÁGUA CRYSTAL": [
            { nome: "Água cristal 500 ml 12 unidades", preco: "14,99", img: "CRYSTAL", volume: "500" },
            { nome: "Água cristal 1,5 L 6 unidades", preco: "13,80", img: "CRYSTAL", volume: "1500" },
            { nome: "Água cristal 300 ml 6 unidades", preco: "11,88", img: "CRYSTAL", volume: "300" }
        ],
        "BONAFONT": [
            { nome: "Bonafont 1,5 L 6 unidades", preco: "16,00", img: "BONAFONT", volume: "1500" },
            { nome: "Bonafont 500 ml 12 unidades", preco: "22,60", img: "BONAFONT", volume: "500" }
        ],
        "COCO QUADRADO": [
            { nome: "Coco quadrado/morango 200 ml 27 unidades", preco: "37,80", img: "COCOQUADRADO", volume: "200" },
            { nome: "Água de coco quadrado 200 ml 27 unidades", preco: "37,80", img: "COCOQUADRADO", volume: "200" },
            { nome: "Coco quadrado melancia 200 ml 27 unidades", preco: "37,80", img: "COCOQUADRADO", volume: "200" },
            { nome: "Coco quadrado maçã verde 200 ml 27 unidades", preco: "37,80", img: "COCOQUADRADO", volume: "200" },
            { nome: "Coco quadrado maracujá 200 ml 27 unidades", preco: "37,80", img: "COCOQUADRADO", volume: "200" }
        ],
        "COCO LEVE": [
            { nome: "Coco leve melancia 200 ml 27 unidades", preco: "26,73", img: "COCOLEVE", volume: "200" },
            { nome: "Coco leve morango 200 ml 27 unidades", preco: "26,73", img: "COCOLEVE", volume: "200" },
            { nome: "Coco leve maracujá 200 ml 27 unidades", preco: "26,73", img: "COCOLEVE", volume: "200" },
            { nome: "Água de coco 200 ml 27 unidades", preco: "26,73", img: "COCOLEVE", volume: "200" },
            { nome: "Coco leve limão 200 ml 27 unidades", preco: "26,73", img: "COCOLEVE", volume: "200" }
        ],
        "COKO": [
            { nome: "Água d coco coko maracujá 27 unidades", preco: "29,70", img: "COKO", volume: "200" },
            { nome: "Água de coco coko morango 27 unidades", preco: "29,70", img: "COKO", volume: "200" },
            { nome: "Água de coco coko melancia 27 unidades", preco: "29,70", img: "COKO", volume: "200" },
            { nome: "Água d coco coko 200 ml 27 unidades", preco: "29,70", img: "COKO", volume: "200" }
        ],
        "DUCOCO": [
            { nome: "Água de coco ducoco 200 ml 27 unidades", preco: "40,50", img: "DUCOCO", volume: "200" }
        ]
    },
    
    "* CIGARRO *": {
        "ROTHMANS": [
            { nome: "Rothmans global cartela 10 unidades", preco: "72,00", img: "ROTHMANS", volume: "10" },
            { nome: "Rothmans blue cartela 10 unidades", preco: "80,00", img: "ROTHMANS", volume: "10" },
            { nome: "Rothmans red cartela 10 unidades", preco: "80,00", img: "ROTHMANS", volume: "10" },
            { nome: "Rothmans global BLUE pack 10 unidades", preco: "72,99", img: "ROTHMANS", volume: "10" },
            { nome: "Rothmans global red pack 10 unidades", preco: "72,00", img: "ROTHMANS", volume: "10" },
            { nome: "Rothmans click purple 10 unidades", preco: "89,00", img: "ROTHMANS", volume: "10" },
            { nome: "Rothmans click citrus 10 maços", preco: "89,00", img: "ROTHMANS", volume: "10" }
        ],
        "MARLBORO": [
            { nome: "Marlboro red box 10 unidades", preco: "135,00", img: "MARLBORO", volume: "10" },
            { nome: "Marlboro Gold selection pack 10 maços", preco: "135,00", img: "MARLBORO", volume: "10" },
            { nome: "Marlboro doble mix purple 10 maços", preco: "135,00", img: "MARLBORO", volume: "10" },
            { nome: "Marlboro Ice BLUE pack 10 unidades", preco: "135,00", img: "MARLBORO", volume: "10" }
        ],
        "CHESTERFIELD": [
            { nome: "Chesterfield red cartela 10 unidades", preco: "92,99", img: "CHESTERFIELD", volume: "10" },
            { nome: "Chesterfield blue cartela 10 unidades", preco: "92,99", img: "CHESTERFIELD", volume: "10" }
        ],
        "GUDANG GARAM": [
            { nome: "Gudang garam original pack 10 unidades", preco: "150,00", img: "GUDANGGARAM", volume: "10" },
            { nome: "Gudang garam menta pack 10 unidades", preco: "150,00", img: "GUDANGGARAM", volume: "10" },
            { nome: "Gudang garam chocolate 10 maços", preco: "150,00", img: "GUDANGGARAM", volume: "10" }
        ],
        "L&M": [
            { nome: "L&m azul pacote 10 maços", preco: "64,00", img: "LM", volume: "10" },
            { nome: "L&m vermelho pacote 10 maços", preco: "64,00", img: "LM", volume: "10" }
        ],
        "OUTROS": [
            { nome: "Dunhill cartela 10 unidades", preco: "140,00", img: "DUNHILL", volume: "10" },
            { nome: "Eight King size cartela 10 unidades", preco: "48,00", img: "EIGHT", volume: "10" }
        ]
    },
    
    "* ESSÊNCIAS/ CARVÃO *": {
        "ZIGGY": [
            { nome: "Ziggy coco tropical pack 10 unidades", preco: "95,00", img: "ZIGGY", volume: "10" },
            { nome: "Ziggy manga tropical pack 10 unidades", preco: "95,00", img: "ZIGGY", volume: "10" },
            { nome: "Ziggy banana tropical Pack 10 unidades", preco: "95,00", img: "ZIGGY", volume: "10" },
            { nome: "ziggy watermelon bomb Pack 10 unidades", preco: "95,00", img: "ZIGGY", volume: "10" },
            { nome: "Ziggy flesh lemon pack 10 unidades", preco: "95,00", img: "ZIGGY", volume: "10" },
            { nome: "Ziggy Cherry starburst Pack 10 unidades", preco: "95,00", img: "ZIGGY", volume: "10" },
            { nome: "Ziggy happy Berry pack 10 unidades", preco: "95,00", img: "ZIGGY", volume: "10" },
            { nome: "Ziggy hapocalyx mint Pack 10 unidades", preco: "95,00", img: "ZIGGY", volume: "10" },
            { nome: "Ziggy happy fruts pack 10 unidades", preco: "95,00", img: "ZIGGY", volume: "10" },
            { nome: "Ziggy flesh açaí pack10 unidades", preco: "95,00", img: "ZIGGY", volume: "10" },
            { nome: "Ziggy tropical pack 10 unidades", preco: "95,00", img: "ZIGGY", volume: "10" },
            { nome: "Ziggy laranjona pack 10 unidades", preco: "95,00", img: "ZIGGY", volume: "10" },
            { nome: "Ziggy tanger bomb pack 10 unidades", preco: "95,00", img: "ZIGGY", volume: "10" },
            { nome: "Ziggy flesh melon pack 10 unidades", preco: "95,00", img: "ZIGGY", volume: "10" },
            { nome: "Ziggy yellow starburst pack 10 unidades", preco: "95,00", img: "ZIGGY", volume: "10" }
        ],
        "CARVÃO": [
            { nome: "Fumax carvão de côco 1kg", preco: "44,90", img: "FUMAX", volume: "1000" },
            { nome: "Carvão de côco bass 100g", preco: "34,00", img: "BASS", volume: "100" },
            { nome: "Carvão zomo côco 250g", preco: "11,35", img: "ZOMO", volume: "250" },
            { nome: "Carvão de côco fumax 500g", preco: "29,90", img: "FUMAX", volume: "500" },
            { nome: "Carvão de côco fumax 2kg", preco: "78,99", img: "FUMAX", volume: "2000" }
        ],
        "ACESSÓRIOS": [
            { nome: "Brazilian hookah 50 folhas de papel alumínio para narguié", preco: "14,90", img: "BRAZILIAN", volume: "50" }
        ]
    },
    
    "* SALGADINHOS *": {
        "FOFURA": [
            { nome: "Fofura presunto 40 g 10 unidades", preco: "18,50", img: "FOFURA", volume: "40" },
            { nome: "Fofura requeijão 40 g 10 unidades", preco: "18,50", img: "FOFURA", volume: "40" },
            { nome: "Fofura cebola 40 g 10 unidades", preco: "18,50", img: "FOFURA", volume: "40" },
            { nome: "Fofura churrasco 40 g 10 unidades", preco: "18,50", img: "FOFURA", volume: "40" },
            { nome: "Fofura palito queijo 40 g 10 unidades", preco: "18,50", img: "FOFURA", volume: "40" },
            { nome: "Fofura Mix 40 g 10 unidades", preco: "18,50", img: "FOFURA", volume: "40" }
        ],
        "TORCIDA": [
            { nome: "Torcida churrasco 70 g 20 unidades", preco: "27,60", img: "TORCIDA", volume: "70" },
            { nome: "Torcida cebola 70 g 20 unidades", preco: "27,60", img: "TORCIDA", volume: "70" },
            { nome: "Torcida Pimenta mexicana 70 g 20 unidades", preco: "27,60", img: "TORCIDA", volume: "70" },
            { nome: "Torcida calabresa 70 g 20 unidades", preco: "27,60", img: "TORCIDA", volume: "70" },
            { nome: "Torcida queijo 70 g 20 unidades", preco: "27,60", img: "TORCIDA", volume: "70" },
            { nome: "Torcida costelinha com limão 70 g 20 unidades", preco: "27,60", img: "TORCIDA", volume: "70" },
            { nome: "Torcida bacon 70 g 20 unidades", preco: "27,60", img: "TORCIDA", volume: "70" },
            { nome: "Torcida camarão e Pimenta 70 g 20 unidades", preco: "27,60", img: "TORCIDA", volume: "70" },
            { nome: "Torcida pão de alho 70 g 20 unidades", preco: "27,60", img: "TORCIDA", volume: "70" }
        ],
        "DORITOS": [
            { nome: "Doritos queijo nacho 84 g 10 unidades", preco: "28,00", img: "DORITOS", volume: "84" },
            { nome: "Doritos nacho cheddar 80 g 10 unidades", preco: "28,00", img: "DORITOS", volume: "80" },
            { nome: "Doritos sabor pizza 84 g 10 unidades", preco: "28,00", img: "DORITOS", volume: "84" },
            { nome: "Doritos Sweet chili 84 g 10 unidades", preco: "28,00", img: "DORITOS", volume: "84" },
            { nome: "Doritos mexicana 84 g 10 unidades", preco: "28,00", img: "DORITOS", volume: "84" }
        ]
    },
    
    "* MERCEARIA/ BALAS *": {
        "BALAS": [
            { nome: "Bala de banana 500 g joice", preco: "8,00", img: "BALA", volume: "500" },
            { nome: "Tri bala cereja 500 g peccin", preco: "11,00", img: "BALA", volume: "500" },
            { nome: "Tri bala uva 500 g piccin", preco: "11,00", img: "BALA", volume: "500" },
            { nome: "Bala Zazá sortida 600 g paccin", preco: "7,00", img: "BALA", volume: "600" },
            { nome: "Bala Zazá sortidas 400 g paccin", preco: "4,00", img: "BALA", volume: "400" },
            { nome: "Bala paçoquinha 600 g Santa Helena", preco: "12,00", img: "BALA", volume: "600" },
            { nome: "Bala lua cheia frutas 600 g", preco: "10,00", img: "BALA", volume: "600" },
            { nome: "Bala hortelã recheada 600 g Dori", preco: "9,90", img: "BALA", volume: "600" },
            { nome: "Bala fruits sortidas 600 g Dori", preco: "6,90", img: "BALA", volume: "600" },
            { nome: "Bala fruitguti sortida 400 g peccin", preco: "4,00", img: "BALA", volume: "400" },
            { nome: "Bala butter toffees chocolate 500 g", preco: "14,90", img: "BALA", volume: "500" },
            { nome: "Bala azedinha morango 600g", preco: "8,50", img: "BALA", volume: "600" },
            { nome: "Bala lilith maçã verde 500 g", preco: "8,00", img: "BALA", volume: "500" },
            { nome: "Bala e yogurte frutas vermelhas 600g", preco: "9,00", img: "BALA", volume: "600" },
            { nome: "Bala de café coffee 500 g", preco: "13,00", img: "BALA", volume: "500" },
            { nome: "Bala azedinha uva 500 g", preco: "9,00", img: "BALA", volume: "500" },
            { nome: "Bala azedinha yogurte 600g", preco: "9,00", img: "BALA", volume: "600" },
            { nome: "Bala bolete Tutti Frutti 100g", preco: "9,00", img: "BALA", volume: "100" },
            { nome: "Bala yorgute 600g", preco: "9,00", img: "BALA", volume: "600" },
            { nome: "Bala 7 Belo sabor framboesa 500 g", preco: "12,00", img: "BALA", volume: "500" },
            { nome: "Bala morango recheada 500 g", preco: "9,00", img: "BALA", volume: "500" }
        ]
    }
};

// Função para carregar produtos de uma categoria
function carregarProdutosPorCategoria(categoria) {
    const marcas = produtosPorCategoria[categoria];
    if (!marcas) return '';
    
    let html = '';
    let isFirst = true;
    
    Object.keys(marcas).forEach(marca => {
        if (!isFirst) {
            html += '<div class="section-divider"></div>';
        }
        
        html += `
            <div class="brand-section ${marca.toLowerCase().replace(/\s+/g, '-')}-section">
                <h3 class="brand-title">${marca}</h3>
                <div class="brand-products">`;
        
        marcas[marca].forEach(produto => {
            const precoSection = produto.precoAntigo ? 
                `<span class="current-price">R$ ${produto.preco}</span>
                 <span class="old-price">R$ ${produto.precoAntigo}</span>
                 <span class="discount">${produto.desconto}</span>` :
                `<span class="current-price">R$ ${produto.preco}</span>`;
                
            const nota = produto.nota ? `<p class="product-note">${produto.nota}</p>` : '';
            
            const imageUrl = getProductImage(produto.img, marca);
            html += `
                <div class="product-card" data-brand="${marca.toLowerCase()}" data-volume="${produto.volume}" data-price="${produto.preco.replace(',', '.')}">
                    <img src="${imageUrl}" alt="${produto.nome}" onerror="this.src='https://via.placeholder.com/80x80/8B4513/FFFFFF?text=${produto.img}'">
                    <div class="product-info">
                        <h4>${produto.nome}</h4>
                        ${nota}
                        <div class="price-section">
                            ${precoSection}
                        </div>
                    </div>
                    <button class="add-btn" onclick="addToCart(this)">+</button>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>`;
        
        isFirst = false;
    });
    
    return html;
}

// Função para obter URLs de imagens reais dos produtos
function getProductImage(imgCode, marca) {
    const imageMap = {
        // Cervejas
        'SKOL': 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=80&h=80&fit=crop&crop=center',
        'ITAIPAVA': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=80&h=80&fit=crop&crop=center',
        'BRAHMA': 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=80&h=80&fit=crop&crop=center',
        'BUD': 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=80&h=80&fit=crop&crop=center',
        'AMSTEL': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=80&h=80&fit=crop&crop=center',
        'IMPERIO': 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=80&h=80&fit=crop&crop=center',
        'HEINEKEN': 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=80&h=80&fit=crop&crop=center',
        'STELLA': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=80&h=80&fit=crop&crop=center',
        'CORONA': 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=80&h=80&fit=crop&crop=center',
        'ORIGINAL': 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=80&h=80&fit=crop&crop=center',
        'ANTARTICA': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=80&h=80&fit=crop&crop=center',
        'SPATEN': 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=80&h=80&fit=crop&crop=center',
        'EISENBAHN': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=80&h=80&fit=crop&crop=center',
        'CABARE': 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=80&h=80&fit=crop&crop=center',
        'SMIRNOFF_ICE': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=80&h=80&fit=crop&crop=center',
        'PETRA': 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=80&h=80&fit=crop&crop=center',
        'DEVASSA': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=80&h=80&fit=crop&crop=center',
        
        // Destilados
        'SMIRNOFF': 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=80&h=80&fit=crop&crop=center',
        'ABSOLUT': 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=80&h=80&fit=crop&crop=center',
        'GREYGOOSE': 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=80&h=80&fit=crop&crop=center',
        'JACK': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'RED': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'BELLS': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'GRANDOLDPARR': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'BALLANTINES': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'WHITEHORSE': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'CHIVAS': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'BUCHANANS': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'WOODFORD': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'BLACKWHITE': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'JOHNNIEWALKER': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'BLACKLABEL': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'GREENLABEL': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'BLUELABEL': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'THIKARA': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=80&h=80&fit=crop&crop=center',
        'KAMPAI': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=80&h=80&fit=crop&crop=center',
        'ROSEPISCINA': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'JAGERMEISTER': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'DOMECQ': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'CAMPARI': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'APEROL': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'YPIOCA': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=80&h=80&fit=crop&crop=center',
        'BACARDI': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=80&h=80&fit=crop&crop=center',
        'RUMBRANCA': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=80&h=80&fit=crop&crop=center',
        'JOSECUERVO': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=80&h=80&fit=crop&crop=center',
        'SEARGERS': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'BOMBAY': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'TANQUERAY': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'ETERNITY': 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=80&h=80&fit=crop&crop=center',
        'CIROC': 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=80&h=80&fit=crop&crop=center',
        'BALALAIKA': 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=80&h=80&fit=crop&crop=center',
        'ETERNITY_GIN': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'BEEFEATER': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'COCKLAND': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'PASSAPORT': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=80&h=80&fit=crop&crop=center',
        'CANTINHODOVALE': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=80&h=80&fit=crop&crop=center',
        'CATUABA': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=80&h=80&fit=crop&crop=center',
        'DREHER': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'LICOR43': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'CONTINI': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'STROKE': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'XAROPE': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'PARATUDO': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=80&h=80&fit=crop&crop=center',
        'SAOJOAO': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        'CYNAR': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        '51': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=80&h=80&fit=crop&crop=center',
        'PITU': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=80&h=80&fit=crop&crop=center',
        'BARREIRO': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=80&h=80&fit=crop&crop=center',
        'ROCKS': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=80&h=80&fit=crop&crop=center',
        
        // Refrigerantes
        'COCA': 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=80&h=80&fit=crop&crop=center',
        'PEPSI': 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=80&h=80&fit=crop&crop=center',
        'GUARANA': 'https://images.unsplash.com/photo-1624552184280-8a4cc6459d8d?w=80&h=80&fit=crop&crop=center',
        'FANTA': 'https://images.unsplash.com/photo-1624552184280-8a4cc6459d8d?w=80&h=80&fit=crop&crop=center',
        'SPRITE': 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=80&h=80&fit=crop&crop=center',
        'SUKITA': 'https://images.unsplash.com/photo-1624552184280-8a4cc6459d8d?w=80&h=80&fit=crop&crop=center',
        'TUBAINA': 'https://images.unsplash.com/photo-1624552184280-8a4cc6459d8d?w=80&h=80&fit=crop&crop=center',
        'SODA': 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=80&h=80&fit=crop&crop=center',
        'CONVENCAO': 'https://images.unsplash.com/photo-1624552184280-8a4cc6459d8d?w=80&h=80&fit=crop&crop=center',
        'DOLLY': 'https://images.unsplash.com/photo-1624552184280-8a4cc6459d8d?w=80&h=80&fit=crop&crop=center',
        'GATORADE': 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=80&h=80&fit=crop&crop=center',
        'ITI': 'https://images.unsplash.com/photo-1624552184280-8a4cc6459d8d?w=80&h=80&fit=crop&crop=center',
        'GUARAVITON': 'https://images.unsplash.com/photo-1624552184280-8a4cc6459d8d?w=80&h=80&fit=crop&crop=center',
        'H20H': 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=80&h=80&fit=crop&crop=center',
        
        // Energéticos
        'REDBULL': 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=80&h=80&fit=crop&crop=center',
        'MONSTER': 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=80&h=80&fit=crop&crop=center',
        'BALY': 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=80&h=80&fit=crop&crop=center',
        'FURIOSO': 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=80&h=80&fit=crop&crop=center',
        'VIBE': 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=80&h=80&fit=crop&crop=center',
        'FLUXO': 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=80&h=80&fit=crop&crop=center',
        'TSUNAMI': 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=80&h=80&fit=crop&crop=center',
        'REDHORSE': 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=80&h=80&fit=crop&crop=center',
        'MASTERBLACK': 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=80&h=80&fit=crop&crop=center',
        
        // Água
        'CRYSTAL': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=80&h=80&fit=crop&crop=center',
        'BONAFONT': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=80&h=80&fit=crop&crop=center',
        'COCOQUADRADO': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=80&h=80&fit=crop&crop=center',
        'COCOLEVE': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=80&h=80&fit=crop&crop=center',
        'COKO': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=80&h=80&fit=crop&crop=center',
        'DUCOCO': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=80&h=80&fit=crop&crop=center',
        'KERO': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=80&h=80&fit=crop&crop=center',
        
        // Cigarro
        'MARLBORO': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80&fit=crop&crop=center',
        'ROTHMANS': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80&fit=crop&crop=center',
        'CHESTERFIELD': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80&fit=crop&crop=center',
        'GUDANGGARAM': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80&fit=crop&crop=center',
        'LM': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80&fit=crop&crop=center',
        'DUNHILL': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80&fit=crop&crop=center',
        'EIGHT': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80&fit=crop&crop=center',
        
        // Essências e Carvão
        'ZIGGY': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop&crop=center',
        'FUMAX': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop&crop=center',
        'BASS': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop&crop=center',
        'ZOMO': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop&crop=center',
        'BRAZILIAN': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop&crop=center',
        
        // Mercearia
        'BALA': 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=80&h=80&fit=crop&crop=center',
        'FOFURA': 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=80&h=80&fit=crop&crop=center',
        'TORCIDA': 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=80&h=80&fit=crop&crop=center',
        'DORITOS': 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=80&h=80&fit=crop&crop=center'
    };
    
    return imageMap[imgCode] || `https://via.placeholder.com/80x80/8B4513/FFFFFF?text=${imgCode}`;
}