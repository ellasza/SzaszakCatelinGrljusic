let qsDetalle = location.search;
let qsObjDetalle = new URLSearchParams(qsDetalle);
let idProducto = qsObjDetalle.get("id");

let fotoDetalle = document.querySelector(".foto-detalle");
let nombreDetalle = document.querySelector(".nombre-detalle");
let marcaDetalle = document.querySelector(".marca");
let precioDetalle = document.querySelector(".detalle-info .precio");
let descripcionDetalle = document.querySelector(".descripcion");
let linkCategoria = document.querySelector(".link-categoria");
let stockDetalle = document.querySelector(".stock");
let listaTags = document.querySelector(".tags");
let listaReviews = document.querySelector(".lista-reviews");

fetch(`https://dummyjson.com/products/${idProducto}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        fotoDetalle.src = data.thumbnail;
        fotoDetalle.alt = data.title;
        nombreDetalle.innerText = data.title;
        precioDetalle.innerText = `$${data.price}`;
        descripcionDetalle.innerText = data.description;
        stockDetalle.innerText = `Stock: ${data.stock} unidades`;
        linkCategoria.innerText = data.category;
        linkCategoria.href = `./categoria.html?categoria=${data.category}`;

        if (data.brand == undefined) {
            marcaDetalle.innerText = "Marca: sin marca";
        } else {
            marcaDetalle.innerText = `Marca: ${data.brand}`;
        }

        for (let i = 0; i < data.tags.length && i < 3; i ++) {
            listaTags.innerHTML += `<li>${data.tags[i]}</li>`;
        }

        for (let i = 0; i < data.reviews.length; i++) {
            let review = data.reviews[i];
            let fecha = new Date(review.date).toLocaleDateString();
            listaReviews.innerHTML += `
                <article class="review">
                    <p class="rating">${review.rating}/5</p>
                    <p>${review.comment}</p>
                    <p class="review-datos">${review.reviewerName} - ${fecha}</p>
                </article>`;
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });