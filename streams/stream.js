const fs = require('fs');

// Archivo de entrada y salida
const archivoEntrada = 'archivo-entrada.txt';
const archivoSalida = 'archivo-salida.txt';

// Crear un flujo de lectura desde el archivo de entrada
const readableStream = fs.createReadStream(archivoEntrada);

// Crear un flujo de escritura hacia el archivo de salida
const writableStream = fs.createWriteStream(archivoSalida);

// Conectar los flujos de lectura y escritura utilizando pipe
readableStream.pipe(writableStream);

// Manejar evento de finalización de la transmisión
writableStream.on('finish', () => {
  console.log(`Transmisión completada. Archivo copiado: ${archivoSalida}`);
});

// Manejar evento de error en caso de que ocurra algún problema
readableStream.on('error', (error) => {
  console.error('Error en la transmisión:', error.message);
});
