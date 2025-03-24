async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout( ()=>{
            resolve(console.log("process"))
        }, 1000)
    })
}

(async ()=>{
    console.log("start")
    await sleep()
    console.log("end")
})()