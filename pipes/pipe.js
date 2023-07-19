// Un caso común para el uso de pipe() es cuando se necesita transmitir grandes volúmenes de datos, como archivos grandes, entre un flujo de lectura y un flujo de escritura. 

// El uso de pipe() en este ejemplo nos permite copiar el contenido del archivo de origen en el archivo de destino de manera eficiente, sin tener que cargar todo el contenido en memoria de una sola vez.

const fs = require('fs');

const origen = 'archivo-grande.txt';
const destino = 'copia-archivo-grande.txt';

// Crear un flujo de lectura desde el archivo de origen
const readableStream = fs.createReadStream(origen);

// Crear un flujo de escritura hacia el archivo de destino
const writableStream = fs.createWriteStream(destino);

// Conectar los flujos de lectura y escritura utilizando pipe
readableStream.pipe(writableStream);

// Manejar evento de finalización de la transmisión
readableStream.on('end', () => {
  console.log(`Transmisión completada. Archivo copiado: ${destino}`);
});

// Manejar evento de error en caso de que ocurra algún problema
readableStream.on('error', (error) => {
  console.error('Error en la transmisión:', error.message);
});
