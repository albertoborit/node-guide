```
Los Workers en Node.js son un tipo de proceso secundario (también conocido como "hilo" en el contexto de Node.js) que permite ejecutar código en paralelo en un contexto separado al del hilo principal. Los Workers son útiles para realizar operaciones intensivas en CPU o tareas que pueden bloquear el hilo principal, permitiendo así que la aplicación continúe respondiendo a otras solicitudes y eventos. Se basa en hilos nativos del sistema operativo, lo que significa que los Workers se ejecutan en hilos reales del sistema operativo y aprovechan el paralelismo de hardware si está disponible.

Un Worker en Node.js puede recibir mensajes del hilo principal y también puede enviar mensajes de vuelta al hilo principal mediante eventos y el uso del objeto Worker.

Los Workers en Node.js son adecuados para manejar cargas intensivas en CPU.

Los Workers se ejecutan en paralelo con el hilo principal (main thread) en Node.js.
```

// app.js - Archivo principal de la aplicación

const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  // Este es el hilo principal

  // Crear un nuevo Worker y especificar el archivo que debe ejecutar
  const worker = new Worker('./worker.js');

  // Enviar un mensaje al Worker
  worker.postMessage('Hola desde el hilo principal');

  // Escuchar el evento de mensaje del Worker
  worker.on('message', (message) => {
    console.log(`Mensaje del Worker: ${message}`);
  });
} else {
  // Este es el Worker

  // Escuchar el evento de mensaje del hilo principal
  parentPort.on('message', (message) => {
    console.log(`Mensaje del hilo principal: ${message}`);

    // Enviar un mensaje de vuelta al hilo principal
    parentPort.postMessage('Hola desde el Worker');
  });
}
