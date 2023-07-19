// worker.js - Archivo que se ejecuta en el Worker

const { parentPort } = require('worker_threads');

// Escuchar el evento de mensaje del hilo principal
parentPort.on('message', (message) => {
  console.log(`Mensaje del hilo principal: ${message}`);

  // Enviar un mensaje de vuelta al hilo principal
  parentPort.postMessage('Hola desde el Worker');
});
