// ===============================================
//            Rest sintax & spread operator
// ===============================================

// Rest syntax (...) AGRUPA múltiples elementos en un array o parámetro

let numeros2 = [1, 2, 3, 4];
let nombre = ["Catalina"];

console.log(numeros2);
console.log(...numeros2);

console.log(nombre);
console.log(...nombre);

// Spread operator (...) DESCOMPONE elementos de un array u objeto para ser utilizados individualmente.

function promedio(nombre, ...calificaciones) {
  console.log(arguments);
  console.log(nombre, calificaciones);
}
promedio("Catalina", 7, 8, 5, 9);
