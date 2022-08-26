const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event', (data) => {
    console.log(data);
});


const express = require("express")
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    myEmitter.emit('event', {name: 'Rabiul Hasan'})
    res.send("Hello World")
});

app.listen(PORT, () => {
    console.log(`welcome to ${PORT}`)
})