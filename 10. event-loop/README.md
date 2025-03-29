### 10\. ¿Qué es el event loop en JavaScript?
### **¿Qué es el Event Loop en JavaScript?** 🔄

El **Event Loop** (bucle de eventos) es el mecanismo que permite a JavaScript manejar operaciones **asíncronas** (como callbacks, promesas, `setTimeout`, entre otras) de manera **no bloqueante**.

JavaScript es **monohilo**, lo que significa que solo puede ejecutar una cosa a la vez. Sin embargo, el Event Loop permite que parezca que está ejecutando múltiples tareas al mismo tiempo, gestionando las operaciones **asíncronas** en segundo plano.

* * * * *

### **Cómo Funciona el Event Loop** 🔄

JavaScript ejecuta el código en un **único hilo** (single thread), pero utiliza el Event Loop para gestionar las tareas asíncronas y permitir que otras tareas se ejecuten mientras se espera el resultado de una operación asíncrona. El Event Loop trabaja con una **cola de tareas** y un **stack de llamadas**.

### **Pasos del Event Loop:**

1.  **Call Stack (Pila de llamadas)** 🏗️:

    -   Es donde JavaScript coloca las funciones que está ejecutando.

    -   Si una función es síncrona, se ejecuta y se quita de la pila.

2.  **Web APIs** 🌐:

    -   Cuando se llama a una operación asíncrona (como `setTimeout`, `fetch`, o eventos DOM), estas se manejan fuera del Call Stack en las Web APIs (o APIs del navegador).

    -   Una vez que una operación asíncrona termina, la función correspondiente es movida a la **cola de tareas** (Task Queue).

3.  **Event Loop** 🔁:

    -   El Event Loop está constantemente observando la pila de llamadas.

    -   Si el Call Stack está vacío, el Event Loop mueve una tarea desde la cola de tareas hacia la pila de llamadas para que se ejecute.

4.  **Task Queue (Cola de tareas)** 🗂️:

    -   Aquí es donde se colocan las operaciones asíncronas (callbacks, promesas resueltas) después de que las Web APIs las hayan procesado.

    -   El Event Loop mueve estas tareas del Task Queue al Call Stack cuando este está vacío.

### **Visualización del flujo:**


 `+----------------------+
       |      Call Stack      |    ← Aquí se ejecutan las funciones sincrónicas.
       +----------------------+
                 ^
                 |
     +------------------------+
     |     Web APIs / Async    |    ← Aquí se manejan tareas asíncronas.
     +------------------------+
                 |
         (Cuando se completa la operación asincrónica)
                 |
      +-----------------------+
      |    Task Queue / Cola   |    ← Aquí se colocan los callbacks y promesas.
      +-----------------------+
                 |
        (Event Loop)
                 v
       +----------------------+
       |      Call Stack      |    ← Tareas movidas a la pila para ejecutar.
       +----------------------+`

* * * * *

### **Ejemplo del Event Loop** 🧩

Veamos cómo funciona el Event Loop con un ejemplo simple:



`console.log("Inicio");  // Se ejecuta de inmediato

setTimeout(() => {
  console.log("Tarea asíncrona");  // Se coloca en la cola de tareas después de 3 segundos
}, 3000);

console.log("Fin");  // Se ejecuta de inmediato`

**Salida:**


`Inicio
Fin
Tarea asíncrona`

**Explicación del flujo:**

1.  `"Inicio"` se imprime primero porque es una operación síncrona.

2.  Luego, `setTimeout` se ejecuta y coloca la función en la Web API con un tiempo de espera de 3 segundos.

3.  `"Fin"` se imprime inmediatamente después porque también es una operación síncrona.

4.  Después de 3 segundos, el callback de `setTimeout` se mueve a la **Task Queue**.

5.  El Event Loop mueve el callback desde la **Task Queue** al **Call Stack** cuando este está vacío y lo ejecuta, imprimiendo `"Tarea asíncrona"`.

* * * * *

### **Microtasks (Microtareas)** 🔬

Además de la cola de tareas normal, también existe la **cola de microtareas**. Las microtareas incluyen **promesas resueltas** y otros mecanismos asíncronos más rápidos.

Las microtareas tienen **prioridad sobre las tareas regulares**. Después de ejecutar cada ciclo del Event Loop, se procesan todas las microtareas antes de continuar con el ciclo y mover tareas de la cola normal al Call Stack.


`console.log("Inicio");

Promise.resolve("Promesa resuelta").then((message) => {
  console.log(message);  // Se procesa primero que las tareas del setTimeout
});

setTimeout(() => {
  console.log("Tarea de setTimeout");
}, 0);

console.log("Fin");`

**Salida:**


`Inicio
Fin
Promesa resuelta
Tarea de setTimeout`

**Explicación:**

1.  `"Inicio"` se imprime.

2.  La promesa se resuelve y su callback va a la **cola de microtareas**.

3.  `"Fin"` se imprime.

4.  Se procesan las microtareas (el `then` de la promesa), imprimiendo `"Promesa resuelta"`.

5.  Finalmente, la tarea de `setTimeout` se ejecuta.

* * * * *

### **Resumen** 📝

-   El **Event Loop** permite que JavaScript ejecute operaciones asíncronas sin bloquear el hilo principal.

-   Las funciones síncronas se ejecutan directamente en el **Call Stack**.

-   Las operaciones asíncronas se gestionan en las **Web APIs** y luego pasan a la **Task Queue** cuando terminan.

-   El **Event Loop** mueve las tareas de la **Task Queue** al **Call Stack** cuando está vacío.

-   Las **microtareas** tienen mayor prioridad que las tareas normales en el Event Loop.

El **Event Loop** es fundamental para la naturaleza **no bloqueante** de JavaScript y su capacidad para manejar operaciones asíncronas de manera eficiente. 🔄