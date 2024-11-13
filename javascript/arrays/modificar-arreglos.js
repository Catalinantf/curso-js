// ===============================================
//              Modificar un arreglo
// ===============================================

let frutas = ["manzana", "banana", "pera"];

// Reasignar valor a una posición del arreglo
frutas[0] = "higo"; // ['higo', 'banana', 'pera']

// ===============================================
//        Métodos que modifican un arreglo
// ===============================================

// 1. push() - Agrega uno o más elementos al final del array
frutas.push("fresa"); // ['higo', 'banana', 'pera', 'fresa']

// 2. pop() - Elimina el último elemento del array
frutas.pop(); // ['higo', 'banana', 'pera']

// 3. unshift() - Agrega uno o más elementos al inicio del array
frutas.unshift("kiwi"); // ['kiwi', 'higo', 'banana', 'pera']

// 4. shift() - Elimina el primer elemento del array
frutas.shift(); // ['higo', 'banana', 'pera']

// 5. splice() - Cambia el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos
frutas.splice(1, 1, "mango", "uva");
// Elimina 1 elemento en el índice 1 ('banana') y agrega 'mango' y 'uva'
// Resultado: ['higo', 'mango', 'uva', 'pera']

// 6. reverse() - Invierte el orden de los elementos en el array
frutas.reverse(); // ['pera', 'uva', 'mango', 'higo']

// 7. sort() - Ordena los elementos de un array en su lugar (alfabéticamente) y devuelve el array
frutas.sort(); // ['higo', 'mango', 'pera', 'uva']
