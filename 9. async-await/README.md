### 9\. ¿Qué es async/await y cómo se usa?
**¿Qué es `async/await` y cómo se usa?** 🚀

`async` y `await` son una forma moderna y más **legible** de manejar operaciones **asíncronas** en JavaScript. Permiten escribir código **asíncrono** de manera más similar a código **síncrono**, lo que facilita su comprensión.

* * * * *

### **¿Qué es `async`?** 🔑

-   La palabra clave `async` se usa delante de una función para indicar que esa función siempre devuelve una **promesa**.

-   Incluso si la función retorna un valor que no es una promesa, JavaScript lo convertirá automáticamente en una **promesa resuelta**.


`async function obtenerDatos() {
  return "Datos obtenidos";
}

obtenerDatos().then(result => console.log(result));  // "Datos obtenidos"`

* * * * *

### **¿Qué es `await`?** 🕒

-   La palabra clave `await` se usa **dentro de funciones `async`** para esperar a que una **promesa** se resuelva o rechace.

-   Hace que el código se ejecute de manera **sincrónica** (esperando la resolución de la promesa), pero no bloquea el hilo principal, lo que sigue manteniendo la **asíncronía** de la operación.


`async function obtenerDatos() {
  let resultado = await new Promise(resolve => setTimeout(() => resolve("Datos obtenidos"), 2000));
  console.log(resultado);  // "Datos obtenidos"
}

obtenerDatos();`

* * * * *

### **Usando `async/await` para manejar errores** ⚠️

Si una promesa es rechazada, podemos usar `try/catch` dentro de una función `async` para manejar el error de manera sencilla.


`async function obtenerDatos() {
  try {
    let resultado = await new Promise((resolve, reject) => {
      setTimeout(() => reject("Error al obtener datos"), 2000);
    });
    console.log(resultado);
  } catch (error) {
    console.error(error);  // "Error al obtener datos"
  }
}

obtenerDatos();`

* * * * *

### **Ventajas de `async/await`** ✅

-   **Más legible:** Hace que el código asíncrono se lea como código sincrónico, sin necesidad de encadenar `.then()` y `.catch()`.

-   **Manejo de errores sencillo:** Usar `try/catch` es más intuitivo que manejar errores con `.catch()`.

-   **Evita "callback hell":** Con `async/await`, el código es más claro y no se necesita anidar múltiples callbacks.

* * * * *

### **Ejemplo completo** 🌟

Vamos a ver un ejemplo más completo usando `async/await` para manejar múltiples operaciones asíncronas.


`function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function procesoAsincrono() {
  console.log("Iniciando...");
  await esperar(2000);  // Espera 2 segundos
  console.log("Paso 1 completado");

  await esperar(1000);  // Espera 1 segundo
  console.log("Paso 2 completado");

  await esperar(3000);  // Espera 3 segundos
  console.log("Paso 3 completado");

  console.log("Proceso finalizado");
}

procesoAsincrono();`

**Salida:**


`Iniciando...
Paso 1 completado
Paso 2 completado
Paso 3 completado
Proceso finalizado`

* * * * *

### **Resumen** 📚

-   **`async`**: Declara que una función devuelve una promesa.

-   **`await`**: Espera que una promesa se resuelva antes de continuar.

-   Usados juntos, **`async/await`** hacen que el código asíncrono sea **más legible y fácil de entender**.

**Ventajas:**

-   Mejora la legibilidad del código.

-   Maneja errores de manera más sencilla con `try/catch`.

-   Evita el "callback hell".