let categoria1 = "smartphones";
let categoria2 = "mobile-accessories";
let seccion1 =
document.querySelector(".seccion1");
let seccion2 = 
document.querySelector(".selector2");

fetch(`https://dummyjson.com/products/category/${categoria1}?limit=10`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.products.length; i++) {
            let producto = data.products[i];
            seccion1.innerHTML += `
                <article class="producto">
                    <img src="${producto.thumbnail}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p>${producto.description}</p>
                    <p class="precio">$${producto.price}</p>
                    <a href="./detalle.html?id=${producto.id}" class="vuelta">Ver detalle</a>
                </article>`;
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });

fetch(`https://dummyjson.com/products/category/${categoria2}?limit=10`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.prodcts.length; i++) {
            let producto = data.products[i];
            seccion2.innerHTML += `
                <article class="producto">
                    <img src="${producto.thumbnail}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p>${producto.description}</p>
                    <p class="precio">$${producto.price}</p>
                    <a href="./detalle.html?id=${producto.id}" class="vuelta">Ver detalle</a>
                </article>`;
        }
    })
    .catch(function (error) {
        console.log("El error es :" + error);
    });