let formRegistro = document.querySelector(".form1");
let emailRegistro = document.querySelector("#email");
let passwordRegistro = document.querySelector("#password");
let password2Registro = document.querySelector("#password2");
let terminosRegistro = document.querySelector("#terminos");
let erroresRegistro = document.querySelector(".errores");

formRegistro.addEventListener("submit", function (event) {
    event.preventDefault();

    let mensajes = "";

    if (emailRegistro.value == "") {
        mensajes += "<p>El email es obligatorio</p>";
    }

    if (passwordRegistro.value == "") {
        mensajes += "<p>La contrasena es obligatoria</p>";
    } else if (passwordRegistro.value.length < 6) {
        mensajes += "<p>La contrasena debe tener al menos 6 caracteres</p>";
    }

    if (passwordRegistro.value != password2Registro.value) {
        mensajes += "<p>las contrasenas no coinciden</p>";
    }

    if (mensajes != "") {
        erroresRegistro.innerHTML = mensajes;
    } else {
        location.href = "./login.html";
    }
});
