# Hoisting en JavaScript

El **hoisting** es un comportamiento en JavaScript donde las declaraciones de variables y funciones son elevadas a la parte superior de su contexto de ejecución, permitiendo su uso antes de ser declaradas en el código. Sin embargo, solo las declaraciones son elevadas, **no las asignaciones**.

El hoisting es el comportamiento que lleva la declaración de una variable a la parte superior del código. No funciona con la asignación de valores. Esto solo sucede con `var`; con `const` y `let` no se aplica de la misma manera.

## Declaración de una función vs. Expresión de una función

- **Declaración de una función**: Define una función con un nombre y es elevada (hoisted), lo que permite su uso antes de la declaración.
- **Expresión de una función**: Define una función y la asigna a una variable, y no se puede usar antes de la línea donde se asigna.

## Declaración vs. Asignación

- **Declaración**: Introduce un identificador (como una variable o función) en el ámbito y establece su existencia.
- **Asignación**: Asigna un valor a una variable o función ya declarada. La asignación no se eleva, así que solo tiene efecto a partir de su línea de código.
