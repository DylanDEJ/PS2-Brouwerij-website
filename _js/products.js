let product = document.getElementsByClassName("product-item");
let productInfo = document.getElementsByClassName("product-info");
let productInfoClose = document.getElementsByClassName("product-info-kruis");
let verder = document.getElementsByClassName("verder");

// Zorgt ervoor dat alle producten op de pagina worden meegenomen, hierdoor kan je op alle product items klikken en een pop up ontvangen

for(var i = 0, len = product.length;i < len; i++){

// Zorgt ervoor dat de pop up tevoorschijn komt

  product[i].addEventListener("click" , function(){
    productInfo[0].classList.remove("hidden");
  })}

// Zorgt ervoor dat de pop up verdwijnt door op het kruisje te klikken

  productInfoClose[0].addEventListener("click", function(){
    productInfo[0].classList.add("hidden");
});

// Zorgt ervoor dat je terug kan gaan naar de adres pagina via de winkelwagen

document.getElementById("terug").addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = "adres.html";
});

// Zorgt ervoor dat je verder kan gaan naar de bestelling informatie pagina doormiddel van de winkelwagen
  
document.getElementById("verder").addEventListener("click", function(e) {
  e.preventDefault();
  window.location.href = "bestelling_info.html";
});

