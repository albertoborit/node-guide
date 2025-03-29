### **¿Qué es el hoisting en JavaScript?**

El hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones son "elevadas" al inicio de su contexto de ejecución antes de que el código se ejecute.

Esto significa que puedes usar una función o variable antes de declararla en el código.

-   Hoisting con `var`

    Ejemplo incorrecto con `var`

    ```
    console.log(nombre); // ❓ ¿Qué pasa aquí?
    var nombre = "Alberto";
    console.log(nombre); // "Alberto"

    ```

    Equivalente a:

    ```
    var nombre; // Hoisting: Se eleva la declaración
    console.log(nombre); // undefined (pero no da error)
    nombre = "Alberto";
    console.log(nombre); // "Alberto"

    ```

    Las variables con `var` se elevan, pero con valor `undefined`.

-   Hoisting con `let` y `const`

    Las variables declaradas con `let` y `const` **también se elevan**, **pero NO están inicializadas**. Ejemplo con `let`:

    ```
    console.log(edad); // ❌ ReferenceError: Cannot access 'edad' before initialization
    let edad = 30;
    console.log(edad);

    ```

    **Explicación:**

    `let` y `const` **se elevan**, pero entran en la **Zona Temporal Muerta (Temporal Dead Zone, TDZ)** hasta que se ejecuta la declaración.

    No puedes acceder a ellas antes de la línea donde las declaraste.

-   Hoisting con funciones

    Las **funciones declaradas** (`function`) **se elevan completamente, con su cuerpo incluido**.

    ```
    saludar(); // ✅ Funciona incluso antes de la declaración

    function saludar() {
      console.log("¡Hola!");
    }

    ```

    **Equivalente a:**

    ```
    function saludar() {
      console.log("¡Hola!");
    }
    saludar();

    ```

    Las funciones declaradas con `function` se elevan completas.

-   Hoisting con funciones `function expression`

    Las funciones declaradas con `const` o `let` en una variable **no se elevan con su valor**.

    ```
    saludar(); // ❌ TypeError: saludar is not a function
    const saludar = function() {
      console.log("¡Hola!");
    };

    ```

    **Explicación:**

    -   `const saludar = function() {}` es una **asignación**.
    -   **Solo se eleva la declaración `const saludar;`, pero sin su valor.**
    -   Como está en la **Zona Temporal Muerta**, no puedes llamarla antes de la línea donde la declaraste.

*La **Zona Temporal Muerta (TDZ)** es el período en el que una variable ha sido **declarada con `let` o `const`, pero aún no ha sido inicializada**, por lo que **no se puede acceder a ella hasta que se ejecuta su declaración en el código**.

**Resumen**

| **Elemento** | **¿Se eleva?** | **¿Se inicializa?** | **Accesible antes de la declaración?** |
| --- | --- | --- | --- |
| `var` | ✅ Sí | ❌ No (queda `undefined`) | ⚠️ Sí, pero como `undefined` |
| `let` | ✅ Sí | ❌ No (Zona Temporal Muerta) | ❌ No (Error) |
| `const` | ✅ Sí | ❌ No (Zona Temporal Muerta) | ❌ No (Error) |
| `function` | ✅ Sí | ✅ Sí | ✅ Sí |
| `function expression` (`let/const`) | ✅ Sí | ❌ No | ❌ No (Error) |