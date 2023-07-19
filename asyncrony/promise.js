function sleep(cb){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(console.log("process"),cb())
        }, 1000)
    })
}

console.log("start")

sleep(function(){
    console.log("end")
})