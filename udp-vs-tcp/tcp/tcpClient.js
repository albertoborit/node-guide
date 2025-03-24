const net = require('net');

async function start(times) {
    const startTime = Date.now();
    let completed = 0;

    for (let i = 1; i <= times; i++) {
        console.log(i);
        await new Promise((resolve, reject) => {
            const client = new net.Socket();
            client.connect(8080, '0.0.0.0', () => {
                console.log('Conectado al servidor TCP');
                const message = Buffer.alloc(1024, 'A');
                client.write(message, () => {
                    console.log('Mensaje de 1MB enviado al servidor');
                });
            });

            client.on('data', (data) => {
                client.destroy();
                resolve();
            });

            client.on('close', () => {
                console.log('Conexión cerrada');
            });

            client.on('error', (err) => {
                console.error('Error en la conexión: ', err);
                reject(err);
            });
        });

        completed++;

        if (completed === times) {
            const elapsedTime = Date.now() - startTime;
            console.log('Total time for TCP test:', elapsedTime, 'ms');
        }
    }
}

start(1000).then(() => {
    console.log('Prueba de conexión TCP completada');
}).catch((err) => {
    console.error('Hubo un error en la prueba:', err);
});
