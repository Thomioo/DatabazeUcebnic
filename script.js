let index = 0;

data = {
    "0": {
        "name": "Zeměpis v kostce II",
        "picture": "https://images-ext-2.discordapp.net/external/5OntrFgO3S75Y0gnWJq2rqmbh1y1hQQrsNR5FDtyKGo/https/www.knihydobrovsky.cz/thumbs/book-detail-fancy-box/mod_eshop/produkty/n/novy-zemepis-v-kostce-pro-ss-ii-9788025348109.jpg?width=381&height=550",
        "author": "Martin Brzóska",
        "price": 166
    },
    "1": {
        "name": "Dějepis 1 pro gymnázia a střední školy - Pravěk a starověk",
        "picture": "https://d25-a.sdn.cz/d_25/c_img_gV_V/V8kchE.jpeg",
        "author": "SPN",
        "price": 176
    },
    "2": {
        "name": "Dějepis I. v kostce",
        "picture": "https://img-cloud.megaknihy.cz/49497-original/4da4eae97058734e3f24c462cd32bea8/dejepis-i-v-kostce-pro-stredni-skoly.jpg",
        "author": "Marie Sochrová",
        "price": 166
    },
    "3": {
        "name": "Matematika pro gymnázia - Základní poznatky z matematiky",
        "picture": "https://im9.cz/iR/importprodukt-orig/b09/b09ff1cd361ef80a797001c3567c1386--mm1200x1200.jpg",
        "author": "Vydavatelství Prometheus",
        "price": "148"
    },
    "4": {
        "name": "Matematika pro gymnázia - Rovnice a nerovnice",
        "picture": "https://images-ext-2.discordapp.net/external/oY_fG6o3UDwQ5HhpP6nLhKwhEsuBJIB4I52-giUuceg/%3Ffl%3Dres%252C350%252C350%252C1%257Cwebp%252C80/https/d25-a.sdn.cz/d_25/d_15070382/img/60/450x677_nBB5jQ.jpg?width=255&height=385",
        "author": "Vydavatelství Prometheus",
        "price": 172
    },
    "5": {
        "name": "Český jazyk v kostce I",
        "picture": "https://images-ext-2.discordapp.net/external/7ncDXw7HaHbUxqPcDPdHAnaZRhQfNoKtbZetTui1hL0/https/img-cloud.megaknihy.cz/60974-large/a3a79b3889326108d215e55d07883c58/cesky-jazyk-v-kostce-pro-stredni-skoly.jpg?width=366&height=521",
        "author": "Marie Sochrová",
        "price": 140
    },
    "6": {
        "name": "Literatura pro 1. ročník gymnázií",
        "picture": "https://images-ext-1.discordapp.net/external/kWJM4HluzMICbuFZj-0ibTV7DIFQVY01OPzgd1iRd3A/https/img-cloud.megaknihy.cz/70119-large/afb1ccf7e4451e350de6bac674716e36/literatura-pro-1-rocnik-gymnazii.jpg?width=366&height=513",
        "author": "Josef Soukal",
        "price": 159
    },
    "7": {
        "name": "Čítanka I. k literatuře v kostce",
        "picture": "https://images-ext-2.discordapp.net/external/6UIGcZrNq40mXTqHLE9wooVUprg_SXmFJPF0_pWGbFU/https/img-cloud.megaknihy.cz/33024-large/f3ac1b11d86bcfde913ef5bdeb82e91a/citanka-i-k-literature-v-kostce-pro-stredni-skoly.jpg?width=366&height=521",
        "author": "Marie Sochrová",
        "price": 144
    },
    "8": {
        "name": "Přehled středoškolské fyziky",
        "picture": "https://images-ext-1.discordapp.net/external/rSdh0KYz6pZjZAf3QqIn9Hs2mwUkwGbbDNr4muODGJM/https/img-cloud.megaknihy.cz/486447-large/1108556d380b8a615d8c8595eefd8be7/prehled-stredoskolske-fyziky.jpg?width=366&height=513",
        "author": "Emanuel Svoboda",
        "price": 332
    },
    "9": {
        "name": "Matematické, fyzikální a chemické tabulky a vzorce pro SŠ",
        "picture": "https://images-ext-1.discordapp.net/external/iHDluFWWo5YsJ3NESJILMqAKakQNd_82dWci2cQ93tY/https/www.knihydobrovsky.cz/thumbs/book-detail-fancy-box/mod_eshop/produkty/41220889.jpg?width=265&height=389",
        "author": "Jiří Mikulčák",
        "price": 243
    },
    "10": {
        "name": "Fyzika - sbírka úloh pro střední školy",
        "picture": "https://images-ext-2.discordapp.net/external/KhYhJDVRum2syutAJbpY56xDp04QP6tEweHNdT-dVUY/https/online-antikvariat.cz/media/catalog/product/cache/10/thumbnail/300x/17f82f742ffe127f42dca9de82fb58b1/9/7/9788071962663.jpg?width=330&height=470",
        "author": "Vydavatelství Prometheus",
        "price": 167
    },
    "11": {
        "name": "Chemie pro čtyřletá gymnázia 1.díl",
        "picture": "https://images-ext-2.discordapp.net/external/A94ddEngTR54vCQYnXrWsbsCznzDtFxh4uqQRH_QGFk/https/www.knihydobrovsky.cz/thumbs/book-detail/mod_eshop/produkty/c/chemie-pro-ctyrleta-gymnazia-1-dil-9788090240209_2.jpg?width=347&height=506",
        "author": "Aleš Mareček",
        "price": 137
    },
    "12": {
        "name": "Chemie - Sbírka příkladů pro studenty středních škol",
        "picture": "https://images-ext-2.discordapp.net/external/4tOhf8WfZx_fDoVViTGuaW7zvD7QAxbL8xpceW_HkmM/https/img-cloud.megaknihy.cz/54534-large/a6fb91b85e29447e37ed345b9e427c8c/chemie-sbirka-prikladu-pro-studenty-strednich-skol.jpg?width=366&height=543",
        "author": "Aleš Mareček",
        "price": 130
    }
}

function Update() {
    let elem = document.getElementById("img");
    elem.setAttribute("src", data[index.toString()]["picture"]);

    let name = document.getElementById("name");
    name.innerHTML = data[index.toString()]["name"];

    let author = document.getElementById("author");
    author.innerHTML = data[index.toString()]["author"];

    let price = document.getElementById("price");
    price.innerHTML = "Cena online: " + data[index.toString()]["price"] + " Kč.";

    document.getElementById("left").innerHTML = "<";
    document.getElementById("right").innerHTML = ">";
}

function moveLeft() {
    if (index > 0) {
        index -= 1;
        Update();
        console.log(index);
    }
}

function moveRight() {
    if (index < Object.keys(data).length - 1) {
        index += 1;
        Update();
        console.log(index);
    }
}

