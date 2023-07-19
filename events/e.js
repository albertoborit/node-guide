const events = require("events")

const EventEmiter = events.EventEmitter
const ee = new EventEmiter()

ee.on('sendData', data => {
    console.log(data)
})
// EventEmitters  will send a warning if more than 10 listeners are added (like a warning for memory leaks)
// not all Emitters should be limited to 10
setInterval(()=>{
    ee.emit('sendData',"I'm the data")
}, 500)
ee.emit('sendData',"I'm not the data")