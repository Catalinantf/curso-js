// Función pura: Siempre devuelve el mismo resultado para los mismos argumentos.
function sumar(a, b) {
    return a + b;
}

console.log(sumar(2, 3)); // 5
console.log(sumar(2, 3)); // 5 (siempre produce el mismo resultado)

// Variable global que será modificada por la función
let total = 0;

// Función no pura: Modifica el valor de la variable 'total'
function agregarAlTotal(cantidad) {
    total += cantidad;
    return total;
}

console.log(agregarAlTotal(5)); // 5
console.log(agregarAlTotal(5)); // 10 (el resultado depende del valor anterior de 'total')
