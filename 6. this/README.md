### **¿Cómo funciona el `this` en JavaScript?**

📌 this es una palabra clave en JavaScript que **se refiere al objeto desde el cual se invoca una función**

📌 Su valor depende del **contexto de ejecución**, es decir, **cómo y dónde se llama la función**

1️⃣ En el Ámbito Global (`window` en navegadores, `global` en Node.js)

```
console.log(this); // En el navegador: window, en Node.js: global

```

-   En el **navegador**, `this` apunta al objeto `window`
-   En **Node.js**, apunta al objeto `global`.

2️⃣ En una Función Normal

```
function mostrarThis() {
  console.log(this);
}

mostrarThis(); // En modo estricto: undefined,
//en modo normal: window (o global en Node.js)

```

**Modo normal (`non-strict`)**: `this` es `window` (en el navegador) o `global` (en Node.js).

**Modo estricto (`"use strict"`)**: `this` es `undefined`.

3️⃣ Dentro de un Objeto (Métodos de Objeto)

```
const persona = {
  nombre: "Alberto",
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

persona.saludar(); // "Hola, soy Alberto"

```

Aquí, `this` apunta al **objeto que llama al método**, en este caso, `persona`.

4️⃣ En una Función Flecha (`=>`)

```
const persona = {
  nombre: "Alberto",
  saludar: () => {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

persona.saludar(); // "Hola, soy undefined"

```

-   **En funciones flecha, `this` NO crea un nuevo contexto**. En lugar de eso, **hereda el `this` del ámbito en el que fue definida**
-   En este caso, `this` apunta al **ámbito global** y `nombre` es `undefined`.

✅ **Solución usando `function` en lugar de `=>`:**

```
const persona = {
  nombre: "Alberto",
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

persona.saludar(); // "Hola, soy Alberto"

```

5️⃣ `this` en `setTimeout` y `setInterval`

```
const persona = {
  nombre: "Alberto",
  saludar: function() {
    setTimeout(function() {
      console.log(`Hola, soy ${this.nombre}`);
    }, 1000);
  }
};

persona.saludar(); // "Hola, soy undefined" (porque this apunta a `window`)

```

🔹 **Solución usando `bind(this)`, `arrow function` o guardando `this` en una variable:**

```
const persona = {
  nombre: "Alberto",
  saludar: function() {
    setTimeout(() => {
      console.log(`Hola, soy ${this.nombre}`);
    }, 1000);
  }
};

persona.saludar(); // "Hola, soy Alberto"

```

✅ **Con una función flecha, `this` se mantiene correctamente.**

6️⃣ `this` en `call()`, `apply()` y `bind()` Estos métodos permiten **controlar explícitamente a qué objeto debe referirse `this`**.

```
function saludar() {
  console.log(`Hola, soy ${this.nombre}`);
}

const usuario = { nombre: "Alberto" };

saludar.call(usuario); // "Hola, soy Alberto"
saludar.apply(usuario); // "Hola, soy Alberto"

```

-   `call()` y `apply()` **ejecutan la función inmediatamente**, pero `apply()` pasa los argumentos como un array.

✅ **`bind()` devuelve una nueva función con `this` fijo:**

```
const saludarUsuario = saludar.bind(usuario);
saludarUsuario(); // "Hola, soy Alberto"

```

7️⃣ `this` en Clases y Constructores

```
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const alberto = new Persona("Alberto");
alberto.saludar(); // "Hola, soy Alberto"

```

-   En **clases**, `this` se refiere a la **instancia del objeto creado con `new`**.

**Resumen de `this` en distintos contextos**

| **Contexto** | **Valor de `this`** |
| --- | --- |
| **Global (`window` o `global`)** | `window` (en navegador), `global` (en Node.js) |
| **Función normal (modo estricto)** | `undefined` |
| **Método dentro de un objeto** | Apunta al objeto que lo contiene |
| **Función flecha (`=>`)** | Hereda `this` del contexto superior |
| **`setTimeout` y `setInterval`** | En función normal, apunta a `window`; en arrow function, al objeto externo |
| **`call()`, `apply()`, `bind()`** | Permiten definir manualmente el valor de `this` |
| **Clases y constructores (`new`)** | Apunta a la instancia creada |

✅ **Conclusión:**

-   **El valor de `this` depende de cómo se llame la función.**
-   **Las funciones flecha no crean su propio `this`, sino que lo heredan.**
-   **Los métodos `call()`, `apply()` y `bind()` permiten modificar `this` manualmente.**