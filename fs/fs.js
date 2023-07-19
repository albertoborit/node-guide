const fs = require("fs")
console.log("start")
fs.readFile('file.txt', 'utf-8', (err, data)=>{
    if(!err){
        console.log("start of this process at the end of the log due to asyncrony")
        console.log(data)    
    }else{
        throw err;
    }
})
console.log("Log not executed in between procesess due to readFile asyncrony")
// readFileSync should not be used in node server because it will tie to the single thread loop while I/O is performed, blocking the thread
const data = fs.readFileSync('file2.txt', 'utf-8')
console.log(data.toString())
console.log("-----")