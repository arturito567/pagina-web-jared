// Funcionalidad para el menú desplegable
document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".menu");
    menu.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});