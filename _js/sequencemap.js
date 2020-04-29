let adres = document.getElementById("sequence-map-adres")
let producten = document.getElementById("sequence-map-producten")
let bestelling = document.getElementById("sequence-map-bestelling")
let voltooid = document.getElementById("sequence-map-voltooid")

// Zorgt ervoor dat je als je op de adres pagina bent niet naar voren kan springen in het bestelproces

adres.addEventListener("click", function(e) {
  e.preventDefault();

  if(window.location.pathname == '/adres.html') {
    
  }
  else {
    window.location.href = "adres.html";
  }
});

// Zorgt ervoor dat je als je op de product pagina bent niet naar voren kan springen in het bestelproces


producten.addEventListener("click", function(e) {
  e.preventDefault();

  if(window.location.pathname == '/adres.html' || window.location.pathname == '/product.html') {
    
  }
  else {
    window.location.href = "product.html";
  }
});

// Zorgt ervoor dat je als je op de bestellings informatie pagina bent niet naar voren kan springen in het bestelproces


producten.addEventListener("click", function(e) {
  e.preventDefault();

  if(window.location.pathname == '/adres.html' || window.location.pathname == '/product.html' || window.location.pathname == '/bestelling_info.html') {
    
  }
  else {
    window.location.href = "bestelling_info.html";
  }
});