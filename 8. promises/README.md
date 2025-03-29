### 8\. **¿Qué son las promesas en JavaScript?**

📌 Promesas en JavaScript
=========================

🚀 ¿Qué es una Promesa?
-----------------------

Una **promesa** en JavaScript es un objeto que representa **el resultado eventual** (éxito o error) de una operación asíncrona.

Las promesas tienen tres estados:

1.  **Pending (Pendiente)** → La promesa está en proceso y aún no tiene un resultado.
2.  **Fulfilled (Cumplida)** → La operación se completó con éxito.
3.  **Rejected (Rechazada)** → La operación falló.

* * * * *

✅ **¿Cómo funcionan las promesas?**
-----------------------------------

Una promesa se crea usando el constructor `Promise` y recibe una función con dos parámetros:

-   `resolve` → Se llama cuando la operación es exitosa.
-   `reject` → Se llama cuando hay un error.

```
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let exito = true;  // Simulando éxito o error
    if (exito) {
      resolve("Operación exitosa ✅");
    } else {
      reject("Ocurrió un error ❌");
    }
  }, 2000);
});

```

🔹 **Consumiendo una Promesa**
------------------------------

Usamos `.then()` para manejar el resultado exitoso y `.catch()` para manejar errores.

```
promesa
  .then(resultado => {
    console.log(resultado);  // "Operación exitosa ✅"
  })
  .catch(error => {
    console.error(error);  // "Ocurrió un error ❌"
  });

```

🔄 **Encadenamiento de Promesas**
---------------------------------

Podemos encadenar `.then()` para ejecutar múltiples operaciones asíncronas en secuencia.

```
const primeraPromesa = new Promise((resolve) => {
  setTimeout(() => resolve("Paso 1 completado"), 1000);
});

primeraPromesa
  .then(resultado => {
    console.log(resultado);
    return "Paso 2 completado";
  })
  .then(resultado => {
    console.log(resultado);
    return "Paso 3 completado";
  })
  .then(resultado => console.log(resultado));

```

Salida:

Paso 1 completado Paso 2 completado Paso 3 completado

🔥 **Promesas con `async/await`**
---------------------------------

Las promesas pueden escribirse de forma más clara usando `async/await`.

```
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function procesoAsincrono() {
  console.log("Iniciando...");
  await esperar(2000);
  console.log("Finalizado después de 2 segundos");
}

procesoAsincrono();

```

🎯 **Resumen**
--------------

| Característica | Descripción |
| --- | --- |
| **Estados** | Pending, Fulfilled, Rejected |
| **Métodos** | `.then()`, `.catch()`, `.finally()` |
| **Encadenamiento** | Se pueden encadenar varias promesas con `.then()` |
| **`async/await`** | Alternativa más clara y limpia a `.then()` |