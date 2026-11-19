let formLogin = document.querySelector(".form1");
let emailLogin = document.querySelector("#email");
let passwordLogin= document.querySelector("#password");
let erroresLogin = document.querySelector(".errores");

formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    let mensajes = "";

    if (emailLogin.value == "") {
        mensajes += "<p>El email es obligatori</p>";
    }

    if (passwordLogin.value== "") {
        mensajes += "<p>La contrasena es obligatori</p>";
    } else if (passwordLogin.value.length < 6) {
        mensajes += "<p>La contrasena debe tener al menos 6 digitos</p>";
    }

    if (mensajes != "") {
        erroresLogin.innerHTML = mensajes;
    } else {
        localStorage.setItem("email", emailLogin.value);
        location.href = "./index.html";
    }    
})