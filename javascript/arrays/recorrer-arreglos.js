// ===============================================
//       Métodos que recorren un arreglo
//     y generan uno nuevo con modificaciones
// ===============================================

//     Métodos que recorren un arreglo sin modificarlo
//     y generan uno nuevo con cambios

const numeros = [1, 2, 3, 4, 5];

//  Usando un ciclo for para crear un nuevo arreglo con los números al cuadrado
const numerosAlCuadradoFor = [];
for (let i = 0; i < numeros.length; i++) {
  numerosAlCuadradoFor.push(numeros[i] ** 2);
}

// Usando .forEach() para imprimir los números al cuadrado
numeros.forEach((num) => {
  const cuadrado = num ** 2; // Elevar el número al cuadrado
  console.log(`El cuadrado de ${num} es ${cuadrado}`);
});

//  Usando .map() para crear un nuevo arreglo con los números al cuadrado
const numerosAlCuadradoMap = numeros.map((num) => num ** 2); // [1, 4, 9, 16, 25]

// Usando .filter() para obtener solo los números pares
const numerosPares = numeros.filter((num) => num % 2 === 0);

// 6. slice() - Crea un nuevo array con una copia superficial de una porción del array original
let frutasCopia = frutas.slice(1, 3); // ['mango', 'uva']

// 7. concat() - Combina dos o más arrays y devuelve un nuevo array
let frutasExtra = ["pera", "cereza"];
let todasLasFrutas = frutas.concat(frutasExtra); // ['manzana', 'mango', 'uva', 'naranja', 'pera', 'cereza']

// 8. fill() - Cambia todos los elementos en un array por un valor estático, desde un índice de inicio hasta un índice de final
frutas.fill("nueva fruta", 1, 3); // ['manzana', 'nueva fruta', 'nueva fruta', 'naranja']

// Arreglo de strings
const frutas = ["manzana", "plátano", "naranja", "kiwi", "uva"];

// Usando .reduce() para convertir el arreglo en un listado <li> de HTML
const listaHTML = frutas.reduce((acc, fruta) => {
  return acc + `<li>${fruta}</li>`;
}, "");

// Agregando la lista generada a una estructura <ul>
const listaCompleta = `<ul>${listaHTML}</ul>`;

console.log(html);
