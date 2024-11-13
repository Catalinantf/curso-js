// // ===============================================
// //      Programación Asíncrona en JavaScript
// // ===============================================

// // Promesas

// let promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Éxito");
//   }, 1000);
// });

// promesa
//   .then((resultado) => console.log(resultado))
//   .catch((error) => console.error(error));

// // asyn await

// async function obtenerDatos() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error al obtener datos:", error);
//   }
// }

// obtenerDatos();

// // ===============================================
// //                  Consumo de APIs
// // ===============================================

// //   Consumir API con fetch

// fetch("https://api.example.com/data")
//   .then((response) => {
//     if (!response.ok) throw new Error("Error en la respuesta");
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

// //   Consumir API con fetch con Promises

// function obtenerDatos(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .catch((error) => console.error("Error:", error));
// }

// //   Consumir API con fetch Con async/await
// async function obtenerDatos() {
//   try {
//     const response = await fetch("https://api.example.com/data");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// //   Consumir API con Axios

// import axios from "axios";

// axios
//   .get("https://api.example.com/data")
//   .then((response) => console.log(response.data))
//   .catch((error) => console.error("Error:", error));

// //   Consumir API con Superagent

// import superagent from "superagent";

// superagent
//   .get("https://api.example.com/data")
//   .then((response) => console.log(response.body))
//   .catch((error) => console.error("Error:", error));

// //   Consumir API con Got (exclusivo para Node.js)

// import got from "got";

// (async () => {
//   try {
//     const response = await got("https://api.example.com/data");
//     console.log(JSON.parse(response.body));
//   } catch (error) {
//     console.error("Error:", error);
//   }
// })();

// // ===============================================
// //  Uso más comunes de las promesas en JavaScript
// // ===============================================

// // Llamadas a API:
// fetch("https://api.example.com/data")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

// //   Operaciones de archivos (en Node.js):

// const fs = require("fs").promises;
// fs.readFile("archivo.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

// // Temporizadores y retrasos:
// function retraso(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// retraso(2000).then(() => console.log("Han pasado 2 segundos"));

// // Animaciones en el navegador (a veces en combinación con requestAnimationFrame):

// function moverElemento(elemento) {
//   return new Promise((resolve) => {
//     elemento.style.transform = "translateX(100px)";
//     setTimeout(resolve, 1000); // Cambia la posición después de 1 segundo
//   });
// }

import { apiResponseData, getLotsofData } from "./practica.js";

getLotsofData()
  .then(() => {
    mostrarDatosEnPantalla();
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });

function mostrarDatosEnPantalla() {
  // Seleccionamos el contenedor donde vamos a agregar los párrafos
  const contenedor = document.getElementById("contenedor");

  // Limpiamos el contenedor antes de agregar los nuevos párrafos
  contenedor.innerHTML = "";

  // Iteramos sobre los datos y creamos un párrafo por cada título
  apiResponseData.forEach((item) => {
    const parrafo = document.createElement("p"); // Creamos el elemento <p>
    parrafo.textContent = item.title; // Asignamos el texto del título al párrafo
    contenedor.appendChild(parrafo); // Agregamos el párrafo al contenedor
  });
}
