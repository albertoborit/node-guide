###  **¿Qué son las funciones de orden superior?**

📌 Una **función de orden superior** es una función que **puede recibir otra función como argumento o devolver una función como resultado**.

✅ **JavaScript trata a las funciones como First-class functions**, lo que permite usarlas como valores, pasarlas como parámetros y retornarlas desde otras funciones.

Función que Recibe otra Función

```
function operar(a, b, operacion) {
  return operacion(a, b);
}

function sumar(x, y) {
  return x + y;
}

function multiplicar(x, y) {
  return x * y;
}

console.log(operar(5, 3, sumar));      // 8
console.log(operar(5, 3, multiplicar)); // 15

```

Función que Devuelve otra Función

```
function crearMultiplicador(factor) {
  return function(numero) {
    return numero * factor;
  };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log(duplicar(5)); // 10
console.log(triplicar(5)); // 15

```