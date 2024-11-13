// Función tradicional
function saludar(nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar("Catalina"));

// Función flecha
const sumar = (a, b) => a + b;
console.log(sumar(2, 3));

// Función anónima asignada  variable
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
};
console.log(saludar("Catalina"));

// Técnicamente las funciones anónimas que se asignan a una variable no se consideran realmente anónimas, porque adoptan el nombre de la variable.

// Función anónima como callback
setTimeout(function () {
    console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

//Función Flecha Anónima

const sumar2 = (a, b) => a + b;

console.log(sumar2(3, 4));


