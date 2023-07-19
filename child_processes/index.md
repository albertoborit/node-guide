No, un child process en Node.js no crea un nuevo thread directamente.
En Node.js, los child processes son procesos independientes que se ejecutan en el sistema
operativo de manera separada y no comparten el mismo hilo principal (main thread) del proceso principal de Node.js.

Cuando se crea un child process en Node.js utilizando la API child_process,
se inicia un nuevo proceso independiente en el sistema operativo.
Este proceso secundario se ejecuta en su propio espacio de memoria y se comunica con el proceso principal
mediante el uso de canales IPC (Inter-Process Communication) o mediante la lectura y escritura de datos en
los flujos estándar (stdin, stdout, stderr).

El hecho de que los child processes se ejecuten en procesos independientes del sistema operativo significa
que pueden aprovechar múltiples núcleos de la CPU si el sistema tiene varios núcleos disponibles. 