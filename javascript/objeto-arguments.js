// El objeto arguments en JavaScript es una estructura parecida
//  a un array que se encuentra disponible dentro de las funciones
//  tradicionales (no en las funciones flecha), y contiene todos
//  los argumentos pasados a esa función.

function sumarTodos() {
  let suma = 0;

  // Iterar sobre el objeto 'arguments'
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }

  return suma;
}

// Llamando a la función con diferentes números de argumentos
console.log(sumarTodos(1, 2, 3)); // 6
console.log(sumarTodos(5, 10, 15, 20)); // 50
console.log(sumarTodos(7)); // 7
