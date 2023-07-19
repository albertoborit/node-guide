const http = require("http")
const url = require("url");
const ip = "127.0.0.1"
const PORT = 3000

http.createServer((req, res)=>{
    const reqUrl = url.parse(req.url).pathname
    if(reqUrl==="/"){
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end("Server Executing")
    } else {
        res.writeHead(400, {'Content-Type':'text/plain'})
        res.end("Server not Executing")
    }
}).listen(PORT, ip)