### **¿Cuál es la diferencia entre `var`, `let` y `const`?**

```
Array.prototype.saludar = function() {
  console.log("Hola desde un array!");
};

[].saludar(); // Ahora todos los arrays tienen este método

```

-   `var` (Evítalo en código moderno 🚨)

    -   **Scope**

        -   **Ámbito de función**: `var` solo respeta los límites de una función, pero **ignora los bloques `{}`** como `if`, `for`, etc.

            ```
            function ejemplo() {
              if (true) {
                var x = 10; // Se declara dentro del if
              }
              console.log(x); // 10 (¡Todavía está accesible fuera del if!)
            }
            ejemplo();

            ```

    -   **Hoisting**

        -   Las variables declaradas con `var` **se elevan al inicio del ámbito**, pero sin su valor.

            ```
            console.log(a); // undefined (No da error, pero la variable no tiene valor)
            var a = 5;

            ```

            Equivalente a:

            ```
            var a;
            console.log(a); // undefined
            a = 5;

            ```

    -   **Reasignación y redeclaración**

        -   Se puede reasignar

        -   Se puede redeclarar dentro del mismo ámbito (esto puede causar errores difíciles de detectar).

            ```
            var nombre = "Alberto";
            var nombre = "Juan"; // No hay error, pero puede ser problemático
            console.log(nombre); // "Juan"

            ```

-   `let` (Recomendado para variables que cambian)

    Introducido en ES6, `let` **soluciona muchos problemas de `var`**

    -   **Scope**

        -   **Ámbito de bloque**: Solo existe dentro del `{}` donde se declara

            ```
            if (true) {
              let y = 20;
            }
            console.log(y); // ❌ Error: y is not defined

            ```

    -   **Hoisting**

        -   Sí se eleva, pero no se puede usar antes de la declaración (Zona Temporal Muerta o "Temporal Dead Zone").

            ```
            console.log(b); // ❌ Error: Cannot access 'b' before initialization
            let b = 10;

            ```

    -   **Reasignación y redeclaración**

        -   Se puede reasignar

        -   No se puede redeclarar dentro del mismo ámbito.

            ```
            let edad = 25;
            edad = 30; // ✅ Permitido

            let edad = 35; // ❌ Error: Identifier 'edad' has already been declared

            ```

-   `const` (Para valores que no cambian)

    También fue introducido en ES6 y es la mejor opción para valores constantes.

    -   **Scope**

        -   Ámbito de bloque, igual que `let`.

            ```
            if (true) {
              const z = 50;
            }
            console.log(z); // ❌ Error: z is not defined

            ```

    -   **Hoisting**

        -   Sí se eleva, pero no se puede usar antes de la declaración (igual que `let`).

            ```
            console.log(c); // ❌ Error: Cannot access 'c' before initialization
            const c = 100;

            ```

    -   **Reasignación y redeclaración**

        -   No se puede reasignar

        -   No se puede redeclarar

            ```
            const PI = 3.1416;
            PI = 3.14; // ❌ Error: Assignment to constant variable.

            ```

        -   Pero los objetos y arrays sí pueden modificarse internamente:

            ```
            const persona = { nombre: "Ana" };
            persona.nombre = "Luis"; // ✅ Permitido

            persona = {}; // ❌ Error: No se puede reasignar el objeto completo

            ```

***Explicacion de los scopes:**

-   **Block Scope:**

    -   Las variables solo existen dentro del bloque `{}` donde se declaran.

    -   Se aplica a `let` y `const`, pero no a **`var`**.

        ```
        if (true) {
          let a = 10;
          const b = 20;
        }
        console.log(a); // ❌ Error: a is not defined
        console.log(b); // ❌ Error: b is not defined

        ```

    -   `a` y `b` solo existen dentro del bloque `if {}`.

    -   Fuera del bloque, no existen y su uso genera un error.

    -   También se aplica en loops (`for`, `while`), `switch`, y `try/catch`.

        ```
        for (let i = 0; i < 3; i++) {
          console.log(i); // ✅ Funciona dentro del bloque
        }
        console.log(i); // ❌ Error: i is not defined

        ```

-   **Function Scope**

    -   Las variables declaradas con `var` solo existen dentro de la función donde se declaran.

    -   Incluso si están dentro de un bloque `{}`, siguen accesibles en toda la función.

        ```
        function miFuncion() {
          var x = 10;
          if (true) {
            var y = 20; // Aunque está en un bloque, sigue dentro de la función
          }
          console.log(x); // ✅ 10
          console.log(y); // ✅ 20
        }
        miFuncion();

        console.log(x); // ❌ Error: x is not defined
        console.log(y); // ❌ Error: y is not defined

        ```

    -   `x` y `y` solo existen dentro de la función `miFuncion()`.

    -   No importa si `y` está dentro de un `if`, sigue existiendo dentro de toda la función.

    -   Las funciones en JavaScript crean su propio scope, pero los bloques (`if`, `for`, etc.) no lo hacen con `var`.

-   **Global Scope**

    -   Las variables declaradas fuera de cualquier función o bloque son globales.

    -   Se pueden acceder desde cualquier parte del código.

    -   Son propensas a generar problemas si se modifican accidentalmente.

        ```
        var globalVar = "Estoy en el scope global";

        function test() {
          console.log(globalVar); // ✅ Se puede acceder dentro de la función
        }

        test();
        console.log(globalVar); // ✅ También accesible aquí

        ```

    -   `globalVar` se declara fuera de una función, por lo que es accesible desde cualquier parte.

-   JavaScript es un lenguaje de programación de alto nivel, dinámico y basado en prototipos.
-   JavaScript puede ejecutarse en dos entornos principales:
    -   En el Navegador (Front-end)
        -   JavaScript se ejecuta en los navegadores web a través del **Motor de JavaScript**
    -   En el Servidor (Back-end)
        -   Con la llegada de **Node.js**, JavaScript también se ejecuta en el servidor.
        -   Node.js usa el motor **V8** de Chrome, pero sin un navegador, permitiendo ejecutar JavaScript en entornos fuera del cliente.
-   Cuando se dice que **JavaScript es un lenguaje dinámico**, significa que tiene ciertas características que permiten modificar su comportamiento en tiempo de ejecución.
    -   Tipado dinámico

        -   En JavaScript, no necesitas declarar el tipo de una variable; el tipo se asigna automáticamente en tiempo de ejecución según el valor que almacena.

            ```
            let x = 10; // x es un número
            x = "Hola"; // Ahora x es una cadena de texto

            ```

    -   Objetos modificables en tiempo de ejecución

        -   Puedes agregar o eliminar propiedades y métodos de un objeto en cualquier momento.

            ```
            let persona = { nombre: "Alberto" };
            persona.edad = 30; // Agregando una nueva propiedad
            delete persona.nombre; // Eliminando una propiedad

            ```

    -   First-class Functions

        -   Las funciones en JavaScript se pueden tratar como cualquier otra variable: puedes asignarlas a variables, pasarlas como argumentos y retornarlas desde otras funciones.

            ```
            function saludar() {
              return "Hola!";
            }

            let fn = saludar; // Asignamos la función a una variable
            console.log(fn()); // Ejecutamos la función desde la variable

            ```

            **¿Por qué es importante esto?**

            ✅ Permite la programación funcional en JavaScript.

            ✅ Es la base de los **callbacks** y **promesas**.

            ✅ Facilita el uso de **closures**.

            ✅ Se usa en patrones como **Higher-Order Functions** (funciones que reciben o retornan funciones).

    -   Ejecución dinámica de código

        -   JavaScript permite ejecutar código en tiempo de ejecución con `eval` (aunque su uso no se recomienda por razones de seguridad y rendimiento).

            ```
            let codigo = "console.log('Ejecutado dinámicamente')";
            eval(codigo); // Ejecuta el código almacenado en la cadena

            ```

    -   Prototipos dinámicos

        -   Puedes modificar los prototipos de objetos en tiempo de ejecución, lo que permite agregar métodos a todas las instancias de un tipo.

            ```
            Array.prototype.saludar = function() {
              console.log("Hola desde un array!");
            };

            [].saludar(); // Ahora todos los arrays tienen este método

            ```