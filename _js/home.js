let navHeaderLogin = document.getElementsByClassName("header-login");
let navHeaderRegister = document.getElementsByClassName("header-registratie");
let login = document.getElementsByClassName("login");
let loginClose = document.getElementsByClassName("login-kruis");
let loginToRegister = document.getElementsByClassName("login-registeren");
let register = document.getElementsByClassName("registreren");
let registerClose = document.getElementsByClassName("registreren-kruis");
let registerToLogin = document.getElementsByClassName("registeren-login");
let loginButton = document.getElementsByClassName("info-bestellen-knop");


// Zorgt ervoor dat je het login scherm ziet als je op de "Login" knop klikt in de header

navHeaderLogin[0].addEventListener("click", function(){
    login[0].classList.remove("hidden");
});

// Zorgt ervoor dat het login scherm verdwijnt door op het kruisje te klikken

loginClose[0].addEventListener("click", function(){
    login[0].classList.add("hidden");
});

// Zorgt ervoor dat je van het login scherm naar het registratie scherm gaat

loginToRegister[0].addEventListener("click", function(){
    login[0].classList.add("hidden");
    register[0].classList.remove("hidden");
});

// Zorgt ervoor dat je het registratie scherm ziet als je op de "Login" link klikt in de header

navHeaderRegister[0].addEventListener("click", function(){
    register[0].classList.remove("hidden");
});

// Zorgt ervoor dat het registratie scherm verdwijnt door op het kruisje te klikken

registerClose[0].addEventListener("click", function(){
    register[0].classList.add("hidden");
});

// Zorgt ervoor dat je van het registratie scherm naar het login scherm gaat

registerToLogin[0].addEventListener("click", function(){
    register[0].classList.add("hidden");
    login[0].classList.remove("hidden");
});

// Zorgt ervoor dat je het login scherm ziet als je nog niet ingelogd bent

loginButton[0].addEventListener("click", function(){
  login[0].classList.remove("hidden");
});

// Zorgt ervoor dat je via het login scherm naar de homepagina bent waar je ingelogd staat, formulier invullen is verplicht

document.getElementById("form-login").addEventListener("submit", function(e) {
    e.preventDefault();
    window.location.href = "index_ingelogd.html";
});

// Zorgt ervoor dat je via het registratie scherm naar de homepagina bent waar je ingelogd staat, formulier invullen is verplicht
  
document.getElementById("form-register").addEventListener("submit", function(e) {
  e.preventDefault();
  window.location.href = "index_ingelogd.html";
});


