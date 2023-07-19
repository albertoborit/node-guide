(async()=>{
    const execution  = require("./exec")
    console.log(9)
    console.log(`results: ${ await execution(["param-1","param-2","param-3"])}`)
})()