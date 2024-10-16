// Ciudadano de primera clase o first class objects:
// En JavaScript, el término "objetos de primera clase" se refiere a la
// capacidad de un tipo de dato para ser tratado de manera similar a los tipos 
// primitivos. Funciones, Objetos, Arrays, Clases, Cadenas (Strings), Números 
// (Numbers), Funciones Anónimas, Funciones Flecha, Callbacks, Promesas.
// Debe ser posible retornarlo
// Debe ser posible asignarlo a una variable
// Debe ser posible enviarlo como argumento


// Función que toma otra función como argumento
function ejecutarFuncion(funcion) {
    return funcion();
}

// Función anónima que se pasará como argumento
const funcionSaludo = function () {
    return "¡Hola desde una función de primera clase!";
};

// Usar la función 'ejecutarFuncion' pasando 'funcionSaludo' como argumento
console.log(ejecutarFuncion(funcionSaludo)); // "¡Hola desde una función de primera clase!"

// También puedes definir y pasar la función directamente
console.log(
    ejecutarFuncion(function () {
        return "¡Hola desde una función anónima!";
    })
); // "¡Hola desde una función anónima!"

// Función que devuelve otra función
function crearMultiplicador(factor) {
    return function (num) {
        return num * factor;
    };
}

// Crear una función que multiplica por 2
const multiplicarPorDos = crearMultiplicador(2);

// Usar la función devuelta
console.log(multiplicarPorDos(5)); // 10
console.log(multiplicarPorDos(10)); // 20
