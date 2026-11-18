let listaCategoria = document.querySelector(".lista-categorias");

fetch("https://dummyjson.com/products/categories")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for (let i = 0; i < data.length; i++) {
            listaCategoria.innerHTML += `<li><a href="./categoria.html?categoria=${data[i].slug}">${data[i].name}</a></li>`;
        }
    })

    .catch(function(error){
        console.log("El error es" + error);
    });

