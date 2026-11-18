let formBuscador = document.querySelector(".form-buscador");
let campoBuscador = document.querySelector("#buscador");
let errorBuscador = document.querySelector(".error-buscador");

formBuscador.addEventListener("submit", function(event) {
    event.preventDefault();

    if (campoBuscador.value == ""){
        errorBuscador.innerText = "El campo de busqueda no puede estar vacio";
    } else if (campoBuscador.value.length < 3) {
        errorBuscador.innerText = "Debe tener al menos 3 caracteres"
    } else {
        this.submit();
    }
});
