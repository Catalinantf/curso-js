// Seleccionar un elemento por su id
const titulo = document.getElementById("titulo");
titulo.textContent = "Nuevo título";

// Crear y añadir un nuevo elemento
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un nuevo párrafo";
document.body.appendChild(nuevoParrafo);
