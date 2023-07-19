const http = require("http")
const url = require("url");
const ip = "127.0.0.1"
const PORT = 3000

http.createServer()
.on("request", (req, res)=>{
    const reqUrl = url.parse(req.url).pathname
    if(reqUrl==="/"){
        console.log("head writing")
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end("Server Executing")
    } else if(reqUrl==="/favicon.ico") {
        console.log("favicon request")
    } else {
        console.log("head writing")
        res.writeHead(400, {'Content-Type':'text/plain'})
        res.end("Server not Executing")
    }
})
.on("request", (req, res) => {
    const reqUrl = url.parse(req.url).pathname
    if(reqUrl!=="/favicon.ico") {
        console.log(req.headers.host)
    }
})
.listen(PORT, ip)