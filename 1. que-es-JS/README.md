### **¿Qué es JavaScript y cómo se ejecuta?**

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