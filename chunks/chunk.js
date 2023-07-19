``` En este ejemplo, establecemos el parámetro highWaterMark al crear el flujo de lectura. Esto determina el tamaño máximo de cada chunk en bytes. Por defecto, el valor es de 64 KB. Puedes ajustar este valor para cambiar el tamaño de los chunks.```

const readableStream = fs.createReadStream(archivoEntrada, { highWaterMark: 64 });