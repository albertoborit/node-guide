function sleep(cb){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("process")
            resolve(cb())
        }, 1000)
    })
}

console.log("start")

sleep(function(){
    console.log("end")
    return "I'm the data"
}).then(data=>{
    console.log(`second end: ${data}`)
})