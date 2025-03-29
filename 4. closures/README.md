### **¿Qué es un closure en JavaScript?**

Un **closure** es una función que **recuerda el ámbito (scope) en el que fue creada**, incluso después de que ese ámbito haya finalizado.

📌 **Es decir, un closure permite que una función interna acceda a variables de su función externa, incluso después de que la función externa haya terminado de ejecutarse.**

```
function crearContador() {
  let contador = 0; // Variable privada dentro del closure

  return function() {
    contador++; // La función interna recuerda "contador"
    console.log(contador);
  };
}

const incrementar = crearContador();

incrementar(); // 1
incrementar(); // 2
incrementar(); // 3

```

🔹 **Explicación:**

1️⃣ `crearContador()` define una variable `contador` y retorna una función interna.

2️⃣ Al llamar a `crearContador()`, obtenemos una función (`incrementar`).

3️⃣ Cada vez que llamamos a `incrementar()`, la función sigue recordando la variable `contador`, aunque `crearContador()` ya haya terminado su ejecución.

💡 **Esto es posible gracias a que `incrementar()` mantiene una referencia al ámbito donde se creó (`crearContador`).**

📌 ¿Cómo se utiliza un Closure?

-   Para encapsular datos y evitar modificaciones externas Los closures permiten crear **variables privadas**, lo que ayuda a evitar modificaciones accidentales

    ```
    function usuario(nombre) {
      let saldo = 100; // Variable privada

      return {
        mostrarSaldo: function() {
          console.log(`${nombre} tiene $${saldo}`);
        },
        depositar: function(cantidad) {
          saldo += cantidad;
          console.log(`Nuevo saldo: $${saldo}`);
        }
      };
    }

    const cliente = usuario("Alberto");
    cliente.mostrarSaldo(); // "Alberto tiene $100"
    cliente.depositar(50);  // "Nuevo saldo: $150"
    cliente.mostrarSaldo(); // "Alberto tiene $150"

    ```

    ✅ **Aquí `saldo` no es accesible directamente, solo a través de `mostrarSaldo` y `depositar`.**

-   Para recordar valores entre llamadas Los closures son útiles en **event listeners, callbacks y temporizadores**.

    ```
    function hacerSaludo(saludo) {
      return function(nombre) {
        console.log(`${saludo}, ${nombre}!`);
      };
    }

    const saludarHola = hacerSaludo("Hola");
    saludarHola("Alberto"); // "Hola, Alberto!"
    saludarHola("María");   // "Hola, María!"

    ```

    ✅ **Aquí `saludarHola` recuerda el saludo "Hola" gracias al closure.**

**📌 Resumen**

| **Característica** | **Closure** |
| --- | --- |
| ¿Qué es? | Una función que recuerda el scope en el que fue creada. |
| ¿Para qué sirve? | Encapsular datos, evitar modificaciones accidentales, recordar valores. |
| ¿Cómo funciona? | La función interna mantiene acceso a las variables de la externa. |

✅ **Los closures permiten manejar datos privados y recordar valores en funciones.**

✅ **Son clave en programación funcional y patrones como el módulo.**