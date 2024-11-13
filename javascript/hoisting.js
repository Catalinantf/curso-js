// Hoisting con var
console.log(variableVar); // undefined, debido al hoisting

var variableVar = 10;

console.log(variableVar); // 10, después de la asignación

// Hoisting con 'let'
try {
    console.log(variableLet); // ReferenceError: Cannot access 'variableLet' before initialization
} catch (error) {
    console.log(error.message); // Mensaje de error
}

let variableLet = 20;

console.log(variableLet); // 20


// Hoisting con funciones

// Ejemplo de hoisting con funciones declaradas
console.log(funcionDeclarada()); // "Hola desde una función declarada"

function funcionDeclarada() {
    return "Hola desde una función declarada";
}

// Ejemplo de hoisting con funciones expresadas
try {
    console.log(funcionExpresada()); // TypeError: funcionExpresada is not a function
} catch (error) {
    console.log(error.message); // Mensaje de error
}

var funcionExpresada = function () {
    return "Hola desde una función expresada";
};

// A continuación, llamamos a la función expresada después de su declaración
funcionExpresada = function () {
    return "Hola desde una nueva función expresada";
};

console.log(funcionExpresada()); // "Hola desde una nueva función expresada"


