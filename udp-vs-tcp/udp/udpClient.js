const dgram = require('dgram');
const client = dgram.createSocket('udp4');

async function start(times) {
    const startTime = Date.now();
    for (let i = 1; i <= times; i++) {
        if (i === times) {
            console.log('Tiempo total:', Date.now() - startTime, 'ms');
        }
        console.log(`Enviando mensaje número ${i}`);
        
        await new Promise((resolve, reject) => {
            const message = Buffer.alloc(1024, 'A');
            client.send(message, 0, message.length, 41234, '127.0.0.1', (error) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log('Mensaje enviado al servidor');
                    resolve();
                }
            });
        });
    }
    client.close();
}

start(1000).then(() => {
    console.log('Prueba de conexión UDP completada');
}).catch((err) => {
    console.error('Hubo un error en la prueba:', err);
});
