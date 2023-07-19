function sleep(cb){
    setTimeout(()=>{
        console.log("process")
        cb()
    }, 1000)
}

console.log("start")

sleep(function(){
    console.log("end")
})