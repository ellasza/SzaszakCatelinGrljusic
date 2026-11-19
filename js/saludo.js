let emailGuardado = localStorage.getItem("email");
let itemLogin = document.querySelector(".item-login");
let itemRegistro = document.querySelector(".item-registro");
let itemSaludo = document.querySelector(".item-saludo");

if (emailGuardado != null) {
    itemSaludo.innerHTML = `Bienvenido: ${emailGuardado} <a href="#" class="link-logout">logout</a>`;
    itemLogin.style.display = "none";
    itemRegistro.style.display= "none";
}