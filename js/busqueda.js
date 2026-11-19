let qsBusqueda = location.search;
let qsObjBusqueda = new URLSearchParams(qsBusqueda);
let terminoBuscado = qsObjBusqueda.get("buscador");

let tituloBusqueda = document.querySelector(".titulo-busqueda");
let resultados = document.querySelector(".productos-busquedaa")

fetch(`https://dummyjson.com/products/search?q=${terminoBuscado}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if (data.products.length == 0) {
            tituloBusqueda.innerText = `No hay resultados para el termino: ${terminoBuscado}`;  
        } else {
            tituloBusqueda.innerText = `Resultados de busqueda para: ${terminoBuscado}`;
            for (let i = 0; i < data.products.length; i++) {
                let producto = data.products[i];
                resultados.innerHTML += `
                    <article class="producto2">
                        <img src="${producto.thumbnail}" alt="${producto.title}"> 
                        <h3>${producto.title}</h3>
                        <p>${producto.description}</p>
                        <p class="precio2">$${producto.price}</p>
                        <a href="./detalle.html?id=${producto.id}"
class="vuelta">Ver detalle</a>
                    </article>`;                        
        
            }
        }
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });