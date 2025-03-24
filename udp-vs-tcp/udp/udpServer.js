const dgram = require('dgram')
const server = dgram.createSocket('udp4')

server.on('data', (msg, rinfo) => {
    console.log(msg)
})

server.bind(41234, () => {
    console.log("UDP server listening")
})