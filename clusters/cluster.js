```
Un Cluster en Node.js se refiere a la agrupación de múltiples procesos (workers) que se ejecutan en paralelo y comparten el mismo puerto y dirección IP para gestionar las solicitudes entrantes. El proceso maestro (master) coordina la creación y administración de los workers y actúa como intermediario entre el sistema operativo y los workers. El objetivo principal de utilizar un Cluster es aprovechar el paralelismo de los múltiples núcleos del procesador para aumentar la capacidad de procesamiento y mejorar el rendimiento de la aplicación.
```
// app.js - Archivo principal de la aplicación

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Este es el proceso maestro

  console.log(`Proceso maestro (PID ${process.pid}) iniciado`);

  // Crear workers según el número de núcleos del procesador
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Escuchar el evento de salida de un worker y crear uno nuevo en caso de que falle
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker (PID ${worker.process.pid}) terminado`);
    cluster.fork();
  });
} else {
  // Este es un worker

  console.log(`Worker (PID ${process.pid}) iniciado`);

  // Código de la aplicación del worker (por ejemplo, servidor HTTP)
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hola desde el worker');
  }).listen(8000);
}

