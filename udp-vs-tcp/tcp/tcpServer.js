const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');
  socket.on('data', (data) => {
    console.log('Data received');
    socket.write('Hello from server!');
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });

  socket.on('error', (err) => {
    console.error('Error:', err);
  });
});

server.listen(8080, '127.0.0.1', () => {
  console.log('TCP server listening');
});
