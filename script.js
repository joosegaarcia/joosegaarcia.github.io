const botonProyecto = document.getElementById("proyecto");
const botonModo = document.getElementById("modoOscuro");
const titulo = document.getElementById("titulo");
const body = document.body;

botonProyecto.addEventListener("click", function () {
    titulo.textContent = "🚀 ¡Gracias por visitar mi web!";
});

botonModo.addEventListener("click", function () {
    body.classList.toggle("oscuro");
});
if (body.classList.contains("oscuro")) {
    botonModo.textContent = "☀️ Modo claro";
} else {
    botonModo.textContent = "🌙 Modo oscuro";
}
