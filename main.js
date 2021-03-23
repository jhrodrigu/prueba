const express = require("express")
const app = express()
const path = require('path')

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + "/index.html")
})

app.use(express.urlencoded({ extended: false }));


app.get('/enviar', (req, res) => {
    console.log(req.body);
    res.send('recibido');
})


app.listen(5000, () => {
    console.log("servidor en 5000")
})