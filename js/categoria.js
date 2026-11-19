let qsCategotia = location.search; 
let qsObjCategoria = new URLSearchParams(qsCategotia);
let categoriaElegida = qsObjCategoria.get("categoria");

let tituloCategoria = document.querySelector(".titulo-categoria");
let productosCategoria = document.querySelector(".productos-catego");

tituloCategoria.innerText = categoriaElegida;

fetch(`https://dummyjson.com/products/category/${categoriaElegida}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.products.length; i++) {
            let producto = data.products[i];
            productosCategoria.innerHTML += `
                <article class="producto">
                    <img src="${producto.thumbnail}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p>${producto.description}</p>
                    <p class="precio">$${producto.price}</p>
                    <a href="./detalle.html?id=${producto.id}" class="vuelta">Ver detalle</a>
                </article>`;
        }
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });