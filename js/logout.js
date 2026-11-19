let linkLogout = document.querySelector(".link-logout")
let saludoHeader = document.querySelector(".item-saludo")
let loginHeader = document.querySelector(".item-login")
let registroHeader = document.querySelector(".item-registro")

if (linkLogout != null) {
    linkLogout.addEventListener("click", function (event){
        event.preventDefault();
        localStorage.removeItem("email");
        saludoHeader.style.display = "none";
        loginHeader.style.display = "block";
        registroHeader.style.display = "block";
    })
}