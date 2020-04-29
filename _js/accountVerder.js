let accountVerder = document.getElementsByClassName("account-verder");
let accountVerderKruis = document.getElementsByClassName("account-verder-blok-kruis");
let accountNieuweAdres = document.getElementsByClassName("nieuwe-gegevens");
let gebruikAccount = document.getElementsByClassName("gebruik-account");


// Zorgt ervoor dat je de "account verder" pop up kan weghalen met de kruis

accountVerderKruis[0].addEventListener("click", function(){
    accountVerder[0].classList.add("hidden");
});

// Zorgt ervoor dat je de "account verder" pop up zichtbaar kan maken met de "gebruik account gegevens knop"

gebruikAccount[0].addEventListener("click", function(){
    accountVerder[0].classList.remove("hidden");
});

// Zorgt ervoor dat je de "account verder" pop up kan weghalen met de link

accountNieuweAdres[0].addEventListener("click", function(){
    accountVerder[0].classList.add("hidden");
});

// Zorgt ervoor dat je naar de juiste pagina gaat als je op "gebruik account gegevens" klikt door eerste te kijken op welke pagina je bent

document.getElementById("verder-account").addEventListener("click", function(e) {
  e.preventDefault();

  if(window.location.pathname == '/adres.html') {
    window.location.href = "product.html";
  }
  else {
    window.location.href = "voltooid.html";
  }
});

