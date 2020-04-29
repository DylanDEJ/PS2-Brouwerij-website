// Zorgt ervoor dat je terug kan gaan naar de product pagina

document.getElementById("terug").addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = "product.html";
});

// Zorgt ervoor dat je verder kan gaan naar de voltooid pagina
  
document.getElementById("verder").addEventListener("click", function(e) {
  e.preventDefault();
  window.location.href = "voltooid.html";
});

