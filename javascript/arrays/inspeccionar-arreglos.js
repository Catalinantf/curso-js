// ===============================================
//      Métodos que inspeccionan un arreglo
// ===============================================

let lenguajes = ["ruby", "python", "java"];

// indexOf -> === -> posición
// includes -> === -> true | false

// find -> función prueba -> elemento encontrado
// findIndex -> función prueba -> posición
// some -> función prueba -> true | false

// 1. indexOf -> === -> posición
// Devuelve la posición (índice) del elemento si lo encuentra, o -1 si no está.
let posicionRuby = lenguajes.indexOf("ruby"); // 0
let posicionPHP = lenguajes.indexOf("php"); // -1 (no está en el array)

// 2. includes -> === -> true | false
// Devuelve true si el elemento está presente en el array, de lo contrario false.
let incluyePython = lenguajes.includes("python"); // true
let incluyeCSharp = lenguajes.includes("c#"); // false

// 3. find -> función prueba -> elemento encontrado
// Devuelve el primer elemento que cumple con la función de prueba, o undefined si no lo encuentra.
let encontrarJava = lenguajes.find((lenguaje) => lenguaje === "java"); // "java"
let encontrarCSharp = lenguajes.find((lenguaje) => lenguaje === "c#"); // undefined

// 4. findIndex -> función prueba -> posición
// Devuelve el índice del primer elemento que cumple con la función de prueba, o -1 si no lo encuentra.
let indicePython = lenguajes.findIndex((lenguaje) => lenguaje === "python"); // 1
let indiceCSharp = lenguajes.findIndex((lenguaje) => lenguaje === "c#"); // -1

// 5. some -> función prueba -> true | false
// Devuelve true si al menos un elemento cumple con la función de prueba, de lo contrario false.
let algunLenguajeConY = lenguajes.some((lenguaje) => lenguaje.includes("y")); // true (porque "python" tiene "y")
let algunLenguajeConZ = lenguajes.some((lenguaje) => lenguaje.includes("z")); // false (ninguno tiene "z")
