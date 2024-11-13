// ===============================================
//            1. Shorthand Properties:
// ===============================================
// Las shorthand properties permiten crear objetos de forma más concisa cuando el nombre de la propiedad es el mismo que el nombre de la variable

// Variables con valores
let nombre = "Juan";
let edad = 30;

// Creación de un objeto usando shorthand properties
let persona = {
  nombre, // Esto es equivalente a 'nombre: nombre'
  edad, // Esto es equivalente a 'edad: edad'
};

console.log(persona);
// Salida: { nombre: 'Juan', edad: 30 }

// ===============================================
//        2.Shorthand Syntax (para Métodos)
// ===============================================

// La shorthand syntax para métodos permite definir funciones dentro de un objeto de forma más corta.

let objetoSinShorthandSyntax = {
  saludar: function () {
    console.log(`Hola, me llamo ${this.nombre}`);
  },
};

let objetoConShorthandSyntax = {
  saludar() {
    // Shorthand method
    console.log(`Hola, me llamo ${this.nombre}`);
  },
};
