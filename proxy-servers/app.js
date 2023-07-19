```
Los proxy servers en Node.js son útiles para varios propósitos, como:

Caché y mejora del rendimiento: Un proxy puede almacenar en caché respuestas de solicitudes frecuentes, lo que puede reducir el tiempo de respuesta y el consumo de ancho de banda al servidor de destino.

Balanceo de carga: Los proxy servers también pueden distribuir solicitudes entre varios servidores de destino para equilibrar la carga y evitar que un solo servidor se sobrecargue.

Seguridad y filtrado: Los proxy servers pueden actuar como barreras de seguridad, filtrando o bloqueando solicitudes no deseadas o maliciosas antes de que lleguen al servidor de destino.

Privacidad y anonimato: Al ocultar la dirección IP y la información del cliente al servidor de destino, un proxy puede brindar cierto grado de anonimato y privacidad a los usuarios.
```
const http = require('http');

// URL del servidor de destino al que reenviar las solicitudes
const targetUrl = 'http://servidor-destino.com';

// Crear el servidor proxy
const server = http.createServer((req, res) => {
  // Crear una solicitud hacia el servidor de destino
  const proxyReq = http.request(targetUrl + req.url, {
    method: req.method,
    headers: req.headers
  }, (proxyRes) => {
    // Copiar los encabezados y el código de estado del servidor de destino en la respuesta del proxy
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    
    // Reenviar los datos del servidor de destino a la respuesta del cliente
    proxyRes.pipe(res);
  });

  // Reenviar los datos de la solicitud del cliente hacia el servidor de destino
  req.pipe(proxyReq);
});

// Puerto en el que escucha el servidor proxy
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor proxy escuchando en el puerto ${port}`);
});
