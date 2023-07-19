const { exec } = require("child_process")

const execution = async (params)=>{
    console.log(params[0])
    return new Promise((resolve, reject)=>{
        exec('cat ../fs/file.txt', (err, stdout, stderr)=>{
            if(!stderr){
                // console.log(stdout)
                resolve(stdout.toString())
            }else{
                throw stderr
            }
        })
    })
}

module.exports = execution